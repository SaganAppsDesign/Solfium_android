import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ToastAndroid, Animated, Keyboard, KeyboardAvoidingView } from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import logo from '../assets/logo.png'; 
import fondo from '../assets/calculos1.jpg'; 
import escanear_recibo from '../assets/click_escaneo_recibo.png'; 
import siguiente_paso from '../assets/siguiente_paso.png'; 
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import 'react-native-gesture-handler';
import * as React from 'react';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fire, {db} from '../fire';



export var potenciaEstado, potencia2, potencia
  




export class IngresarConsumo extends React.Component {

 
  state = {

    potenciaEstado: ''
   

  }


  
    
  user = () =>  db.ref('Usuarios/' +  Fire.getUid()).update({
     
           potencia: this.state.potenciaEstado
         
    }   
    )

  
  onChangeText = potenciaEstado => this.setState({ potenciaEstado });
  

   

   


render() {

    
   
    const escanearRecibo = () => {
    ToastAndroid.show("Escanear recibo", ToastAndroid.SHORT);
   
  };
  
    const user = () => {
      ToastAndroid.show("Perfil usuario", ToastAndroid.SHORT);
    
    };
    
    const settings = () => {
      ToastAndroid.show("Settings", ToastAndroid.SHORT);
    
    };


  
return (

              <ImageOverlay 

                  source={fondo}
                  height={hp('100%')}
                  overlayAlpha={0}
                    
                 >
                
                 <View style={{alignItem:'center', justifyContent:'center', width:wp('100%'), height:hp('100%'), flex:1, flexDirection:'column'}}>              
                                
                       <View style={{alignItem:'center', justifyContent:'center',marginTop:hp('18%') , width:wp('100%'), height:hp('100%'), flex:7, flexDirection:'column'}}>          

                                 <View  style={{ alignItems:'center', flex:2,  justifyContent:'center'}}>
                                                                 
                                  <TouchableOpacity 
                                                                                            
                                      onPress={() => escanearRecibo()}
                                        > 
                                                                            
                                              <Image 
                                          
                                              source={escanear_recibo}
                                              style={{aspectRatio:1.5,   height:hp('26%')}}
                                              
                                              >    
                                              </Image> 

                                  
                                    
                                   </TouchableOpacity> 

                                   </View>  
                                                                    
                                  <View style={{alignItems:'center', width:wp('100%'), height:hp('15%'), flex:1, marginTop:hp('8%')}}>
                                      <Text style={{ fontSize:17, fontWeight:'bold', color: 'grey', textAlign:'center'
                                        }}>O ingresa aquí tu consumo mensual promedio en KWh</Text>
                                                                
                                  </View>     

                                  <View style={{alignItems:'center', width:wp('100%'), height:hp('15%'), flex:1,marginTop:hp('2%')}}>
                            
                                  <TextInput
                                      style={styles.nameInput}
                                      placeholder="MXN"
                                      keyboardType='numeric'
                                      onChangeText={this.onChangeText}
                                      value={this.state.potencia}
                                  
                                      //inlineImageLeft='icono.'
                                      //label="KWh"
                                      //onChangeText={this.onChangeText}
                                      //value={this.state.name}
                                      //mode='outlined'
                                      
                                  />

                                  </View>

                               
                                  <View  style={{ alignItems:'center', flex:2,  justifyContent:'center',marginTop:hp('5%')}}>
                                   <TouchableOpacity 
                                                                                                    
                                      onPress={() => this.props.navigation.navigate('Confirma ubicación',
                                           this.user()
                                        ) }
                                        > 
                                                                                                     
                                          <Image 
                                        
                                            source={siguiente_paso}
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

