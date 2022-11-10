import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

// Initial State
const initialState = {
  babyEvents: []
}

// Create Global Context
export const GlobalContext = createContext(initialState);

// Provider Component

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider value={{
      babyEvents: state.babyEvents, deleteTransaction, addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  )
}