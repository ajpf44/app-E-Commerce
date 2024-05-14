// Matheus Mello
// tela com as abas para gerenciar produtos,registrar novo produto , e simular pedidos
import { StatusBar } from "expo-status-bar";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Linking,
    Pressable,
    TouchableOpacity,
} from "react-native";
import { AntDesign,MaterialIcons } from "@expo/vector-icons";
const logoIMG = require("../../../assets/logo-inverted-cropped.jpg");

function HomeApp({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <View style={styles.header}>
                <Image source={logoIMG} style={styles.logoHeader} />
                <Text style={styles.headerText}>MAF</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.nameContainer}>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Text style={{ width: 20, fontSize: 20 }}>M</Text>
                        <Text style={{ fontSize: 16 }}>
                            {" "}
                            - Matheus e Miguel
                        </Text>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Text style={{ width: 20, fontSize: 20 }}>A</Text>
                        <Text style={{ fontSize: 16 }}>
                            {" "}
                            - Arthur e Alexandre
                        </Text>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Text style={{ width: 20, fontSize: 20 }}>F</Text>
                        <Text style={{ fontSize: 16 }}> - Felipe</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.title}>
                        Aplicaitvo Gerenciador do E-commerce MAF
                    </Text>
                    <Text style={styles.contentText}>
                        O aplicativo é um gerenciador de e-commerce de camisas
                        de futebol, permitindo adicionar, editar ou remover
                        itens do estoque, além de registrar ou desligar
                        funcionários, garantindo gestão eficiente do negócio.
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={() =>
                        Linking.openURL(
                            "https://github.com/ajpf44/app-E-Commerce/"
                        )
                    }
                    style={styles.link}
                >
                    <AntDesign name="github" size={50} color="black" />
                    <Text style={styles.linkText}>Repositório do App </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("AboutScreen")
                    }
                    style={styles.link}
                >
                    <AntDesign name="team" size={55} color="black" />
                    <Text style={styles.linkText}>Time de Desenvolvimento </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() =>
                        Linking.openURL(
                            "https://github.com/brjoaof/senac-2024-01-react-native/tree/master/trabalho-final"
                        )
                    }
                    style={styles.link}
                >
                    <AntDesign name="infocirlce" size={50} color="black" />
                    <Text style={styles.linkText}>Orientações do Projeto </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    header: {
        backgroundColor: "#000",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 35,
        padding: 10,
        gap: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    },
    content: {
        flex: 1,
        padding: 20,
        gap: 20
    },
    contentText: {
        fontSize: 16,
        color: "#000",
        textAlign: "justify",
    },
    nameContainer: {
        textAlign: "justify",
        width: 200,
    },
    nameMAF: {
        fontFamily: "Roboto",
    },
    title: {
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 10,
    },
    logoHeader: {
        width: 40 * 1.25,
        height: 40,
    },
    link: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        padding: 20,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 1000,
        alignSelf: "center",
    },
    linkText: {
        textDecorationLine: "underline",
        fontStyle: "italic",
        fontSize: 15,
        width: 150
    },
});

export default HomeApp;
