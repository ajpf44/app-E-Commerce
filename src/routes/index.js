import LoginStack from "./LoginStack.routes";
import Tabs from "./bottomTabs";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ProductsContextProvider } from "../contexts/ProductsContext";
import NetInfo from "@react-native-community/netinfo";
import { NetInfoContext } from "../contexts/NetInfoContext";
import { Text } from "react-native";

export default function Routes() {
    const authCtx = useContext(AuthContext);
    const netCtx = useContext(NetInfoContext);

    useEffect(() => {

        NetInfo.addEventListener(state => {
            netCtx.setIsConnected(state.isConnected);
        });
    }, []);

    return (
        <>
            {!authCtx.isLogged && <LoginStack />}
            <ProductsContextProvider>
                {authCtx.isLogged && <Tabs />}
            </ProductsContextProvider>
        </>
    );
}
