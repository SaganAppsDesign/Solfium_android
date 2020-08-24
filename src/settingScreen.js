import * as React from 'react';
import {Component, Fragment} from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ViewStyle,
  TextStyle,TextInputProps,  Dimensions, ImageBackground, ToastAndroid} from 'react-native';
import tec3 from '../assets/tec3.gif';  
import qr from '../assets/QR.jpg';
import ImageOverlay from "react-native-image-overlay";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Divider from 'react-native-divider';
import styled from "styled-components/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';



var {height, width} = Dimensions.get('window');
const showToast = () => {
  ToastAndroid.show("Escanear QR del instalador", ToastAndroid.LONG);
};

var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year



export function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, marginTop:0}}>
      <Button title="No estoy de acuerdo con la visita" onPress={() => navigation.navigate('Solfium'), showToast()} />
       
      <Button title="Acepto la visita" onPress={() => navigation.navigate('Viabilidad')} />

      <ImageOverlay source={tec3}
                    height={height}>
                    

                   <View style={[styles.box1]}>
                   
                        <Image
                                style={{width:100, height:100, marginBottom:510, marginRight:0, marginLeft:10, marginTop: 20}}
                                source={require('../assets/yoda.jpg')}
                          />
                       
                         <Text style={{color: '#000',
                                backgroundColor: 'white',
                                fontSize: 15,
                                textAlign: 'left',
                                marginTop: 20,
                                marginRight:10,
                                marginLeft:10,
                                height:200,
                                width:250,
                                fontWeight: 'bold',
                                padding: 10,
                                borderRadius:10}}>{year}-{month}-{date} Nombre instalador: 
                                Maestro Yoda
 

                         </Text>

                   </View>

                   <View style={[styles.box2]}>
                   <Button title="Escanear QR" onPress={() => showToast()} />

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
        flex: 1, 
        flexDirection: 'row'
        
    },
    //content
    box2: {
        flex: 1
        
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