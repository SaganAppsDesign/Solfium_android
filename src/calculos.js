import * as React from 'react';
import {Text, View, Dimensions, ScrollView, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import ImageOverlay from "react-native-image-overlay";
import tec3 from '../assets/fondo3.png';  
import calculos from '../assets/calculos_finales.png';  
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import logo from '../assets/logo.png'; 



var {height} = Dimensions.get('window');
var {width} = Dimensions.get('window');



export function Calculos({ route, navigation }) {

 //const { costeInstalacion } = route.params;


  return (

    <View style={styles.container}>

    <ImageOverlay 
          source={tec3}
          height={height}  
          overlayAlpha={0}                 
          > 

                              
        <View style={{ flex:1,  marginTop:'5%', marginBottom:'0%', width:'80%'}}>
                    
                     { /*  <Text style={{color: '#000',
                                    backgroundColor: 'white',
                                    fontSize: 15,
                                    marginHorizontal: 15,
                                    marginTop: 10,
                                    fontWeight: 'bold',
                                    padding: 10,
                                    textAlign: 'center',
                                    borderRadius:10}} >El coste total de la instalación será de {JSON.stringify(costeInstalacion)} $, impuestos incluidos. Se podría llevar a cabo con un pago único o con cómodas mensualidades de 458,33 $ en 12 meses</Text> */}
                      
                          
                            <View style={{ marginBottom:'0%', marginTop:'0%', flex:10, alignItems:'center'}}>
                            <ImageOverlay 
                                  
                                  containerStyle={{marginTop:'0%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%', width:'95%', flex:1}}
                                  source={calculos}
                                  height={500}
                                  overlayAlpha={0}                 
                                  > 


                              <View style={{ marginBottom:'0%', marginTop:'100%', flex:1}}>

                                  <TouchableOpacity
                                        
                                        style={{ marginBottom:'0%', marginTop:'25%', flex:1}}
                                        onPress={() => navigation.navigate('Proceso de implemetación')} 
                                                            
                                        >

                                        <Text style={styles.boton}> ME INTERESA </Text>

                                  </TouchableOpacity>
                              </View>
                                
                                      
                            </ImageOverlay >
                          </View>


            {/*Botones*/}     
            <View style={{alignContent:'center', alignItems:'center',  marginTop:'15%', marginBottom:'2%', marginLeft:'3%', marginRight:'65%', width:'35%', height:'5%', flex:2, flexDirection:'row'}}>  
              {/*HOME*/}         
            <TouchableOpacity 
                                                                         
            onPress={() => navigation.navigate('Solfium')}
              > 
              <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'10%', marginRight:'50%', width:'67%', height:'95%'}}>
             
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
             <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'10%', marginRight:'50%', width:'67%', height:'95%'}}>
            
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
           
            <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'10%', marginRight:'50%', width:'67%', height:'95%'}}>
                      
            <Image 
             
             source={setting}
             style={{marginTop:'5%', marginBottom:'0%', marginLeft:'0%', marginRight:'52%', width:'92%', height:'80%'}}
             
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