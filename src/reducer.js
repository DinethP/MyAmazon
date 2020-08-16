// This is where the data layer logic is

export const initialState = {
  // This is our data layer
  basket: [],
  user: null,
};

// Make a "selector"
export const getBasketTotal = (basket) => {
  {console.log(basket)}
  return(
    // This method returns the sum of basket items
    // 0 tells the function to start the value of amount from 0
    basket?.reduce((amount, item) => item.price + amount, 0)
    )
}
// Data layer is referred as state
// Manipulating data layer is through action
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    // These cases are event listeners. It listen's to dispatch() actions.
    //  If the event with these action.type is fired, it executes
    // the releavant code
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    case "ADD_TO_BASKET":
      //Logic for adding item to basket
      return {
        // Everytime you carry out an action, you need to return
        // the new data layer
        // So we return the existing state, but update the basket array
        // to inlcude the new item that was added from the action
        ...state,
        basket: [...state.basket, action.item],
      };
    // break;
    case "REMOVE_FROM_BASKET":
      // Logic for removing item from basket

      // Copy current basket
      let newBasket = [...state.basket];
      // Get the index of item to be removed
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // Item exists in basket, remove it
        newBasket.splice(index, 1);
      } else {
        // console.log in red font colour
        console.warn(
          `Can't remove product (id: ${action.id} as it is not in basket`
        );
      }
      // return the state but update the basket to newBasket
      return { ...state, basket: newBasket };
    // break;
    default:
      // return the current state(data layer) if no case matches
      return state;
  }
};

export default reducer;
