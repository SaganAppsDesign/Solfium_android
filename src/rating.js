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
                    
          
            {/* header */}              
           {/*Botones*/}     
           <View style={{backgroundColor:"orange", opacity: 1, alignItems:'center', flex:0.6,  justifyContent:'center', flexDirection:'row', marginBottom:hp('0%'),marginTop:hp('3%')}}>  
                         

                         <View  style={{ textAlign:'center', borderRadius:5, marginLeft:wp('2%'), backgroundColor:'#E36239', alignItems:'center',justifyContent:'center', flex:0.5,  opacity:1}}>
                            <TouchableOpacity 
                                                                                         
                               onPress={() => this.props.navigation.navigate('Confirmar compra')}
                              > 
                                                    
                              {/*  <Image 
                               
                               source={home}
                               style={{aspectRatio:1, height:hp('5%')}}
                               
                               >    
                               </Image>  */}

                               <Text style={{color: 'black',
                              
                               fontSize:hp('2.2%'),
                               textAlign:'center',
                               height:hp('3%'),
                               width:wp('100%'),
                               }}>Back</Text>

       
                                             
                           </TouchableOpacity> 
       
                        </View>

                        <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                            <TouchableOpacity 
                                                                                         
                               onPress={() => this.props.navigation.navigate('Ingresar Consumo')}
                              > 
                                                    
                               <Image 
                               
                               source={home}
                               style={{aspectRatio:1, height:hp('5%')}}
                               
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
                              style={{aspectRatio:1, height:hp('5%')}}
                              
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
                              style={{aspectRatio:1, height:hp('5%')}}
                              
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
                                                  style={{aspectRatio:1, height:hp('5%')}}
                                                  
                                                  >    
                                                  </Image> 
                        
                                          </View>
                                      
                                          </TouchableOpacity> 
                        
                                          </View>
       
                              
       
                       </View>
                     
                     
                     {/* FIN header */}  
                      
                <View style={{flex: 9, width:wp('100%'), alignItems:'center'}}>   
                <View style={{  backgroundColor: '#F1C40E', borderRadius:10, flex: 2, marginBottom: hp('0%'),  marginTop: hp('5%'), width:wp('76%')}}>
                                        
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
                
                   
                    <View style={{marginBottom: hp('0%'), marginTop: hp('5%'), flex:0.5}}>
                                           
                            <TextInput
                            style={styles.nameInput}
                            placeholder="Deje un comentario acerca de su valoración"
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
    width:wp('80%'),
    backgroundColor: 'white',
    fontSize: hp('2%'),
    fontWeight: 'bold',
    borderRadius: 2,
    textAlign:'center',
    color:'black'
    
   

  }
  

});
