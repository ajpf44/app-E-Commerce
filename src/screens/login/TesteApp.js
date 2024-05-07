//Feito só para testar se o login funciona
import { View, Text } from "react-native";

function TesteApp() {
    return (
        <View style={styles.container}>
            <Text>Sucessso</Text>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
};

export default TesteApp;
