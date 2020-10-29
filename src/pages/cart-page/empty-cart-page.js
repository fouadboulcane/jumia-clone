import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import './cart-page.css'

function EmptyCartPage() {
    const [{ user }] = useStateValue()
    return (
        <div className="col-9 m-auto pl-0">
            <h4 className="ml-0">Panier</h4>
            <div className="text-center mt-5">
                <i className="fas fa-shopping-cart empty-cart-icon"></i>
                <h5 className="text-secondary mt-4"><strong>Votre Panier est vide !</strong></h5>
                {user ? '' : (
                    <span className="mt-2">Vous avez deja un compte? <Link to="/login">Connectez-vous</Link> pour voir les articles dans votre panier</span>
                )}
                <div className="m-auto col-6 pt-4">
                    <Link to="/product-list" className="no-dec">
                        <Button
                            variant="contained"
                            className="login-button login-basic mt-4"
                            color="primary"
                        >COMMENCEZ VOS ACHATS</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EmptyCartPage
