//Alexandre
import { useContext, useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
    ActivityIndicator,
} from "react-native";

import createAccount from "../../utils/createAccount";
import ButtonPressable from "../../components/ButtonPressable";

import NetworkStatusWindow from "../../components/NetworkStatusWindow";

function CreateAccountScreen({ navigation }) {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputName, setInputName] = useState("");

    const [isCreating, setIsCreating] = useState(false);

    //Resposta para o usuário se a conta foi criada ou não, ou porque
    const [creationStatus, setCreationStatus] = useState("");
    return (
        <View style={styles.container}>
            <NetworkStatusWindow />
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
                {!isCreating && (
                    <ButtonPressable
                        pressFunc={() =>
                            createAccount(
                                inputEmail,
                                inputPassword,
                                inputName,
                                navigation,
                                setCreationStatus,
                                setIsCreating
                            )
                        }
                        text="CRIAR CONTA"
                    />
                )}

                {isCreating && (
                    <ActivityIndicator size={35}></ActivityIndicator>
                )}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.creationStatus}>{creationStatus}</Text>
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
    creationStatus: {
        color: "red",
        marginBottom: 10,
    },
});

export default CreateAccountScreen;
