import React, { useState } from "react";
import { StyleSheet, View, Dimensions, Button, Image, Text} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 18;





//Geolocation.getCurrentPosition(info => console.warn(info));
 export class Mapbox2 extends React.Component{

 
    render() {
  

  
      return (

          

        <View style={styles.container}>

                                  
              <View style={{marginLeft: '0%',  marginTop: '5%', marginBottom: '0%', marginTop: '0%', width:'100%'}}>
                 
              <Text>MAPA</Text>
             
              </View>

              
              <View style={{ marginTop: '0%', marginBottom: '5%'}}>

              {/* <Text style={{ fontSize:30, width:300,  height: 80, borderColor: 'black', borderWidth: 2, 
                      color: 'black', marginTop: "0%",  marginLeft: "8%", marginRight: "8%", marginBottom: "5%", backgroundColor:"white", padding:8
                      }}> {latitud}</Text> */}
     
                    <Button 
                          title="Envío de coordenadas"
                          onPress={() => this.props.navigation.navigate('Solfium', {

                                Latitud: {latitud},
                                Longitud: {longitud},
                          })}
                          
                           />
            </View>
              
        </View>

       
      )
    
    
   
    
    }};
     

    const styles = StyleSheet.create({
      container: {
        
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:'0%',
        marginTop:'0%'
      },
      
      mapStyle: {
        
        width: 420,
        height: '90%',
        marginBottom:'0%',
        marginTop:'5%'
      },
    });