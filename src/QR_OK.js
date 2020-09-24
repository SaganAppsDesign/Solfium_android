import * as React from 'react';
import { StyleSheet, Text, View,  Button, Dimensions, TouchableOpacity, Image} from 'react-native';
import tec3 from '../assets/fondo2.jpg';  
import ImageOverlay from "react-native-image-overlay";
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fire, {db} from '../fire';
import logo from '../assets/logo.png'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var {height} = Dimensions.get('window');

const confirmadoQR = () =>  db.ref('Usuarios/' +  Fire.getUid()).update({
    
  QR_instalador: 'OK',
      
  })


export function QRCodeOk({ navigation }) {
   
  

 return (

       
      <ImageOverlay source={tec3}
                    height={height}
                    overlayAlpha={0}                         
                    >


            <View style={{alignItems:'center', flex:1 }}> 
            
                      <View style={{ marginTop:hp('4.5%'),alignItems:'center', marginBottom:'0%', flex:3}}> 
                                    <Text style={{color: '#000',
                                    backgroundColor: 'green',
                                    fontSize: hp('4.5%'),
                                    marginHorizontal: wp('9%'),
                                    marginTop:hp('9%'),
                                    fontWeight: 'bold',
                                    padding: hp('1%'),
                                    textAlign: 'center',
                                    borderRadius:10}} h1>El código QR escaneado es correcto</Text>
                  
                      </View>

                   <View style={{marginTop:hp('0%'),  marginBottom:'0%', flex:2 }}>



                     <View style={{marginBottom: '0%', marginTop: '0%', width:wp('100%'), height:hp('30%'), alignItems:'center', alignContent:'center', justifyContent:'center'}}>

                          <TouchableOpacity onPress={
                            () => { navigation.navigate('Escanear QR Instalador'); confirmadoQR()}
                          }
                          >
                               <Text style={styles.buttonOK}>Acepto la visita</Text>

                          
                          </TouchableOpacity>
                     

                          <TouchableOpacity onPress={
                            () => { navigation.navigate('Ingresar Consumo')}
                          }
                          >
                              <Text style={styles. buttonNOoK}>No estoy de acuerdo con la visita</Text>
                          </TouchableOpacity>
                     
                     
                      </View>

                    
     
                   
                      </View>

                      <View >
                  
                </View> 

                { /* LOGO*/}
        
                <View style={{alignItems:'center', justifyContent:'center',width:wp('100%'), height:hp('100%'), flex:2}}>  
                
                <Image 
                  
                  source={logo}
                  style={{aspectRatio:4.5, width:wp('100%'), height:hp('6%')}}
                  
                  >    
                </Image>  

               </View>
             
 
        </View>   
       
      </ImageOverlay>
    


  );
}



const styles = StyleSheet.create({



  buttonOK: {
    
  
    fontSize: hp('3%'),
    marginBottom:hp('4.5%'),
    fontWeight:'bold',
    backgroundColor: 'green',
    width:hp('30%'),
    height:hp('10%'),
    borderRadius: 10,
    textAlign:'center',
    justifyContent:'center',
    alignContent:'center',
    padding:hp('2%')
    
   
  },

  buttonNOoK: {
    
   
    fontSize: hp('3%'),
    marginBottom:hp('4.5%'),
    fontWeight:'bold',
    backgroundColor: 'red',
    width:hp('30%'),
    height:hp('10%'),
    borderRadius: 10,
    textAlign:'center',
    padding:hp('1%')

  },

});