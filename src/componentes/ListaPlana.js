import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';


const atleta=[
    {
     id:'001',
     caract:['João','80','1.80']
    },
    {
     id:'002',
     caract:['Maria','67','1.65']
    },
    {
     id:'003',
     caract:['Ricardo','90','1.70']
    },
    {
     id:'004',
     caract:['José','72','1.55']
       },
    {
    id:'005',
    caract:['Fernando','58','1.60']
       },  
    {
    id:'006',
    caract:['Lilian','66','1.54']
       },   
    {
    id:'007',
    caract:['Juliana','76','1.81']
       },     
    {
     id:'008',
     caract:['Raimundo','100','1.95']
    },
    {   
    id:'009',
    caract:['Juliana','76','1.81']
    },     
    {
     id:'010',
     caract:['Raimundo','100','1.95']
    },
    {
     id:'011',
     caract:['Raimundo','100','1.95']
     },
    {   
     id:'012',
     caract:['Juliana','76','1.81']
      },     
     {
     id:'013',
     caract:['Raimundo','100','1.95']
      },
      {   
      id:'014',
      caract:['José','100','1.95']
       },   
       {   
        id:'015',
        caract:['Maria','100','1.95']
         }, 
         {   
          id:'016',
          caract:['Antônio','100','1.95']
           },        
   ]

export default function(){

     return (
        
        <SafeAreaView>
            <FlatList
                data={atleta}
                keyExtractor={item=>item.id}
                renderItem={({item})=><View style={estilos.item}><Text style={estilos.carac}>Nome: {item.caract[0]} - Peso: {item.caract[1]} - Altura: {item.caract[2]}</Text></View>}
            />
        </SafeAreaView>
       
    )
}

const estilos = StyleSheet.create({
    item: {
      flex: 1,
      backgroundColor: '#008',
      alignItems: 'center',
      justifyContent: 'center',
      padding:10,
      marginVertical:6,
      margin:15,

    },
    carac:{
      fontSize:16,
      color:'#fff'
    }
  });