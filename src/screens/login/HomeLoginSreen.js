// Alexandre

import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Dimensions,
} from "react-native";
import { useState } from "react";

//futuramente será feito a verificação via api
const rightEmail = "teste@"
const rightPassword = "123"

//Verifica se o email e senha estão corretos
function verifyLogin(inputEmail, inputPassword){
    if(inputEmail == rightEmail && inputPassword == rightPassword){
        return true;
    }else{
        return false;
    }
}

function HomeLoginScreen({navigation}) {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    //LoginStatus verifica a mensagem quando a senha e o email estão errados
    //Se estiver false a msg é mostrada, se estiver true a msg é escondida
    const [loginStatus, setLoginStatus] = useState(true) 

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
                <Button title="Logar" color="black" 
                    onPress={()=>{
                        const sucessfullLogin = verifyLogin(inputEmail, inputPassword);

                        if(sucessfullLogin){
                            setLoginStatus(true);
                            navigation.navigate('app');
                        }else{
                            setLoginStatus(false)
                        }
                    }}
                />
                <Button title="Criar Conta" color="black" />
            </View>
            <View style={styles.inputContainer}>
                <Text
                    style={styles.wrongLoginStatus}
                >{loginStatus?"":"Email e/ou Senha errados"}</Text>
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
        paddingHorizontal: 4
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
        color: "red"
    }
});

export default HomeLoginScreen;
