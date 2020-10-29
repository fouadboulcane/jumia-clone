import { Checkbox, FormControl, FormControlLabel, IconButton, Input, InputAdornment, InputLabel, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react'
import './login.css'
import { auth } from "../../firebase";
import { useHistory } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useAuth } from "../../contexts/AuthContext"

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [values, setValues] = useState({
        showPassword: false,
    })
    const { login } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(email, password)
            history.push('/')
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    // const signIn = e => {
    //     e.preventDefault();
    //     auth.signInWithEmailAndPassword(email, password).then(auth => {
    //         history.push('/')
    //         console.log('you are connected')
    //     })
    //         .catch(error => alert(error.message))
    // }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col login_login-side">
                        <h3>Se connecter</h3>
                        {error && <div className="alert alert-primary" role="alert">{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div>
                                <TextField className="logiput" value={email} onChange={e => setEmail(e.target.value)} id="standard-basic" label="E-mail" />
                            </div>
                            <div>
                                <FormControl className="col">
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                {/* <TextField className="logiput" value={password} onChange={e => setPassword(e.target.value)} id="standard-basic" label="Password" /> */}
                            </div>
                            <div className=" mt-3 d-flex justify-content-between">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Rester connecté"
                                />
                                <a className="mt-2" href="#">Mode de passe oublié ?</a>
                            </div>
                            <Button
                                disabled={loading}
                                variant="contained"
                                className="login-button login-basic"
                                color="primary"
                                type="submit"
                                startIcon={<i className="fas fa-sign-in-alt"></i>}
                            >SE CONNECTER</Button>

                            <Button
                                variant="contained"
                                className="login-button"
                                color="primary"
                                startIcon={<i className="fab fa-facebook-f"></i>}
                            >SE CONNECTER AVEC FACEBOOK</Button>
                        </form>
                    </div>
                    <div className="col-1 divider-box">
                        <div className=" login-page-divider"></div>
                    </div>
                    <div className="col login_login-side login_reg-side">
                        <div>
                            <h3>Creer un compte</h3>
                            <p className="text-left mt-5">Créez votre compte client Jumia en quelques clics ! Vous pouvez vous inscrire soit en utilisant votre adresse e-mail, soit via votre compte Facebook.</p>
                        </div>
                        <div className="align-text-bottom">
                            <Button
                                variant="contained"
                                className="login-button login-basic"
                                color="primary"
                                startIcon={<DeleteIcon />}
                            >CREER UN COMPTE</Button>

                            <Button
                                variant="contained"
                                className="login-button"
                                color="primary"
                                startIcon={<DeleteIcon />}
                            >CREER UN COMPTE AVEC FACEBOOK</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login
