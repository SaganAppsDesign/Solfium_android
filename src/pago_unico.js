import * as React from 'react';
import {Text, View, Image, ImageBackground, TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import tec3 from '../assets/fondo6.jpg'; 
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import logo from '../assets/logo.png'; 
import chat from '../assets/chat.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export class PagoUnico extends React.Component {


 render() {

  
const user = () => {
  ToastAndroid.show("Perfil usuario", ToastAndroid.SHORT);
 
};

const settings = () => {
  ToastAndroid.show("Settings", ToastAndroid.SHORT);
 
};



  return (


    <ImageOverlay 
          source={tec3}
          height={hp('100%')}   
          overlayAlpha={0}                 
          > 
                              
          <View style={{flex:1, width:wp('100%'), height:hp('100%')}}>
                    
           {/* header */}              
           {/*Botones*/}     
           <View style={{backgroundColor:"orange", opacity: 1, alignItems:'center', flex:0.6,  justifyContent:'center', flexDirection:'row', marginBottom:hp('0%'),marginTop:hp('3%')}}>  
                         

                         <View  style={{ textAlign:'center', borderRadius:5, marginLeft:wp('2%'), backgroundColor:'#E36239', alignItems:'center',justifyContent:'center', flex:0.5,  opacity:1}}>
                            <TouchableOpacity 
                                                                                         
                               onPress={() => this.props.navigation.navigate('Pago')}
                              > 
                                                    
                              {/*  <Image 
                               
                               source={home}
                               style={{aspectRatio:1, height:hp('5%')}}
                               
                               >    
                               </Image>  */}

                               <Text style={{color: 'black',
                              
                               fontSize:hp('2.2%'),
                               textAlign:'center',
                               height:hp('3%'),
                               width:wp('100%'),
                               }}>Back</Text>

       
                                             
                           </TouchableOpacity> 
       
                        </View>

                        <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                            <TouchableOpacity 
                                                                                         
                               onPress={() => this.props.navigation.navigate('Ingresar Consumo')}
                              > 
                                                    
                               <Image 
                               
                               source={home}
                               style={{aspectRatio:1, height:hp('5%')}}
                               
                               >    
                               </Image> 
       
                                             
                           </TouchableOpacity> 
       
                        </View>
       
                       <View  style={{alignItems:'center', flex:1,  justifyContent:'center',  opacity:0.5}}>
                           <TouchableOpacity 
                                                                                        
                           //onPress={() => user()}
                             > 
                                                   
                              <Image 
                              
                              source={usuario}
                              style={{aspectRatio:1, height:hp('5%')}}
                              
                              >    
                              </Image> 
       
                                            
                          </TouchableOpacity> 
       
                         </View>
       
       
       
                         <View  style={{alignItems:'center', flex:1,  justifyContent:'center',  opacity:0.5}}>
                         
                         <TouchableOpacity 
                                                                                        
                           //onPress={() => settings()}
                             > 
                                                   
                              <Image 
                              
                              source={setting}
                              style={{aspectRatio:1, height:hp('5%')}}
                              
                              >    
                              </Image> 
       
                                            
                          </TouchableOpacity> 
       
                         </View>

                         <View style={{alignItems:'center', flex:1,  justifyContent:'center'}}>   
                                          
                                          <TouchableOpacity 
                                                                                                      
                                          onPress={() => this.props.navigation.navigate('Chat',  {valor: 5})}
                                          > 
                                          <View>
                                          
                                                  <Image 
                                              
                                                  source={chat}
                                                  style={{aspectRatio:1, height:hp('5%')}}
                                                  
                                                  >    
                                                  </Image> 
                        
                                          </View>
                                      
                                          </TouchableOpacity> 
                        
                                          </View>
       
                              
       
                       </View>
                     
                     
                     {/* FIN header */}  
                      
                  {/*BODY*/}          
                  {/* TOTAL */}     
                                      
                 <View style={{alignItems: 'center', flex: 8, flexDirection:'column', width:wp('100%'), height:hp('100%')}}> 
                    
                    <View style={{alignItems: 'center', flex:1, width:wp('100%'), height:hp('5%'), marginTop:hp('18%'), position: 'absolute' }}>
                            <ImageBackground source={require('../assets/fondo2.jpg')} style={{alignItems:'center', overflow: 'hidden', resizeMode: "cover", width:wp('60%'), height:hp('15%'),  borderRadius: 10}}>
                              <Text style={{
                              color: '#fff',
                              marginTop: hp('5%'),
                              textAlign:'center',
                              height:hp('4%'),
                              fontSize:hp('4%'),
                              }}>PAGO ÚNICO</Text>
                           
                            </ImageBackground>
                     
                    </View>

                    <View style={{alignItems: 'center', flex:2, width:wp('100%'), height:hp('15%') }}>
                    <Image
                        style={{aspectRatio:1, height:hp('20%'), marginTop:hp('5%')}}
                        source={require('../assets/carrito.png')}
                        />
                    </View>

                    <View style={{alignItems: 'center', flex:2,  width:wp('100%'), height:hp('100%')}}>
                     
                        <View style={{alignItems: 'center', flex:1,  width:wp('100%'), height:hp('100%'), marginTop:hp('5%')}}>
                        <TouchableOpacity
                          
                          
                                              
                          >
                          <ImageBackground source={require('../assets/boton_naranja.png')} style={{justifyContent:'center',overflow: 'hidden', resizeMode: "cover", aspectRatio:3, height:hp('6.5%'),   borderRadius: 10}}>
                                  
                                <Text style={{
                                  color: '#fff',
                                  textAlign:'center',
                                  fontWeight:'bold',
                                  fontSize:wp('3.5%'),
                                 }}>Tarjeta de crédito</Text>
                                </ImageBackground>
                          </TouchableOpacity>
                          </View>
                          

                          <View style={{alignItems: 'center', flex:1.5,  width:wp('100%'), height:hp('100%') }}>
                          <TouchableOpacity
                            
                        
                           
                                                
                            >
                            <ImageBackground source={require('../assets/boton_naranja.png')} style={{justifyContent:'center', overflow: 'hidden', resizeMode: "cover", aspectRatio:3, height:hp('6.5%'),  borderRadius: 10}}>
                                    
                                  <Text style={{
                                    color: '#fff',
                                    textAlign:'center',
                                    fontWeight:'bold',
                                    fontSize:wp('3.5%')}}>Transferencia bancaria</Text>
                                  </ImageBackground>
                            </TouchableOpacity>
                            </View>

                            <View style={{backgroundColor: '#5DCB31',borderRadius:50, justifyContent:'center', alignItems:'center', marginTop:hp('0%'), width:hp('28%'), height:hp('100%'), flex:0.5}}>

                              <TouchableOpacity
                                  
                                
                                  onPress={() => this.props.navigation.navigate('Confirmar compra')} 
                                                      
                                  >
              
                                  <Text style={{
                                                              
                                  fontWeight:'bold',
                                  fontSize:hp('3%'),
                                  color: 'white', 
                                  textAlign:'center',
                                  textAlignVertical:'center'}}> PAGAR </Text>
              
                              </TouchableOpacity>
                          </View>


                        </View>

                    </View>

                     
                    </View>
              
            
         
            
                    { /* LOGO*/}

                    <View style={{alignItems:'center', flex:0.2, marginTop:hp('6%')}}>  

                    <Image 
                      
                      source={logo}
                      style={{aspectRatio:4.5, height:hp('6%')}}
                      
                      >    
                    </Image>  

                    </View> 
                    {/*FIN LOGO*/}   
       



    </ImageOverlay> 

  );
}
}


