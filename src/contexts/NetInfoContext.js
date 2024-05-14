import NetInfo from '@react-native-community/netinfo';
import { createContext, useState } from 'react';

const NetInfoContext = createContext({
    isConnected: false,
    setIsConnected: ()=>{}
})

function NetInfoContextProvider({children}){
    const [isConnected, setIsConnected] = useState(false);
    const value = {
        isConnected: isConnected,
        setIsConnected: setIsConnected
    }
    return(
        <NetInfoContext.Provider value={value}>
            {children}
        </NetInfoContext.Provider>
    )
}

export {NetInfoContext, NetInfoContextProvider}
