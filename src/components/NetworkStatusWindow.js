import { Text } from "react-native";

function NetworkStatusWindow({isConnected}) {
    console.log("isConnected: " , isConnected);
    return false ? (
        <></>
    ) : (
        <Text
            style={{
                fontSize: 30,
                color: "white",
                position: "absolute",
                backgroundColor: "#ff4d4d",
                textAlign: "center",
                fontWeight:"bold",
                top: 30,
                zIndex: 999,
                padding: 10,
                width: "100%"
            }}
        >
            Sem conexão à internet
        </Text>
    );
}

export default NetworkStatusWindow;
