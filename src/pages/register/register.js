import { Button, Checkbox, FilledInput, FormControl, FormControlLabel, IconButton, Input, InputAdornment, InputLabel, TextField } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth, db } from '../../firebase'
import './register.css'
import { useAuth } from '../../contexts/AuthContext'

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conditionCheck, setConditionCheck] = useState(false);
    const [newsletterCheck, setNewsletterCheck] = useState(true);
    const [values, setValues] = useState({
        showPassword: false,
    })
    const { signup } = useAuth()
    const history = useHistory()
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (!conditionCheck) {
            return setError("Condtions not checked!")
        }

        setError("")
        setLoading(true)
        signup(email, password, firstName, lastName, phone, newsletterCheck)
        history.push('/')

        setLoading(false)
    }

    // const signUp = e => {
    //     e.preventDefault()
    //     if (conditionCheck) {
    //         auth.createUserWithEmailAndPassword(email, password)
    //             .then(auth => {
    //                 return db.collection("createdUsers").doc(auth.user.uid).set({
    //                     firstName: firstName,
    //                     lastName: lastName,
    //                     phone: phone,
    //                     newsletterCheck: newsletterCheck,
    //                 })
    //             })
    //             .then(() => {
    //                 console.log("User succeccfully created!")
    //             })
    //             .then(() => {
    //                 setFirstName('')
    //                 setLastName('')
    //                 setPhone('')
    //                 setPassword('')
    //                 setEmail('')
    //                 setConditionCheck(false)
    //                 setNewsletterCheck(true)
    //                 console.log('state after clearing' + [firstName, lastName, phone, email, password, conditionCheck, newsletterCheck])

    //             })
    //             .catch((error) => {
    //                 console.log(error)
    //             })
    //     } else {
    //         console.log('Please accept the conditions of use to continue registration')

    //     }
    //     console.log([firstName, lastName, phone, email, password, conditionCheck, newsletterCheck])
    // }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-8 register-box">
                        <h3>Creer un compte</h3>
                        {error && <div className="alert alert-primary" role="alert">{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <TextField className="logiput col" label="Prénom" onChange={e => setFirstName(e.target.value)} />
                                </div>
                                <div className="col">
                                    <TextField className="logiput col" label="Nom" onChange={e => setLastName(e.target.value)} />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col">
                                    <TextField className="logiput col" label="E-mail" onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="col">
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
                                    {/* <TextField
                                            className="logiput col"
                                            id="standard-basic"
                                            type="password"
                                            label="Password"
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
                                        /> */}
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-6">
                                    <TextField className="logiput col" id="standard-basic" label="Phone" onChange={e => setPhone(e.target.value)} />
                                </div>
                            </div>
                            <div className="mt-4">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange}
                                            name="checkedB"
                                            color="primary"
                                            checked={conditionCheck}
                                            onChange={e => setConditionCheck(!conditionCheck)}
                                        />
                                    }
                                    label="J'ai lu et j'accepte les Conditions générales de vente"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange}
                                            name="checkedB"
                                            color="primary"
                                            checked={newsletterCheck}
                                            onChange={e => setNewsletterCheck(!newsletterCheck)}
                                        />
                                    }
                                    label="Je souhaite recevoir la newsletter de Jumia avec les meilleures offres du jour"
                                />
                            </div>
                            <Button
                                variant="contained"
                                className="login-button login-basic"
                                type="submit"
                                color="primary"
                                startIcon={<i className="fas fa-sign-in-alt"></i>}
                            >CREER VOTRE COMPTE</Button>
                            <Button
                                variant="contained"
                                className="login-button"
                                color="primary"
                                startIcon={<i className="fab fa-facebook-f"></i>}
                            > CREER VOTRE COMPTE AVEC FACEBOOK</Button>
                            <div className="text-center mt-2">
                                <span>Vous possédez deja un compte ?</span><br />
                                <Link to='/login'>CONNECTEZ-VOUZ</Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
