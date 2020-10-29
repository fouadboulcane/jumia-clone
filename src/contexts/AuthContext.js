import React, { useContext, useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { useStateValue } from '../StateProvider'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [currentUsername, setCurrentUsername] = useState()
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(true)
    const [{ }, dispatch] = useStateValue()


    function signup(email, password, displayName, lastName, phone, newsLetterCheck) {
        return auth
            .createUserWithEmailAndPassword(email, password)
            .then((doc) => {
                const reg_user_uid = doc.user.uid
                return doc.user
                    .updateProfile({
                        displayName: displayName
                    })
                    .then(() => {
                        db.collection("createdUsers").doc(reg_user_uid).set({
                            lastName: lastName,
                            phone: phone,
                            newsLetterCheck: newsLetterCheck,
                        })
                    })
                    .then(() => {
                        setCurrentUsername(displayName)
                        setUserData({ lastName: lastName, phone: phone, newsLetterCheck: newsLetterCheck })
                        // var docums = {
                        //     lastName: lastName,
                        //     phone: phone
                        // }
                        // localStorage.setItem("userInfos", JSON.stringify(docums))
                    })

            })

    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }
    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    function updateDisplayName(displayName) {
        return currentUser
            .updateProfile({
                displayName: displayName
            })
            .then(() => {
                setCurrentUsername(displayName)
            })
            .catch(() => {
                console.log("username change failed")
            })
    }

    function updateUserInfos(lastName, phone) {
        return db.collection('createdUsers').doc(currentUser?.uid).update({
            lastName: lastName,
            phone: phone
        })

    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            if (user) {
                dispatch({
                    type: 'SET_USER',
                    user: user
                })
                try {
                    db.collection('createdUsers').doc(user?.uid).get().then(docRef => {
                        var docums = {
                            firstName: docRef.data().firstName,
                            lastName: docRef.data().lastName,
                            phone: docRef.data().phone
                        }
                        localStorage.setItem("userInfos", JSON.stringify(docums))
                        dispatch({
                            type: 'UPDATE_USER_INFOS',
                            infos: {
                                firstName: docRef.data().firstName,
                                lastName: docRef.data().lastName,
                                phone: docRef.data().phone
                            }
                        })
                    })
                        .catch(error => { console.log('this is error ' + error) })
                } catch {
                    console.log('error while querying the db')
                }
            } else {
                localStorage.removeItem("userInfos")
                dispatch({
                    type: 'SET_USER',
                    user: null,
                })
            }
            setLoading(false)

        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        currentUsername,
        userData,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        updateDisplayName,
        updateUserInfos
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}