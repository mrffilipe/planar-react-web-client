import { createContext, useReducer } from 'react';

export const AuthContext = createContext({});

export const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, JSON.parse(localStorage.getItem("authData") || null));

    const setAuth = (newAuthData) => {
        dispatch({ type: newAuthData });
        localStorage.setItem("authData", JSON.stringify(newAuthData));
    };

    const logout = () => {
        dispatch({ type: null });
        localStorage.removeItem("authData");
    };

    return (
        <AuthContext.Provider value={{ ...state, dispatch, setAuth, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;