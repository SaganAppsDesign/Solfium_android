import * as React from 'react';
import {Fragment} from 'react';
import { StyleSheet, Text, View,  Button, Dimensions} from 'react-native';
import tec3 from '../assets/fondo2.jpg';  
import ImageOverlay from "react-native-image-overlay";
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card } from 'react-native-elements';

var {height} = Dimensions.get('window');



export function QRCodeOk({ navigation }) {
 return (

       
      <ImageOverlay source={tec3}
                    height={height}
                    overlayAlpha={0}                         
                    >


            <View>         
                    <Text style={{color: '#000',
                                    backgroundColor: 'orange',
                                    fontSize: 30,
                                    marginHorizontal: 30,
                                    marginTop: 20,
                                    fontWeight: 'bold',
                                    padding: 10,
                                    textAlign: 'center',
                                    borderRadius:10}} h1>El código QR escaneado es correcto</Text>
                  
              

                   <View style={{marginTop:'25%', marginRight:'5%', marginLeft:'5%', marginBottom:'0%' }}>

                     <View style={{ marginBottom: 20, marginTop: 10}}>

                      <Button title="   Acepto la visita" onPress={() =>  navigation.navigate('Viabilidad Instalación')} 
                              color='orange'                           
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
                        title="   No estoy de acuerdo con la visita"
                        onPress={() => navigation.navigate('Solfium')}
                        color='orange'
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
             
 
        </View>   
       
      </ImageOverlay>
    


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
      flexDirection:'row',
      width: 300,
      height: 250,
      backgroundColor: 'orange',
      borderRadius: 5,
      shadowColor: 'rgba(255,255,0,0.5)',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity:0.5,
      borderWidth:2, 
      borderColor:'black'
    },
   



  fondo: {
    width: '100%'
    
    
  },

});