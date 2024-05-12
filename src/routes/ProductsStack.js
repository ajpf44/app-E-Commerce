// Alexandre
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductHome from "../screens/products/productHome";
import ProductDetailsScreen from "../screens/products/ProductDetailsScreen";

const { Navigator, Screen } = createNativeStackNavigator();

function ProductsStack() {
    return (
        <Navigator initialRouteName="ProductHome">
            <Screen
                name="ProductHome"
                component={ProductHome}
                options={{ headerShown: false }}
            />
            <Screen name="ProductDetails" component={ProductDetailsScreen} />
        </Navigator>
    );
}

export default ProductsStack;
