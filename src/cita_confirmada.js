import * as React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ToastAndroid} from 'react-native';
import fondo from '../assets/fondo5.jpg';  
import chat from '../assets/chat.png';
import ImageOverlay from "react-native-image-overlay";
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import ok from '../assets/ok.png'; 
import { Button, Card } from 'react-native-elements';
import logo from '../assets/logo.png'; 
import codigo_qr from '../assets/codigo_qr.png'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import  Fire , {db} from '../fire';


var {height} = Dimensions.get('window');

const user = () => {
  ToastAndroid.show("Perfil usuario", ToastAndroid.SHORT);
 
};

const settings = () => {
  ToastAndroid.show("Settings", ToastAndroid.SHORT);
 
};



export class CitaConfirmada extends React.Component {

  state = {
    cita: '',
    username: '',
    visita:'',
    nombre_instalador:''
  }

  
  
  render() {

    //console.log('this.state.nombre_instalador', this.state.nombre_instalador)

    var name = this.state.username
    var nombre = name.toUpperCase()

    var date = this.state.cita
    var year = date.slice(0, 4)
    var month = date.slice(5, 7)
    var day = date.slice(8,10)
    var hour = date.slice(11,16)

    var visita = this.state.visita
    var bool, opacity
    
    if (visita == 'Sin estado'){
            
          bool=true
          opacity=0
    } else {

          bool=false
          opacity=1
    }
    
   

  return (

       
      <ImageOverlay source={fondo}
                    height={height}  
                    overlayAlpha={0}                 
                    >
                   
                  <View style={{width:wp('100%'), height:hp('100%'), flex:1}}>
                              
                  <View style={{marginTop:hp('3%'), marginLeft:wp('75%'), flex:1}}>   
                                          
                  <TouchableOpacity 
                                                                              
                  onPress={() => this.props.navigation.navigate('Chat')}
                  > 
                  <View>
                  
                          <Image 
                      
                          source={chat}
                          style={{aspectRatio:1, height:hp('10%')}}
                          
                          >    
                          </Image> 

                  </View>
              
                  </TouchableOpacity> 

                  </View>


                    <View style={{alignItems: 'center', marginTop: hp('1%'), flex:5}}>
                         
                      <Card containerStyle={{backgroundColor:'white', borderRadius: 15, 
                            width:wp('75%'), height:hp('35%')}}>
                            
                            <View >

                            <Text style={{color: '#E53D18',
                                    backgroundColor: 'white',
                                    fontSize: hp('2.5%'),
                                    marginBottom: hp('0.5%'),
                                    fontWeight: 'bold',
                                    padding: hp('0.5%'),
                                    textAlign: 'center',
                                     }}>CITA CONFIRMADA, {nombre}</Text>

                              <Text style={{color: 'black',
                                    backgroundColor: 'white',
                                    fontSize:hp('3%'),
                                    marginHorizontal:  wp('5%'),
                                    marginBottom: hp('0.5%'),
                                    fontWeight: 'bold',
                                    padding: hp('1%'),
                                    textAlign: 'center',
                                    }}>El {day}-{month}-{year} a las {hour} h</Text>

                                     {/*  Foto y descripción instalador */}

                                    <View style={{flexDirection:'row', width:wp('70%'), height:hp('45%')}}>
                          
                                    <View style={{flex:5}}>
      
                                        <Image
                                        style={{borderRadius:60 , aspectRatio:1, height:hp('15%'), marginLeft:wp('4%'), marginTop: hp('0%'), borderWidth:1, borderColor:'black'}}
                                        source={require('../assets/tecnico.jpg')}
                                        />
                                    </View> 
      
                                    <View style={{flex:4, marginRight:wp('4%')}}>
                                            <Text style={{color: '#000',
                                                  backgroundColor: 'white',
                                                  marginTop: hp('2%'),
                                                  }}>
      
                                                 <Text style={{fontSize:hp('2%')}}>Técnico asignado:</Text>
                                                 <Text>{`
                                                         `}</Text>
      
                                                 <Text style={{fontWeight: "bold", fontSize: hp('2%')}}>{this.state.nombre_instalador}</Text>
                                                 
                                          
                                          </Text>
                                    
                                    </View>
      
                                </View>
 
                          </View>
                            

                         </Card>
                              

    </View>

    {/*Botone QR*/} 

    <View style={{ flex:2, flexDirection:'row', width:wp('100%'), opacity:opacity}}>  
    
          <TouchableOpacity 

          disabled={bool} 
                                                  
          onPress={() => this.props.navigation.navigate('Escanear QR Instalador')}
            > 
            <View style={{marginLeft:hp('7%'),flex:1}}>
            
                      <Image 
                        source={codigo_qr}
                        style={{aspectRatio:1, height:hp('20%')}}
                                    
                      >    
                      </Image> 

          </View>
          
          </TouchableOpacity> 


          <View style={{flex:1, marginRight:wp('5%')}}>
          <Text style={{color: '#fff',
                
                marginTop: hp('3%'),   
                          
                fontWeight:'bold'
                }}>

                <Text style={{fontSize: hp('2.5%')}}>Escanee código QR presentado por el técnico para confirmar su identidad.</Text>

              </Text>

            </View>

   </View>
    

     
      {/*Botones*/}     
      <View style={{marginTop:hp('9%'),   alignItems:'center', flex:1,  justifyContent:'center', flexDirection:'row'}}>  
                         
      <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
          <TouchableOpacity 
                                                                       
          onPress={() => this.props.navigation.navigate('Ingresar Consumo')}
            > 
                                  
             <Image 
             
             source={home}
             style={{aspectRatio:1, height:hp('9%')}}
             
             >    
             </Image> 

                           
         </TouchableOpacity> 

      </View>

     <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
         <TouchableOpacity 
                                                                      
         onPress={() => user()}
           > 
                                 
            <Image 
            
            source={usuario}
            style={{aspectRatio:1, height:hp('9%')}}
            
            >    
            </Image> 

                          
        </TouchableOpacity> 

       </View>

       <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
       
       <TouchableOpacity 
                                                                      
         onPress={() => settings()}
           > 
                                 
            <Image 
            
            source={setting}
            style={{aspectRatio:1, height:hp('9%')}}
            
            >    
            </Image> 

                          
        </TouchableOpacity> 

       </View>

            

     </View>
     
     
     { /* LOGO*/}

     <View style={{alignItems:'center', justifyContent:'center', flex:1}}>  
     
     <Image 
       
       source={logo}
       style={{aspectRatio:4.5, height:hp('5%'), marginBottom:hp('3.5%')}}
       
       >    
     </Image>  

    </View> 
{/*FIN LOGO*/}      
         
</View>

</ImageOverlay>
   

  )}

  componentDidMount() {


    const ref = db.ref('/Usuarios/' +  Fire.getUid());

    this.listener = ref.on("value", snapshot => {
  
    this.setState({cita: snapshot.child("cita").val() || '' ,
                   username: snapshot.child("name").val() || '',
                   visita: snapshot.child("visita").val() || '',
                   nombre_instalador: snapshot.child("nombre_instalador").val() || ''
                  
                  
                  })    
 
   
  }
  )

}
}



