import * as React from 'react';
import {View, Dimensions, KeyboardAvoidingView,
  TouchableOpacity, Image, TextInput, StyleSheet} from 'react-native';
import tec3 from '../assets/fondo6.jpg';  
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
import rating2 from '../assets/rating2.png'; 
import rating from '../assets/rating.png'; 



var {height} = Dimensions.get('window');
var bool3, opacity, opacity2

export class Ratings extends React.Component{

 
  state = {

    comentarios: '',
    rating:'',
    ratingFire:'',
    bool:'',
    opacity:''
  }

  onChangeText = comentarios => this.setState({ comentarios });

  rating = rating => this.setState({ rating });
  
  ratingFire = () =>  {  
    
    opacity2=0.5
    opacity=0
    bool3=true
    
    db.ref('Usuarios/' +  Fire.getUid()).update({
    
    rating:this.state.rating,
    comentarios:this.state.comentarios
    
         
    })

    alert("Muchas gracias por enviarnos tu opinión")
      
   
   }
 
   

  comentarios = () =>  db.ref('Usuarios/' +  Fire.getUid()).update({
  
    comentarios:this.state.comentarios
          
    })
 
  

 
  render() {
    
 
 var rating3 = this.state.rating

    if (rating3 >= 1 && rating3<= 5) {

      opacity = 1
      bool=false
      bool2=true

    } else {

      opacity = 0.1
      bool=true
      bool2=false

    }
  

    return (

      
      <ImageOverlay source={tec3}
                    height={height}
                    overlayAlpha={0}
                    >
                                   
          <View style={{width:wp('100%'), height:hp('100%'), flex:1, alignItems:'center'}}>
                    
          
          
                      
                <View style={{flex: 9, width:wp('100%'), alignItems:'center'}}>   
                <View style={{alignItems:'center', flex: 3, marginBottom: hp('0%'),  marginTop: hp('10%'), width:wp('100%')}}>
                                        
                              <Image 
                                
                                source={rating}
                                style={{aspectRatio:1.8, height:hp('21%')}}
                                
                                >    
                                </Image>

                </View>

                  
                  <View style={{ marginBottom: hp('3%'), marginTop: hp('10%'), flex: 1}}>

                                      
                      <AirbnbRating
                        useNativeDriver={true}
                        count={5}
                        reviews={["Terrible", "Malo", "OK", "Bueno", "Muy bueno"]}
                        defaultRating={0}
                        size={45}
                        showRating={true}
                        ratingBackgroundColor='red'
                        onFinishRating={this.rating}

                      />

                
                  </View> 


                  <KeyboardAvoidingView  
                       behavior={Platform.OS == "ios" ? "padding" : "height"}
                       style={{alignItems:'center', height:hp('0%'), width:hp('100%'), flex:5, alignContent:'center', justifyContent:'center'}}>
                
                   
                    <View style={{opacity:opacity,marginBottom: hp('0%'), marginTop: hp('8%'), flex:1}}>
                                           
                            <TextInput
                            style={styles.nameInput}
                            placeholder="Deja un comentario si lo deseas"
                            placeholderTextColor = "grey"
                            onChangeText={this.onChangeText}
                            value={this.state.comentarios}
                            returnKeyType={ 'done' }
                            editable={bool2}
                        
                           
                            
                        />

                    </View>

                    

              </KeyboardAvoidingView>



                 <View style={{opacity:opacity2,  borderRadius:50, justifyContent:'center', alignItems:'center', marginBottom:hp('10%'), width:hp('25%'), height:hp('100%'), flex:1}}>

                    <TouchableOpacity

                      disabled={bool3}
                        
                      
                        onPress={() => this.ratingFire()} 
                                            
                        >

                              <Image 
                                
                                source={rating2}
                                style={{aspectRatio:4, height:hp('8%')}}
                                
                                >    
                                </Image>

                    </TouchableOpacity>
                    </View>


                    </View>

            {/* footer */}              
           {/*Botones*/}     
           <View style={{opacity: 1, alignItems:'center', flex:1.5,  justifyContent:'center', flexDirection:'row', marginBottom:hp('0%'),marginTop:hp('3%')}}>  
                         

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
                     {/* FIN footer */}  
               
          </View>
      </ImageOverlay>


  )

 
}

componentDidMount() {

//Consulta a BBDD
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
    backgroundColor: 'black',
    fontSize: hp('2%'),
    fontWeight: 'bold',
    borderRadius: 20,
    textAlign:'center',
    color:'white'
    
   

  }
  

});
