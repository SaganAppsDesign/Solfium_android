import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ToastAndroid, Animated, Keyboard, KeyboardAvoidingView } from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import logo from '../assets/logo.png'; 
import fondo from '../assets/calculos1.jpg'; 
import escanear_recibo from '../assets/click_escaneo_recibo.png'; 
import ubicacion from '../assets/ubicacion.png'; 
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import 'react-native-gesture-handler';
import * as React from 'react';
import calcular from '../assets/calcular3.png'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




export var potenciaEstado, potencia2, potencia
  
export class IngresarConsumo extends React.Component {

 
  state = {

    potenciaEstado: '',
    bool:false
   

  }

  
onChangeText = potenciaEstado => this.setState({ potenciaEstado }, () => {
  if (this.state.potenciaEstado==",") {
    alert("please enter numbers only");
  }
})



render() {

    potencia = this.state.potenciaEstado

    var bool, opacity
    
    if (potencia == ''){
            
          bool=true
          opacity=0.2
    } else {

          bool=false
          opacity=1
    }
    

   
     
      return (

              <ImageOverlay 

                  source={fondo}
                  height={hp('100%')}
                  overlayAlpha={0}
                    
                 >
                
                 <View style={{alignItem:'center', justifyContent:'center', width:wp('100%'), height:hp('100%'), flex:1, flexDirection:'column'}}>              
                      
                      {/* Video */}
                      
                      <View  style={{borderRadius:10, alignItems:'center', flex:0.5, marginTop:hp('5%')}}>
                        <Text 
                            style={{textAlign:'center',  fontSize:hp('1.7%'), width:wp('100%'), height: hp('100%'), 
                                    color: 'black', marginBottom: hp('0%'),  marginLeft: "0%", marginTop:hp('0%'), padding:hp('1%')}} 
                            onPress={() => this.props.navigation.navigate('Video Informativo')}>¿Quieres saber cómo funciona Solfium? Click aquí</Text>
                      </View>      
                      <View style={{alignItem:'center', justifyContent:'center',marginTop:hp('7%') , width:wp('100%'), height:hp('100%'), flex:6, flexDirection:'column'}}>          
                                 
                                 <View  style={{alignItems:'center', flex:1,  justifyContent:'center', opacity:0.7}}>
                                                                 
                                  <TouchableOpacity 
                                                                                            
                                      
                                        > 
                                                                            
                                              <Image 
                                          
                                              source={escanear_recibo}
                                              style={{aspectRatio:1.5,   height:hp('22%')}}
                                              
                                              >    
                                              </Image> 

                                  
                                    
                                   </TouchableOpacity> 

                                   </View>  
                                                                    
                                  <View style={{justifyContent:'center',alignItems:'center', width:wp('100%'), height:hp('15%'), flex:1, marginTop:hp('7%')}}>
                                      <Text style={{ fontSize:hp('2%'), fontWeight:'bold', color: 'grey', textAlign:'center'
                                        }}>O ingresa tu consumo mensual:</Text>
                                                                
                                   </View>     

                                  <View style={{justifyContent:'center', alignItems:'center', width:wp('100%'), height:hp('13%'), flex:1,marginTop:hp('0%')}}>
                            
                                  <TextInput
                                      style={styles.nameInput}
                                      placeholder="MXN"
                                      placeholderTextColor = "#74ECE5"
                                      keyboardType='numeric'
                                      onChangeText={this.onChangeText}
                                      value={this.state.potenciaEstado}
                                      returnKeyType={ 'done' }
                                  
                                      //inlineImageLeft='icono.'
                                      //label="KWh"
                                      //onChangeText={this.onChangeText}
                                      //value={this.state.name}
                                      //mode='outlined'
                                      
                                  />

                                  </View>

                               
                                  <View  style={{alignItems:'center', flex:2,  justifyContent:'center',marginTop:hp('0%'),  opacity:0.5}}>
                                   <TouchableOpacity 
                                                                                                    
                                      //onPress={() => ubicacionMensaje() }
                                        > 
                                                                                                     
                                          <Image 
                                        
                                          source={ubicacion}
                                           style={{ aspectRatio:2.2, height:hp('15%')}}
                                            
                                            >               
                                            </Image> 

                                      
                                  </TouchableOpacity> 

                                  </View>

                                  <View  style={{opacity:opacity, alignItems:'center', flex:1, justifyContent:'center', width:wp('100%'), height:hp('100%'), marginBottom:hp('1%')}}>
                                        <TouchableOpacity 

                                          disabled={bool}
                                                                                                        
                                          onPress={() => this.props.navigation.navigate('Calculando')}
                                           
                                            > 
                                                                                    
                                              <Image 
                                            
                                                source={calcular}
                                                style={{aspectRatio:3.7, height:hp('8%')}}
                                                
                                                >               
                                                </Image> 

                                          
                                      </TouchableOpacity> 

                                 </View>


                                </View> 
           
                
                
                { /* LOGO*/}
        
                <View style={{alignItems:'center', justifyContent:'center',width:wp('100%'), height:hp('100%'), flex:0.1, marginTop:hp('8%')}}>  
                
                <Image 
                  
                  source={logo}
                  style={{aspectRatio:4.5, height:hp('4%'), marginBottom: hp('6%')}}
                  
                  >    
                </Image>  

               </View> 

               {/* header */}              
            {/*Botones*/}     
              <View style={{opacity: 1, alignItems:'center', flex:1,  justifyContent:'center', flexDirection:'row', marginBottom:hp('1%'),marginTop:hp('3%')}}>  
                         
                         <View  style={{alignItems:'center', flex:1,  justifyContent:'center', opacity:0.5}}>
                             <TouchableOpacity 
                                                                                          
                             //onPress={() => this.props.navigation.navigate('Ingresar Consumo')}
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
        
                               
        
                        </View>
                      
                      
                      {/* FIN header */}  

            
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

 
  nameInput: {
    height: hp('7%'),
    marginBottom:hp('2%'),
    width:wp('60%'),
    backgroundColor: '#5B5A58',
    fontSize: hp('3%'),
    fontWeight: 'bold',
    borderRadius: 30,
    textAlign:'center',
    color:'#74ECE5'
    
   

  }
  

});

