import { createContext, useReducer } from 'react';

export const AuthContext = createContext({});

const authReducer = (state, action) => {
    switch (action.type) {
        case 'SET_AUTH':
            return action.authData;
        case "LOGOUT":
            return null;
        default:
            return state;
    }
};

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, JSON.parse(localStorage.getItem("authData") || null));

    const setAuth = (authData) => {
        dispatch({ type: "SET_AUTH", authData });
        localStorage.setItem("authData", JSON.stringify(authData));
    };

    const logout = () => {
        dispatch({ type: "LOGOUT", authData: null });
        localStorage.removeItem("authData");
    };

    return (
        <AuthContext.Provider value={{ ...state, dispatch, setAuth, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;