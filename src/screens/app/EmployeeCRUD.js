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

import { useEffect, useState } from "react";
import { getAllEmployess } from "../../services/employees";
import EmployeeList from "../../components/app/EmployeeList";

function EmployeeCRUD() {
    

    return (
        <View style={styles.container}>
            <EmployeeList />

            <View style={{width: Dimensions.get('window').width, alignItems: "center", borderTopColor: "black", borderTopWidth: 2, paddingTop: 5, gap: 10}}>
                <View>
                    <View style={styles.inputContainer}>
                        <Text>Id: </Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text>Name: </Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text>Email: </Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text>Senha: </Text>
                        <TextInput style={styles.input} />
                    </View>
                </View>

                <View style={styles.pressableGroup}>
                    <Pressable style={styles.Pressable} title="Registrar">
                        <Text style={styles.PressableText}>Registrar</Text>
                    </Pressable>
                    <Pressable style={styles.Pressable} title="Atualizar">
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
        </View>
    );
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
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
