// Alexandre
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeLoginScreen from "../screens/login/HomeLoginScreen";
import CreateAccountScreen from "../screens/login/CreateAccountScreen";

const {Navigator, Screen} = createNativeStackNavigator();

function LoginStack(){

    return(
        <NavigationContainer>
            <Navigator>
                <Screen 
                    name="HomeLoginScreen"
                    component={HomeLoginScreen}
                    options={{ headerShown: false }} 
                />
                <Screen 
                    name="CreateAccountScreen"
                    component={CreateAccountScreen}
                />
            </Navigator>
        </NavigationContainer>
    )
}

export default LoginStack;
