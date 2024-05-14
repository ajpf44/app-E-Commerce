// Alexandre
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeApp from "../screens/home/HomeApp";
import AboutScreen from "../screens/home/AboutScreen";
import NetworkStatusWindow from "../components/NetworkStatusWindow";
import { useContext } from "react";
import { NetInfoContext } from "../contexts/NetInfoContext";

const { Navigator, Screen } = createNativeStackNavigator();

function HomeStack() {
    return (
        <Navigator initialRouteName="HomeApp">
            <Screen name="HomeApp" component={HomeApp} options={{headerShown: false}} />
            <Screen name="AboutScreen" component={AboutScreen} options={{headerTitle: "Sobre"}}/>
        </Navigator>
    );
}

export default HomeStack;
