import { Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useStateValue } from '../../StateProvider'
import { db } from '../../firebase'
import { Link } from 'react-router-dom'
import './product.css'

function Product({ id, title, price, rating, imageUrl, seller }) {
    const [{ }, dispatch] = useStateValue()
    const [sellerName, setSellerName] = useState('')

    const addToBasket = (e) => {
        e.preventDefault()
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
    }

    const getSellerName = seller => {
        db.collection('createdUsers').doc(seller).get().then(doc => {
            if (doc.exists) {
                console.log(doc.data().lastName)
                setSellerName(doc.data().lastName)
            } else {
                console.log("No such document!");
            }
        })
        return sellerName
    }

    return (

        <Link to={`/product/${id}`} className="col-3 p-2 product-list-page_product-item no-dec">
            <div className="product-item-body">
                <img src={imageUrl} width="100%" height="150px" />
                <Typography variant="subtitle2" className="pr-2">{title}</Typography>
                <Typography variant="subtitle2"><strong>{price} DA</strong></Typography>
                <div className="mt-2 orange">
                    {Array(rating).fill().map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
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
        </Link>

    )
}

export default Product
