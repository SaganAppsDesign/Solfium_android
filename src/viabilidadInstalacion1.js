import * as React from 'react';
import {Text, View, Dimensions, Fragment, StyleSheet} from 'react-native';
import tec2 from '../assets/tec2.gif';  
import ImageOverlay from "react-native-image-overlay";
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';





var {height} = Dimensions.get('window');


export function ViabilidadInstalacion1({ navigation }) {
  return (

              
    
      <ImageOverlay source={tec2}
                    height={height}
                     
                    >
       
                 <View style={{ flex: 1,  marginTop:'0%', marginBottom:'100%', alignItems:'center'}}>

                 
                 
                 <View style={{flexDirection: 'row'}}>
                 

                 <Text style={{
                          flex:1,
                          color: '#000',
                          backgroundColor: 'green',
                          fontSize: 20,
                          marginHorizontal: 15,
                          marginTop: '5%',
                          marginBottom:'5%',
                          marginRight:'5%',
                          marginLeft:'5%',
                          fontWeight: 'bold',
                          padding: 10,
                          alignItems:'center'}}>¡Felicidades! Se puede realizar en su hogar el 100% de la instalación </Text>

                  
                  <View
                            style={{
                            
                            marginTop: '2%',
                            marginBottom:'5%',
                            marginRight:'2%',
                            marginLeft:'0%'}}>
                    <Button 
                              onPress={() => navigation.navigate('Chat')}
                              title=' Chat'
                              icon={
                                          <Icon
                                            name="comments"
                                            size={50}
                                            color="white"
                                          />
                                        }
                                                            
                                    >
                                  
                                
                                  
                    </Button>
                   </View>
                   </View>
                   <Text style={{color: '#000',
                                backgroundColor: 'white',
                                fontSize: 15,
                                marginHorizontal: 15,
                                marginTop: "1%",
                                fontWeight: 'bold',
                                padding: 10,
                                textAlign: 'center',
                                borderRadius:10}} >El coste total de la instalación será de 5500 $, impuestos incluidos. Se podría llevar a cabo con un pago único o con cómodas mensualidades de 458,33 $ en 12 meses</Text>

                  

                 
                   <Text style={{color: '#000',
                                backgroundColor: 'white',
                                fontSize: 15,
                                marginHorizontal: 15,
                                marginTop: 10,
                                fontWeight: 'bold',
                                padding: 10,
                                textAlign: 'center',
                                borderRadius:10}} h1>Desde la instalación ahorrarás 300$ al mes, lo que hará que tu inversión se rentabilizará en 12 meses.</Text>

                

                   <Text style={{color: '#000',
                                backgroundColor: 'white',
                                fontSize: 15,
                                marginHorizontal: 15,
                                marginTop: 10,
                                marginBottom:'5%',
                                fontWeight: 'bold',
                                padding: 10,
                                textAlign: 'center',
                                borderRadius:10}} h1>Con esta instalación, estarás contribuyendo a la protección del planeta, disminuyendo su huella de carbono en 70 Kg/año</Text>
   

                  <View style={{ marginBottom: '5%'}}>

                           <View style={{ marginBottom: 10, marginTop: 10}}>

                            <Button title="   Acepto la oferta" onPress={() =>  navigation.navigate('Proceso de pago')} 
                                                                  
                                    icon={
                                        <Icon
                                          name="thumbs-up"
                                          size={25}
                                          color="black"
                                        />
                                      }/>
                           
                            </View>

                           <View >
           
                            <Button 
                              title="   Rechazo la oferta"
                              onPress={() => navigation.navigate('Solfium')}
                         
                              icon={
                                        <Icon
                                          name="arrow-circle-left"
                                          size={25}
                                          color="black"
                                        />
                                      }
                            
                            />


                            
                           </View>
                           
                                
                  </View> 

                  </View>
      </ImageOverlay>
 

  );
}


