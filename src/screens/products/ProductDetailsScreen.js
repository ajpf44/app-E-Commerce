import React, { useContext, useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Pressable,
    Dimensions,
    Alert,
    ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { FontAwesome } from "@expo/vector-icons";

import { deleteProduct } from "../../services/products";
import { ProductsContext } from "../../contexts/ProductsContext";
import refreshProducts from "../../utils/refreshProducts";

const ProductDetailsScreen = ({ route, navigation }) => {
    const { product } = route.params; //Produto que foi selecionado
    const [selectedSize, setSelectedSize] = useState(product.size);

    const [isDeleting, setIsDeleting] = useState(false);
    const iconsSize = 40;

    const prodCtx = useContext(ProductsContext);

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: product.image
                        ? `data:image/png;base64, ${product.image}`
                        : "https://via.placeholder.com/150",
                }}
                style={styles.image}
            />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>Preço: R$ {product.price}</Text>
            <Text style={styles.description}>
                Descrição: {product.description}
            </Text>
            <Text style={styles.sizeLabel}>Selecione o tamanho:</Text>
            <Picker
                selectedValue={selectedSize}
                onValueChange={(itemValue) => setSelectedSize(itemValue)}
                style={styles.picker}
            >
                {["M", "P", "G", "GG"].map((size) => (
                    <Picker.Item key={size} label={size} value={size} />
                ))}
            </Picker>
            {isDeleting ? (
                <ActivityIndicator size={60} />
            ) : (
                <View style={styles.iconsContainer}>
                    <Pressable
                        onPress={() => {
                            navigation.navigate("ProductUpdateScreen", {
                                product: product,
                            });
                        }}
                    >
                        <FontAwesome
                            name="gear"
                            size={iconsSize}
                            color="black"
                        />
                    </Pressable>

                    <Pressable
                        onPress={() => {
                            setIsDeleting(true);
                            Alert.alert(
                                "Confirmação",
                                `Realmente deseja excluir ${product.name}?`,
                                [
                                    {
                                        text: "Sim",
                                        onPress: async () => {
                                            await deleteProduct(product.id);
                                            navigation.navigate("ProductsHome");
                                            refreshProducts(prodCtx);
                                        },
                                    },
                                    {
                                        text: "Não",
                                    },
                                ]
                            );
                            setIsDeleting(false);
                        }}
                    >
                        <FontAwesome
                            name="trash-o"
                            size={iconsSize}
                            color="black"
                        />
                    </Pressable>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
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
        width: "100%",
    },
    iconsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        width: Dimensions.get("window").width * 0.7,
        marginTop: 20,
        justifyContent: "space-around",
    },
});

export default ProductDetailsScreen;
