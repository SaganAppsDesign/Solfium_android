import * as React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import fondo from '../assets/fondo5.jpg';  
import chat from '../assets/chat.png';
import ImageOverlay from "react-native-image-overlay";
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Card } from 'react-native-elements';


var {height} = Dimensions.get('window');


var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year



export function DatosInstalador({ navigation }) {
 return (

       
      <ImageOverlay source={fondo}
                    height={height}  
                    overlayAlpha={0}                 
                    >

                    <View style={{alignItems: 'center'}}>

               
                     
                      <Card containerStyle={{backgroundColor:'white', marginTop: '1%',  borderRadius: 10, 
                            width:'80%', height:'45%', marginBottom:'10%'}}>
                            
                            <View >

                            <Text style={{color: '#E53D18',
                                    backgroundColor: 'white',
                                    fontSize: 20,
                                    marginHorizontal: '10%',
                                    marginTop: '0%',
                                    marginBottom: '1%',
                                    fontWeight: 'bold',
                                    padding: 5,
                                    textAlign: 'center',
                                     }}>CITA CONFIRMADA</Text>

                              <Text style={{color: 'black',
                                    backgroundColor: 'white',
                                    fontSize:18,
                                    marginHorizontal: '10%',
                                    marginTop: '0%',
                                    marginBottom: '1%',
                                    fontWeight: 'bold',
                                    padding: 10,
                                    textAlign: 'center',
                                    fontWeight:'bold'
                                    }}>Sábado, 5 de Noviembre 2020, 10:00 am</Text>
 
                          </View>
                              
                         {/*  Foto y descripción instalador */}
                          
                          <View style={{flexDirection:'row', flex:1}}>
                          
                              <View style={{flex:5}}>

                                  <Image
                                  style={{borderRadius:60 ,width:'60%', height:'80%', marginLeft:'20%', marginTop: 2, borderWidth:1, borderColor:'black'}}
                                  source={require('../assets/yoda.jpg')}
                                  />
                              </View> 

                              <View style={{flex:4, marginRight:'5%'}}>
                                      <Text style={{color: '#000',
                                            backgroundColor: 'white',
                                            
                                            //textAlign: 'center',
                                            marginTop: 0,
                                            marginRight:'100%',
                                            marginLeft:'0%',
                                            height:'100%',
                                            width:'100%',
                                            padding: 0,
                                           }}>

                                           <Text style={{marginBottom:'100%', fontSize: 15}}>Técnico asignado:</Text>
                                           <Text>{`
                                                   `}</Text>

                                           <Text style={{fontWeight: "bold", fontSize: 16}}>    Juan Carlos Díaz Aguirre</Text>
                                           
                                    
                                    </Text>

                                    
                              
                              </View>

                          </View>

                         </Card>

                

                   <View style={{marginBottom: '30%', marginLeft:'10%',marginRight:'10%', marginTop:'10%'}}>
                   <Button title="   Instalador. Ha llegado al domicilio   " 
                           onPress={() =>  navigation.navigate('Escanear QR Instalador')}
                           icon={
                                  <Icon
                                    name="wrench"
                                    size={25}
                                    color="black"
                                  />
                                }


                         />
                   </View>

         </View>   
      </ImageOverlay>
   

  );
}



