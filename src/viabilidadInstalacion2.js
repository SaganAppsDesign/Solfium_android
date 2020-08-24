import * as React from 'react';
import {Text, View, Dimensions} from 'react-native';
import tec2 from '../assets/tec2.gif';  
import ImageOverlay from "react-native-image-overlay";
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';


var {height} = Dimensions.get('window');


export function ViabilidadInstalacion2({ navigation }) {
  return (

      
      <ImageOverlay source={tec2}
                    height={height}
                     
                    >
                 
                 <View style={{ flex: 1,  marginTop:'0%', marginBottom:'100%', alignItems:'center'}}>

                 <View style={{flexDirection: 'row'}}>
                 

                 <Text style={{
                          flex:1,
                          color: '#000',
                          backgroundColor: 'orange',
                          fontSize: 18,
                          marginHorizontal: 15,
                          marginTop: '5%',
                          marginBottom:'5%',
                          marginRight:'5%',
                          marginLeft:'5%',
                          fontWeight: 'bold',
                          padding: 10,
                          alignItems:'center'}}>¡Felicidades! Al menos se puede realizar un 45% de la instalación, lo cual supone el siguiente ahorro:</Text>

                  
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
                                marginTop: 0,
                                fontWeight: 'bold',
                                padding: 10,
                                textAlign: 'center',
                                borderRadius:10}} >El coste total de la instalación será de 3025 $, impuestos incluidos. Se podría llevar a cabo con un pago único o con cómodas mensualidades de 252.08 $ en 12 meses</Text>

                  

                 
                   <Text style={{color: '#000',
                                backgroundColor: 'white',
                                fontSize: 15,
                                marginHorizontal: 15,
                                marginTop: 10,
                                fontWeight: 'bold',
                                padding: 10,
                                textAlign: 'center',
                                borderRadius:10}} h1>Desde la instalación ahorrarás 165$ al mes, lo que hará que tu inversión se rentabilizará en 10 meses.</Text>

                

                   <Text style={{color: '#000',
                                backgroundColor: 'white',
                                fontSize: 15,
                                marginHorizontal: 15,
                                marginTop: 10,
                                marginBottom:'5%',
                                fontWeight: 'bold',
                                padding: 10,
                                textAlign: 'center',
                                borderRadius:10}} h1>Con esta instalación, estarás contribuyendo a la protección del planeta, disminuyendo su huella de carbono en 55 Kg/año</Text>
   

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


