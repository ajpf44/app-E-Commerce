import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    TextInput,
    Pressable,
    Alert,
    ActivityIndicator,
} from "react-native";
import { useState, useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import * as ImagePicker from "expo-image-picker";
import refreshProducts from "../../utils/refreshProducts";
import { Picker } from "@react-native-picker/picker";

import { FontAwesome } from "@expo/vector-icons";

import { deleteProduct, updateProduct } from "../../services/products";

const ProductUpdateScreen = ({ route, navigation }) => {
    const { product } = route.params; //Produto que foi selecionado

    const iconsSize = 40;

    const [image, setImage] = useState(product.image);
    const [productName, setProductName] = useState(product.name);
    const [productPrice, setProductPrice] = useState(product.price);
    const [productSize, setProductSize] = useState(product.size);
    const [productDescription, setProductDescription] = useState(
        product.description
    );
    const [isFetching, setIsFetching] = useState(false);

    const prodCtx = useContext(ProductsContext);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.1, //Configurado assim para evitar lentidão do sistema
            base64: true,
        });

        if (!!result) {
            setImage(result.assets[0].base64);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
                <Text style={styles.buttonText}>
                    Escolher Imagem do Produto
                </Text>
                {image && (
                    <Image
                        source={{ uri: `data:image/png;base64, ${image}` }}
                        style={styles.image}
                    />
                )}
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="Insira o Nome do Produto"
                value={productName}
                onChangeText={setProductName}
            />
            <TextInput
                style={styles.input}
                placeholder="Insira o Preço do Produto"
                value={productPrice}
                onChangeText={setProductPrice}
            />
            <TextInput
                style={styles.input}
                placeholder="Insira a Descrição do Produto"
                value={productDescription}
                onChangeText={setProductDescription}
            />
            <Picker
                selectedValue={productSize}
                onValueChange={setProductSize}
                style={styles.picker}
            >
                {["M", "P", "G", "GG"].map((size) => (
                    <Picker.Item key={size} label={size} value={size} />
                ))}
            </Picker>
            {isFetching ? (
                <ActivityIndicator size={60} />
            ) : (
                <View style={styles.onPressContainer}>
                    <TouchableOpacity
                        style={styles.buttonRegister}
                        onPress={async () => {
                            setIsFetching(true);
                            await updateProduct(product.id, {
                                name: productName,
                                price: productPrice,
                                size: productSize,
                                description: productDescription,
                                image: image,
                            });
                            refreshProducts(prodCtx);
                            setIsFetching(false);
                            navigation.navigate("ProductsHome");
                        }}
                    >
                        <Text style={styles.buttonText}>Atualizar Produto</Text>
                    </TouchableOpacity>

                    <View style={styles.iconsContainer}>
                        <Pressable
                            onPress={() => {
                                Alert.alert(
                                    "Confirmação",
                                    `Realmente deseja excluir ${product.name}?`,
                                    [
                                        {
                                            text: "Sim",
                                            onPress: async () => {
                                                setIsFetching(true);
                                                await deleteProduct(product.id);
                                                refreshProducts(prodCtx);
                                                setIsFetching(false)
                                                navigation.navigate(
                                                    "ProductHome"
                                                );
                                            },
                                        },
                                        {
                                            text: "Não",
                                        },
                                    ]
                                );
                            }}
                        >
                            <FontAwesome
                                name="trash-o"
                                size={iconsSize}
                                color="black"
                            />
                        </Pressable>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
    },
    price: {
        fontSize: 18,
        color: "#666",
        marginTop: 8,
    },
    description: {
        fontSize: 16,
        marginTop: 8,
        marginBottom: 16,
    },
    sizeLabel: {
        fontSize: 16,
        marginBottom: 8,
    },
    picker: {
        height: 50,
        width: "80%",
        marginBottom: 10,
    },
    iconsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        width: Dimensions.get("window").width * 0.7,
        marginTop: 20,
        justifyContent: "space-around",
    },
    imageButton: {
        width: "80%",
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 5,
    },
    image: {
        width: 176,
        height: 99,
        marginTop: 10,
    },
    input: {
        width: "80%",
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
    },
    buttonRegister: {
        width: "80%",
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
    },
    onPressContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
});

export default ProductUpdateScreen;
