import { Button, TextField } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../../StateProvider';
import firebase from 'firebase'
import { useAuth } from '../../../contexts/AuthContext';

function AccountSection() {
    const [{ user, userInfos }, dispatch] = useStateValue();
    const { currentUser, updateDisplayName, updateUserInfos } = useAuth()
    const currentUserInfosRaw = localStorage.getItem("userInfos")
    const currentUserInfos = JSON.parse(currentUserInfosRaw)
    const [firstName, setFirstName] = useState(currentUser?.displayName)
    const [lastName, setLastName] = useState(currentUserInfos?.lastName)
    const [phone, setPhone] = useState(currentUserInfos?.phone)

    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const history = useHistory()
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        updateDisplayName(firstName)
        updateUserInfos(lastName, phone)
    }

    return (
        <div className="account-section">
            <h5>Informations personnelles</h5>

            <form onSubmit={handleSubmit} className="mt-3">
                <div className="row mt-4">
                    <div className="col">
                        <TextField className="logiput col" defaultValue={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="col">
                        <TextField className="logiput col" defaultValue={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col">
                        <TextField disabled className="logiput col" value={currentUser?.email} />
                    </div>
                    <div className="col-6">
                        <TextField className="logiput col" defaultValue={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
                <Button
                    disabled={loading}
                    variant="contained"
                    className="login-button login-basic"
                    type="submit"
                    color="primary"
                    startIcon={<i className="fas fa-sign-in-alt"></i>}
                >ENREGISTRER</Button>

            </form>
        </div>
    )
}

export default AccountSection
