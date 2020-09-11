import * as React from 'react';
import {Text, View, Dimensions, ScrollView, Image, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Card} from 'react-native-elements';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../assets/fondo3.jpg'; 
import fondo2 from '../assets/fondo2.jpg';   
import fondo6 from '../assets/fondo6.jpg'; 
import calculos from '../assets/calculos_finales.png';  
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import logo from '../assets/logo.png'; 
import chat from '../assets/chat.png';
import carrito from "../assets/carrito.svg"
import verResultado from '../assets/verResultado.png'; 




var {height} = Dimensions.get('window');
var {width} = Dimensions.get('window');



export class PantallaEspera extends React.Component {


 render() {


  return (


    <ImageOverlay 
          source={fondo}
          height={height}  
          overlayAlpha={0}                 
          > 
                              
        <View style={{flex:1,  marginTop:'0%', marginBottom:'0%', width:'100%', height:'100%'}}>
                                                        
                          
                <View style={{alignItems: 'center', flexDirection:'column', marginBottom:'0%', marginTop: '0%', flex:14, width:'100%', height:'100%'}}>
                      
                    <View style={{marginTop: '50%', alignItems: 'center', flex:3, width:'100%', height:'100%'}}>
                          <Image
                              style={{width:'30%', height:'100%',marginTop: '0%'}}
                              source={require('../assets/loader.gif')}
                              />
                    </View>
              
                    <View style={{flex:2}}>
                        <Text style={{color: '#fff',
                            
                            marginTop: '10%',
                            marginLeft:'35%',
                            height:'100%',
                            width:'100%',
                            padding: 0,
                            fontWeight:'bold',
                            marginBottom:'100%', 
                            fontSize: 20
                            }}>

                            Ver resultado

                        </Text>
                       
                    </View>
                 
                    <View style={{marginTop:'0%', marginBottom:'0%',
                    marginLeft:'0%', marginRight:'0%', width:'0%', flex:2,width:'100%', height:'100%'}}>
                        
                                <TouchableOpacity 
                                                                        
                                    onPress={() => this.props.navigation.navigate('Cálculos')}
                                    >
                                            <Image 
                                            
                                            source={verResultado}
                                            style={{
                                            width:'12%', height:'77%', marginLeft:'70%'}}
                                            
                                            >    
                                            </Image> 
                                </TouchableOpacity>
                    
                    </View>
       
    </View>
                
                 



            {/*Botones*/}     
            <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'3%', marginRight:'0%', width:'30%', height:'10%', flex:3, flexDirection:'row'}}>  
              {/*HOME*/}         
                <TouchableOpacity 
                                                                            
                onPress={() => this.props.navigation.navigate('Solfium')}
                  > 
                  <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'10%', marginRight:'50%', width:'100%', height:'100%'}}>
                
                          <Image 
                          
                          source={home}
                          style={{marginTop:'5%', marginBottom:'0%', marginLeft:'0%', marginRight:'52%', width:'58%', height:'75%'}}
                          
                          >    
                          </Image> 

                </View>
              
              </TouchableOpacity> 
           {/*USUARIO*/}     
              <TouchableOpacity 
                                                                            
              onPress={() => this.props.navigation.navigate('Solfium')            
                }> 
                <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'10%', marginRight:'50%', width:'100%', height:'100%'}}>
                
                      <Image 
                      
                      source={usuario}
                      style={{marginTop:'5%', marginBottom:'0%', marginLeft:'0%', marginRight:'52%', width:'58%', height:'75%'}}
                      
                      >    
                      </Image> 

              </View>
              
              </TouchableOpacity> 
         
          {/*SETTING*/}     
              <TouchableOpacity 
                                                                            
              onPress={() => this.props.navigation.navigate('Solfium')}
                > 
              
                <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'10%', marginRight:'50%', width:'100%', height:'100%'}}>
                          
                <Image 
                
                source={setting}
                style={{marginTop:'5%', marginBottom:'0%', marginLeft:'0%', marginRight:'52%', width:'58%', height:'75%'}}
                
                >    
                </Image> 

              </View>
            
            </TouchableOpacity> 

       </View> 

      {/*logo*/}  

       <View style={{alignItems:'center',  marginTop:'0%', marginBottom:'2%', marginLeft:'0%', marginRight:'0%', width:'100%', height:'100%', flex:2}}>  
                
           <Image 
             
             source={logo}
             style={{alignItems:'center', marginTop:'0%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%', width:'42%', height:'55%'}}
             
             >    
            </Image>  

        </View> 

       
       </View>


    </ImageOverlay> 

  );
}
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    height:'100%',
        
  },

  logo: {
    
    width: "20%",
    height: "50%",
    marginBottom: "10%",
    marginTop: "2%",
    marginLeft: "59%",
    marginRight: "0%"
    
    
  },

  boton: {
        
     height: '55%', 
     width:'100%',
     borderRadius:20,
     fontWeight:'bold',
     fontSize:15,
     color: 'white', 
     marginBottom: "0%", 
     marginTop: "0%", 
     marginLeft: "0%", 
     marginRight: "0%",
     alignItems: "center",
     paddingLeft:40, 
     paddingRight:40,
     backgroundColor: '#5DCB31',
     textAlignVertical:'center'
    
    
  },

  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },



 



  

});