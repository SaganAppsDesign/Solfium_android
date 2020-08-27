import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Linking} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import logo from '../assets/logo.png'; 
import fondo from '../assets/fondo.gif'; 
import camara from '../assets/camara.jpg'; 
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button} from 'react-native-elements';
import * as React from 'react';





var {height} = Dimensions.get('screen');
var lat, lon, uri2



export function HomeScreen({ route, navigation }) {
  //Coordenadas
  const { Latitud } = route.params;
  const { Longitud } = route.params;

  const { URI } = route.params;


  lat = JSON.stringify(Latitud)
  lon = JSON.stringify(Longitud)

  uri2 = URI.uri
    
return (


 
     <View style={styles.container}>


           <View>  

              <ImageOverlay 

                  source={fondo}
                  height={height}
                  resizeMode="stretch"
                  style={styles.fondo} >
                       
                <View>           

                  <View style={[styles.box1]}> 

                    <Image 

                       source={logo} style={styles.logo}
                     >


                       
                     </Image>
                     



                  </View>  


                  <View style={[styles.box2]}> 

                      <Text style={{ fontSize:13, fontWeight:'bold', width:300,  height: 40, borderColor: 'black', borderWidth: 2, 
                      color: 'black', marginTop: "6%",  marginLeft: "8%", marginRight: "8%",  backgroundColor:"white", padding:8, textAlign:'center'
                      }}>Introduzca datos sobre consumo eléctrico</Text>

                      <Text style={{ fontSize:13, width:300, height: 45, 
                      color: 'white', marginTop: "0%",  marginLeft: "8%", marginRight: "8%",  marginBottom: "30%", padding:5, fontWeight:'bold'
                      }}>O si lo prefiere, haga una foto a su factura</Text>
                   
                                 
                  </View> 

                   
                  <View style={{marginTop:'5%', marginBottom:'25%', marginLeft:'6%', marginRight:'0%', flex:2}}>  
                  
                   <ImageOverlay 
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

                  </ImageOverlay> 

                  </View> 

                   <View style={{marginTop:'25%', marginBottom:'5%', margin:'15%',flex:1}}> 
                              
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

               </ImageOverlay>

            </View>  
       
    </View>
     




  );
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'column',
    
  },

       //header
    box1: {
        flex: 2
        
    },
    //content
    box2: {
        flex: 4,
        alignItems: 'center'
        
    },
    //footer
    box3: {
        flex: 7,
        alignItems: 'center',
        marginBottom:'5%',
        marginTop:'0%'

        
    },

  logo: {
    
    width: "40%",
    height: "100%",
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

