import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Alert, Image, SafeAreaView, TextInput, Button } from 'react-native';

const handleCalcular = (altura,peso) => {
  const alt = parseFloat(altura)/100;
  const p = parseFloat(peso);

  const imc = p / (alt * alt);
  
  alert ('seu IMC é: ' + imc.toFixed(2));
};

const CalculoIMC = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    return (
      <View style={styles.container}>
          <Text style={{padding: 10, fontSize: 24}}>
         Cálculo do IMC
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a altura em cm"
          keyboardType="number-pad"
          onChangeText={newText => setAltura(newText)}
          defaultValue={altura}
        />

       <TextInput
          style={styles.input}
          placeholder="Digite o Peso"
          keyboardType="number-pad"
          onChangeText={newText => setPeso(newText)}
          defaultValue={peso}
        />

        <Button color="#000080" style={styles.botao} title='CALCULAR' onPress={()=> handleCalcular(altura,peso)}></Button>
        
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    input:{
        height:54,
        width:"80%",
        backgroundColor: "#fff",
        borderRadius:8,
        justifyContent: "center",
        paddingHorizontal:16,
        marginTop:7,
        borderWidth:1,
        borderColor: "#000",
        marginBottom:12,
       },
       
 
  });
  
  export default CalculoIMC;