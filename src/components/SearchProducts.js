import { View, TextInput} from "react-native";
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

function SearchProducts({searchTerm,setSearchTerm,setProductsToDisplay, products}) {
    return (
        <View
            style={{
                backgroundColor: "#dfdfde",
                flexDirection: "row",
                gap: 10,
                padding: 10,
                borderRadius: 10,
                marginBottom: 10,
            }}
        >
            <AntDesign name="search1" size={24} color="black" />
            <TextInput
                placeholder="Pesquisar"
                onChangeText={(text) => {
                    setSearchTerm(text);
                    setProductsToDisplay(
                        filteredProductsForTerm(products, searchTerm)
                    );
                }}
                onEndEditing={() =>
                    setProductsToDisplay(
                        filteredProductsForTerm(products, searchTerm)
                    )
                }
                style={{ fontSize: 16 }}
            />
        </View>
    );
}

export default SearchProducts;
