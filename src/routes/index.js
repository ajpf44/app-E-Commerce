import { NavigationContainer } from '@react-navigation/native'
import LoginStack from './LoginStack.routes';
import Tabs from './bottomTabs';


export default function Routes() {
    const isLogged = true;

    return(
        <>
            {!isLogged && <LoginStack /> }
            {isLogged && <Tabs />}
                {/* NAVEGAÇÃO DO MIGUEL 
                <Stack.Navigator initialRouteName="ProductHome">
                    <Stack.Screen name="ProductHome" component={ProductHome} />
                    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
                </Stack.Navigator> 
                */}
        </>
    )
}