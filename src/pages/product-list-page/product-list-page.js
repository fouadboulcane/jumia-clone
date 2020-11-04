import { Button, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import './product-list-page.css'
import { db } from '../../firebase'

import Product from '../../components/product/product';
import { useProductsValue } from '../../contexts/ProductsContext';
import { BrowserRouter as useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom"

function ProductListPage() {
    const { products } = useProductsValue()
    // let { path, url } = useRouteMatch();

    // const products = [
    //     { id: 1, title: 'Condor Griffe T9 Plus - Go - Noir - Garantie 1 An', price: '15500', rating: 4 },
    //     { id: 2, title: 'Samsun J7 Core 5.5" - 2Gb - 32 Gb - Noir - Grantie 1 An', price: '41199', rating: 5 },
    //     { id: 3, title: 'IRIS Smartphone - N30 3/32Go - White Pearl - Garantie 1 An', price: '26600', rating: 3 },
    //     { id: 4, title: 'Samsung Galaxy S9 + 6.2" - 6Go - 128Go - Gold - Garantie 1 An', price: '94500', rating: 4 },
    //     { id: 5, title: 'Condor Allure M3 Lite 5.8" - 3Go - 32Go - Noir - Garantie 1 An', price: '22500', rating: 4 },
    //     { id: 6, title: 'Condor Fearture Phone F6 Plus Noir - Dual Sim - 32 Go - Garantie 1 An', price: '3000', rating: 3 },
    //     { id: 7, title: 'Condor Griffe T9 Plus - Go - Noir - Garantie 1 An', price: '15500', rating: 4 },
    //     { id: 8, title: 'Samsun J7 Core 5.5" - 2Gb - 32 Gb - Noir - Grantie 1 An', price: '41199', rating: 5 },
    //     { id: 9, title: 'IRIS Smartphone - N30 3/32Go - White Pearl - Garantie 1 An', price: '26600', rating: 3 },
    //     { id: 10, title: 'Samsung Galaxy S9 + 6.2" - 6Go - 128Go - Gold - Garantie 1 An', price: '94500', rating: 4 },
    //     { id: 11, title: 'Condor Allure M3 Lite 5.8" - 3Go - 32Go - Noir - Garantie 1 An', price: '22500', rating: 4 },
    //     { id: 12, title: 'Condor Fearture Phone F6 Plus Noir - Dual Sim - 32 Go - Garantie 1 An', price: '3000', rating: 3 },
    // ]

    return (
        <div className="product-list-page">
            <div className="container">
                <div className="row mt-4">
                    <div className="col-3">1</div>
                    <div className="col-9 bg-white p-0">
                        <Typography variant="h6" className="p-2 pl-3">Supérette</Typography>
                        <hr className="m-0" />

                        <div className="p-2 pl-4 pr-4 row">

                            {products?.map(item => (
                                <Product key={item.productId} id={item.productId} title={item.title} price={item.price} rating={item.rating} imageUrl={item.imageUrl} seller={item.seller} />
                            ))}
                            {products?.map(item => (
                                <Product key={item.productId} id={item.productId} title={item.title} price={item.price} rating={item.rating} imageUrl={item.imageUrl} seller={item.seller} />
                            ))}
                            {products?.map(item => (
                                <Product key={item.productId} id={item.productId} title={item.title} price={item.price} rating={item.rating} imageUrl={item.imageUrl} seller={item.seller} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListPage;
