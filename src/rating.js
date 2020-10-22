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
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import backBtn from '../assets/backBtn.png'; 




var {height} = Dimensions.get('window');
var bool, opacity

export class Ratings extends React.Component{

 
  state = {

    comentarios: '',
    rating:'',
    ratingFire:''
  }

  onChangeText = comentarios => this.setState({ comentarios });
  rating = rating => this.setState({ rating });
  
  ratingFire = () =>  {


    
    db.ref('Usuarios/' +  Fire.getUid()).update({
    
    rating:this.state.rating
         
    })

    
   }
 
   

  comentarios = () =>  db.ref('Usuarios/' +  Fire.getUid()).update({
  
    comentarios:this.state.comentarios
          
    })
 
  

 
  render() {
    

  

    if (this.state.ratingFire == "") {

      opacity = 1
      bool=false

    } else {

      opacity = 0.1
      bool=true

    }
  

    return (

      
      <ImageOverlay source={tec3}
                    height={height}
                    overlayAlpha={0}
                    >
                                   
          <View style={{width:wp('100%'), height:hp('100%'), flex:1, alignItems:'center'}}>
                    
          
          
                      
                <View style={{flex: 9, width:wp('100%'), alignItems:'center'}}>   
                <View style={{  backgroundColor: '#F1C40E', borderRadius:10, flex: 3, marginBottom: hp('0%'),  marginTop: hp('15%'), width:wp('76%')}}>
                                        
                    <Text style={{color: 'black',
                           
                            fontSize: hp('2%'),
                            marginBottom: hp('0%'),
                            fontWeight: 'bold',
                            padding: hp('2%'),
                            textAlign:'center',
                            marginTop: hp('2%')
                            }}>Evalúa a tu instalador, por favor</Text>

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


                   <View style={{opacity:opacity, backgroundColor: '#5DCB31',borderRadius:50, justifyContent:'center', alignItems:'center', marginTop:hp('2%'), width:hp('20%'), height:hp('100%'), flex:1}}>

                          <TouchableOpacity
                              
                            
                              onPress={() => this.ratingFire()} 
                              disabled={bool}
                                                  
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
                
                   
                    <View style={{marginBottom: hp('0%'), marginTop: hp('5%'), flex:1}}>
                                           
                            <TextInput
                            style={styles.nameInput}
                            placeholder="Deja un comentario acerca de tu valoración"
                            placeholderTextColor = "grey"
                            //multiline
                            //numberOfLines={5}
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



                 <View style={{backgroundColor: 'grey',borderRadius:50, justifyContent:'center', alignItems:'center', marginBottom:hp('10%'), width:hp('25%'), height:hp('100%'), flex:1}}>

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


                    </View>

            {/* header */}              
           {/*Botones*/}     
           <View style={{backgroundColor:'#FFBC7D',  opacity: 1, alignItems:'center', flex:1.5,  justifyContent:'center', flexDirection:'row', marginBottom:hp('0%'),marginTop:hp('3%')}}>  
                         

                         <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                            <TouchableOpacity 
                                                                                         
                               onPress={() => this.props.navigation.navigate('Confirmar compra')}
                              > 
                                                    
                               <Image 
                                
                                source={backBtn}
                                style={{aspectRatio:1, height:hp('6%')}}
                                
                                >    
                                </Image>
       
                                             
                           </TouchableOpacity> 
       
                        </View>

                        <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                            <TouchableOpacity 
                                                                                         
                               onPress={() => this.props.navigation.navigate('Ingresar Consumo')}
                              > 
                                                    
                               <Image 
                               
                               source={home}
                               style={{aspectRatio:1, height:hp('6%')}}
                               
                               >    
                               </Image> 
       
                                             
                           </TouchableOpacity> 
       
                        </View>
       
                       <View  style={{alignItems:'center', flex:1,  justifyContent:'center',  opacity:0.5}}>
                           <TouchableOpacity 
                                                                                        
                           //onPress={() => user()}
                             > 
                                                   
                              <Image 
                              
                              source={usuario}
                              style={{aspectRatio:1, height:hp('6%')}}
                              
                              >    
                              </Image> 
       
                                            
                          </TouchableOpacity> 
       
                         </View>
       
       
       
                         <View  style={{alignItems:'center', flex:1,  justifyContent:'center',  opacity:0.5}}>
                         
                         <TouchableOpacity 
                                                                                        
                           //onPress={() => settings()}
                             > 
                                                   
                              <Image 
                              
                              source={setting}
                              style={{aspectRatio:1, height:hp('6%')}}
                              
                              >    
                              </Image> 
       
                                            
                          </TouchableOpacity> 
       
                         </View>

                         <View style={{alignItems:'center', flex:1,  justifyContent:'center'}}>   
                                          
                                          <TouchableOpacity 
                                                                                                      
                                          onPress={() => this.props.navigation.navigate('Chat',  {valor: 8})}
                                          > 
                                          <View>
                                          
                                                  <Image 
                                              
                                                  source={chat}
                                                  style={{aspectRatio:1, height:hp('6%')}}
                                                  
                                                  >    
                                                  </Image> 
                        
                                          </View>
                                      
                                          </TouchableOpacity> 
                        
                                          </View>
       
                              
       
                       </View>
                     
                     
                     {/* FIN header */}  

                    
          </View>
      </ImageOverlay>


  )

 
}

componentDidMount() {


  const ref = db.ref('/Usuarios/' +  Fire.getUid());

  this.listener = ref.on("value", snapshot => {

  this.setState({ ratingFire: snapshot.child("rating").val() || '',
                       
                })    

 
}
)


}
}


const styles = StyleSheet.create({

 
  nameInput: {
    height: hp('10%'),
    marginBottom:hp('0%'),
    width:wp('85%'),
    backgroundColor: 'white',
    fontSize: hp('1.5%'),
    fontWeight: 'bold',
    borderRadius: 4,
    textAlign:'center',
    color:'black'
    
   

  }
  

});
