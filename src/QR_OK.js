import * as React from 'react';
import { StyleSheet, Text, View,  Button, Dimensions, TouchableOpacity, Image} from 'react-native';
import tec3 from '../assets/fondo2.jpg';  
import ImageOverlay from "react-native-image-overlay";
import 'react-native-gesture-handler';
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
            
                      <View style={{backgroundColor:'green', width:wp('80%'), height:hp('100%'), borderRadius:20,marginTop:hp('20%'),alignItems:'center', marginBottom:'0%', flex:2}}> 
                                    <Text style={{color: '#000',
                                    backgroundColor: 'green',
                                    fontSize: hp('3.8%'),
                                    marginHorizontal: wp('5%'),
                                    marginTop:hp('4%'),
                                    fontWeight: 'bold',
                                    padding: hp('1%'),
                                    textAlign: 'center',
                                    height:hp('16%')
                                    }} h1>El código QR escaneado es correcto</Text>
                  
                      </View>

                   <View style={{marginTop:hp('5%'),  marginBottom:'0%', flex:3 }}>



                     <View style={{marginBottom: '0%', marginTop: '0%', width:wp('100%'), height:hp('30%'), alignItems:'center', alignContent:'center', justifyContent:'center'}}>
                        
                          <View style={{backgroundColor:'green', width:wp('70%'), height:hp('100%'), borderRadius:20,marginTop:hp('5%'),alignItems:'center', marginBottom:'0%', flex:2}}> 
                                <TouchableOpacity onPress={
                                  () => { navigation.navigate('Escanear QR Instalador'); confirmadoQR()}
                                }
                                >
                                    <Text style={styles.buttonOK}>Acepto la visita</Text>

                                
                                </TouchableOpacity>
                          </View>

                          <View style={{backgroundColor:'red', width:wp('70%'), height:hp('100%'), borderRadius:20,marginTop:hp('3%'),alignItems:'center', marginBottom:'0%', flex:2}}> 

                          <TouchableOpacity onPress={
                            () => { navigation.navigate('Ingresar Consumo')}
                          }
                          >
                              <Text style={styles. buttonNOoK}>No estoy de acuerdo con la visita</Text>
                          </TouchableOpacity>
                          </View>
                     
                     
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
    marginTop:hp('1%'),
    fontWeight:'bold',
    backgroundColor: 'green',
    width:hp('30%'),
    height:hp('8%'),
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