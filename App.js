import * as React from 'react';
import { View, Text, Image, Button, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lp from './src/componentes/ListaPlana';
import IMC from './src/componentes/CalculoIMC';
import Anima from './src/componentes/ExibirExercicio';




const Separator = () => <View style={styles.separator} />;

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>      
      <Image source={require('./assets/sport2.png')} />      
      <Text style={styles.baseText}>Aplicativo Atleta</Text>
      <Separator />
      <Button color="#000080" accessibilityLabel="Learn more about this purple button" style={styles.botao} title='LISTA' onPress={() => navigation.navigate('Lista')}></Button>
      <Separator />
      <Button color="#000080" style={styles.botao} title='CALCULAR O IMC' onPress={()=> navigation.navigate('Calcular')}></Button>
      <Separator />
      <Button color="#000080" style={styles.botao} title='EXIBIR EXERCÍCIO' onPress={()=> navigation.navigate('Exercicio')}></Button>
      <StatusBar style="auto" />   
    </View>
  );
}

function Lista() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      
       <Text style={{marginTop:70, fontSize:16}}>Relação de Peso (kg) e Altura (m)</Text> 
       <Lp></Lp>       
    </View>
  );
}

function CalcularIMC() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <IMC></IMC>
    </View>
  );
}

function Exercicio() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Anima></Anima>  
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lista" component={Lista} />
        <Stack.Screen name="Calcular" component={CalcularIMC} />
        <Stack.Screen name="Exercicio" component={Exercicio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText:{
    fontSize:25,
    fontWeight:'bold', 
  },
  botao:{
    width:50,
    padding:50,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
