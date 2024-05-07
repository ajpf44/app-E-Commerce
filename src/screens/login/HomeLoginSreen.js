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

const rightEmail = "teste@"
const rightPassword = "123"

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
