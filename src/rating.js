import * as React from 'react';
import {Text, View, Dimensions, LogBox,  ToastAndroid} from 'react-native';
import tec3 from '../assets/tec3.gif';  
import ImageOverlay from "react-native-image-overlay";
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button} from 'react-native-elements';

import { AirbnbRating} from 'react-native-ratings';



var {height} = Dimensions.get('window');
const showToast = () => {
  ToastAndroid.show("Rating enviado", ToastAndroid.SHORT);
 
};



export class Ratings extends React.Component{

  componentDidMount() {
   
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }
    

 
  render() {

    return (
    <View style={{ flex: 1, marginTop:0}}>
      
      <ImageOverlay source={tec3}
                    height={height} >
                                   
          <View>

            
                   <View
                            style={{
                            
                              marginTop: '5%',
                              marginBottom:'0%',
                              marginRight:'3%',
                              marginLeft:'72%'}}>
                              <Button 
                                        onPress={() => this.props.navigation.navigate('Chat')}
                                        title=' Chat'
                                        icon={
                                                    <Icon
                                                      name="comments"
                                                      size={35}
                                                      color="white"
                                                    />
                                                  }
                                                                      
                                              >
                                          
                              </Button>
                   </View>
                   <View style={{ flex: 1, marginBottom: '1%'}}>
                                           
                        <Text style={{color: 'black',
                                backgroundColor: '#F1C40E',
                                fontSize: 20,
                                marginHorizontal: 15,
                                marginTop: '10%',
                                marginBottom: '1%',
                                fontWeight: 'bold',
                                padding: 10,
                                alignItems:'center',
                                borderRadius:5}}>Evalúe a su instalador, por favor</Text>

                    </View>

                  
                    <View style={{ marginBottom: '20%', marginTop: '0%'}}>

                                       
                        <AirbnbRating
                          useNativeDriver={true}
                          count={5}
                          reviews={["Terrible", "Malo", "OK", "Bueno", "Muy bueno"]}
                          defaultRating={11}
                          size={45}
                          showRating={true}

                        />

                  
                    </View> 


                    <View style={{ flex: 1}}>
                                           
                        <Text style={{color: 'black',
                                backgroundColor: 'white',
                                fontSize: 15,
                                height:'75%',
                                marginHorizontal: '10%',
                                margin:'10%',
                                marginTop: '0%',
                                marginBottom: '10%',
                                fontWeight: 'normal',
                                padding: 10,
                                alignItems:'center',
                                textAlign:'center',
                                borderRadius:5}}>Deje un comentario acerca de su valoración</Text>

                    </View>


                  <View style={{ marginBottom: '5%', marginTop: 10, marginLeft: '10%', marginRight: '10%'}}>



                      <Button title="   Envío rating" onPress={() =>  showToast()} 
                                                            
                              icon={
                                  <Icon
                                    name="thumbs-up"
                                    size={25}
                                    color="black"
                                  />
                                }/>
                           
                         
                 </View>

                 <View style={{ marginBottom: '30%', marginTop: 0, marginLeft: '10%', marginRight: '10%'}}>      
           
                            <Button 
                              title="  Menú principal"
                              onPress={() => this.props.navigation.navigate('Solfium')}
                         
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
    </View>

  );
}}


