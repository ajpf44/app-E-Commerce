import { createContext, useState } from "react";

const AuthContext = createContext({
    token: "",
    isLogged: false,
    setToken: ()=>{}
});

function AuthContextProvider({ children }) {

    const [token, setToken] = useState();

    const value = {
        token: token,
        setToken: setToken,
        isLogged: !!token,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export {AuthContext, AuthContextProvider}