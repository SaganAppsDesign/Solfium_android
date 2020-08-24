import * as React from 'react';
import {Component, Fragment} from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ViewStyle,
  TextStyle,TextInputProps,  Dimensions, ImageBackground} from 'react-native';
import tec1 from '../assets/tec1.gif';  
import ImageOverlay from "react-native-image-overlay";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Divider from 'react-native-divider';
import styled from "styled-components/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';


var {height, width} = Dimensions.get('window');


export function ViabilidadInstalacion({ navigation }) {
  return (
    <View style={{ flex: 1, marginTop:0}}>
      <Button title="Rechazo la oferta" onPress={() => navigation.navigate('Solfium')} />
        
      <Button title="Acepto la oferta" onPress={() => navigation.navigate('Proceso de pago')} />

      <ImageOverlay source={tec1}
                    height={height}
                     
                    >

                   <View style={{ flex: 1}}>
                   
                        
                        <Text style={{color: '#000',
                                backgroundColor: 'green',
                                fontSize: 20,
                                marginHorizontal: 15,
                                marginTop: 50,
                                fontWeight: 'bold',
                                padding: 10}}>¡Felicidades! Se puede realizar en su hogar el 100% de la instalación </Text>

                        <Text style={{color: '#000',
                                backgroundColor: 'orange',
                                fontSize: 20,
                                marginHorizontal: 15,
                                marginTop: 50,
                                fontWeight: 'bold',
                                padding: 10}}>Según las condiciones de su hogar, podemos realizar el 45% de la instalación </Text>


                        <Text style={{color: '#000',
                                backgroundColor: 'red',
                                fontSize: 20,
                                marginHorizontal: 15,
                                marginTop: 50,
                                fontWeight: 'bold',
                                padding: 10}}>Lo sentimos, no se puede realizar la instalación </Text>


                   </View>
       
      </ImageOverlay>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'column',
    
  },

       //header
    box1: {
        flex: 5
        
    },
    //content
    box2: {
        flex: 15
        
    },
    //footer
    box3: {
        flex: 15
        
    },

  logo: {
    
    width: "40%",
    height: "50%",
    marginBottom: "10%",
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "20%"
    
    
  },

  boton: {
    
    
     height: 40, 
     borderColor: 'white', 
     borderWidth: 2, 
     color: 'white', 
     marginBottom: 800, 
     marginLeft: 50, 
     marginRight: 50,
     alignItems: "center",
     padding: 10, 
     backgroundColor: '#F7D358'
    
    
  },


  texto: {
    color: '#fff',
    fontSize: 30,
    marginHorizontal: 15,
    marginBottom: 30,
    fontWeight: 'bold'
    
    
  },
  texto2: {
    color: '#B3B6B7',
    backgroundColor: '#fff',
    fontSize: 30,
    marginHorizontal: 15,
    marginTop: 30,
    fontWeight: 'bold'
   
    
  },
  texto3: {
    color: '#fff',
    fontSize: 25,
    marginHorizontal: 15,
    marginTop: 30,
    fontWeight: 'bold'
    
  },

  fondo: {
    width: '100%'
    
    
  },

});