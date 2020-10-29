import { addToBasket, removeItemFromCart } from './pages/cart-page/cart-utils'

const currentUserInfos = JSON.parse(localStorage.getItem("userInfos"))

export const initialState = {
    basket: [],
    user: null,
    userInfos: currentUserInfos ? currentUserInfos : {},
    favouritedItems: []
}

export const getItemTotal = item => item.quantity * parseInt(item.price)

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => (parseInt(item.price) * item.quantity) + amount, 0);

export const numbersWithSpaces = number => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER_INFOS':
            return {
                ...state,
                userInfos: action.infos
            }
        case 'ADD_TO_FAVOURITE':
            return {
                ...state,
                favouritedItems: [...state.favouritedItems, action.item]
            }
        case 'REMOVE_FROM_FAVOURITE':
            return {
                ...state,
                favouritedItems: state.favouritedItems.filter(item => item.id != action.id)
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: addToBasket(state.basket, action.item)
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                basket: removeItemFromCart(state.basket, action.item)
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket]

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in basket`)
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        default:
            return state;
    }
}

export default reducer;