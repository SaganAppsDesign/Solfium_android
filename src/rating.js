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
    //console.log('this.state.rating: ', this.state.rating)


    return (

      
      <ImageOverlay source={tec3}
                    height={height}
                    overlayAlpha={0}
                    >
                                   
          <View style={{width:wp('100%'), height:hp('100%'), flex:1, alignItems:'center'}}>
                    
          
                  <View style={{marginTop:hp('2%'), marginLeft:wp('75%'), flex:1}}>   
                                                    
                          <TouchableOpacity 
                                                                                      
                          onPress={() => this.props.navigation.navigate('Chat', {valor:8})}
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
                      
                   
                <View style={{  backgroundColor: '#F1C40E', borderRadius:10, flex: 3, marginBottom: hp('0%'),  marginTop: hp('5%'), width:wp('76%')}}>
                                        
                    <Text style={{color: 'black',
                           
                            fontSize: hp('2.5%'),
                            marginBottom: hp('0%'),
                            fontWeight: 'bold',
                            padding: hp('2%'),
                            textAlign:'center',
                            marginTop: hp('2%')
                            }}>Evalúe a su instalador, por favor</Text>

                </View>

                  
                  <View style={{ marginBottom: hp('3%'), marginTop: hp('5%'), flex: 3}}>

                                      
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


                   <View style={{backgroundColor: '#5DCB31',borderRadius:50, justifyContent:'center', alignItems:'center', marginTop:hp('2%'), width:hp('20%'), height:hp('100%'), flex:1}}>

                          <TouchableOpacity
                              
                            
                              onPress={() => this.ratingFire()} 
                                                  
                              >
          
                              <Text style={{
                              fontWeight:'bold',
                              fontSize:hp('2%'),
                              color: 'white', 
                              textAlign:'center',
                              textAlignVertical:'center'}}>Enviar rating</Text>
          
                          </TouchableOpacity>
                  </View>


                  <KeyboardAvoidingView  enabled keyboardVerticalOffset={80} behavior='position'
                       style={{alignItems:'center', height:hp('0%'), width:hp('100%'), flex:5, alignContent:'center', justifyContent:'center'}}>
                
                   
                    <View style={{marginBottom: hp('0%'), marginTop: hp('5%'), flex:0.5}}>
                                           
                            <TextInput
                            style={styles.nameInput}
                            placeholder="Deje un comentario acerca de su valoración"
                            placeholderTextColor = "grey"
                            multiline
                            numberOfLines={5}
                            onChangeText={this.onChangeText}
                            value={this.state.comentarios}
                            returnKeyType={ 'done' }
                        
                            //inlineImagesLeft='icono.'
                            //label="KWh"
                            //onChangeText={this.onChangeText}
                            //value={this.state.name}
                            //mode='outlined'
                            
                        />

                    </View>

                    

              </KeyboardAvoidingView>



              <View style={{backgroundColor: 'grey',borderRadius:50, justifyContent:'center', alignItems:'center', marginTop:hp('5%'), width:hp('25%'), height:hp('100%'), flex:1}}>

                    <TouchableOpacity
                        
                      
                        onPress={() => this.comentarios() } 
                                            
                        >

                        <Text style={{
                        
                        fontWeight:'bold',
                        fontSize:hp('2%'),
                        color: 'white', 
                        textAlign:'center',
                        textAlignVertical:'center'}}>Enviar comentarios</Text>

                    </TouchableOpacity>
                    </View>




                    <View style={{justifyContent:'center',  backgroundColor: 'orange',borderRadius:50, alignItems:'center', marginTop:hp('5%'),marginBottom:hp('13%'), width:hp('25%'), height:hp('100%'), flex:1}}>

                    <TouchableOpacity
                        
                      
                        onPress={() => this.props.navigation.navigate('Ingresar Consumo')} 
                                            
                        >

                        <Text style={{
                        
                        
                        fontWeight:'bold',
                        fontSize:hp('2%'),
                        color: 'white', 
                        textAlign:'center',
                        }}>Regresa al inicio</Text>

                    </TouchableOpacity>
                    </View>

          </View>
      </ImageOverlay>


  );
}}


const styles = StyleSheet.create({

 
  nameInput: {
    height: hp('10%'),
    marginBottom:hp('0%'),
    width:wp('80%'),
    backgroundColor: 'white',
    fontSize: hp('2%'),
    fontWeight: 'bold',
    borderRadius: 2,
    textAlign:'center',
    color:'black'
    
   

  }
  

});
