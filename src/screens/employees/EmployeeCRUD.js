import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    Dimensions,
    Pressable,
    ScrollView,
} from "react-native";

import { useContext, useEffect, useState } from "react";

import { getAllEmployess } from "../../services/employees";
import EmployeeList from "../../components/app/EmployeeList";
import createAccount from "../../utils/createAccount";
import { updateEmployee } from "../../services/employees";
import { AuthContext } from "../../contexts/AuthContext";
import { clearTokenInCache } from "../../utils/asyncStorage";
import NetworkStatusWindow from "../../components/NetworkStatusWindow";

function EmployeeCRUD() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const setsInput = {
        setId: setId,
        setEmail: setEmail,
        setName: setName,
        setPassword: setPassword,
    };

    const authCtx = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NetworkStatusWindow/>
            <View
                style={{
                    width: Dimensions.get("window").width,
                    alignItems: "center",
                    borderTopColor: "black",
                    borderTopWidth: 2,
                    paddingTop: 5,
                    gap: 10,
                }}
            >
                <View style={[styles.inputContainer, {marginTop: 10}]}>
                    <Button title="Logout" color="black" onPress={()=>{
                        authCtx.setToken('');
                        clearTokenInCache();
                    }}/>
                </View>
                <View>
                    <View style={styles.inputContainer}>
                        <Text>Id: </Text>
                        <TextInput
                            style={styles.input}
                            value={id}
                            onChangeText={setId}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text>Name: </Text>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text>Email: </Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text>Senha: </Text>
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                </View>

                <View style={styles.pressableGroup}>
                    <Pressable
                        style={styles.Pressable}
                        title="Registrar"
                        onPress={() => {
                            createAccount(
                                email,
                                password,
                                name,
                                null,
                                null,
                                null,
                                authCtx.token
                            );
                        }}
                    >
                        <Text style={styles.PressableText}>Registrar</Text>
                    </Pressable>
                    <Pressable
                        style={styles.Pressable}
                        title="Atualizar"
                        onPress={async () => {
                            const employee = {
                                name: name,
                                email: email,
                                password: password,
                            };
                            await updateEmployee(id, authCtx.token, employee);
                        }}
                    >
                        <Text style={styles.PressableText}>Atualizar</Text>
                    </Pressable>
                </View>

                <View>
                    <Text style={{ fontWeight: "bold" }}>
                        Parametros Necessários:{" "}
                    </Text>
                    <Text>Registrar: Nome, Email, Senha</Text>
                    <Text>Atualizar: Id, Nome, Email, Senha</Text>
                </View>
            </View>

            <EmployeeList setsInput={setsInput} />
        </View>
    );
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        gap: 20,
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        paddingHorizontal: 3,
    },
    pressableGroup: {
        gap: 20,
        flexDirection: "row",
    },
    inputContainer: {
        width: width * 0.7,
    },
    pressableContainer: {
        gap: 20,
    },
    Pressable: {
        backgroundColor: "black",
        paddingVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        width: width * 0.3,
    },
    PressableText: {
        color: "white",
        fontWeight: "500",
    },
});

export default EmployeeCRUD;
