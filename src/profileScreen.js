import * as React from 'react';
import {Component, Fragment} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ViewStyle,
  TextStyle,TextInputProps,  Dimensions, ImageBackground, ScrollView} from 'react-native';
import tec1 from '../assets/tec1.gif'; 
import ImageOverlay from "react-native-image-overlay";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from "styled-components/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';



var {height, width} = Dimensions.get('window');



export function ProfileScreen({ route, navigation }) {

 const { costeInstalacion } = route.params;
 const { ahorroOferta } = route.params;

  return (

 
    <View style={{ flex: 1, marginTop:0}}>

     
       <ImageOverlay source={tec1} height={height}>

                  <ScrollView>    
                     <View style={{ flex: 1,  marginTop:30}}>
                       <Text style={{color: '#000',
                                    backgroundColor: '#fff',
                                    fontSize: 13,
                                    marginHorizontal: 15,
                                    marginTop: 0,
                                    fontWeight: 'bold',
                                    padding: 10,
                                    textAlign: 'center',
                                    borderRadius:0
                                  }} >Costes de instalación</Text>
                       <Text style={{color: '#000',
                                    backgroundColor: 'orange',
                                    fontSize: 15,
                                    marginHorizontal: 15,
                                    marginTop: 10,
                                    fontWeight: 'bold',
                                    padding: 10,
                                    textAlign: 'center',
                                    borderRadius:15}} >El coste total de la instalación será de {JSON.stringify(costeInstalacion)} $, impuestos incluidos</Text>

                      <Text style={{color: '#000',
                                    backgroundColor: '#fff',
                                    fontSize: 13,
                                    marginHorizontal: 15,
                                    marginTop: 10,
                                    fontWeight: 'bold',
                                    padding: 10,
                                    textAlign: 'center',
                                    borderRadius:0
                                  }} >Mensualidades</Text>
                       <Text style={{color: '#000',
                                    backgroundColor: 'orange',
                                    fontSize: 15,
                                    marginHorizontal: 15,
                                    marginTop: 10,
                                    fontWeight: 'bold',
                                    padding: 10,
                                    textAlign: 'center',
                                    borderRadius:15}} >La mensualidad correspondiente para 12 meses es de 458,33 $</Text>

                       <Text style={{color: '#000',
                                    backgroundColor: '#fff',
                                    fontSize: 13,
                                    marginHorizontal: 15,
                                    marginTop: 10,
                                    fontWeight: 'bold',
                                    padding: 10,
                                    textAlign: 'center',
                                    borderRadius:0
                                  }} h1>Tiempo de amortización</Text>
                       <Text style={{color: '#000',
                                    backgroundColor: 'green',
                                    fontSize: 15,
                                    marginHorizontal: 15,
                                    marginTop: 10,
                                    fontWeight: 'bold',
                                    padding: 10,
                                    textAlign: 'center',
                                    borderRadius:15}} h1>Pasados 12 meses como cliente de Solfium, usted empezará a sentir la amortización de su inversión</Text>

                        <Text style={{color: '#000',
                                    backgroundColor: '#fff',
                                    fontSize: 13,
                                    marginHorizontal: 15,
                                    marginTop: 10,
                                    fontWeight: 'bold',
                                    padding: 10,
                                    textAlign: 'center',
                                    borderRadius:0
                                  }} h1>Huella de carbono</Text>

                       <Text style={{color: '#000',
                                    backgroundColor: 'green',
                                    fontSize: 15,
                                    marginHorizontal: 15,
                                    marginTop: 10,
                                    fontWeight: 'bold',
                                    padding: 10,
                                    textAlign: 'center',
                                    borderRadius:15}} h1>En 12 meses como cliente de Solfium, su huella de carbono se habrá disminuido en 70 Kg/año</Text>
       
                     </View>

                </ScrollView>


                 <View style={{ marginBottom: 90, }}>

                     <View style={{ marginBottom: 10, marginTop: 10}}>

                      <Button title="  Tengo interés en la oferta" style={{ marginTop: 0}} 
                              onPress={() => navigation.navigate('Instalación')} 
                              
                              icon={
                                  <Icon
                                    name="thumbs-up"
                                    size={25}
                                    color="black"
                                  />
                                }/>
                     
                      </View>

                     <View >
     
                      <Button 
                        title="   No tengo interés en la oferta"
                        onPress={() => navigation.navigate('Solfium')}
                   
                        icon={
                                  <Icon
                                    name="arrow-circle-left"
                                    size={25}
                                    color="black"
                                  />
                                }
                        
                      />
                      
                      </View>
                  
                </View> 


        </ImageOverlay>



         
    </View>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
    
    
  },

  button: {
      backgroundColor: '#F7D358',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 15

   },

       //header
    box1: {
        flex: 1,
        alignItems: 'center'
        
    },
    //content
    box2: {
        flex: 15
        
    },
    //footer
    box3: {
        flex: 15
        
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
    fontSize: 15,
    marginHorizontal: 15,
    marginTop: 30,
    fontWeight: 'bold'
    
  },

  fondo: {
    width: '100%'
    
    
  },

});