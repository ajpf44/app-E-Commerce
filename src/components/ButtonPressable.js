import { Text, Pressable, StyleSheet } from "react-native";

function ButtonPressable({text, specStyle, pressFunc}) {
    return (
        <Pressable onPress={() => pressFunc()} style={[styles.standard, specStyle]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    standard: {
        backgroundColor: "black",
        paddingVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
    },
    text: {
        color: "white",
        fontWeight: "500"
    }
})

export default ButtonPressable;
