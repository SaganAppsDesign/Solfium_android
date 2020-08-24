import * as React from 'react';
import {Component, Fragment} from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ViewStyle,
  TextStyle,TextInputProps,  Dimensions, ImageBackground, ToastAndroid} from 'react-native';
import chat2 from '../assets/chat.jpg'; 
import tec2 from '../assets/tec2.gif';  
import ImageOverlay from "react-native-image-overlay";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Divider from 'react-native-divider';
import styled from "styled-components/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';


var {height, width} = Dimensions.get('window');
const showToast = () => {
  ToastAndroid.show("Envío de email a Solfium. ¡¡Le seguimos esperando!!", ToastAndroid.LONG);
};



export function NotificationsScreen({ navigation }) {


  return (
    <View style={{ flex: 1, marginTop:0}}>
      
      <Button
        title="No tengo interés"
        onPress={() => navigation.navigate('Solfium')}
      />
      <Button title="Prefiero pensarlo" onPress={() => showToast()} />

      <ImageOverlay source={tec2}
                     height={height}
                                        >
                     
               <View style={[styles.box1]}> 

              
                    <Text style={{color: '#F7D358',
                                fontSize: 25,
                                marginHorizontal: 15,
                                marginTop:10,
                                marginBottom: "3%",
                                fontWeight: 'bold'}}>Contacte con el personal de evaluación in situ... </Text>

                    <Text style={{color: '#fff',
                    fontSize: 18,
                    marginHorizontal: 15,
                    marginTop:10,
                    marginBottom: "1%",
                    fontWeight: 'bold'}}>Introduzca sus datos de contacto (opcional): </Text>
               
                    <Text style={{ fontSize:15, width:300,  height: 45, borderColor: 'black', borderWidth: 2, 
                      color: 'black', marginTop: "3%",  marginLeft: "8%", marginRight: "8%", backgroundColor:"white", padding:8
                      }}>Nombre</Text>

                    <Text style={{ fontSize:15, width:300,  height: 45, borderColor: 'black', borderWidth: 2, 
                      color: 'black', marginTop: "1%",  marginLeft: "8%", marginRight: "8%", backgroundColor:"white", padding:8
                      }}>Número de celular</Text>

                    <Text style={{color: '#fff',
                    fontSize: 18,
                    marginHorizontal: 15,
                    marginTop:10,
                    marginBottom: "1%",
                    fontWeight: 'bold'}}>Comience chat con nuestro personal de evaluación: </Text>
                    
                    
                    <TouchableOpacity 
                     
                      onPress={()=> navigation.navigate('Escaneado QR')}>
                      <Image
                              style={{width:250, height:200, marginTop: 5, marginBottom: 300}}
                              source={chat2}/>
                                
                    </TouchableOpacity>
                                                                      
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
        flex: 2,
        alignItems: 'center'
        
    },
    //content
    box2: {
        flex: 15,
        alignItems: 'center'
        
    },
    //footer
    box3: {
        flex: 15,
        alignItems: 'center'
        
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