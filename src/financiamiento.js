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



const meses = () => {
  ToastAndroid.show("Meses de financiación", ToastAndroid.SHORT);
 
};

  
const user = () => {
  ToastAndroid.show("Perfil usuario", ToastAndroid.SHORT);
 
};

const settings = () => {
  ToastAndroid.show("Settings", ToastAndroid.SHORT);
 
};




export class Financiamiento extends React.Component {


 render() {


  return (


    <ImageOverlay 
          source={tec3}
          height={hp('100%')}   
          overlayAlpha={0}                 
          > 
                              
            <View style={{flex:1, width:wp('100%'), height:hp('100%')}}>
                    
                 {/*Chat*/}
                  <View style={{marginTop:hp('1%'), marginLeft:wp('80%'), flex:1}}>   
                                                
                      <TouchableOpacity 
                                                                                  
                      onPress={() => this.props.navigation.navigate('Chat', {valor:6})}
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
             
                                      
                 <View style={{alignItems: 'center', flex:5, flexDirection:'column', width:wp('100%'), height:hp('100%')}}> 
                    
                    <View style={{alignItems: 'center', flex:1.5, width:wp('100%'), height:hp('5%'), marginTop:hp('13%'), position: 'absolute' }}>
                            <ImageBackground source={require('../assets/fondo2.jpg')} style={{alignItems:'center', overflow: 'hidden', resizeMode: "cover", width:wp('65%'), height:hp('15%'),  borderRadius: 10}}>
                              <Text style={{
                              color: '#fff',
                              marginTop: hp('7%'),
                              textAlign:'center',
                              height:hp('5%'),
                              fontSize:hp('3.5%'),
                             
                              }}>FINANCIAMIENTO</Text>
                          
                            </ImageBackground>
                     
                    </View>

                    <View style={{alignItems: 'center', flex:2, width:wp('100%'), height:hp('15%') }}>
                    <Image
                        style={{aspectRatio:1, height:hp('20%'), marginTop:hp('2%')}}
                        source={require('../assets/carrito.png')}
                        />
                    </View>

                     


                    </View>
 
              </View>
              
              <View style={{backgroundColor:'rgba(0,255,54,0)', alignItems: 'center', flex:1,  width:wp('100%'), height:hp('3%'), marginTop:hp('28%'), marginBottom:hp('3%')}}>
                     <TouchableOpacity

                        disabled={true}      
                        onPress={() =>  meses()} 
                                           
                       >
                       <ImageBackground source={require('../assets/boton_naranja.png')} style={{ justifyContent:'center',overflow: 'hidden', resizeMode: "cover", width:hp('20%'), height:hp('6%'),  borderRadius: 10}}>
                              
                            <Text style={{
                              color: '#fff',
                              textAlign:'center',
                              fontWeight:'bold',
                              fontSize:hp('2%'),
                               }}>24 MESES</Text>
                            </ImageBackground>
                       </TouchableOpacity>
                  
                       </View>

                        <View style={{backgroundColor:'rgba(0,255,54,0)', alignItems: 'center', flex:1,  width:wp('100%'), height:hp('10%'), marginBottom:hp('3%') }}>
                        <TouchableOpacity
                          
                          disabled={true}  
                          onPress={() =>  meses()} 
                                              
                          >
                          <ImageBackground source={require('../assets/boton_naranja.png')} style={{ justifyContent:'center',overflow: 'hidden', resizeMode: "cover", width:hp('20%'), height:hp('6%'),  borderRadius: 10}}>
                                  
                                <Text style={{
                                  color: '#fff',
                                  textAlign:'center',
                                  fontWeight:'bold',
                                  fontSize:hp('2%'),
                                 }}>36 MESES</Text>
                                </ImageBackground>
                          </TouchableOpacity>
                          </View>
                          <View style={{backgroundColor:'rgba(0,255,54,0)', alignItems: 'center', flex:1,  width:wp('100%'), height:hp('10%'), marginBottom:hp('3%') }}>
                          <TouchableOpacity
                            
                            disabled={true}  
                            onPress={() =>  meses()} 
                                                
                            >
                            <ImageBackground source={require('../assets/boton_naranja.png')} style={{ justifyContent:'center',overflow: 'hidden', resizeMode: "cover", width:hp('20%'), height:hp('6%'),  borderRadius: 10}}>
                                    
                                  <Text style={{
                                    color: '#fff',
                                    textAlign:'center',
                                    fontWeight:'bold',
                                    fontSize:hp('2%'),
                                   }}>48 MESES</Text>
                                  </ImageBackground>
                            </TouchableOpacity>
                            </View>
                            <View style={{backgroundColor:'rgba(0,255,54,0)', alignItems: 'center', flex:1,  width:wp('100%'), height:hp('10%') }}>
                            <TouchableOpacity
                              
                              disabled={true}  
                              onPress={() =>  meses()} 
                                                  
                              >
                              <ImageBackground source={require('../assets/boton_naranja.png')} style={{ justifyContent:'center',overflow: 'hidden', resizeMode: "cover", width:hp('20%'), height:hp('6%'),  borderRadius: 10}}>
                                      
                                    <Text style={{
                                      color: '#fff',
                                      textAlign:'center',
                                      fontWeight:'bold',
                                      fontSize:hp('2%'),
                                     }}>60 MESES</Text>
                                    </ImageBackground>
                              </TouchableOpacity>
                              </View>


                              <View style={{backgroundColor: '#5DCB31',borderRadius:50, justifyContent:'center', alignItems:'center', marginTop:hp('3%'), width:hp('25%'), height:hp('100%'), flex:1}}>

                                <TouchableOpacity
                                    
                                  
                                    onPress={() => this.props.navigation.navigate('Confirmar compra')} 
                                                        
                                    >

                                    <Text style={{
                                    
                                    
                                    fontWeight:'bold',
                                    fontSize:25,
                                    color: 'white', 
                                    textAlign:'center',
                                    
                                    
                                    textAlignVertical:'center'}}> PAGAR </Text>

                                </TouchableOpacity>
                                </View>
         
            {/*Botones*/}     
           <View style={{ marginTop:hp('0%'), alignItems:'center', flex:2,  justifyContent:'center', flexDirection:'row'}}>  
                         
           <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
               <TouchableOpacity 
                                                                            
               onPress={() => this.props.navigation.navigate('Ingresar Consumo')}
                 > 
                                       
                  <Image 
                  
                  source={home}
                  style={{aspectRatio:1, height:hp('7%')}}
                  
                  >    
                  </Image> 

                                
              </TouchableOpacity> 

           </View>

          <View  style={{alignItems:'center', flex:1,  justifyContent:'center', opacity:0.5}}>
              <TouchableOpacity 
                                                                           
              //onPress={() => user()}
                > 
                                      
                 <Image 
                 
                 source={usuario}
                 style={{aspectRatio:1, height:hp('7%')}}
                 
                 >    
                 </Image> 

                               
             </TouchableOpacity> 

            </View>

            <View  style={{alignItems:'center', flex:1,  justifyContent:'center', opacity:0.5}}>
            
            <TouchableOpacity 
                                                                           
              //onPress={() => settings()}
                > 
                                      
                 <Image 
                 
                 source={setting}
                 style={{aspectRatio:1, height:hp('7%')}}
                 
                 >    
                 </Image> 

                               
             </TouchableOpacity> 

            </View>

                 

          </View>
          
          
          { /* LOGO*/}
  
          <View style={{alignItems:'center', width:wp('100%'), height:hp('100%'), flex:3}}>  
          
          <Image 
            
            source={logo}
            style={{aspectRatio:4.5, height:hp('4%')}}
            
            >    
          </Image>  

         </View> 
       



    </ImageOverlay> 

  );
}
}


