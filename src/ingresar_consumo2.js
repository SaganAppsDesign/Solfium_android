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
import Toast from 'react-native-simple-toast';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fire, {db} from '../fire';



export var potenciaEstado, potencia2, potencia
  

const ubicacionMensaje = () => {
  
  Toast.show('Introduce ubicación', Toast.SHORT);

 
};



export class IngresarConsumo extends React.Component {

 
  state = {

    potenciaEstado: ''
   

  }


 

  
  onChangeText = potenciaEstado => this.setState({ potenciaEstado });
  

   

   


render() {

    //console.log('potencia:  ', this.state.potenciaEstado)

    potencia = this.state.potenciaEstado
   
    const escanearRecibo = () => {
    
    Toast.show('Escanear recibo', Toast.SHORT)
    
   
  };
  
    const user = () => {
      
      Toast.show('Perfil usuario', Toast.SHORT);
    
    };
    
    const settings = () => {
      
      Toast.show('Settings', Toast.SHORT);
    
    };


  
return (

              <ImageOverlay 

                  source={fondo}
                  height={hp('100%')}
                  overlayAlpha={0}
                    
                 >
                
                 <View style={{alignItem:'center', justifyContent:'center', width:wp('95%'), height:hp('100%'), flex:1, flexDirection:'column'}}>              
                      <View  style={{borderRadius:10, alignItems:'center', flex:0.5, marginTop:hp('5%')}}>
                        <Text 
                            style={{textAlign:'center',  fontSize:hp('1.7%'), width:wp('100%'), height: hp('100%'), 
                                    color: 'black', marginBottom: hp('0%'),  marginLeft: "0%", marginTop:hp('0%'), padding:hp('1%')}} 
                            onPress={() => this.props.navigation.navigate('Video Informativo')}>¿Quiere saber cómo funciona Solfium App? Click aquí</Text>
                      </View>      
                      <View style={{alignItem:'center', justifyContent:'center',marginTop:hp('10%') , width:wp('100%'), height:hp('100%'), flex:7, flexDirection:'column'}}>          

             
                                 
                                 
                                 
                                 <View  style={{alignItems:'center', flex:1,  justifyContent:'center', opacity:0.7}}>
                                                                 
                                  <TouchableOpacity 
                                                                                            
                                      //onPress={() => escanearRecibo()}
                                        > 
                                                                            
                                              <Image 
                                          
                                              source={escanear_recibo}
                                              style={{aspectRatio:1.5,   height:hp('26%')}}
                                              
                                              >    
                                              </Image> 

                                  
                                    
                                   </TouchableOpacity> 

                                   </View>  
                                                                    
                                  <View style={{justifyContent:'center',alignItems:'center', width:wp('100%'), height:hp('15%'), flex:1, marginTop:hp('8%')}}>
                                      <Text style={{ fontSize:17, fontWeight:'bold', color: 'grey', textAlign:'center'
                                        }}>O ingresa aquí tu consumo en MXN</Text>
                                                                
                                   </View>     

                                  <View style={{justifyContent:'center', alignItems:'center', width:wp('100%'), height:hp('13%'), flex:1,marginTop:hp('0%')}}>
                            
                                  <TextInput
                                      style={styles.nameInput}
                                      placeholder="MXN"
                                      placeholderTextColor = "#74ECE5"
                                      keyboardType='numeric'
                                      onChangeText={this.onChangeText}
                                      value={this.state.potenciaEstado}
                                  
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
                                           style={{ aspectRatio:2.2, height:hp('17%')}}
                                            
                                            >               
                                            </Image> 

                                      
                                  </TouchableOpacity> 

                                  </View>

                                  <View  style={{alignItems:'center', flex:1, justifyContent:'center', width:wp('100%'), height:hp('100%'), marginTop:hp('0.5%')}}>
                                        <TouchableOpacity 
                                                                                                        
                                          onPress={() => this.props.navigation.navigate('Pantalla de espera')}
                                           
                                            > 
                                                                                    
                                              <Image 
                                            
                                                source={calcular}
                                                style={{aspectRatio:3.7, height:hp('7%')}}
                                                
                                                >               
                                                </Image> 

                                          
                                      </TouchableOpacity> 

                                 </View>


                                </View> 
            
           {/*Botones*/}     
            <View style={{alignItems:'center', flex:1,  justifyContent:'center', flexDirection:'row', marginBottom:hp('5%'),marginTop:hp('3%')}}>  
                         
                 <View  style={{alignItems:'center', flex:1,  justifyContent:'center', opacity:0.5}}>
                     <TouchableOpacity 
                                                                                  
                     //onPress={() => this.props.navigation.navigate('Ingresar Consumo')}
                       > 
                                             
                        <Image 
                        
                        source={home}
                        style={{aspectRatio:1, height:hp('9%')}}
                        
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
                       style={{aspectRatio:1, height:hp('9%')}}
                       
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
                       style={{aspectRatio:1, height:hp('9%')}}
                       
                       >    
                       </Image> 

                                     
                   </TouchableOpacity> 

                  </View>

                       

                </View>
                
                
                { /* LOGO*/}
        
                <View style={{alignItems:'center', justifyContent:'center',width:wp('100%'), height:hp('100%'), flex:1}}>  
                
                <Image 
                  
                  source={logo}
                  style={{aspectRatio:4.5, width:wp('100%'), height:hp('5.5%'), marginBottom: hp('6.5%')}}
                  
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

