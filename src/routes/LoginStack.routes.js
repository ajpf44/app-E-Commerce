// Alexandre
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeLoginScreen from "../screens/login/HomeLoginSreen";
import TesteApp from "../screens/login/TesteApp";

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
            </Navigator>
        </NavigationContainer>
    )
}

export default LoginStack;
