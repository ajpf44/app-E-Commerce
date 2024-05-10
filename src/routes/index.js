import { NavigationContainer } from '@react-navigation/native'
import LoginStack from './LoginStack.routes';
import Tabs from './bottomTabs';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';


export default function Routes() {
    const authCtx = useContext(AuthContext)

    return(
        <>
            {!authCtx.isLogged && <LoginStack /> }
            {authCtx.isLogged && <Tabs />}
                
        </>
    )
}