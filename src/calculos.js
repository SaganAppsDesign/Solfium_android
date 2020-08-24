import * as React from 'react';
import {Text, View, Dimensions, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import ImageOverlay from "react-native-image-overlay";
import tec3 from '../assets/tec3.gif';  



var {height} = Dimensions.get('window');
var {width} = Dimensions.get('window');



export function Calculos({ route, navigation }) {

 const { costeInstalacion } = route.params;


  return (



    <ImageOverlay 
          source={tec3}
          height={height}                   
          > 

 
             <View>
   
                            
                     <View style={{ flex: 1,  marginTop:50, marginBottom:10, alignItems:'center'}}>
                    
                       <Text style={{color: '#000',
                                    backgroundColor: 'white',
                                    fontSize: 15,
                                    marginHorizontal: 15,
                                    marginTop: 10,
                                    fontWeight: 'bold',
                                    padding: 10,
                                    textAlign: 'center',
                                    borderRadius:10}} >El coste total de la instalación será de {JSON.stringify(costeInstalacion)} $, impuestos incluidos. Se podría llevar a cabo con un pago único o con cómodas mensualidades de 458,33 $ en 12 meses</Text>

                      

                     
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
                                    fontWeight: 'bold',
                                    padding: 10,
                                    textAlign: 'center',
                                    borderRadius:10}} h1>Con esta instalación, estarás contribuyendo a la protección del planeta, disminuyendo su huella de carbono en 70 Kg/año</Text>
       
                     </View>

                 <View style={{ marginBottom: 90, marginRight: 60, marginLeft: 60}}>

                     <View style={{ marginBottom: 10, marginTop: 10}}>

                      <Button title="  Tengo interés en la oferta" style={{ marginTop: 0}} 
                              onPress={() => navigation.navigate('Nombre usuario')} 
                                                            
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
                        title="   No tengo interés en la oferta"
                        onPress={() => navigation.navigate('Solfium', {


                          costeInstalacion: 5,
                          y:2


                        })}
                   
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



