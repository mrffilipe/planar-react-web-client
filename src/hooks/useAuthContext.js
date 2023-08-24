import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("Auth context not found!");
    }

    return context;
};

export default useAuthContext;