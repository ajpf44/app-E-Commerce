//Alexandre
import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Dimensions,
} from "react-native";
import {
    isEmailAlreadyRegistered,
    registerEmployee,
} from "../../services/employees";

function createStatus(creationStatus) {
    if (creationStatus == "invalid") return "Campos inválidos";
    else if (creationStatus == "emailAlreadyRegistered")
        return "Email já cadastrado";
    else return "";
}

function CreateAccountScreen({navigation}) {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputName, setInputName] = useState("");
    const [creationStatus, setCreationStatus] = useState("valid");

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
                <Button
                    title="Criar Conta"
                    color="black"
                    onPress={async () => {
                        if (
                            inputEmail == "" ||
                            inputPassword == "" ||
                            inputName == ""
                        ) {
                            setCreationStatus("invalid");
                            return;
                        }

                        const isEmailAvailable =
                            !(await isEmailAlreadyRegistered(inputEmail));

                        if (isEmailAvailable) {
                            const employee = {
                                name: inputName,
                                email: inputEmail,
                                password: inputPassword,
                            };

                            registerEmployee(employee);
                            setCreationStatus("valid");

                            navigation.navigate("HomeLoginScreen");
                        } else {
                            setCreationStatus("emailAlreadyRegistered");
                        }
                    }}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.creationStatus}>
                    {createStatus(creationStatus)}
                </Text>
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
    },
});

export default CreateAccountScreen;
