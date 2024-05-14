import React, { useContext, useEffect, useState } from "react";
import {
    View,
    FlatList,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    TextInput,
} from "react-native";
import { ProductsContext } from "../../contexts/ProductsContext";

import { AntDesign } from "@expo/vector-icons";
const filteredProductsForTerm = (products = "", term = "") => {
    return products.filter((prod) => {
        const prodNameLowerCase = prod.name.toLowerCase();

        const prodDescriptionLowerCase = prod.description.toLowerCase();

        const searchTermLowerCase = term.toLowerCase();

        if (
            prodNameLowerCase.includes(searchTermLowerCase) ||
            prodDescriptionLowerCase.includes(searchTermLowerCase)
        )
            return true;

        return false;
    });
};

const ProductHome = ({ navigation }) => {
    const prodCtx = useContext(ProductsContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [productsFromSearch, setProductsFromSearch] = useState(prodCtx.products);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() =>
                navigation.navigate("ProductDetails", { product: item })
            }
        >
            <Image
                source={{
                    uri: item.image
                        ? `data:image/png;base64, ${item.image}`
                        : "https://via.placeholder.com/150",
                }}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>Preço: R$ {item.price}</Text>
                <Text style={styles.inventory}>Estoque: {item.inventory}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={{backgroundColor: "#dddddd", flexDirection: "row", gap: 10, padding: 10, borderRadius: 10}}>
                <AntDesign name="search1" size={24} color="black" />
                <TextInput
                    placeholder="Pesquisar"
                    onChangeText={setSearchTerm}
                    onEndEditing={() =>
                        setProductsFromSearch(
                            filteredProductsForTerm(
                                prodCtx.products,
                                searchTerm
                            )
                        )
                    }
                    style={{fontSize: 16}}
                />
            </View>
            {prodCtx.isFetchingProducts ? (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ActivityIndicator size={60} />
                </View>
            ) : productsFromSearch.length ? (
                <FlatList
                    data={productsFromSearch}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            ) : (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: 16 }}>
                        Nenhum produto encontrado
                    </Text>
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
    item: {
        marginBottom: 16, // Espaçamento entre itens
    },
    image: {
        width: 352, // ASPECTO DA IMAGEM 16:9
        height: 198, // Defina a altura desejada da imagem
        resizeMode: "cover", // Redimensionar a imagem para preencher o espaço
        marginBottom: 8, // Espaçamento entre a imagem e o texto
    },
    textContainer: {
        paddingHorizontal: 8, // Espaçamento horizontal para texto
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 4, // Espaçamento entre imagem e texto
    },
    price: {
        fontSize: 16,
        color: "#666",
        marginTop: 2, // Espaçamento entre o nome e o preço
    },
    inventory: {
        fontSize: 14,
        color: "#666",
        marginTop: 2,
    },
});

export default ProductHome;
