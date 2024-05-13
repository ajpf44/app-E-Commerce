import {
    View,
    Text,
    FlatList,
    Pressable,
    Dimensions,
    StyleSheet,
    Alert,
    ActivityIndicator,
} from "react-native";
import { useContext, useEffect, useState } from "react";

import { FontAwesome } from "@expo/vector-icons";

import { deleteEmployee, getAllEmployess } from "../../services/employees";
import { AuthContext } from "../../contexts/AuthContext";

const EmployeeFrame = ({ employee, index, setsInput }) => {
    return (
        <View style={styles.container}>
            <Text>{index}</Text>
            <View style={styles.informationContainer}>
                <Text>Nome: {employee.name}</Text>
                <Text>Email: {employee.email}</Text>
            </View>

            <Pressable
                onPress={() => {
                    setsInput.setName(employee.name);
                    setsInput.setEmail(employee.email);
                    setsInput.setId(employee.id);
                }}
                style={{ marginRight: 10 }}
            >
                <FontAwesome name="gear" size={24} color="black" />
            </Pressable>

            <Pressable
                onPress={() => {
                    const alertRes = Alert.alert(
                        "Confirmação",
                        `Realmente deseja excluir ${employee.name}?`,
                        [
                            {
                                text: "Sim",
                                onPress: () => deleteEmployee(employee.id),
                            },
                            {
                                text: "Não",
                            },
                        ]
                    );
                }}
            >
                <FontAwesome name="trash-o" size={24} color="black" />
            </Pressable>
        </View>
    );
};

function EmployeeList({ setsInput }) {
    const [employees, setEmployees] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        const getEmployess = async () => {
            setEmployees(await getAllEmployess(authCtx.token));
            setIsFetching(false);
        };
        getEmployess();
    }, [employees]);

    return isFetching ? (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <ActivityIndicator size={60} />
        </View>
    ) : (
        <FlatList
            data={employees}
            renderItem={({ item, index }) => (
                <EmployeeFrame
                    employee={item}
                    index={index}
                    setsInput={setsInput}
                />
            )}
            keyExtractor={(emp) => emp.id}
        />
    );
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        borderColor: "black",
        borderWidth: 1,
        width: width * 0.9,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
    },
    informationContainer: {
        width: 200,
    },
});

export default EmployeeList;
