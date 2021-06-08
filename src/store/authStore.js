import React, { createContext, useReducer } from "react";

const initialState = {
  isAuth: false,
  user: null,
};
const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };
    default:
      return state;
  }
};
const AuthStore = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContext = createContext(initialState);
export default AuthStore;
