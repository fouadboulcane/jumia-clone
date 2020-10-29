

export const addToBasket = (basket, cartItemToAdd) => {
    const existingCartItem = basket.find(
        cartItem => cartItem.id == cartItemToAdd.id
    );

    if (existingCartItem) {
        return basket.map(cartItem =>
            cartItem.id == cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...basket, { ...cartItemToAdd, quantity: 1 }]
}


export const removeItemFromCart = (basket, cartItemToRemove) => {
    const existingCartItem = basket.find(
        cartItem => cartItem.id == cartItemToRemove.id
    )

    if (existingCartItem.quantity == 1) {
        return basket.filter(cartItem => cartItem.id != cartItemToRemove.id)
    }

    return basket.map(
        cartItem => cartItem.id == cartItemToRemove.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}