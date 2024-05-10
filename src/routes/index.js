import { NavigationContainer } from '@react-navigation/native'
import LoginStack from './LoginStack.routes';
import Tabs from './bottomTabs';


export default function Routes() {
    const isLogged = false;

    return(
        <>
            {!isLogged && <LoginStack /> }
            {isLogged && <Tabs />}
                
        </>
    )
}