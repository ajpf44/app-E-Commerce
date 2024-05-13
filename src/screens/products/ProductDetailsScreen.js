import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const ProductDetailsScreen = ({ route }) => {
    const { product } = route.params;
    const [selectedSize, setSelectedSize] = useState(product.size);

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
            <Text style={styles.price}>Preço: {product.price}</Text>
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
});

export default ProductDetailsScreen;
