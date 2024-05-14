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
import SearchProducts from "../../components/SearchProducts";

const ProductHome = ({ navigation }) => {
    const prodCtx = useContext(ProductsContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [productsToDisplay, setProductsToDisplay] = useState([]);

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
            <SearchProducts
                setSearchTerm={setSearchTerm}
                setProductsToDisplay={setProductsToDisplay}
                products={prodCtx.products}
                searchTerm={searchTerm}
            />
            
            { !!prodCtx.isFetching && (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ActivityIndicator size={60} />
                </View>
            )}
            {!prodCtx.isFetching && !!searchTerm.length && productsToDisplay && (
                <FlatList
                    data={
                        searchTerm.length ? productsToDisplay : prodCtx.products
                    }
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            )}

            {!prodCtx.isFetching && !!searchTerm.length && !productsToDisplay && (
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

            {!prodCtx.isFetching && !searchTerm.length && !!prodCtx.products && (
                <FlatList
                    data={prodCtx.products}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            )}
            {!prodCtx.isFetching && !searchTerm.length && !prodCtx.products && (
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
