import {
    View,
    Text,
    FlatList,
    Pressable,
    Dimensions,
    StyleSheet,
    Alert,
} from "react-native";
import { useEffect, useState } from "react";

import { FontAwesome } from "@expo/vector-icons";

import { deleteEmployee, getAllEmployess } from "../../services/employees";

const EmployeeFrame = ({ employee, index }) => {

    return (
        <View style={styles.container}>
            <Text>{index}</Text>
            <View style={styles.informationContainer}>
                <Text>Nome: {employee.name}</Text>
                <Text>Email: {employee.email}</Text>
            </View>

            <Pressable
                onPress={() => {
                    console.log("Pressinou a engrenagem");
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

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const getEmployess = async () => setEmployees(await getAllEmployess());
        getEmployess();
    }, [employees]);

    return (
        <FlatList
            data={employees}
            renderItem={({ item, index }) => (
                <EmployeeFrame
                    employee={item}
                    index={index}
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
