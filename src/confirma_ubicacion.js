import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ToastAndroid, TextInput, ScrollView, Animated, Keyboard, KeyboardAvoidingView } from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import logo from '../assets/logo.png'; 
import fondo from '../assets/fondo_ubicacion.jpg'; 
import ubicacion from '../assets/ubicacion2.png'; 
import calcular from '../assets/calcular2.png'; 
import escanear_recibo from '../assets/click_escaneo_recibo.png'; 
import siguiente_paso from '../assets/siguiente_paso.png'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button} from 'react-native-elements';
import * as React from 'react';
import Fire, {db} from '../fire';
var {height, width} = Dimensions.get('screen');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
var lat, lon, uri2

//var uid = Fire.getUid()
//console.log('UID: ', uid)

export var potenciaEstado, potenciaUbicacion, potencia

potenciaFuncion = () => db.ref('/Usuarios/' +  Fire.getUid()).on('value', (snapshot) => {
  
  potenciaUbicacion =  snapshot.child("potencia").val()})



const ubicacionMensaje = () => {
  ToastAndroid.show("Introduce ubicación", ToastAndroid.SHORT);
 
};

const user = () => {
  ToastAndroid.show("Perfil usuario", ToastAndroid.SHORT);
 
};

const settings = () => {
  ToastAndroid.show("Settings", ToastAndroid.SHORT);
 
};


export class ConfirmaUbicacion extends React.Component {

  //uri2 = URI.uri

  //console.log('uri_home_screen: ', uri2)



  render() {
    return (


              <ImageOverlay 

                  source={fondo}
                  height={hp('100%')}
                  overlayAlpha={0}
                    
                 >
                
                 <View style={{alignItem:'center', justifyContent:'center', width:wp('100%'), height:hp('100%'), flex:1, flexDirection:'column'}}>              
                                
                       <View style={{alignItem:'center', justifyContent:'center',marginTop:hp('20%') , width:wp('100%'), height:hp('100%'), flex:7, flexDirection:'column'}}>          

                                 <View  style={{ alignItems:'center', flex:2,  justifyContent:'center'}}>
                                                                 
                                  <TouchableOpacity 
                                                                                            
                                      onPress={() => ubicacionMensaje() }
                                        > 
                                                                            
                                              <Image 
                                          
                                              source={ubicacion}
                                              style={{aspectRatio:1,   height:hp('40%')}}
                                              
                                              >    
                                              </Image> 

                                  
                                    
                                   </TouchableOpacity> 

                                   </View>  
                                                                    
                                  <View style={{alignItems:'center', width:wp('100%'), height:hp('15%'), flex:1, marginTop:hp('15%')}}>
                                      <Text style={{ fontSize:17, fontWeight:'bold', color: 'grey', textAlign:'center'
                                        }}>Confirma tu ubicación</Text>
                                                                
                                  </View>     

                                                          
                                  <View  style={{ alignItems:'center', flex:2,  justifyContent:'center'}}>
                                   <TouchableOpacity 
                                                                                                    
                                      onPress={() => this.props.navigation.navigate('Pantalla de espera'
                                        )}
                                        > 
                                                                                
                                          <Image 
                                        
                                            source={calcular}
                                           style={{ aspectRatio:2.2, height:hp('18%')}}
                                            
                                            >               
                                            </Image> 

                                      
                                  </TouchableOpacity> 

                                  </View>


                                </View> 
            
           {/*Botones*/}     
            <View style={{alignItems:'center', flex:1,  justifyContent:'center', flexDirection:'row', marginTop:hp('5%')}}>  
                         
                 <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                     <TouchableOpacity 
                                                                                  
                     onPress={() => this.props.navigation.navigate('Solfium')}
                       > 
                                             
                        <Image 
                        
                        source={home}
                        style={{aspectRatio:1, height:hp('9%')}}
                        
                        >    
                        </Image> 

                                      
                    </TouchableOpacity> 

                 </View>

                <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                    <TouchableOpacity 
                                                                                 
                    onPress={() => user()}
                      > 
                                            
                       <Image 
                       
                       source={usuario}
                       style={{aspectRatio:1, height:hp('9%')}}
                       
                       >    
                       </Image> 

                                     
                   </TouchableOpacity> 

                  </View>

                  <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                  
                  <TouchableOpacity 
                                                                                 
                    onPress={() => settings()}
                      > 
                                            
                       <Image 
                       
                       source={setting}
                       style={{aspectRatio:1, height:hp('9%')}}
                       
                       >    
                       </Image> 

                                     
                   </TouchableOpacity> 

                  </View>

                       

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
        
            /* 
                </ScrollView>
             </KeyboardAvoidingView>
          */
            
  );
  
}
}


const styles = StyleSheet.create({

 
  logo: {
    
    width: "20%",
    height: "50%",
    marginBottom: "10%",
    marginTop: "2%",
    marginLeft: "59%",
    marginRight: "0%"
    
    
  },

  nameInput: {
    height: hp('8%'),
    marginBottom:'0%',
    width:wp('60%'),
    paddingHorizontal: '0%',
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 30,
    paddingLeft: '10%'
   

  }
  

});

