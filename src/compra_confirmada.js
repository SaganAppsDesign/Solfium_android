import * as React from 'react';
import {Text, View, Dimensions, ScrollView, Image, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Card} from 'react-native-elements';
import ImageOverlay from "react-native-image-overlay";
import tec3 from '../assets/fondo6.jpg'; 
import fondo2 from '../assets/fondo2.jpg';   
import fondo6 from '../assets/fondo6.jpg'; 
import calculos from '../assets/calculos_finales.png';  
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import logo from '../assets/logo.png'; 
import chat from '../assets/chat.png';
import carrito from "../assets/carrito.svg"




var {height} = Dimensions.get('window');
var {width} = Dimensions.get('window');



export class CompraConfirmada extends React.Component {


 render() {


  return (


    <ImageOverlay 
          source={tec3}
          height={height}  
          overlayAlpha={0}                 
          > 
                              
        <View style={{flex:1,  marginTop:'0%', marginBottom:'0%', width:'100%', height:'100%'}}>
                    
                  <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'80%', flex:2, width:'100%', height:'100%', justifyContent:'center'}}>   
                                    
                        <TouchableOpacity 
                                                                                    
                        onPress={() => this.props.navigation.navigate('Chat')}
                        > 
                            <Image 
                            
                                source={chat}
                                style={{width:'13%', height:'80%'}}
                                
                                >    
                                </Image> 
                   
                        </TouchableOpacity> 

                </View>
                      
                          
                <View style={{ alignItems: 'center', flexDirection:'column', marginBottom:'0%', marginTop: '0%', flex:11, width:'100%', height:'100%'}}>
                
                
                  <View style={{ alignItems: 'center', flexDirection:'column', flex:1,  width:'100%', height:'100%', margiTop:'0%'}}>
                   
                    <View style={{alignItems: 'center', flex:3, width:'100%', height:'100%'}}>
                          <Image
                              style={{width:'30%', height:'100%', marginLeft:'0%', marginTop: '0%'}}
                              source={require('../assets/carrito.png')}
                              />
                    </View>
                    

                    <View style={{alignItems: 'center', flex:10, flexDirection:'column', width:'100%', height:'100%'}}>     
                    <Card containerStyle={{backgroundColor:'rgba(0,0,0,1)',  marginTop: '0%', borderRadius: 10, 
                          width:'65%', height:'35%', marginBottom:'0%', padding:0}}>

                        <ImageBackground style={{backgroundColor:'#4EBD20', overflow: 'hidden', resizeMode: "cover", width:'100%', height:'100%',  borderRadius: 10}}>
                          <Text style={{
                             
                          color: '#fff',
                          marginTop: '15%',
                          textAlign:'center',
                          fontWeight:'bold',
                          marginRight:'0%',
                          marginLeft:'0%',
                          height:'30%',
                          width:'100%',
                          fontSize:20,
                          padding: 0}}>COMPRA CONFIRMADA</Text>
                        
                        </ImageBackground>
                      
                    </Card>
                    </View>
                   </View>
                 </View>
                
                 



            {/*Botones*/}     
            <View style={{marginTop:'0%', marginBottom:'2%', marginLeft:'3%', marginRight:'0%', width:'30%', height:'10%', flex:3, flexDirection:'row'}}>  
              {/*HOME*/}         
                <TouchableOpacity 
                                                                            
                onPress={() => this.props.navigation.navigate('Solfium')}
                  > 
                  <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'10%', marginRight:'50%', width:'100%', height:'100%'}}>
                
                          <Image 
                          
                          source={home}
                          style={{marginTop:'5%', marginBottom:'0%', marginLeft:'0%', marginRight:'52%', width:'57%', height:'75%'}}
                          
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
                      style={{marginTop:'5%', marginBottom:'0%', marginLeft:'0%', marginRight:'52%', width:'57%', height:'75%'}}
                      
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
                style={{marginTop:'5%', marginBottom:'0%', marginLeft:'0%', marginRight:'52%', width:'57%', height:'75%'}}
                
                >    
                </Image> 

              </View>
            
            </TouchableOpacity> 

       </View> 

      {/*logo*/}  

       <View style={{alignItems:'center',  marginTop:'0%', marginBottom:'10%', marginLeft:'25%', marginRight:'0%', width:'50%', height:'60%', flex:1}}>  
                
           <Image 
             
             source={logo}
             style={{alignItems:'center', marginTop:'0%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%', width:'100%', height:'85%'}}
             
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