import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ScrollView, Animated, Keyboard, KeyboardAvoidingView } from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import logo from '../assets/logo.png'; 
import fondo from '../assets/calculos1.jpg'; 
import escanear_recibo from '../assets/click_escaneo_recibo.png'; 
import siguiente_paso from '../assets/siguiente_paso.png'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button} from 'react-native-elements';
import * as React from 'react';
import Fire, {db} from '../fire';

var {height} = Dimensions.get('screen');
var lat, lon, uri2

//var uid = Fire.getUid()
//console.log('UID: ', uid)



export function IngresarConsumo({ route, navigation }) {

  //uri2 = URI.uri

  //console.log('uri_home_screen: ', uri2)


return (


   /*  <KeyboardAvoidingView style={{ 
        
        flexDirection: 'column', justifyContent: 'center'}} enabled keyboardVerticalOffset={50}>
    
    <ScrollView> */ 

    <View style={styles.container}>
   
    
              <ImageOverlay 

                  source={fondo}
                  height={"100%"}
                  overlayAlpha={0}
                    

                  //resizeMode="stretch"
                  //style={styles.fondo} 
                  >
                
                <View style={{marginTop:'10%', marginBottom:'50%', marginLeft:'25%', marginRight:'0%', width:'100%', height:'100%', flex:4}}>           
                                
                       <TouchableOpacity 
                                                                                  
                            onPress={() => navigation.navigate('Cámara', {

                                costeInstalacion: 5500,
                                ahorroOferta: 850
 
                              }
                              )}
                              > 
                              <View>
                             
                                    <Image 
                                
                                    source={escanear_recibo}
                                    style={{marginTop:'0%', marginBottom:'0%', marginLeft:'2%', marginRight:'0%', width:'70%', height:'100%'}}
                                    
                                    >    
                                    </Image> 

                              </View>
                           
                       </TouchableOpacity> 
                       
                       <View  style={{marginTop:'0%', marginBottom:'5%', marginLeft:'4%', marginRight:'5%', width:'92%', height:'50%'}}> 

                                    <Text style={{ fontSize:20, fontWeight:'bold', width:'70%',  height: '80%',
                                    color: 'grey', padding:8, textAlign:'center', marginLeft:'0%'
                                    }}>O ingresa aquí tu consumo mensual promedio en KWh</Text>
                                            
                       

                            <View style={{marginTop:'0%', marginBottom:'5%', marginLeft:'4%', marginRight:'5%', width:'92%', height:'90%'}}>
                       
                            <TextInput
                                style={styles.nameInput}
                                placeholder="KWh"
                                keyboardType='numeric'
                            
                                //inlineImageLeft='icono.'
                                //label="KWh"
                                //onChangeText={this.onChangeText}
                                //value={this.state.name}
                                //mode='outlined'
                                
                            />

                            </View>

                       

                        </View> 
                      
 
                <TouchableOpacity 
                                                                                  
                     onPress={() => navigation.navigate('Confirma ubicación', {

                         costeInstalacion: 5500,
                         ahorroOferta: 850

                       }
                       )}
                       > 
                       <View>
                      
                         <Image 
                      
                          source={siguiente_paso}
                          style={{marginTop:'7%', marginBottom:'0%', marginLeft:'2%', marginRight:'0%', width:'69%', height:'77%'}}
                          
                          >               
                          </Image> 

                        </View>
                    
                </TouchableOpacity> 

             </View> 
            
           {/*Botones*/}     
            <View style={{marginTop:'20%', marginBottom:'0%', marginLeft:'13%', marginRight:'65%', width:'30%', height:'100%', flex:2, flexDirection:'row'}}>  
                         
                   
                     <TouchableOpacity 
                                                                                  
                     onPress={() => navigation.navigate('Solfium', {

                         costeInstalacion: 5500,
                         ahorroOferta: 850

                       }
                       )}
                       > 
                       <View style={{marginTop:'5%', marginBottom:'0%', marginLeft:'10%', marginRight:'50%', width:'65%', height:'92%'}}>
                      
                                <Image 
                                
                                source={home}
                                style={{marginTop:'5%', marginBottom:'0%', marginLeft:'0%', marginRight:'52%', width:'92%', height:'80%'}}
                                
                                >    
                                </Image> 

                     </View>
                    
                    </TouchableOpacity> 

                    <TouchableOpacity 
                                                                                  
                    onPress={() => navigation.navigate('Solfium', {

                        costeInstalacion: 5500,
                        ahorroOferta: 850

                      }
                      )}
                      > 
                      <View style={{marginTop:'5%', marginBottom:'0%', marginLeft:'0%', marginRight:'50%', width:'61%', height:'90%'}}>
                     
                            <Image 
                            
                            source={usuario}
                            style={{marginTop:'5%', marginBottom:'0%', marginLeft:'30%', marginRight:'50%', width:'92%', height:'80%'}}
                            
                            >    
                            </Image> 

                    </View>
                   
                   </TouchableOpacity> 
                   
                   <TouchableOpacity 
                                                                                  
                   onPress={() => navigation.navigate('Solfium', {

                       costeInstalacion: 5500,
                       ahorroOferta: 850

                     }
                     )}
                     > 
                     <View style={{marginTop:'5%', marginBottom:'0%', marginLeft:'0%', marginRight:'50%', width:'78%', height:'91%'}}>
                    
                     
                     <Image 
                      
                      source={setting}
                      style={{marginTop:'5%', marginBottom:'0%', marginLeft:'30%', marginRight:'5%', width:'92%', height:'80%'}}
                      
                      >    
                     </Image> 

                   </View>
                  
                  </TouchableOpacity> 

                       

                </View> 
        
                <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%', width:'55%', height:'55%', flex:1}}>  
                         
                    <Image 
                      
                      source={logo}
                      style={{marginTop:'2%', marginBottom:'5%', marginLeft:'10%', marginRight:'0%', width:'80%', height:'75%'}}
                      
                      >    
                     </Image>  

                </View> 
              
               </ImageOverlay>
              
             
               </View> 
/* 
                </ScrollView>
             </KeyboardAvoidingView>
          */
            
  );
  
}



const styles = StyleSheet.create({

  
  container: {
    flex:2,
    width:'100%',
    height:'100%',
   
    
  },

       //header
    box1: {
        flex: 1
        
    },
    //content
    box2: {
        flex: 4,
        alignItems: 'center'
        
    },
    //footer
    box3: {
        flex: 10,
        alignItems: 'center',
        marginBottom:'5%',
        marginTop:'0%'

        
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
    
    
     height: 40, 
     width:'90%',
     borderColor: 'black', 
     borderWidth: 2, 
     color: 'black', 
     marginBottom: "0%", 
     marginTop: "0%", 
     marginLeft: 20, 
     marginRight: 20,
     alignItems: "center",
     padding: 5, 
     backgroundColor: 'orange'
    
    
  },


  texto: {
    color: '#fff',
    fontSize: 20,
    marginHorizontal: 15,
    marginBottom: 20,
    fontWeight: 'bold'
    
    
  },
 
  fondo: {
    width: '100%'
    
    
  },
  btnContainer3: {
   
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#2196F3',
    padding: 5,
    textAlign:'center',
    alignItems:'center',
    flexDirection: 'column',
    width:310,
    height:180,
    marginBottom:2, marginTop:0
  },

  btnContainer4: {
   
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#2196F3',
    padding: 1,
    textAlign:'center',
    alignItems:'center',
    flexDirection: 'column',
    width:'90%',
    height:'15%',
    marginBottom:5, 
    marginTop:0,
    margin:'5%'
  },
  nameInput: {
    height: '55%',
    marginRight: '2%',
    marginBottom:'20%',
    width:'72%',
    paddingHorizontal: '0%',
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 30,
    paddingLeft: '10%'
   
   
  }
  

});

