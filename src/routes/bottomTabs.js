// Matheus Mello / Arthur Baltar
//Pagina de Rotas bottomTabs
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Importando Ionicons
import RegisterProduct from "../screens/Management/RegisterProduct";
import ProductsStack from "./ProductsStack";
import EmployeeCRUD from "../screens/employees/EmployeeCRUD";
import { useContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/products";
import { ProductsContext } from "../contexts/ProductsContext";
import HomeStack from "./HomeStack";

const { Navigator, Screen } = createBottomTabNavigator();

function Tabs() {
    const prodCtx = useContext(ProductsContext);

    useEffect(() => {
        const fetchProducts = async () => {
            prodCtx.setIsFetching(true);
            const p = await getAllProducts();

            prodCtx.setProducts(p);
        };

        fetchProducts();
    }, [prodCtx.contToUpdateFetch]);

    return (
        <NavigationContainer initialRouteName="Management">
            <Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Home") {
                            iconName = focused? "home" : "home-outline";
                        } else if (route.name === "Register") {
                            iconName = focused? "add-circle" : "add-circle-outline";
                        } else if (route.name === "Order") {
                            iconName = focused? "cart" : "cart-outline";
                        } else if (route.name === "Employees") {
                            iconName = focused? "person" : "person-outline"; // Ícone para Funcionários
                        } else if (route.name === "Product") {
                            iconName = focused? "list" : "list-outline"; // Ícone para Produtos
                        }
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "gray",
                    tabBarStyle: { backgroundColor: "#000" },
                })}
            >
                <Screen
                    name="Home"
                    component={HomeStack}
                    options={{
                        headerShown: false,
                        title: "Gerenciamento",
                    }}
                />

                <Screen
                    name="Product"
                    component={ProductsStack}
                    options={{
                        title: "Produtos",
                        headerShown: false
                    }}
                />

                <Screen
                    name="Register"
                    component={RegisterProduct}
                    options={{
                        title: "Gern. Estoque",
                        headerShown: false,
                    }}
                />

                <Screen
                    name="Employees"
                    component={EmployeeCRUD}
                    options={{
                        title: "Funcionários",
                        headerShown: true,
                    }}
                />
               
            </Navigator>
        </NavigationContainer>
    );
}

export default Tabs;
