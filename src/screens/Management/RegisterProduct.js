//Matheus Mello 
//Tela para registrar o produto
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from "react-native";
import { useState } from "react";
import ImagePicker from 'expo-image-picker';
import { postProduct } from "../../services/ProductCRUD";

function RegisterProduct() {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productSize, setProductSize] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const sendDatabase = async () => {
    try {
      await postProduct({ name: productName, price: productPrice, size: productSize, description: productDescription, image: image });
      setProductName('');
      setProductPrice('');
      setProductSize('');
      setProductDescription('');
      setImage(null);
    } catch (error) {
      console.log('Erro ao enviar produto:', error);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
                        
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Novo Produto</Text>
      <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
        <Text style={styles.buttonText}>Escolher Imagem do Produto</Text>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder='Insira o Nome do Produto'
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder='Insira o Preço do Produto'
        value={productPrice}
        onChangeText={setProductPrice}
      />
      <TextInput
        style={styles.input}
        placeholder='Insira o Tamanho do Produto'
        value={productSize}
        onChangeText={setProductSize}
      />
      <TextInput
        style={styles.input}
        placeholder='Insira a Descrição do Produto'
        value={productDescription}
        onChangeText={setProductDescription}
      />
      <TouchableOpacity
        style={styles.buttonRegister}
        onPress={sendDatabase}
      >
        <Text style={styles.buttonText}>Registrar Produto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  imageButton: {
    width: '80%',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  input: {
    width: '80%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  buttonRegister: {
    width: '80%',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default RegisterProduct;
