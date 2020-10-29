import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { useStateValue } from '../../StateProvider'
import './product.css'

function Product({ id, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating
            }
        })

    }
    return (
        <div className="col-3 p-2 product-list-page_product-item">
            <div>
                <img src="https://picsum.photos/200/150" width="100%" />
                <Typography variant="caption" className="pr-2">{title}</Typography>
                <Typography variant="subtitle2"><strong>{price} DA</strong></Typography>
                <div className="mt-2 orange">
                    {Array(rating).fill().map((_, i) => (
                        <i className="fas fa-star"></i>
                    ))}

                </div>
                <Typography variant="caption">Eligible a la livraison gratuite</Typography>
            </div>
            <div className="addcart-box">
                <Button
                    variant="contained"
                    onClick={addToBasket}
                    className="login-button login-basic mt-4"
                    color="primary"
                >AJOUTER AU PANIER</Button>
            </div>
        </div>
    )
}

export default Product
