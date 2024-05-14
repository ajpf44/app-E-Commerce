// Alexandre
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductsHome from "../screens/products/ProductsHome";
import ProductDetailsScreen from "../screens/products/ProductDetailsScreen";
import ProductUpdateScreen from "../screens/products/ProductUpdateScreen";

const { Navigator, Screen } = createNativeStackNavigator();

function ProductsStack() {
    return (
        <Navigator initialRouteName="ProductsHome">
            <Screen
                name="ProductsHome"
                component={ProductsHome}
            />
            <Screen name="ProductDetails" component={ProductDetailsScreen} />
            <Screen 
                name="ProductUpdateScreen" 
                component={ProductUpdateScreen} 
            />
        </Navigator>
    );
}

export default ProductsStack;
