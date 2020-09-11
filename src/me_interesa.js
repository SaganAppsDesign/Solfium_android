import * as React from 'react';
import {Text, View, Dimensions, ScrollView, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import ImageOverlay from "react-native-image-overlay";
import fondo4 from '../assets/fondo4.jpg';  
import instalador from '../assets/instalador.png';  
import pago from '../assets/pago.png';  
import visita from '../assets/visita.png';  
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import logo from '../assets/logo.png'; 

var {height} = Dimensions.get('window');
var {width} = Dimensions.get('window');



export function MeInteresa({ navigation }) {

 //const { costeInstalacion } = route.params;


  return (

<View style={styles.container}>

    <ImageOverlay 
          source={fondo4}
          height={height}  
          overlayAlpha={0}                 
          > 
                    
          <View style={{marginTop:'8%', marginBottom:'50%', marginLeft:'18%', marginRight:'0%', width:'80%', flex:4}}>  
          
                    <View  style={{marginTop:'0%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%', width:'80%', height:'100%'}}> 

                            <Text style={{padding:'2%', borderRadius:10, backgroundColor:"rgba(225,122,31, 0.5)",  fontSize:18, fontWeight:'bold', width:'100%',  height: '95%',
                            color: 'white', textAlign:'center', marginLeft:'0%'
                            }}>El proceso para implementar el sistema en su hogar es el siguiente:</Text>

                    </View> 
                            
                   <TouchableOpacity 
                                                                              
                        onPress={() => navigation.navigate('Nombre usuario')}
                          > 
                          <View>
                         
                          <Image 
                    
                          source={visita}
                          style={{marginTop:'0%', marginBottom:'5%', marginLeft:'0%', marginRight:'0%', width:'80%', height:'100%'}}
                          
                          >    
                         </Image> 

                            </View>
                       
                   </TouchableOpacity> 

            

           
                 <TouchableOpacity 
                                                                              
                 onPress={() => navigation.navigate('Escanear QR Instalador', {

                     costeInstalacion: 5500,
                     ahorroOferta: 850

                   }
                   )}
                   > 
                   <View>
                  
                   <Image 
                  
                      source={instalador}
                      style={{marginTop:'0%', marginBottom:'5%', marginLeft:'0%', marginRight:'0%', width:'80%', height:'100%'}}
                      
                      >               
                      </Image> 

                    </View>
                
                 </TouchableOpacity> 

            

             
                  <TouchableOpacity 
                                                                              
                        onPress={() => navigation.navigate('Viabilidad Instalación')}
                          > 
                          <View>
                         
                          <Image 
                            
                                source={pago}
                                style={{marginTop:'0%', marginBottom:'5%', marginLeft:'0%', marginRight:'0%', width:'80%', height:'100%'}}
                                
                                />

                            </View>
                       
                   </TouchableOpacity>
           
            </View> 

            {/*Botones*/}     
            <View style={{marginTop:'42%', marginBottom:'0%', marginLeft:'13%', marginRight:'65%', width:'30%', height:'100%', flex:4, flexDirection:'row'}}>  
              {/*HOME*/}         
            <TouchableOpacity 
                                                                         
            onPress={() => navigation.navigate('Solfium')}
              > 
              <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'10%', marginRight:'50%', width:'68%', height:'98%'}}>
             
                       <Image 
                       
                       source={home}
                       style={{marginTop:'5%', marginBottom:'0%', marginLeft:'0%', marginRight:'52%', width:'92%', height:'80%'}}
                       
                       >    
                       </Image> 

            </View>
           
           </TouchableOpacity> 
           {/*USUARIO*/}     
           <TouchableOpacity 
                                                                         
           onPress={() => navigation.navigate('Solfium')            
            }> 
             <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'10%', marginRight:'50%', width:'68%', height:'98%'}}>
            
                   <Image 
                   
                   source={usuario}
                   style={{marginTop:'5%', marginBottom:'0%', marginLeft:'0%', marginRight:'52%', width:'92%', height:'80%'}}
                   
                   >    
                   </Image> 

           </View>
          
          </TouchableOpacity> 
         
          {/*SETTING*/}     
          <TouchableOpacity 
                                                                         
          onPress={() => navigation.navigate('Solfium')}
            > 
           
            <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'10%', marginRight:'50%', width:'68%', height:'98%'}}>
                      
            <Image 
             
             source={setting}
             style={{marginTop:'5%', marginBottom:'0%', marginLeft:'0%', marginRight:'52%', width:'92%', height:'80%'}}
             
             >    
            </Image> 

          </View>
         
         </TouchableOpacity> 

       </View> 

      {/*logo*/}  

       <View style={{alignItems:'center',  marginTop:'0%', marginBottom:'10%', marginLeft:'0%', marginRight:'0%', width:'80%',  flex:2}}>  
                
           <Image 
             
             source={logo}
             style={{alignItems:'center', marginTop:'0%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%', width:'64%', height:'100%'}}
             
             >    
            </Image>  

        </View> 

       
   
     

    </ImageOverlay> 
  </View> 
  );
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



 



  

});