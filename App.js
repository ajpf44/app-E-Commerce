import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginStack from './src/routes/LoginStack.routes';
import Tabs from './src/routes/bottomTabs';
export default function App() {
  console.log("App running")
  
  return (
    // <LoginStack></LoginStack>
    // <HomeManagement />
    // <Routes />
    <Tabs />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
