import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Alert, Image, SafeAreaView, TextInput, Button } from 'react-native';

import LottieView from 'lottie-react-native';

const ExibirExercicio = () => {
    

    return (
      <View style={styles.container}>
       <LottieView
          source={require('../assets/Animation.json')}
          autoPlay={true}
          Loop={true}
          style={{ width:400, height: 400}}
          resizeMode="cover"
        />
               
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
 
  });
  
  export default ExibirExercicio;