import {createSelector} from 'reselect';

export const selectorListItems = (state) => {
    if(state.filters.itemID === "All"){
        return state.itemDish;
    }
    return state.itemDish.filter(item => item.itemId === state.filters.itemID && item.name.includes(state.filters.search));
}

export const selectorListCartItems = (state) => {
    return state.cartItem;
}

// export const selectorSearchItems  = createSelector(
//     selectorListItems,
//     (itemFilterMenu) =>{
//         return itemFilterMenu.filter((item) => {
//             return item.name.includes()
//         })
//     }
// )