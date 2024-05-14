// Alexandre

import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Dimensions,
    ActivityIndicator,
    StatusBar,
    Image,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { storageTokenInCache, getTokenInCache } from "../../utils/asyncStorage";

import { signIn } from "../../services/auth";
import { AuthContext } from "../../contexts/AuthContext";

import NetworkStatusWindow from "../../components/NetworkStatusWindow";

//Verifica se o email e senha estão corretos
async function startSession(
    inputEmail,
    inputPassword,
    setToken,
    setLoginStatus,
    setIsVerifyingLogin
) {
    setIsVerifyingLogin(true);

    const idToken = await signIn(inputEmail, inputPassword);
    setToken(idToken);

    if (!!idToken) {
        setLoginStatus(true);
        storageTokenInCache(idToken);
    } else {
        setLoginStatus(false);
    }

    setIsVerifyingLogin(false);
}

function HomeLoginScreen({ navigation }) {
    const [inputEmail, setInputEmail] = useState("teste@teste.com");
    const [inputPassword, setInputPassword] = useState("teste@123");
    const authCtx = useContext(AuthContext);

    useEffect(()=>{
        const getToken = async () =>{
            const token = await getTokenInCache()
            authCtx.setToken(token);
        }

        getToken();
    },[])

    //LoginStatus verifica a mensagem quando a senha e o email estão errados
    //Se estiver false a msg é mostrada, se estiver true a msg é escondida
    const [loginStatus, setLoginStatus] = useState(true);

    const [isVerifyingLogin, setIsVerifyingLogin] = useState(false);
    return (
        <View style={styles.container}>
            <NetworkStatusWindow/>
            <View style={styles.inputContainer}>
                <Text>Email:</Text>
                <TextInput
                    value={inputEmail}
                    onChangeText={setInputEmail}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Senha: </Text>
                <TextInput
                    value={inputPassword}
                    onChangeText={setInputPassword}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.buttonsContainer}>
                {isVerifyingLogin ? (
                    <ActivityIndicator />
                ) : (
                    <Button
                        title="Logar"
                        color="black"
                        onPress={async () => {
                            await startSession(
                                inputEmail,
                                inputPassword,
                                authCtx.setToken,
                                setLoginStatus,
                                setIsVerifyingLogin
                            );
                        }}
                    />
                )}
                <Button
                    title="Criar Conta"
                    color="black"
                    onPress={() => navigation.navigate("CreateAccountScreen")}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.loginStatus}>{loginStatus}</Text>
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
    loginStatus: {
        color: "red",
        marginBottom: 10,
    },
});

export default HomeLoginScreen;
