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
import backBtn from '../assets/backBtn.png';

export class Payment extends React.Component {


 render() {


  return (


    <ImageOverlay 
          source={tec3}
          height={hp('100%')}   
          overlayAlpha={0}                 
          > 
                              
          <View style={{flex:1, width:wp('100%'), height:hp('100%')}}>
                    
           
                      
                  {/*BODY*/}          
                  {/* TOTAL */}     
                                      
                 <View style={{alignItems: 'center', flex: 1, flexDirection:'column', width:wp('100%'), height:hp('100%')}}> 
                    
                    <View style={{alignItems: 'center', flex:1, width:wp('100%'), height:hp('5%'), marginTop:hp('23%'), position: 'absolute' }}>
                            <ImageBackground source={require('../assets/fondo2.jpg')} style={{alignItems:'center', overflow: 'hidden', resizeMode: "cover", width:wp('60%'), height:hp('15%'),  borderRadius: 10}}>
                              <Text style={{
                              color: '#fff',
                              marginTop: hp('5%'),
                              textAlign:'center',
                              height:hp('3.5%'),
                              fontSize:hp('3%'),
                              padding:0,
                              
                              }}>Escoge cómo</Text>
                               <Text style={{
                              color: '#fff',
                              marginTop: hp('1%'),
                              textAlign:'center',
                              height:hp('4%'),
                              fontSize:hp('3%'),
                              padding:0,
                              
                              }}>deseas pagar</Text>
                            
                            </ImageBackground>
                     
                    </View>

                    <View style={{alignItems: 'center', flex:2, width:wp('100%'), height:hp('15%') }}>
                    <Image
                        style={{aspectRatio:1, height:hp('20%'), marginTop:hp('10%')}}
                        source={require('../assets/carrito.png')}
                        />
                    </View>

                    <View style={{alignItems: 'center', flex:5,  width:wp('100%'), height:hp('100%'), marginTop:hp('35%')}}>
                     
                    <View style={{alignItems: 'center', flex:1}}>
                        <TouchableOpacity
                          
                          onPress={() => this.props.navigation.navigate('Pago único')} 
                                              
                          >
                          <ImageBackground source={require('../assets/boton_naranja.png')} style={{justifyContent:'center',overflow: 'hidden', resizeMode: "cover", aspectRatio:3, height:hp('10%'),   borderRadius: 10}}>
                                  
                                <Text style={{
                                  color: '#fff',
                                  textAlign:'center',
                                  fontWeight:'bold',
                                  fontSize:wp('6%'),
                                 }}>PAGO ÚNICO</Text>
                                </ImageBackground>
                          </TouchableOpacity>
                          </View>
                          

                          <View style={{alignItems: 'center', flex:1,  width:wp('100%'), height:hp('100%'), marginTop:hp('5%')}}>
                          <TouchableOpacity
                            
                        
                            onPress={() => this.props.navigation.navigate('Financiamiento')} 
                                                
                            >
                            <ImageBackground source={require('../assets/boton_naranja.png')} style={{justifyContent:'center', overflow: 'hidden', resizeMode: "cover", aspectRatio:3, height:hp('10%'),  borderRadius: 10}}>
                                    
                                  <Text style={{
                                    color: '#fff',
                                    textAlign:'center',
                                    fontWeight:'bold',
                                    fontSize:wp('6%')}}>FINANCIAMIENTO</Text>
                                  </ImageBackground>
                            </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                     
                    </View>
              
            
         
            
                    { /* LOGO*/}

                    <View style={{alignItems:'center', flex:0.1, marginTop:hp('15%')}}>  

                    <Image 
                      
                      source={logo}
                      style={{aspectRatio:4.5, height:hp('6%')}}
                      
                      >    
                    </Image> 
                    </View> 
                    {/*FIN LOGO*/}  


            {/* header */}              
           {/*Botones*/}     
           <View style={{alignItems:'center', flex:0.2,  justifyContent:'center', flexDirection:'row', marginBottom:hp('0%'),marginTop:hp('0%')}}>  
                         

                         <View  style={{ alignItems:'center', flex:1,  justifyContent:'center'}}>
                            <TouchableOpacity 
                                                                                         
                               onPress={() => this.props.navigation.navigate('Viabilidad Instalación')}
                              > 
                                                    
                                <Image 
                                
                                source={backBtn}
                                style={{aspectRatio:1, height:hp('6%')}}
                                
                                >    
                                </Image>

       
                                             
                           </TouchableOpacity> 
       
                        </View>

                        <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                            <TouchableOpacity 
                                                                                         
                               onPress={() => this.props.navigation.navigate('Ingresar Consumo')}
                              > 
                                                    
                               <Image 
                               
                               source={home}
                               style={{aspectRatio:1, height:hp('6%')}}
                               
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
                              style={{aspectRatio:1, height:hp('6%')}}
                              
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
                              style={{aspectRatio:1, height:hp('6%')}}
                              
                              >    
                              </Image> 
       
                                            
                          </TouchableOpacity> 
       
                         </View>

                         <View style={{alignItems:'center', flex:1,  justifyContent:'center'}}>   
                                          
                                          <TouchableOpacity 
                                                                                                      
                                          onPress={() => this.props.navigation.navigate('Chat',  {valor: 4})}
                                          > 
                                          <View>
                                          
                                                  <Image 
                                              
                                                  source={chat}
                                                  style={{aspectRatio:1, height:hp('6%')}}
                                                  
                                                  >    
                                                  </Image> 
                        
                                          </View>
                                      
                                          </TouchableOpacity> 
                        
                                          </View>
       
                              
       
                       </View>
                     
                     
                     {/* FIN header */}   

                    
       



    </ImageOverlay> 

  );
}
}


