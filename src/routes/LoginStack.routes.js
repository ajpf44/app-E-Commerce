// Alexandre
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeLoginScreen from "../screens/login/HomeLoginScreen";
import CreateAccountScreen from "../screens/login/CreateAccountScreen";
import { Image, View } from "react-native";

const { Navigator, Screen } = createNativeStackNavigator();
const logoIMG = require("../../assets/logo-inverted-cropped.jpg");

function LoginStack() {
    const headerOptions = {
        headerTitle: ()=>(
            <Image
                source={logoIMG}
                style={{
                    width: 40 * 1.25,
                    height: 40,
                }}
            />
        ),
        headerStyle: {backgroundColor: "black"},
        headerTintColor: "white"
    }

    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="HomeLoginScreen"
                    component={HomeLoginScreen}
                    options={headerOptions}
                />
                <Screen
                    name="CreateAccountScreen"
                    component={CreateAccountScreen}
                    options={headerOptions}
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default LoginStack;
