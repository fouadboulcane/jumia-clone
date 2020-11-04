import { Button } from '@material-ui/core'
import React from 'react'
import EmptyCartPage from './empty-cart-page';
import CartItem from './cart-item'
import { useStateValue } from '../../StateProvider';
import { getBasketTotal, numbersWithSpaces } from '../../reducer'
import { Link } from 'react-router-dom';

function CartPage() {
    const [{ basket }, dispatch] = useStateValue()
    const Empty = basket.length != 0 ? false : true;
    return (
        <div className="cart-page">
            <div className="container">
                <div className="row mt-4">
                    {Empty ? (
                        <EmptyCartPage />
                    ) : (
                            <div className="col-9 m-auto pl-0">
                                <h4 className="ml-0 cart-page-title">Panier ({basket.length})</h4>

                                <div className="row p-0 m-0 mt-2">
                                    <div className="col-7 row p-0">Article</div>
                                    <div className="col-auto qcol0 text-center ml-1">Quantity</div>
                                    <div className="col text-center ml-2">Unit Price</div>
                                    <div className="col text-center ml-2">Total Price</div>
                                </div>


                                {basket.map(item => (
                                    <CartItem key={item.id} item={item} quantity={item.quantity} />
                                ))}


                                <div className="row mt-3">
                                    <div className="col text-right">
                                        <span><b>Total : {numbersWithSpaces(getBasketTotal(basket))} DA</b></span>
                                        <br />
                                        <span className="mt-2 text-muted"><small>Frais de livraison non inclus pour le moment</small></span>
                                    </div>
                                </div>


                            </div>
                        )}
                </div>
            </div>

            {Empty ? '' : (
                <div className="bg-white mt-4">
                    <div className="container">
                        <div className="row pt-3 pb-3">
                            <div className="col-9 m-auto d-flex p-0">
                                <div className="col-5"></div>
                                <div className="col-7 d-flex p-0">

                                    <Link
                                        to="/product-list"
                                        component={Button}
                                        variant="contained"
                                        className="login-button mr-2"
                                        color="primary"
                                    >POURSUIVRE VOS ACHATS</Link>

                                    <Link
                                        to="/checkout"
                                        component={Button}
                                        variant="contained"
                                        className="login-button login-basic"
                                        color="primary"
                                    >FINALISER VOTRE COMMANDE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartPage
