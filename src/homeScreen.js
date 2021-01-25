import { Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import logo from '../assets/logo.png'; 
import fondo from '../assets/screen1.jpg'; 
import consumo from '../assets/ingrese_consumo.png'; 
import ubicacion from '../assets/ubicacion.png'; 
import calcular from '../assets/calcular.png'; 
import 'react-native-gesture-handler';
import * as React from 'react';
import Fire from '../fire';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var lat, lon, uri2

var uid = Fire.getUid()
//console.log('UID: ', uid)


export function HomeScreen({ route, navigation }) {
  //Coordenadas
  //const { Latitud } = route.params;
  //const { Longitud } = route.params;

  //const { URI } = route.params;


  //lat = JSON.stringify(Latitud)
  //lon = JSON.stringify(Longitud)

  //uri2 = URI.uri

    
return (

         <ImageOverlay 

                  source={fondo}
                  height={hp('100%')}
                  overlayAlpha={0}
                    

                  //resizeMode="stretch"
                  //style={styles.fondo} 
                  >
                       
                <View style={{alignItem:'center', justifyContent:'center', marginBottom:hp('0%'), width:wp('100%'), height:hp('100%'), flex:1, flexDirection:'column'}}>           
                   


                   <View  style={{alignItems:'center', flex:2}}>

                      <Text 
                          style={{textAlign:'center',  fontSize:15, width:wp('100%'), height: hp('5%'), fontWeight:'bold',
                                  color: 'white', marginBottom: hp('0%'),  marginLeft: "0%", marginTop:hp('3%')}} 
                          onPress={() => navigation.navigate('Video Informativo')}>¿Quiere saber cómo funciona Solfium App? Click aquí</Text>
                   </View>
                    { /*    <View style={[styles.box2]}> 

                

                      <Text style={{ fontSize:13, fontWeight:'bold', width:300,  height: 40, borderColor: 'black', borderWidth: 2, 
                      color: 'black', marginTop: "6%",  marginLeft: "8%", marginRight: "8%",  backgroundColor:"white", padding:8, textAlign:'center'
                      }}>Introduzca datos sobre consumo eléctrico</Text>

                      <Text style={{ fontSize:13, width:300, height: 45, 
                      color: 'white', marginTop: "0%",  marginLeft: "8%", marginRight: "8%",  marginBottom: "30%", padding:5, fontWeight:'bold'
                      }}>O si lo prefiere, haga una foto a su factura</Text>
                   
                                 
                  </View>  */}

                  { /* Botones*/}
                  <View  style={{  alignItems:'center', flex:6,  justifyContent:'center'}}>

                       <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                            <TouchableOpacity 
                                                                                        
                                  onPress={() => navigation.navigate('Ingresar Consumo', {

                                      costeInstalacion: 5500,
                                      ahorroOferta: 850
      
                                    }
                                    )}
                                    > 
                                                              
                                    <Image 
                              
                                    source={consumo}
                                    style={{marginLeft:wp('0%'), width:wp('70%'), height:hp('16%')}}
                                    
                                    >    
                                  </Image> 
          
                            </TouchableOpacity> 
                       </View>
                       <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                          <TouchableOpacity 
                                                                                      
                            onPress={() => navigation.navigate('Confirma ubicación', {

                                costeInstalacion: 5500,
                                ahorroOferta: 850

                              }
                              )}
                              > 
                                                    
                          <Image 
                          
                              source={ubicacion}
                              style={{marginTop:'0%', marginBottom:'0%', marginLeft:wp('0%'), marginRight:'0%', width:wp('70%'), height:hp('16%')}}
                              
                              >               
                              </Image> 
                          
                          </TouchableOpacity> 
                       </View>
                      <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                      <TouchableOpacity 
                                                                                  
                            onPress={() => navigation.navigate('Pantalla de espera', {

                                costeInstalacion: 5500,
                                ahorroOferta: 850
 
                              }
                              )}
                              > 
                           
                             
                              <Image 
                                    source={calcular}
                                    style={{marginTop:'0%', marginBottom:'0%', marginLeft:wp('0%'), marginRight:'0%', width:wp('70%'), height:hp('16%')}}
                                    
                                    />

                       </TouchableOpacity>
                       </View>

                       </View>


             { /*      <ImageOverlay 
                      containerStyle={{marginTop:'0%', marginBottom:'0%', marginLeft:'2%', marginRight:'0%', width:'90%'}}
                      source={camara}
                      height= {210}
                      
                      >    

                      <View style={{marginTop:'1%', marginBottom:'3%', flex:2, width:'80%'}}> 
                                    
                          <TouchableOpacity
                            
                              onPress={() => navigation.navigate('Cámara')}
                              >
                          
                        
                            <View 
                              >
                              <Image
                                  
                                  source={{ uri: uri2 }}
                                  style={{width:'100%', height:'100%', marginBottom:'2%'}}
                                />
                              
                            </View> 
                        
                    
                          </TouchableOpacity>

                      </View> 

                  </ImageOverlay>  */}

               

                  { /* <View style={{marginTop:'25%', marginBottom:'5%', margin:'15%',flex:1}}> 
                              
                       <Button 
                             
                              title="   Introduzca ubicación"
                              onPress={() => navigation.navigate('Ubicación')}
                              color='grey'
                              icon={
                                  <Icon
                                      name="map"
                                      size={19}
                                      color="black"
                                  />
                                  }
                         />

                                 
                   </View> 

                    <View style={{marginTop:'5%', marginBottom:'15%', margin:'15%', flex:1}}>
                      
                      
                     <Text style={{ fontSize:15, fontWeight:'bold', width:'90%',  height: 39, borderColor: 'black', borderWidth: 2, 
                      color: 'black', marginLeft: "5%", marginRight: "0%", backgroundColor:"#9CC8E8", padding:7, textAlign:'center', alignItems:'center', borderRadius:0
                      }}>{"Lat: " + lat.slice(14,19) +  " | " + "Long: " + lon.slice(15,21)}</Text>

                      
                      
                     </View>   

                   <View style={[styles.box3]}> 

                          <TouchableOpacity 
                            style={styles.boton}
                                                         
                            onPress={() => navigation.navigate('Cálculos', {

                                costeInstalacion: 5500,
                                ahorroOferta: 850
 
                              }
                              )}
                           >
                           
                            <Text style={{ fontSize:18, fontWeight:'bold', textTransform: "uppercase", color: 'black', textAlign:'center'

                           }}>calcular</Text>

                          </TouchableOpacity>

                        

                           <Text 
                             style={{ fontSize:12, width:300, height: 45, 
                                      color: 'white', marginBottom: "5%",  marginLeft: "8%", marginRight: "8%", marginTop:'3%',  padding:5 }} 
                             onPress={() => navigation.navigate('Video Informativo')}>¿Quiere saber cómo funciona Solfium App? Click aquí</Text>

                    </View> 

                  </View>

                  <View style={[styles.box1]}> 

                  <Image 

                     source={logo} style={styles.logo}
                   >


                     
                   </Image>
                   
                             */}


                    { /* Logo*/}        
                          
                    <View style={{alignItems:'center', justifyContent:'center',width:wp('100%'), height:hp('100%'), flex:2}}>  
                
                    <Image 
                      
                      source={logo}
                      style={{aspectRatio:4.5,  width:wp('100%'), height:hp('6%')}}
                      
                      >    
                    </Image>  

                  </View> 

                </View>

               </ImageOverlay>

  );
  
}





