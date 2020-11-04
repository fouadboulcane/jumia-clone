import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { db } from '../firebase'



export const useProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        db
            .collection('products')
            .get()
            .then(snapshot => {
                const allProducts = snapshot.docs.map(product => ({
                    ...product.data(),
                    productId: product.id
                }))
                if (JSON.stringify(allProducts) !== JSON.stringify(products)) {
                    setProducts(allProducts)
                }
            })
    }, [])

    return { products, setProducts }
}

export const useFavourites = () => {
    const [favourites, setFavourites] = useState([])
    const { currentUser } = useAuth()

    useEffect(() => {
        db
            .collection('favourites')
            .where('userId', '==', 'sbAjWPvmEIWPoSVaE2Mgp47v1Mn2')
            .get()
            .then(snapshot => {
                const allFavs = []
                snapshot.forEach(doc => {
                    doc.data().items.map(item => {
                        allFavs.push(item)
                    })
                })
                setFavourites(allFavs)
                // const allFavourites = snapshot.docs.map(favourites => ({
                //     ...favourites.data(),
                //     favouritesId: favourites.id
                // }))

                // console.log(allFavourites)
            })
    }, [])

    return { favourites, setFavourites }
}