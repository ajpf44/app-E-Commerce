import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView, KeyboardAvoidingView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <ScrollView>
          <Text style={styles.title}>Time de Desenvolvimento</Text>
         
          <Image style={styles.profileImage} source={require('../../../assets/alexandre.jpg')} />
          <View>
            <Text style={styles.title1}>Alexandre Ferreira</Text>
            <Text style={styles.description}>
            Olá! Sou Alexandre, um entusiasta por tecnologia e ciências exatas. Tenho experiência em JavaScript e atualmente estou aprendendo React Native e Spring Boot.
            </Text>
          </View>
          <View style={styles.linksContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/ajpf44')}>
              <FontAwesome name="github" size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/ajpf44/')}>
              <FontAwesome name="linkedin" size={35} color="black" />
            </TouchableOpacity>
          </View>

      
          <Image style={styles.profileImage} source={require('../../../assets/arthur.jpg')} />
          <View>
            <Text style={styles.title1}>Arthur Baltar</Text>
            <Text style={styles.description}>
            Estou cursando atualmente a faculdade de Tecnologia da Informação e Computação e fazendo Residência em TI e possuo uma grande paixão por tecnologia, onde venho focando em aprimorar em meu dia a dia no desenvolvimento Full Stack. Por isso cada vez mais, foco em me tornar um profissional mais capacitado.
            </Text>
          </View>
          <View style={styles.linksContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Arthurbaltar1')}>
              <FontAwesome name="github" size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/ajpf44/')}>
              <FontAwesome name="linkedin" size={35} color="black" />
            </TouchableOpacity>
          </View>


          <Image style={styles.profileImage} source={require('../../../assets/felipe.jpeg')} />
          <View>
            <Text style={styles.title1}>Felipe Fragoso</Text>
            <Text style={styles.description}>
            Olá, eu sou o Felipe Fragoso! Um apaixonado por tecnologia que decidiu trilhar o caminho da programação. Atualmente estou fazendo a Residencia em TIC/Software do Serratec em parceira com Senac.
            </Text>
          </View>
          <View style={styles.linksContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/felipeofragoso')}>
              <FontAwesome name="github" size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/felipeofragoso/')}>
              <FontAwesome name="linkedin" size={35} color="black" />
            </TouchableOpacity>
          </View>


          <Image style={styles.profileImage} source={require('../../../assets/matheus.jpg')} />
          <View>
            <Text style={styles.title1}>Matheus Mello</Text>
            <Text style={styles.description}>
            Desenvolvedor em Formação Full Stack com interesse em especialização Back end.  Atualmente, estou cursando um programa Full Stack do Serratec em parceria com o Senac, aprimorando minhas habilidades em desenvolvimento e ampliando meus conhecimentos técnicos. Busco oportunidades que me permitam contribuir para projetos inovadores.
            </Text>
          </View>
          <View style={styles.linksContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/MatheusMelloDev')}>
              <FontAwesome name="github" size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/matheus-mello-a864a12a2/')}>
              <FontAwesome name="linkedin" size={35} color="black" />
            </TouchableOpacity>
          </View>



          
          <Image style={styles.profileImage} source={require('../../../assets/miguel.jpeg')} />
          <View>
            <Text style={styles.title1}>Miguel Christ</Text>
            <Text style={styles.description}>
            Sou um iniciante determinado a buscar me desenvolver e aprimorar na área..
            </Text>
          </View>
          <View style={styles.linksContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/MiguelrChrist')}>
              <FontAwesome name="github" size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/miguel-r-christ-7815b0205/')}>
              <FontAwesome name="linkedin" size={35} color="black" />
            </TouchableOpacity>
          </View>


          
        </ScrollView>
      </KeyboardAvoidingView>
    </View>

    

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  
    
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    marginBottom: 10,
    alignSelf: 'center',
    marginTop: 20
  },
  title: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center"

  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
    textAlign:"justify",
    fontWeight:'regular', 
    paddingLeft: 30,
    paddingRight: 30,
    
  },
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },

  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    
    width: '40%',
    marginTop: 5,
    marginBottom:30,
    marginLeft: 100,
},

textoTit: {
  color: "#000000",
  fontSize: 15,
  fontWeight: "600",
  marginBottom: 20,
  marginTop: 20,
  textAlign: "center"

},
});

export default AboutScreen;
