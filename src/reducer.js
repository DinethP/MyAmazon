// This is where the data layer logic is

export const initialState = {
    // This is our data layer
    basket: [],
    user: null
}

// Data layer is referred as state
// Manipulating data layer is through action
const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        // These cases are event listeners. It listen's to dispatch() actions.
        //  If the event with these action.type is fired, it executes
        // the releavant code
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return {
                // Everytime you carry out an action, you need to return
                // the new data layer
                // So we return the existing state, but update the basket array
                // to inlcude the new item that was added from the action
                ...state,
                basket:[...state.basket, action.item]
            }
            // break;
        case 'REMOVE_FROM_BASKET':
            // Logic for remiving item from basket
            return { state }
            // break;
        default:
            // return the current state(data layer) if no case matches
            return state;
    }
}

export default reducer; 