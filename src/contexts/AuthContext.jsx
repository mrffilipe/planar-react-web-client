import { createContext, useReducer } from 'react';

export const AuthContext = createContext(null);

export const authReducer = (state, action) => {

};

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { authenticated: true });

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;