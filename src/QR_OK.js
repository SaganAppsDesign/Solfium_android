import * as React from 'react';
import { StyleSheet, Text, View,  Button, Dimensions, TouchableOpacity, Image} from 'react-native';
import fondo from '../assets/fondo4.jpg';  
import ImageOverlay from "react-native-image-overlay";
import 'react-native-gesture-handler';
import Fire, {db} from '../fire';
import logo from '../assets/logo.png';
import qr_scan from '../assets/qr_scan.png';  
import acepto_visita from '../assets/acepto_visita.png';  
import no_acuerdo from '../assets/no_acuerdo.png';  

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var {height} = Dimensions.get('window');

const confirmadoQR = () =>  db.ref('Usuarios/' +  Fire.getUid()).update({
    
  QR_instalador: 'OK',
      
  })


export function QRCodeOk({ navigation }) {
   
  

 return (

       
      <ImageOverlay source={fondo}
                    height={height}
                    overlayAlpha={0}                         
                    >


            <View style={{alignItems:'center', flex:1 }}> 
            
            <View  style={{alignItems:'center', flex:3,  justifyContent:'center', opacity:1}}>
                                                                 
                 
                                                            
                              <Image 
                          
                              source={qr_scan}
                              style={{aspectRatio:1.8,   height:hp('20%')}}
                              
                              >    
                              </Image> 

                  
                    
             
                  </View>  

                   <View style={{marginTop:hp('0%'),  marginBottom:'0%', flex:3.5 }}>



                     <View style={{marginBottom: '0%', marginTop: '0%', width:wp('100%'), height:hp('30%'), alignItems:'center', alignContent:'center', justifyContent:'center'}}>
                        
                          <View style={{width:wp('100%'), height:hp('100%'),marginTop:hp('0%'),alignItems:'center', marginBottom:'0%', flex:2}}> 
                                <TouchableOpacity onPress={
                                  () => { navigation.navigate('Escanear QR Instalador'); confirmadoQR()}
                                }
                                >
                                     <Image 
                          
                                        source={acepto_visita}
                                        style={{aspectRatio:4,   height:hp('8%')}}
                                        
                                        >    
                                    </Image> 

                                
                                </TouchableOpacity>
                          </View>

                          <View style={{width:wp('100%'), height:hp('100%'),marginTop:hp('0%'),alignItems:'center', marginBottom:'0%', flex:3}}> 
                                <TouchableOpacity onPress={
                                  () => { navigation.navigate('Ingresar Consumo')}
                                }
                                >
                                     <Image 
                          
                                        source={no_acuerdo}
                                        style={{aspectRatio:4,   height:hp('8%')}}
                                        
                                        >    
                                    </Image> 

                                
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