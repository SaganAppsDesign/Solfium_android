import * as React from 'react';
import {Text, View, Dimensions, LogBox, ToastAndroid, KeyboardAvoidingView,
  TouchableOpacity, Image, TextInput, StyleSheet, Button} from 'react-native';
import tec3 from '../assets/fondo2.jpg';  
import ImageOverlay from "react-native-image-overlay";
import 'react-native-gesture-handler';
import Fire, {db} from '../fire';
import chat from '../assets/chat.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AirbnbRating} from 'react-native-ratings';



var {height} = Dimensions.get('window');


export class Ratings extends React.Component{

 
  state = {

    comentarios: '',
    rating:''
   

  }

  
  onChangeText = comentarios => this.setState({ comentarios });
  rating = rating => this.setState({ rating });
  ratingFire = () =>  db.ref('Usuarios/' +  Fire.getUid()).update({
    
    rating:this.state.rating
         
    })

  comentarios = () =>  db.ref('Usuarios/' +  Fire.getUid()).update({
  
    comentarios:this.state.comentarios
          
    })
 
  

 
  render() {

 

    return (

      
      <ImageOverlay source={tec3}
                    height={height}
                    overlayAlpha={0}
                    >
                                   
          <View style={{width:wp('100%'), height:hp('100%'), flex:1, alignItems:'center'}}>
                    
          
                  <View style={{marginTop:hp('3%'), marginLeft:wp('75%'), flex:1}}>   
                                                    
                          <TouchableOpacity 
                                                                                      
                          onPress={() => this.props.navigation.navigate('Chat')}
                          > 
                          <View>
                          
                                  <Image 
                              
                                  source={chat}
                                  style={{aspectRatio:1, height:hp('7%')}}
                                  
                                  >    
                                  </Image> 

                          </View>
                      
                          </TouchableOpacity> 

                    </View>
                      
                   
                <View style={{ flex: 2, marginBottom: hp('0%'),  marginTop: hp('10%'), width:wp('75%')}}>
                                        
                    <Text style={{color: 'black',
                            backgroundColor: '#F1C40E',
                            fontSize: hp('2.5%'),
                            marginBottom: hp('0%'),
                            fontWeight: 'bold',
                            padding: hp('2%'),
                            textAlign:'center',
                            borderRadius:5}}>Evalúe a su instalador, por favor</Text>

                </View>

                  
                  <View style={{ marginBottom: hp('10%'), marginTop: hp('5%'), flex: 3}}>

                                      
                      <AirbnbRating
                        useNativeDriver={true}
                        count={5}
                        reviews={["Terrible", "Malo", "OK", "Bueno", "Muy bueno"]}
                        defaultRating={4}
                        size={45}
                        showRating={true}
                        ratingBackgroundColor='red'
                        onFinishRating={this.rating}

                      />

                
                  </View> 

                  <View style={{ marginBottom: hp('5%'), marginTop:hp('0%'), flex: 1}}>

                        <Button title="Enviar rating" onPress={this.ratingFire} 
                                color='green'/>
                                            
                   </View>


                  <KeyboardAvoidingView  enabled keyboardVerticalOffset={80} behavior='position'
                       style={{alignItems:'center', height:hp('100%'), width:hp('100%'), flex:5}}>
                
                   
                    <View style={{marginBottom: hp('0%'), marginTop: hp('0%'), flex: 1}}>
                                           
                            <TextInput
                            style={styles.nameInput}
                            placeholder="Deje un comentario acerca de su valoración"
                            placeholderTextColor = "grey"
                            multiline
                            numberOfLines={5}
                            onChangeText={this.onChangeText}
                            value={this.state.comentarios}
                        
                            //inlineImageLeft='icono.'
                            //label="KWh"
                            //onChangeText={this.onChangeText}
                            //value={this.state.name}
                            //mode='outlined'
                            
                        />

                    </View>

              </KeyboardAvoidingView>

              <View style={{ marginBottom: hp('0%'), marginTop:hp('0%'), flex: 1}}>

              <Button title="Enviar Comentarios" onPress={this.comentarios} 
                      color='grey'/>
                              
             </View>



                 

                 <View style={{  marginBottom: hp('10%'), marginTop:hp('5%'), flex: 1}}>      
           
                            <Button 
                              title="Menú principal"
                              color='orange'
                              onPress={() => this.props.navigation.navigate('Ingresar Consumo')}
                         
                            
                            />
                            
                </View>

                              
                  

          </View>
      </ImageOverlay>


  );
}}


const styles = StyleSheet.create({

 
  nameInput: {
    height: hp('15%'),
    marginBottom:hp('0%'),
    width:wp('70%'),
    backgroundColor: 'white',
    fontSize: hp('2%'),
    fontWeight: 'bold',
    borderRadius: 2,
    textAlign:'center',
    color:'black'
    
   

  }
  

});
