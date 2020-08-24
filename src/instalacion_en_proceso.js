import * as React from 'react';
import { Text, View, Image, Dimensions} from 'react-native';
import tec4 from '../assets/tec4.gif'; 
import ImageOverlay from "react-native-image-overlay";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';



var {height} = Dimensions.get('window');

export function Instalacion({navigation }) {

  return (  


       
       <ImageOverlay 
         source={tec4}
         height={height}>
          
          <View>

          <View style={{ marginBottom:'1%', marginTop: '1%'}}>

             
                    <View
                            style={{
                            
                              marginTop: '5%',
                              marginBottom:'15%',
                              marginRight:'3%',
                              marginLeft:'72%'}}>
                    <Button 
                              onPress={() => navigation.navigate('Chat')}
                              title=' Chat'
                              icon={
                                          <Icon
                                            name="comments"
                                            size={40}
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
                      marginTop: 0,
                      marginBottom: '10%',
                      fontWeight: 'bold',
                      padding: 10,
                      borderRadius:0}}>Instalación en proceso. En breve recibirá notificación de finalización.


               </Text>


           </View>

           <View style={{ marginBottom: '10%', marginTop:'5%', alignItems:'center'}}>

                <Image
                          style={{width:130, height:130, marginBottom:0, marginRight:0, marginLeft:0, marginTop: 0, borderWidth:4, borderColor:'black'}}
                          source={require('../assets/reloj.gif')}
                          />

            </View>
                   

         
                   
          
          <View style={{ marginBottom: '5%', marginTop:'1%', marginLeft:'10%', marginRight:'10%'}}>

            <Button 
              title="  Rating"
              onPress={() => navigation.navigate('Rating')}
         
              icon={
                        <Icon
                          name="star"
                          size={25}
                          color="yellow"
                        />
                      }
              

            />
            </View>

            <View style={{ marginBottom: '30%', marginTop:'1%', marginLeft:'10%', marginRight:'10%'}}>

            <Button 
              title="   Menú inicial"
              onPress={() => navigation.navigate('Solfium')}
         
              icon={
                        <Icon
                          name="bars"
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



