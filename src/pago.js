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

export class Payment extends React.Component {


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
                    
                 {/*Chat*/}
                  <View style={{marginTop:hp('5%'), marginLeft:wp('80%'), flex:0.1}}>   
                                                
                      <TouchableOpacity 
                                                                                  
                      onPress={() => this.props.navigation.navigate('Chat')}
                      > 
                      <View>
                      
                              <Image 
                          
                              source={chat}
                              style={{aspectRatio:1, height:hp('8%')}}
                              
                              >    
                              </Image> 

                      </View>
                  
                      </TouchableOpacity> 

                  </View>
                      
                  {/*BODY*/}          
             
                                      
                 <View style={{alignItems: 'center', flex: 1, flexDirection:'column', width:wp('100%'), height:hp('100%')}}> 
                    
                    <View style={{ alignItems: 'center', flex:1.5, width:wp('100%'), height:hp('5%'), marginTop:hp('18%'), position: 'absolute' }}>
                            <ImageBackground source={require('../assets/fondo2.jpg')} style={{alignItems:'center', overflow: 'hidden', resizeMode: "cover", width:wp('60%'), height:hp('15%'),  borderRadius: 10}}>
                              <Text style={{
                              color: '#fff',
                              marginTop: hp('5%'),
                              textAlign:'center',
                              height:hp('4%'),
                              fontSize:20,
                              }}>Total a pagar:</Text>
                            <Text style={{
                              color: '#fff',
                              textAlign:'center',
                              fontWeight:'bold',
                              height:'30%',
                              width:'100%',
                              fontSize:25,
                              }}>$24,000.00</Text>
                            </ImageBackground>
                     
                    </View>

                    <View style={{alignItems: 'center', flex:2, width:wp('100%'), height:hp('15%') }}>
                    <Image
                        style={{aspectRatio:1, height:hp('20%'), marginTop:hp('5%')}}
                        source={require('../assets/carrito.png')}
                        />
                    </View>

                     <View style={{backgroundColor:'rgba(0,255,54,0)', alignItems: 'center', flex:1,  width:wp('100%'), height:hp('5%'), marginTop:hp('20%')}}>
                     <TouchableOpacity
                       
                       onPress={() => this.props.navigation.navigate('Pago único')} 
                                           
                       >
                       <ImageBackground source={require('../assets/boton_naranja.png')} style={{overflow: 'hidden', resizeMode: "cover", width:hp('30%'), height:hp('8%'),  borderRadius: 10}}>
                              
                            <Text style={{
                              color: '#fff',
                              marginTop: '7%',
                              textAlign:'center',
                              fontWeight:'bold',
                              marginRight:'0%',
                              marginLeft:'0%',
                              height:'100%',
                              width:'100%',
                              fontSize:15,
                              padding: 0}}>PAGO ÚNICO</Text>
                            </ImageBackground>
                       </TouchableOpacity>
                  
                       </View>

                      <View style={{backgroundColor:'rgba(0,255,54,0)', alignItems: 'center', flex:1,  width:wp('100%'), height:hp('5%') }}>
                        <TouchableOpacity
                          
                      
                          onPress={() => this.props.navigation.navigate('Financiamiento')} 
                                              
                          >
                          <ImageBackground source={require('../assets/boton_naranja.png')} style={{overflow: 'hidden', resizeMode: "cover", width:hp('30%'), height:hp('8%'),  borderRadius: 10}}>
                                  
                                <Text style={{
                                  color: '#fff',
                                  marginTop: '7%',
                                  textAlign:'center',
                                  fontWeight:'bold',
                                  marginRight:'0%',
                                  marginLeft:'0%',
                                  height:'100%',
                                  width:'100%',
                                  fontSize:15,
                                  padding: 0}}>FINANCIAMIENTO</Text>
                                </ImageBackground>
                          </TouchableOpacity>
                          </View>

                    </View>

                     
                    </View>
              
            
         
            {/*Botones*/}     
           <View style={{ marginTop:hp('8%'), alignItems:'center', flex:0.1,  justifyContent:'center', flexDirection:'row'}}>  
                         
           <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
               <TouchableOpacity 
                                                                            
               onPress={() => this.props.navigation.navigate('Ingresar Consumo')}
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
  
          <View style={{alignItems:'center', justifyContent:'center',width:wp('100%'), height:hp('100%'), flex:0.3}}>  
          
          <Image 
            
            source={logo}
            style={{aspectRatio:4.5, width:wp('100%'), height:hp('6%')}}
            
            >    
          </Image>  

         </View> 
       



    </ImageOverlay> 

  );
}
}


