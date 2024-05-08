import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Dimensions,
} from "react-native";

function CreateAccountScreen() {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputName, setInputName] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text>Cadastrar conta de funcionário</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text>Nome:</Text>
                <TextInput
                    onChangeText={setInputName}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Email:</Text>
                <TextInput
                    onChangeText={setInputEmail}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Senha: </Text>
                <TextInput
                    onChangeText={setInputPassword}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <Button title="Criar Conta" color="black" />
            </View>
        </View>
    );
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    textInput: {
        borderColor: "black",
        borderWidth: 2,
        paddingHorizontal: 4,
    },
    inputContainer: {
        width: width * 0.7,
    },
    buttonsContainer: {
        width: width * 0.7,
        gap: 10,
        marginTop: 10,
    },
    wrongLoginStatus: {
        color: "red",
    },
});

export default CreateAccountScreen;
