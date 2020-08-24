import * as React from 'react';
import {Text, View, Dimensions} from 'react-native';
import tec2 from '../assets/tec2.gif';  
import ImageOverlay from "react-native-image-overlay";
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';


var {height} = Dimensions.get('window');


export function ViabilidadInstalacion3({ navigation }) {
  return (

      
      <ImageOverlay source={tec2}
                    height={height}
                     
                    >
                 
                 <View style={{ flex: 1,  marginTop:'0%', marginBottom:'100%', alignItems:'center'}}>
                 <View style={{flexDirection: 'row'}}>
                 

                 <Text style={{
                          flex:1,
                          color: '#000',
                          backgroundColor: 'red',
                          fontSize: 18,
                          marginHorizontal: 15,
                          marginTop: '30%',
                          marginBottom:'5%',
                          marginRight:'0%',
                          marginLeft:'5%',
                          fontWeight: 'bold',
                          padding: 10,
                          alignItems:'center'}}>Lo sentimos, no se puede realizar la instalación</Text>

                  
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
                                    fontSize: 20,
                                    marginHorizontal: 15,
                                    marginTop: 10,
                                    fontWeight: 'bold',
                                    padding: 10,
                                    textAlign: 'center',
                                    borderRadius:0,
                                    marginBottom:'30%',}} >Debido a problemas técnicos causados por la situación geográfica de su hogar, no es posible llevar a cabo la instalación.</Text>  
                    

                           <View >
           
                            <Button 
                              title="   Menú principal"
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
      </ImageOverlay>
 

  );
}


