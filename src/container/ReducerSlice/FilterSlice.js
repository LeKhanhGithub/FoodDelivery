
const initState = {
    itemID: "All",
    search: "",
}

const FilterReducer  = (state = initState, action) => {
    switch(action.type){
       
        case 'filters/filterItemDish':
            return {
                ...state,
                itemID: action.payload
            }
        case 'filters/filtersSearchText':
            console.log(state);
            return {
                ...state,
                search: action.payload,
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

export default FilterReducer ;
