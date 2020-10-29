import React from 'react'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HistoryIcon from '@material-ui/icons/History';
import './customer-page.css'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';
import PasswordResetSection from './password-reset-section';

import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import PrivateRoute from '../../PrivateRoute'
import AccountSection from './sections/account-section';


function CustomerPage() {
    const [{ user }, dispatch] = useStateValue()
    let { path, url } = useRouteMatch();

    const handleLogout = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="customer-page">
            <div className="container">
                <div className="row mt-4">
                    <div className="col-3 pr-4">
                        <div className="bg-white">
                            <div className="list-group">
                                <Link to={`${url}`} style={{ textDecoration: 'none', color: 'black' }}>
                                    <div className="list-group-item">
                                        <PersonOutlineIcon />
                                        <span className="ml-3">Votre compte Jumia</span>
                                    </div>
                                </Link>
                                <div className="list-group-item">
                                    <StorefrontIcon />
                                    <span className="ml-3">Vos commandes</span>
                                </div>
                                <div className="list-group-item">
                                    <ChatBubbleOutlineIcon />
                                    <span className="ml-3">Vos avis en attente</span>
                                </div>
                                <div className="list-group-item">
                                    <FavoriteBorderIcon />
                                    <span className="ml-3">Votre liste d'envies</span>
                                </div>
                                <div className="list-group-item">
                                    <HistoryIcon />
                                    <span className="ml-3">Vus récemment</span>
                                </div>
                                <Link to={`${url}/account`} style={{ textDecoration: 'none', color: 'black' }}>
                                    <div className="list-group-item">
                                        <span>Informations Personnelles</span>
                                    </div>
                                </Link>
                                <div className="list-group-item">
                                    <span>Adresses</span>
                                </div>
                                <div className="list-group-item">
                                    <span>Modifier votre mot de passe</span>
                                </div>
                                <div className="list-group-item">
                                    <span>Préférences de communication</span>
                                </div>
                            </div>
                            <hr className="m-0" />
                            <div className="p-2">
                                <div className="p-0 no-dec"><button onClick={handleLogout} className="drop-btn register-btn">DECONNEXION</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 bg-white p-4">
                        <Switch>
                            <PrivateRoute exact path={path} component={AccountSection} />
                            {/* <PrivateRoute path={`${path}/account`} component={PasswordResetSection} /> */}
                        </Switch>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default CustomerPage
