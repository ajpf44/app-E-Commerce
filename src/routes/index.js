import { NavigationContainer } from '@react-navigation/native'
import Stack from './stack.routes'
import Tab from './bottom-tabs.routes'

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack />
            <Tab />
            
        </NavigationContainer>
    )
}