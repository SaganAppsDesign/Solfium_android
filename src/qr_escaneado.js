import * as React from 'react';
import {Fragment} from 'react';
import { StyleSheet, Text, View, Image, Button, Dimensions} from 'react-native';
import tec3 from '../assets/tec3.gif';  
import ImageOverlay from "react-native-image-overlay";
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-elements';

var {height} = Dimensions.get('window');

var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year



export function QREscaneado({ navigation }) {
 
    return (



    <View style={{ flex: 1, marginTop:0}}>
             
                         
                    <View >      

                    <Image
                    style={{width:'70%', height:'75%', marginTop:'20%', marginRight:'1%', marginLeft:'15%', marginBottom:'0%'}}
                    source={require('../assets/foto_escaneo.jpg')}
                    />


                    </View>
                  

                     <View style={{marginBottom: '5%', marginLeft:'10%',marginRight:'10%', marginTop:'0%'}}>

                      <Button 
                      
                      title="  QR ESCANEADO" 
                      color='orange'   
                      onPress={() =>  navigation.navigate('QR correcto')} 
                      icon={    <Icon
                                    name="thumbs-up"
                                    size={25}
                                    color="black"
                                  />
                                }/>
                     
                      </View>

       

                                      

               
    </View>



  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
    
  },

       //header
    box1: {
      flexDirection:'row',
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
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