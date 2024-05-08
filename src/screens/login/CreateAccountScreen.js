//Alexandre
import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Dimensions,
    ActivityIndicator,
    Pressable,
} from "react-native";
import {
    getAllEmployess,
    registerEmployee,
} from "../../services/employees";
import sha256 from "../../utils/cryptography";

async function isEmailAlreadyRegistered(inputEmail){
    const employees = await getAllEmployess();
    
    for( let {email} of employees){
        if(email == inputEmail) return true;
    }

    return false;
}

async function createAccount(
    inputEmail,
    inputPassword,
    inputName,
    navigation,
    setCreationStatus,
    setIsCreating
) {
    if (inputEmail == "" || inputPassword == "" || inputName == "") {
        setCreationStatus("Campos inválidos");
        return;
    }

    setIsCreating(true);
    const isEmailAvailable = !(await isEmailAlreadyRegistered(inputEmail));
    const hashedPassword = await sha256(inputPassword);

    if (isEmailAvailable) {
        const employee = {
            name: inputName,
            email: inputEmail,
            password: hashedPassword,
        };

        await registerEmployee(employee);
        setCreationStatus("");

        setIsCreating(false)
        navigation.navigate("HomeLoginScreen");
    } else {
        setIsCreating(false)
        setCreationStatus("Email já cadastrado");
    }
}

function CreateAccountScreen({ navigation }) {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputName, setInputName] = useState("");

    const [isCreating, setIsCreating] = useState(false);

    //Resposta para o usuário se a conta foi criada ou não, ou porque
    const [creationStatus, setCreationStatus] = useState("");

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
                <Pressable
                    style={styles.PressableCreateAccount}
                    onPress={async () =>
                        createAccount(
                            inputEmail,
                            inputPassword,
                            inputName,
                            navigation,
                            setCreationStatus,
                            setIsCreating
                        )
                    }
                >
                    <Text style={styles.PressableText}>CRIAR CONTA</Text>
                    
                </Pressable>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.creationStatus}>
                    {creationStatus}
                </Text>

                {isCreating?<ActivityIndicator></ActivityIndicator>:<Text> </Text>}
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
        marginBottom: 10
    },
    PressableCreateAccount:{
        backgroundColor: "black",
        paddingVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
    },
    PressableText:{
        color: 'white',
        fontWeight: "500",
    }
});

export default CreateAccountScreen;
