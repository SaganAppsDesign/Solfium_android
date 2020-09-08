import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Linking} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import logo from '../assets/logo.png'; 
import fondo from '../assets/screen1.jpg'; 
import consumo from '../assets/ingrese_consumo.png'; 
import ubicacion from '../assets/ubicacion.png'; 
import calcular from '../assets/calcular.png'; 
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button} from 'react-native-elements';
import * as React from 'react';
import Fire, {db} from '../fire';
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 

var {height} = Dimensions.get('screen');
var lat, lon, uri2

var uid = Fire.getUid()
console.log('UID: ', uid)



export function HomeScreen({ route, navigation }) {
  //Coordenadas
  const { Latitud } = route.params;
  const { Longitud } = route.params;

  const { URI } = route.params;


  lat = JSON.stringify(Latitud)
  lon = JSON.stringify(Longitud)

  uri2 = URI.uri

  console.log('uri_home_screen: ', uri2)
    
return (


 
     <View style={styles.container}>


           <View  >  

              <ImageOverlay 

                  source={fondo}
                  height={"100%"}
                  overlayAlpha={0}
                    

                  //resizeMode="stretch"
                  //style={styles.fondo} 
                  >
                       
                <View style={{marginTop:'5%', marginBottom:'80%', marginLeft:'25%', marginRight:'0%', width:'100%', height:'100%', flex:2, flexDirection:'column'}}>           
                    <Text 
                    style={{textAlign:'center',  fontSize:15, width:'80%', height: '50%', fontWeight:'bold',
                            color: 'white', marginBottom: "5%",  marginLeft: "0%", marginTop:'0%',  padding:5 }} 
                    onPress={() => navigation.navigate('Video Informativo')}>¿Quiere saber cómo funciona Solfium App? Click aquí</Text>
              { /*    <View style={[styles.box2]}> 

                      <Text style={{ fontSize:13, fontWeight:'bold', width:300,  height: 40, borderColor: 'black', borderWidth: 2, 
                      color: 'black', marginTop: "6%",  marginLeft: "8%", marginRight: "8%",  backgroundColor:"white", padding:8, textAlign:'center'
                      }}>Introduzca datos sobre consumo eléctrico</Text>

                      <Text style={{ fontSize:13, width:300, height: 45, 
                      color: 'white', marginTop: "0%",  marginLeft: "8%", marginRight: "8%",  marginBottom: "30%", padding:5, fontWeight:'bold'
                      }}>O si lo prefiere, haga una foto a su factura</Text>
                   
                                 
                  </View>  */}

                   
                   <View >  
                                
                       <TouchableOpacity 
                                                                                  
                            onPress={() => navigation.navigate('Ingresar Consumo', {

                                costeInstalacion: 5500,
                                ahorroOferta: 850
 
                              }
                              )}
                              > 
                              <View>
                             
                              <Image 
                        
                              source={consumo}
                              style={{marginTop:'0%', marginBottom:'0%', marginLeft:'2%', marginRight:'0%', width:'70%', height:'95%'}}
                              
                              >    
                             </Image> 

                                </View>
                           
                       </TouchableOpacity> 

                  </View> 

                  <View>  
                     <TouchableOpacity 
                                                                                  
                     onPress={() => navigation.navigate('Confirma ubicación', {

                         costeInstalacion: 5500,
                         ahorroOferta: 850

                       }
                       )}
                       > 
                       <View>
                      
                       <Image 
                      
                          source={ubicacion}
                          style={{marginTop:'0%', marginBottom:'0%', marginLeft:'2%', marginRight:'0%', width:'70%', height:'95%'}}
                          
                          >               
                          </Image> 

                        </View>
                    
                </TouchableOpacity> 

                  </View> 

                  <View >  
                      <TouchableOpacity 
                                                                                  
                            onPress={() => navigation.navigate('Cálculos', {

                                costeInstalacion: 5500,
                                ahorroOferta: 850
 
                              }
                              )}
                              > 
                              <View>
                             
                              <Image 
                                
                                    source={calcular}
                                    style={{marginTop:'0%', marginBottom:'0%', marginLeft:'2%', marginRight:'0%', width:'70%', height:'95%'}}
                                    
                                    />

                                </View>
                           
                       </TouchableOpacity>


                      

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
                                    


                </View>

        
                <View style={{marginTop:'20%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%',width:'55%', height:'50%', flex:1}}>  
                         
                    <Image 
                      
                      source={logo}
                      style={{marginTop:'5%', marginBottom:'0%', marginLeft:'10%', marginRight:'0%', width:'80%', height:'55%'}}
                      
                      >    
                     </Image>  

                  </View> 

               </ImageOverlay>

            </View>  
       
    </View>
     




  );
  
}



const styles = StyleSheet.create({
  container: {
    flex:1,
     
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
  }
  

});

