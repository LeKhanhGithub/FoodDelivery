const initState = [];

const CartItemReducer  = (state = initState, action) => {
    switch(action.type){
       
        case 'CartItem/pushCartItem':
            const filterId = state.filter((item) => {
                return item.id === action.payload.id;
            })

            if(state.length && filterId.length){
                return state.map((items) => items.id === action.payload.id ? { ...items, number: items.number + 1 } : items )    
            }
            return [
                ...state,
                action.payload
            ]  
        case 'CartItem/removeCartItem': 
            if(action.payload.number > 1){
                return state.map((items) => items.id === action.payload.id ? { ...items, number: items.number - 1 } : items ) 
            }
            else{
                const newState = state.filter((item) => {
                    return item.id !== action.payload.id
                })
                return newState;
            }
            
        default:
            return state;
    }
}

export default CartItemReducer ;
