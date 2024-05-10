import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const products = [
  {
    id: '1',
    name: 'Produto 1',
    price: 'R$10,00',
    description: 'Descrição do produto 1',
    image: 'https://via.placeholder.com/150',
    sizes: ['P', 'M', 'G'],
  },
  {
    id: '2',
    name: 'Produto 2',
    price: 'R$20,00',
    description: 'Descrição do produto 2',
    image: 'https://via.placeholder.com/150',
    sizes: ['P', 'M', 'G', 'GG'],
  },
  // Adicione mais produtos aqui
];

const ProductHome = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    marginBottom: 16, // Espaçamento entre itens
  },
  image: {
    width: '100%', // A imagem ocupará a largura total da tela
    height: 200, // Defina a altura desejada da imagem
    resizeMode: 'cover', // Redimensionar a imagem para preencher o espaço
    marginBottom: 8, // Espaçamento entre a imagem e o texto
  },
  textContainer: {
    paddingHorizontal: 8, // Espaçamento horizontal para texto
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4, // Espaçamento entre imagem e texto
  },
  price: {
    fontSize: 16,
    color: '#666',
    marginTop: 2, // Espaçamento entre o nome e o preço
  },
});

export default ProductHome;
