// setup data layer
// Used for basket and user information

import React, {createContext, useContext, useReducer} from 'react'

// Basket tracking
// Creating empty data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({reducer, initialState, children}) => (
    // useReducer() is a hook
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* Here, childre refers to the <App /> component in index.js  */}
        {children}
    </StateContext.Provider>
);

// This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext)