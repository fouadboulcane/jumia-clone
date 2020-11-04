import React, { useState, useEffect } from "react";
import "./header.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StorefrontIcon from '@material-ui/icons/Storefront';
import Button from "@material-ui/core";
import Input from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from '../../StateProvider';
import { auth } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

function Header() {
    const [{ user, userInfos }, dispatch] = useStateValue()
    const { currentUser, logout } = useAuth()
    const [currentUsername, setCurrentUsername] = useState()
    const [error, setError] = useState()
    const history = useHistory()

    useEffect(() => {
        setCurrentUsername(currentUser?.displayName)
    }, [currentUser?.displayName])

    async function handleLogout() {
        setError('')
        dispatch({
            type: 'SET_USER',
            user: null
        })
        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }

    }


    // const handleLogout = () => {
    //     if (user) {
    //         auth.signOut();
    //     }
    // }
    return (
        <div className="header sticky-top shadow-sm">
            <div className="container">
                <div className="in_header">
                    <Link to="/">
                        <img
                            className="header__logo"
                            alt=""
                            src="https://svgshare.com/i/Qby.svg"
                        />
                    </Link>

                    <div className="header__search">
                        <div className="header__input">
                            <SearchOutlinedIcon className="header__input__icon" />
                            <input
                                className="header__input__input"
                                placeholder="Chercher un produit, une marque ou une catégorie"
                            />
                        </div>
                        <button className="header__button">Rechercher</button>
                    </div>

                    <nav className="header__nav">
                        {user ? (
                            <div className="header__option dropdown">
                                <a className="btn dropdown-toggle header_dropdown-toggle pt-2" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <PersonOutlineIcon className="mb-1" />
                                    <span>Hello, {currentUsername}</span>
                                    <i className="fas fa-chevron-down ml-2 drop-chevron"></i>
                                </a>
                                <div className="dropdown-menu header__log-dropdown logged-dropdown" aria-labelledby="dropdownMenuLink">
                                    <div className="dropdown-divider"></div>
                                    <Link to='/customer' className="no-dec dropdown-item"><PersonOutlineIcon /><span>Votre compte</span></Link>
                                    <a className="dropdown-item" href="#"><StorefrontIcon /><span>Vos commandes</span></a>
                                    <a className="dropdown-item" href="#"><FavoriteBorderIcon /><span>Votre liste d'envies</span></a>
                                    <div className="dropdown-divider"></div>
                                    <div className="dropdown-item f2-item">
                                        <button onClick={handleLogout} className="drop-btn register-btn mb-2">DECONNEXION</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                                <div className="header__option dropdown">
                                    <a className="btn dropdown-toggle header_dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <PersonOutlineIcon className="mb-1" />
                                        <span>Se connecter</span>
                                        <i className="fas fa-chevron-down ml-2 drop-chevron"></i>
                                    </a>
                                    <div className="dropdown-menu header__log-dropdown" aria-labelledby="dropdownMenuLink">
                                        <div className="dropdown-item f1-item">
                                            <Link to="/login"><button className="drop-btn login-btn">SE CONNECTER</button></Link>
                                        </div>
                                        <div className="dropdown-divider"></div>
                                        <div className="dropdown-item f2-item">
                                            <Link to="/register"><button className="drop-btn register-btn">CREER UN COMPTE</button></Link>
                                        </div>
                                        <div className="dropdown-divider"></div>
                                        <Link to='/customer' className="dropdown-item" href="#"><PersonOutlineIcon /><span>Votre compte</span></Link>
                                        <a className="dropdown-item" href="#"><StorefrontIcon /><span>Vos commandes</span></a>
                                        <a className="dropdown-item" href="#"><FavoriteBorderIcon /><span>Votre liste d'envies</span></a>
                                    </div>
                                </div>
                            )}
                        <div className="header__option">
                            <HelpOutlineOutlinedIcon />
                            <span>Aide</span>
                        </div>
                        <Link to="/cart" className="text-secondary no-dec">
                            <div className="header__option">
                                <ShoppingCartOutlinedIcon />
                                <span>Panier</span>
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </div >
    );
}

export default Header;
