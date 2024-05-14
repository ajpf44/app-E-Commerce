import AsyncStorage from "@react-native-async-storage/async-storage";

async function storageTokenInCache(token) {
    try {
        await AsyncStorage.setItem("tokenKey", token);
    } catch (e) {
        console.log("Error storing token in cache: "  + e)
    }
}

async function getTokenInCache(){
    try {
        const token = await AsyncStorage.getItem('tokenKey');

        return token
      } catch (e) {
        console.log("Error getting token from cache: " + e)
      }
}

async function clearTokenInCache() {
    try {
        await AsyncStorage.removeItem('tokenKey');
    } catch (error) {
        console.log("Error removing token from cache");
    }
}

export {storageTokenInCache, getTokenInCache, clearTokenInCache}