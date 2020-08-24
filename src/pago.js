import * as React from 'react';
import { Text, View, Dimensions} from 'react-native';
import tec4 from '../assets/tec4.gif';  
import ImageOverlay from "react-native-image-overlay";
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';


var {height} = Dimensions.get('window');

export function Payment ({ navigation }) {
  return (
    <View style={{ flex: 1, marginTop:0}}>

   
      <ImageOverlay source={tec4}
                    height={height}
                     
                    >

              <View>   

                   <View style={{ flex: 1}}>

                   <View
                            style={{
                            
                            marginTop: '2%',
                            marginBottom:'5%',
                            marginRight:'3%',
                            marginLeft:'72%'}}>
                    <Button 
                              onPress={() => navigation.navigate('Chat')}
                              title=' Chat'
                              icon={
                                          <Icon
                                            name="comments"
                                            size={30}
                                            color="white"
                                          />
                                        }
                                                            
                                    >
                                
                    </Button>
                   </View>
                   
                        
                        <Text style={{color: '#000',
                                backgroundColor: 'orange',
                                fontSize: 20,
                                marginHorizontal: 15,
                                textAlign: 'center',
                                marginTop: '1%',
                                fontWeight: 'bold',
                                padding: 10,
                                borderRadius:0}}>Elija su método de pago:
 

                         </Text>

                         

                         

                        <Text style={{color: '#000',
                                backgroundColor: 'lightgray',
                                fontSize: 15,
                                marginHorizontal: 40,
                                marginTop: 50,
                                fontWeight: 'bold',
                                padding: 10,
                                textAlign: 'center',
                                borderRadius:15
                                }}>

                                - Credit Card -
                                

                          </Text>


                          <Text style={{color: '#000',
                                backgroundColor: 'green',
                                fontSize: 15,
                                marginHorizontal: 40,
                                marginTop: 50,
                                fontWeight: 'bold',
                                padding: 10,
                                textAlign: 'center',
                                borderRadius:15}}>

                                - Transferencia bancaria -
                                

                          </Text>

                          <Text style={{color: '#000',
                                backgroundColor: 'yellow',
                                fontSize: 15,
                                marginHorizontal: 40,
                                marginTop: 50,
                                fontWeight: 'bold',
                                padding: 10,
                                textAlign: 'center',
                                borderRadius:15}}>

                                - Financiación (24,36,48 meses) -

                          </Text>

                   </View>

                    

                  <View style={{ marginBottom: 90 }}>

                           <View style={{ marginBottom: 10, marginTop: 10, margin:"20%"}}>

                            <Button title="   Menú principal" onPress={() =>  navigation.navigate('Solfium')} 
                                                                  
                                    icon={
                                        <Icon
                                          name="bars"
                                          size={25}
                                          color="black"
                                        />
                                      }/>
                           
                            </View>

                              <View style={{ marginBottom: 10, marginTop: 10, margin:"20%"}}>

                            <Button title="  Instalación en proceso  " onPress={() =>  navigation.navigate('Instalación en proceso')} 
                                                                  
                                    icon={
                                        <Icon
                                          name="wrench"
                                          size={25}
                                          color="black"
                                        />
                                      }/>
                           
                            </View>
                                
                   </View> 
                   </View>     
      </ImageOverlay>
    </View>

  );
}



