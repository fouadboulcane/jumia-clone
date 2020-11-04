import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../StateProvider'
import './cart-page.css'
import { getItemTotal, numbersWithSpaces } from '../../reducer'

function CartItem({ item, quantity }) {
    const [{ basket, favouritedItems }, dispatch] = useStateValue()
    const { id, title, price, rating, imageUrl } = item
    const [favourited, setFavourited] = useState(false)

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                imageUrl: imageUrl
            }
        })
        localStorage.setItem("basket", JSON.stringify(basket))
    }

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    const removeItem = () => {
        dispatch({
            type: 'REMOVE_ITEM',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                imageUrl: imageUrl
            }
        })
    }

    const toggleFavourite = () => {
        if (favourited) {
            dispatch({
                type: 'ADD_TO_FAVOURITE',
                item: item
            })

        } else {
            dispatch({
                type: 'REMOVE_FROM_FAVOURITE',
                id: id
            })
        }
        setFavourited(!favourited)
        console.log(favouritedItems)
    }

    return (
        <div className="row tabrow bg-white mt-2">
            <div className="col-7 row h-100 ">
                <div className="col-auto pl-1 pr-0 pt-2">
                    <img src={imageUrl} width="75px" height="75px" />
                </div>
                <div className="col">
                    <div className="mt-1"><span className="text-muted my-auto"><small>Vendeur</small></span></div>
                    <div className="mb-3"><h6>{title}</h6></div>
                    <div className="cart-item-action mb-1">
                        <a href="#" className="mr-4 text-decoration-none text-theme-color orange" onClick={toggleFavourite}><i className={favourited ? 'fas fa-heart' : 'far fa-heart'}></i> Favourite</a>
                        <a href="#" className="text-decoration-none text-theme-color orange" onClick={removeFromBasket}><i className="far fa-trash-alt"></i> Delete</a>
                    </div>
                </div>
            </div>

            <div className="col-auto qcol text-center pt-4">
                <a onClick={removeItem}><i className="fas fa-minus mr-2 text-theme-color orange"></i></a>
                {quantity}
                <a onClick={addToBasket}><i className="fas fa-plus ml-2 text-theme-color orange"></i></a>
            </div>
            <div className="col text-center pt-4">
                <span className="text-center">{numbersWithSpaces(price)} DA</span>
                <br />
                {/* <div className="price-bag">
                                    <small><del className="text-muted">$ 28.69</del></small>
                                    <br />
                                    <small className="text-success">Economie: $ 468.49</small>
                                </div> */}
                <br />

            </div>

            <div className="col pt-4 text-center">
                <span className="text-theme-color orange"><b>{numbersWithSpaces(getItemTotal(item))} DA</b></span>
            </div>
        </div>
    )
}

export default CartItem
