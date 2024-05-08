// Alexandre

import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Dimensions,
    ActivityIndicator,
} from "react-native";
import { useState } from "react";

import { getAllEmployess } from "../../services/employees";
import sha256 from "../../utils/cryptography";

//Verifica se o email e senha estão corretos
async function verifyLogin(inputEmail, inputPassword) {
    const employees = await getAllEmployess();

    const hashedInputPassword = await sha256(inputPassword);

    const employee = employees.find(
        (e) =>
            e.email === inputEmail && e.password == hashedInputPassword
    );

    return !!employee;
}

function HomeLoginScreen({ navigation }) {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    //LoginStatus verifica a mensagem quando a senha e o email estão errados
    //Se estiver false a msg é mostrada, se estiver true a msg é escondida
    const [loginStatus, setLoginStatus] = useState(true);

    const [isVerifyingLogin, setIsVerifyingLogin] = useState(false);

    return (
        <View style={styles.container}>
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
                <Button
                    title="Logar"
                    color="black"
                    onPress={async () => {
                        setIsVerifyingLogin(true);
                        const sucessfullLogin = await verifyLogin(
                            inputEmail,
                            inputPassword
                        );

                        if (sucessfullLogin) {
                            setLoginStatus(true);
                            setIsVerifyingLogin(false);
                            navigation.navigate("app");
                        } else {
                            setLoginStatus(false);
                            setIsVerifyingLogin(false);
                        }
                    }}
                />
                <Button
                    title="Criar Conta"
                    color="black"
                    onPress={() => navigation.navigate("CreateAccountScreen")}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.wrongLoginStatus}>
                    {loginStatus ? "" : "Email e/ou Senha errados"}
                </Text>
                {isVerifyingLogin ? (
                    <ActivityIndicator></ActivityIndicator>
                ) : (
                    <Text> </Text>
                )}
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
        marginBottom: 10,
    },
});

export default HomeLoginScreen;
