import React, { createContext, useContext } from "react"
import { useFavourites, useProducts } from "../hooks"

export const ProductsContext = createContext()
export const ProductsProvider = ({ children }) => {
    const { products, setProducts } = useProducts()
    const { favourites, setFavourites } = useFavourites()

    return (
        <ProductsContext.Provider value={{ products, setProducts, favourites, setFavourites }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsValue = () => useContext(ProductsContext)