import LoginStack from "./LoginStack.routes";
import Tabs from "./bottomTabs";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ProductsContextProvider } from "../contexts/ProductsContext";

export default function Routes() {
    const authCtx = useContext(AuthContext);

    return (
        <>
            {!authCtx.isLogged && <LoginStack />}
            <ProductsContextProvider>
                {authCtx.isLogged && <Tabs />}
            </ProductsContextProvider>
        </>
    );
}
