export const filterItemDish = (itemId) => {
    return {
        type: "filters/filterItemDish",
        payload: itemId
    };
}

export const filtersSearchText = (text) => {
    return {
        type: 'filters/filtersSearchText',
        payload: text
    }
}

export const pushCartItem = (dataCart) => {
    return {
        type: 'CartItem/pushCartItem',
        payload: dataCart,
    }
}

export const removeCartItems = (dataCart) => {
    return {
        type: 'CartItem/removeCartItem',
        payload: dataCart,
    }
}

// export const ratingItems = (dataCart) => {
//     return {
//         type: 'itemDish/ratingItems',
//         payload: dataCart,
//     }
// }