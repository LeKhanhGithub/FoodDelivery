import { combineReducers } from "redux";
import CartItem from "../Component/CartItem";
import FilterReducer from "../container/ReducerSlice/FilterSlice";
import CartItemReducer from "../container/ReducerSlice/CartItem";
import ItemDishReducer from "../container/ReducerSlice/ItemSlice";


const rootReducer = combineReducers ({
    filters: FilterReducer,
    itemDish: ItemDishReducer,
    cartItem: CartItemReducer,
});

export default rootReducer;