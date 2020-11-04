import { Button, TextField } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

function PasswordResetSection() {
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const history = useHistory()
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        setMessage('')


    }

    return (
        <div className="account-section">
            <h5>Changer votre Mot de Passe</h5>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            {message && <div className="alert alert-primary" role="alert">{message}</div>}
            <form onSubmit={handleSubmit} className="mt-3">
                <div className="row mt-4">
                    <div className="col-6">
                        <TextField className="logiput col" label="Password" />
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col-6">
                        <TextField type="password" className="logiput col" label="NewPassword" />
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col-6">
                        <TextField type="password" className="logiput col" label="NewPassword" />
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

export default PasswordResetSection
