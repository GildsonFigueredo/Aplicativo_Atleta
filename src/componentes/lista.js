import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Lp from './componentes/ListaPlana';
import { useFonts } from 'expo-font';


export default function lista() {
    
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Image source={require('./assets/sport2.png')} style={styles.logo}/>
      <Text style={styles.baseText}>Aplicativo Atleta </Text>
      <Text>Relação de Peso (kg) e Altura (m)</Text>
      <Lp></Lp>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  logo:{
    width: 240,
    height:100,
    resizeMode: 'contain',
    marginTop:90,
  },
  baseText:{
    fontSize:25,
    fontWeight:'bold', 
  }
});
