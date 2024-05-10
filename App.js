import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginStack from "./src/routes/LoginStack.routes";
import Tabs from "./src/routes/bottomTabs";
import Routes from "./src/routes";
import { AuthContextProvider } from "./src/contexts/AuthContext";
export default function App() {
    console.log("App running");

    return (
        // <LoginStack></LoginStack>
        // <HomeManagement />
        <AuthContextProvider>
            <Routes />
        </AuthContextProvider>
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
