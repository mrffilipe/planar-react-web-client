import { createContext } from "react";

const authContext = createContext();

export const AuthContext = ({ children }) => {
    return (
        <authContext.Provider>
            {children}
        </authContext.Provider>
    );
};