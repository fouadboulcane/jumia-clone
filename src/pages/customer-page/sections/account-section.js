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
        setError('')
        setMessage('')
        if (firstName && lastName && phone) {
            try {
                updateDisplayName(firstName)
                updateUserInfos(lastName, phone)
                setMessage('Informations updated successfully')
            } catch {
                setError('Couldnt save informations')
            }
        }

    }

    return (
        <div className="account-section">
            <h5>Informations personnelles</h5>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            {message && <div className="alert alert-primary" role="alert">{message}</div>}
            <form onSubmit={handleSubmit} className="mt-3">
                <div className="row mt-4">
                    <div className="col">
                        <TextField className="logiput col" label="Prénom" defaultValue={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="col">
                        <TextField className="logiput col" label="Nom" defaultValue={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col">
                        <TextField disabled className="logiput col" label="Email" value={currentUser?.email} />
                    </div>
                    <div className="col-6">
                        <TextField className="logiput col" label="Phone" defaultValue={phone} onChange={(e) => setPhone(e.target.value)} />
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
