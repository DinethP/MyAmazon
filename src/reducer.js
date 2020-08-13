// This is where the data layer logic is

export const initialState = {
    // This is our data layer
    basket: [],
}

// Data layer is referred as state
// Manipulating data layer is through action
function reducer(state, action) {
    switch(action.type){
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            break;
        case 'REMOVE_FROM_BASKET':
            // Logic for remiving item from basket
            break;
        default:
            // return the current state(data layer) if no case matches
            return state;
    }
}

export default reducer; 