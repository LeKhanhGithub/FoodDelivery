import { Items } from "../../Component/Data";

const initState = Items;

const ItemDishReducer  = (state = initState, action) => {
    switch(action.type){
       
        case 'filters/SearchTextFilter':
            console.log(state);
            return {
                ...state,
                search: action.payload
            }
        case 'filters/StatusTextFilter':
            console.log(state);
            return {
                ...state,
                status: action.payload,
            }
        case 'filter/PriorityFilter':
            return {
                ...state,
                priorities: action.payload,
            }
        default:
            return state;
    }
}

export default ItemDishReducer ;
