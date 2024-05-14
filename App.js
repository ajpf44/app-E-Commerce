import { StyleSheet} from "react-native";
import Routes from "./src/routes";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import {
    NetInfoContextProvider,
} from "./src/contexts/NetInfoContext";


export default function App() {
    console.log("App running");

    return (
        // <LoginStack></LoginStack>
        // <HomeManagement />
        <NetInfoContextProvider>
            <AuthContextProvider>
                <Routes />
            </AuthContextProvider>
        </NetInfoContextProvider>
        // <Tabs />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
