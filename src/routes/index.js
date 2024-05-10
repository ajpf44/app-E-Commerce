import { NavigationContainer } from '@react-navigation/native'
import Stack from './stack.routes'
import Tab from './bottom-tabs.routes'

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack />
            <Tab />
                {/* NAVEGAÇÃO DO MIGUEL 
                <Stack.Navigator initialRouteName="ProductHome">
                    <Stack.Screen name="ProductHome" component={ProductHome} />
                    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
                </Stack.Navigator> 
                */}
                
        </NavigationContainer>
    )
}