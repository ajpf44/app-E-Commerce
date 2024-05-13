// Matheus Mello
// tela com as abas para gerenciar produtos,registrar novo produto , e simular pedidos 

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Importe o pacote de ícones

function HomeApp({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bem-vindo à Área de Gerenciamento</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Aqui, você pode gerenciar produtos e pedidos.</Text>
        <Text style={styles.contentText}>Use a navegação abaixo para acessar as diferentes funcionalidades.</Text>
      </View>
      <View style={styles.buttonContainer}>
   
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#000',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop:'10%',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  contentText: {
    fontSize: 18,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
  },
});

export default HomeApp;
