// Alexandre
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeLoginScreen from "../screens/login/HomeLoginScreen";
import TesteApp from "../screens/login/TesteApp";
import CreateAccountScreen from "../screens/login/CreateAccountScreen";

const {Navigator, Screen} = createNativeStackNavigator();

function LoginStack(){

    return(
        <NavigationContainer>
            <Navigator>
                <Screen 
                    name="HomeLoginScreen"
                    component={HomeLoginScreen}
                />
                <Screen 
                    name="app"
                    component={TesteApp}
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
