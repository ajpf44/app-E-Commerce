// Matheus Mello
//Pagina de Rotas bottomTabs
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeManagement from "../screens/Management/HomeManagement";
import Product from "../screens/Management/Product";
import RegisterProduct from "../screens/Management/RegisterProduct";
import SimulateOrder from "../screens/Management/EmployeesOrder";
import ProductsStack from "./ProductsStack";
import EmployeeCRUD from "../screens/employees/EmployeeCRUD";
import { useContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/products";
import { ProductsContext } from "../contexts/ProductsContext";

const { Navigator, Screen } = createBottomTabNavigator();

function Tabs() {
    const prodCtx = useContext(ProductsContext);

    useEffect(() => {
        const fetchProducts = async () => {
            console.log("ESTÁ RODANDO");
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
                        if (route.name === "Management") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name === "Register") {
                            iconName = focused
                                ? "add-circle"
                                : "add-circle-outline";
                        } else if (route.name === "Order") {
                            iconName = focused ? "cart" : "cart-outline";
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
                    name="Management"
                    component={HomeManagement}
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
                {/* Ainda está sendo desenvolvida a screen pedidos */}
                {/* <Screen 
                    name="Order" 
                    component={SimulateOrder}
                    options={{
                        title: "Pedido",
                    }}
                /> */}
            </Navigator>
        </NavigationContainer>
    );
}

export default Tabs;
