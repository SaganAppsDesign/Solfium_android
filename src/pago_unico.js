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

export class PagoUnico extends React.Component {


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
                                      
                 <View style={{alignItems: 'center', flex: 9, flexDirection:'column', width:wp('100%'), height:hp('100%')}}> 
                    
                    <View style={{alignItems: 'center', flex:1, width:wp('100%'), height:hp('7%'), marginTop:hp('18%'), position: 'absolute' }}>
                            <ImageBackground source={require('../assets/fondo2.jpg')} style={{alignItems:'center', overflow: 'hidden', resizeMode: "cover", width:wp('60%'), height:hp('15%'),  borderRadius: 10}}>
                              <Text style={{
                              color: '#fff',
                              marginTop: hp('5%'),
                              textAlign:'center',
                              height:hp('7%'),
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

                    <View style={{alignItems: 'center', flex:2,  width:wp('100%'), height:hp('100%'), marginTop:hp('5%')}}>
                     
                        <View style={{alignItems: 'center', flex:1,  width:wp('100%'), height:hp('100%'), marginTop:hp('0%')}}>
                        <TouchableOpacity
                          
                          
                                              
                          >
                          <ImageBackground source={require('../assets/boton_naranja.png')} style={{opacity:0.3, justifyContent:'center',overflow: 'hidden', resizeMode: "cover", aspectRatio:3, height:hp('10%'), borderRadius: 10}}>
                                  
                                <Text style={{
                                  color: '#fff',
                                  textAlign:'center',
                                  fontWeight:'bold',
                                  fontSize:wp('6%'),
                                 }}>Tarjeta de crédito</Text>
                                </ImageBackground>
                          </TouchableOpacity>
                          </View>
                          

                          <View style={{alignItems: 'center', flex:2,  width:wp('100%'), height:hp('100%'), marginTop:hp('5%')}}>
                          <TouchableOpacity
                                               
                            >
                            <ImageBackground source={require('../assets/boton_naranja.png')} style={{opacity:0.3, justifyContent:'center', overflow: 'hidden', resizeMode: "cover", aspectRatio:3, height:hp('10%'),  borderRadius: 10}}>
                                    
                                  <Text style={{
                                    color: '#fff',
                                    textAlign:'center',
                                    fontWeight:'bold',
                                    fontSize:wp('5%')}}>Transferencia bancaria</Text>
                                  </ImageBackground>
                            </TouchableOpacity>
                            </View>

                            <View style={{backgroundColor: '#5DCB31',borderRadius:50, justifyContent:'center', alignItems:'center', marginTop:hp('0%'), width:hp('30%'), height:hp('100%'), flex:0.6}}>

                              <TouchableOpacity
                                  
                                
                                  onPress={() => this.props.navigation.navigate('Confirmar compra')} 
                                                      
                                  >
              
                                  <Text style={{
                                                              
                                  fontWeight:'bold',
                                  fontSize:hp('3%'),
                                  color: 'white', 
                                  textAlign:'center',
                                  textAlignVertical:'center'}}>REALIZAR PAGO</Text>
              
                              </TouchableOpacity>
                          </View>


                        </View>

                    </View>

                     
                    </View>
              
            
         
            
                    { /* LOGO*/}

                    <View style={{alignItems:'center', flex:0.025, marginTop:hp('10%')}}>  

                    <Image 
                      
                      source={logo}
                      style={{aspectRatio:4.5, height:hp('6%')}}
                      
                      >    
                    </Image>  

                    </View> 
                    {/*FIN LOGO*/}

           {/* header */}              
           {/*Botones*/}     
           <View style={{opacity: 1, alignItems:'center', flex:0.2,  justifyContent:'center', flexDirection:'row', marginBottom:hp('0%'),marginTop:hp('3%')}}>  
                         

                         <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                            <TouchableOpacity 
                                                                                         
                               onPress={() => this.props.navigation.navigate('Pago')}
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
                                                                                                      
                                          onPress={() => this.props.navigation.navigate('Chat',  {valor: 5})}
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


