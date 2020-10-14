import * as React from 'react';
import {Text, View,Image, ImageBackground, TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native';
import { Button, Card} from 'react-native-elements';
import ImageOverlay from "react-native-image-overlay";
import tec3 from '../assets/fondo6.jpg'; 
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import logo from '../assets/logo.png'; 
import star from '../assets/star.png'; 
import chat from '../assets/chat.png';
import  Fire , {db} from '../fire';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const user = () => {
  ToastAndroid.show("Perfil usuario", ToastAndroid.SHORT);
 
};

const settings = () => {
  ToastAndroid.show("Settings", ToastAndroid.SHORT);
 
};




export class CompraConfirmada extends React.Component {
  state = {
    fecha: '',
    username: ''
  }

 render() {

  var name = this.state.username
  var nombre = name.toUpperCase();

  var date = this.state.fecha
  var year = date.slice(0, 4);
  var month = date.slice(5, 7);
  var day = date.slice(8,10);
  var hour = date.slice(11,16);

  var opacity

    if (date == ''){
    
      opacity=0
     
    } else {

      opacity=1
      }

    
  return (


    <ImageOverlay 
          source={tec3}
          height={hp('100%')}   
          overlayAlpha={0}                 
          > 
                              
            <View style={{flex:1, width:wp('100%'), height:hp('100%')}}>
                    
                 {/*Chat*/}
                  <View style={{marginTop:hp('2%'), marginLeft:wp('80%'), flex:1}}>   
                                                
                      <TouchableOpacity 
                                                                                  
                      onPress={() => this.props.navigation.navigate('Chat')}
                      > 
                      <View>
                      
                              <Image 
                          
                              source={chat}
                              style={{aspectRatio:1, height:hp('8%')}}
                              
                              >    
                              </Image> 

                      </View>
                  
                      </TouchableOpacity> 

                  </View>
                      
                  {/*BODY*/}          
             
                                      
                 <View style={{alignItems: 'center', flex:6, flexDirection:'column', width:wp('100%'), height:hp('100%')}}> 
                    
                    <View style={{alignItems: 'center', flex:1.5, width:wp('100%'), height:hp('5%'), marginTop:hp('13%'), position: 'absolute' }}>
                            <ImageBackground source={require('../assets/fondo_verde.png')} style={{alignItems:'center', overflow: 'hidden', resizeMode: "cover", aspectRatio:2.2 , height:hp('19%'),  borderRadius: 10}}>
                              <Text style={{
                              color: '#fff',
                              marginTop: hp('8%'),
                              textAlign:'center',
                              height:hp('5%'),
                              fontSize:hp('3%'),
                             
                              }}>COMPRA CONFIRMADA</Text>
                          
                            </ImageBackground>
                     
                    </View>

                    <View style={{alignItems: 'center', flex:2, width:wp('100%'), height:hp('15%') }}>
                    <Image
                        style={{aspectRatio:1, height:hp('20%'), marginTop:hp('2%')}}
                        source={require('../assets/carrito.png')}
                        />
                    </View>

                     <View style={{backgroundColor:'rgba(0,255,54,0)', alignItems: 'center', flex:3,  width:wp('100%'), height:hp('5%'), marginTop:hp('28%'), marginBottom:hp('5%')}}>
                     

                     <Card containerStyle={{ marginTop: hp('0%'), borderRadius: 10, 
                     width:wp('70%'), height:hp('20%'), opacity: opacity}}>
 
                             <View style={{ marginTop:hp('0%'), marginLeft:wp('0%'), flex:1}}>      
                                    <Text style={{
                                      color: '#000',
                                      marginTop: hp('1%'),
                                      textAlign:'center',
                                      fontWeight:'bold',
                                      height:hp('15%'),
                                      width:wp('60%'),
                                      fontSize:hp('3%'),
                                      opacity: opacity,
                                      
                              
                                      }}>{nombre}, su equipo se instalará el {day}-{month}-{year} a las {hour} h</Text>
                              </View>

                              
                     
                      </Card>

                     
                     </View>


                    </View>

                    <View style={{ marginTop:hp('1%'), marginLeft:wp('0%'), flex:1, flexDirection:'row'}}> 
                                    
                                      <View style={{marginTop:hp('0%'), marginLeft:wp('0%'), flex:3}}> 
                                            
                                          <Text style={{
                                              color: '#000',
                                              marginTop: hp('5%'),
                                              textAlign:'center',
                                              fontWeight:'bold',
                                              height:hp('5%'),
                                              width:wp('25%'),
                                              fontSize:hp('1.8%'),
                                              marginLeft:wp('50%'),
                                            
                                      
                                            }}>Valore a su instalador</Text>

                                        </View>
                                            
                   
                                                  
                                        <TouchableOpacity 
                                                                                                    
                                                onPress={() => this.props.navigation.navigate('Rating')}
                                                style={{alignItems:'center',marginTop:hp('0%'), marginLeft:wp('-50%'),width:wp('40%'), height:hp('5%'), flex:1}}
                                        > 

                                        
                                          <View> 

                                            <Image 
                                        
                                            source={star}
                                            style={{aspectRatio:1, height:hp('8%')}}
                                            
                                            >    
                                            </Image> 
                      
                                        </View>
                                    
                                        </TouchableOpacity> 
 
                                      
                               </View>

 
         
              
            
         
            {/*Botones*/}     
           <View style={{ marginTop:hp('2%'), alignItems:'center', flex:1.5,   flexDirection:'row'}}>  
                         
           <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
               <TouchableOpacity 
                                                                            
               onPress={() => this.props.navigation.navigate('Ingresar Consumo')}
                 > 
                                       
                  <Image 
                  
                  source={home}
                  style={{aspectRatio:1, height:hp('8%')}}
                  
                  >    
                  </Image> 

                                
              </TouchableOpacity> 

           </View>

          <View  style={{alignItems:'center', flex:1,  justifyContent:'center', opacity:0.5}}>
              <TouchableOpacity 
                                                                           
              //onPress={() => user()}
                > 
                                      
                 <Image 
                 
                 source={usuario}
                 style={{aspectRatio:1, height:hp('8%')}}
                 
                 >    
                 </Image> 

                               
             </TouchableOpacity> 

            </View>

            <View  style={{alignItems:'center', flex:1,  justifyContent:'center', opacity:0.5}}>
            
            <TouchableOpacity 
                                                                           
              //onPress={() => settings()}
                > 
                                      
                 <Image 
                 
                 source={setting}
                 style={{aspectRatio:1, height:hp('8%')}}
                 
                 >    
                 </Image> 

                               
             </TouchableOpacity> 

            </View>

                 

          </View>
          
          
          { /* LOGO*/}
  
          <View style={{alignItems:'center', flex:2}}>  
          
          <Image 
            
            source={logo}
            style={{aspectRatio:4.5,  height:hp('4%')}}
            
            >    
          </Image>  

         </View> 
       

         </View>

    </ImageOverlay> 

  )
}

componentDidMount() {


  const ref = db.ref('/Usuarios/' +  Fire.getUid());

  this.listener = ref.on("value", snapshot => {

  this.setState({fecha: snapshot.child("fechaInstalacion").val() || '' ,
                 username: snapshot.child("name").val() || '' })    

 
}
)

}
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    height:'100%',
        
  },

  logo: {
    
    width: "20%",
    height: "50%",
    marginBottom: "10%",
    marginTop: "2%",
    marginLeft: "59%",
    marginRight: "0%"
    
    
  },

  boton: {
        
     height: '55%', 
     width:'100%',
     borderRadius:20,
     fontWeight:'bold',
     fontSize:15,
     color: 'white', 
     marginBottom: "0%", 
     marginTop: "0%", 
     marginLeft: "0%", 
     marginRight: "0%",
     alignItems: "center",
     paddingLeft:40, 
     paddingRight:40,
     backgroundColor: '#5DCB31',
     textAlignVertical:'center'
    
    
  },

  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },



 



  

});