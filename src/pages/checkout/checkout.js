import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import './checkout.css'
import { useAuth } from '../../contexts/AuthContext'
import { db } from '../../firebase'

function Checkout() {
    const [{ basket, user }] = useStateValue()

    return (
        <div className="checkout">
            <div className="container">
                <div className="row mt-4">
                    <div className="col-9 pl-0 pr-0">
                        <h5 className="ml-0 checkout-title">FINALISATION DE LA COMMANDE</h5>
                        <div className="col p-0 m-0 mt-2 bg-white pr-5 d-flex">
                            <div className="p-2 pl-3 pr-3 checkout__checkout-section-mark">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div className="checkout-form_col">
                                <h6 className="ml-0 pt-3 checkout-subtitle"><strong>ADRESSES</strong></h6>

                                <form className="mt-3 checkout-form pb-3">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail4">Email</label>
                                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Password</label>
                                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress">Address</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress2">Address 2</label>
                                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputCity">City</label>
                                            <input type="text" class="form-control" id="inputCity" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputState">State</label>
                                            <select id="inputState" class="form-control">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label for="inputZip">Zip</label>
                                            <input type="text" class="form-control" id="inputZip" />
                                        </div>
                                    </div>

                                    <button type="button" class="btn bg-orange text-white btn-lg btn-block">Enregistrer</button>
                                </form>
                            </div>

                        </div>
                        <div className="col p-0 m-0 mt-2 bg-white pr-5 d-flex">
                            <div className="p-2 pl-3 pr-3 checkout__checkout-section-mark">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div className="checkout-form_col">
                                <h6 className="ml-0 pt-3 checkout-subtitle"><strong>2. MODE DE LIVRAISON</strong></h6>
                            </div>
                        </div>
                        <div className="col p-0 m-0 mt-2 bg-white pr-5 d-flex">
                            <div className="p-2 pl-3 pr-3 checkout__checkout-section-mark">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div className="checkout-form_col">
                                <h6 className="ml-0 pt-3 checkout-subtitle"><strong>3. MODE DE PAIMENT</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 wg-white">
                        <h5 className="ml-0 checkout-title">RESUME</h5>
                        <div className="mt-2 bg-white">
                            <h6 className="ml-0 p-2 pt-3 checkout-subtitle"><strong>VOTRE COMMANDE (2 articles)</strong></h6>
                            {[1, 2, 3].map(item => (
                                <>
                                    <div className="d-flex p-2 checkout__checkout-item">
                                        <img src="https://picsum.photos/60" />
                                        <div className="ml-2">
                                            <p className="mb-0"><strong>P 30 Lite 6.16° (128Go, 6Go) Android</strong></p>
                                            <span className=" orange"><strong>1630 DA</strong></span>
                                            <br />
                                            <span className="mt-2">Qte: <strong>1</strong></span>
                                        </div>
                                    </div>
                                    <hr className="mt-1 mb-1" />
                                </>
                            ))}
                        </div>
                        <div className="p-2 text-center">
                            <Link to="/cart" className="p-0 no-dec"><button className="drop-btn register-btn">RETOUR AU PANIER</button></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
