import * as React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import fondo from '../assets/fondo5.jpg';  
import chat from '../assets/chat.png';
import ImageOverlay from "react-native-image-overlay";
import 'react-native-gesture-handler';
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import { Card } from 'react-native-elements';
import logo from '../assets/logo.png'; 
import codigo_qr from '../assets/codigo_qr.png'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import  Fire , {db} from '../fire';
import backBtn from '../assets/backBtn.png';


var {height} = Dimensions.get('window')


export class CitaConfirmada extends React.Component {

  state = {
    cita: '',
    username: '',
    visita:'',
    nombre_instalador:'',
    codigo_instalador:''
  }

  
  
  render() {
    

    var name = this.state.username
    var nombre = name.toUpperCase()

    var date = this.state.cita
    var year = date.slice(0, 4)
    var month = date.slice(5, 7)
    var day = date.slice(8,10)
    var hour = parseInt(date.slice(11,13))
    var min = date.slice(13,16)
 

    var visita = this.state.visita
    var bool, opacity
    
    //Activar botón, si se confirma visita por parte del instalador en la BBDD
    if (visita == ''){
            
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

                    <View style={{alignItems: 'center', marginTop: hp('10%'), flex:3.5}}>
                         
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
                                     }}>CITA CONFIRMADA CON {nombre}</Text>

                              <Text style={{color: 'black',
                                    backgroundColor: 'white',
                                    fontSize:hp('3%'),
                                    marginHorizontal:  wp('5%'),
                                    marginBottom: hp('0.5%'),
                                    fontWeight: 'bold',
                                    padding: hp('1%'),
                                    textAlign: 'center',
                                    }}>El {day}-{month}-{year} a las {hour}{min} h</Text>

                                     {/*  Foto y descripción instalador */}

                                    <View style={{flexDirection:'row', width:wp('70%'), height:hp('45%')}}>
                          
                                    <View style={{flex:5}}>
      
                                        <Image
                                        style={{borderRadius:60 , aspectRatio:1, height:hp('14%'), marginLeft:wp('4%'), marginTop: hp('0%'), borderWidth:1, borderColor:'black'}}
                                        source={require('../assets/tecnico.jpg')}
                                        />
                                    </View> 
      
                                    <View style={{flex:4, marginRight:wp('2%')}}>
                                            <Text style={{color: '#000',
                                                  backgroundColor: 'white',
                                                  marginTop: hp('2%'),
                                                  }}>
      
                                                 <Text style={{fontSize:hp('2%')}}>Experto asignado:</Text>
                                                 <Text>{`
                                                         `}</Text>
      
                                                 <Text style={{fontWeight: "bold", fontSize: hp('2%')}}>{this.state.codigo_instalador.toUpperCase()}</Text>
                                                 
                                          
                                          </Text>
                                    
                                    </View>
      
                                </View>
 
                          </View>
                            

                         </Card>
                              

    </View>

    {/*Botone QR*/} 

    <View style={{flex:2, flexDirection:'row', width:wp('100%'), opacity:opacity, alignItems:'center'}}>  
    
          <TouchableOpacity 

          disabled={bool} 
                                                  
          onPress={() => this.props.navigation.navigate('Escanear QR Instalador')}
            > 
            <View style={{flex:1}}>
            
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

                <Text style={{fontSize: hp('2.2%')}}>Escanee código QR presentado por el experto para confirmar su identidad</Text>

              </Text>

            </View>

   </View>
    

     { /* LOGO*/}

     <View style={{alignItems:'center', flex:0.3, marginTop:hp('5%')}}>  
     
     <Image 
       
       source={logo}
       style={{aspectRatio:4.5, height:hp('6%')}}
       
       >    
     </Image>  

    </View> 
{/*FIN LOGO*/} 

{/* footer */}              
{/*Botones*/}     
  <View style={{opacity: 1, alignItems:'center', flex:1,  justifyContent:'center', flexDirection:'row', marginBottom:hp('0%'),marginTop:hp('3%')}}>  
                

                <View  style={{ alignItems:'center', flex:1,  justifyContent:'center'}}>
                  <TouchableOpacity 
                                                                                
                      onPress={() => this.props.navigation.navigate('Chat')}
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
                                                                              
                
                    > 
                                          
                    <Image 
                    
                    source={setting}
                    style={{aspectRatio:1, height:hp('6%')}}
                    
                    >    
                    </Image> 

                                  
                </TouchableOpacity> 

                </View>

                <View style={{alignItems:'center',  justifyContent:'center',  flex:1 }}>   
                                
                          <TouchableOpacity 
                                                                                      
                          onPress={() => this.props.navigation.navigate('Chat',  {valor: 0})}
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
   

  )}

  

  componentDidMount() {

    //Consulta a la BBDD y cambio de estado de las variables

    const ref = db.ref('/Usuarios/' +  Fire.getUid());

    this.listener = ref.on("value", snapshot => {
  
    this.setState({cita: snapshot.child("cita").val() || '' ,
                   username: snapshot.child("name").val() || '',
                   visita: snapshot.child("visita").val() || '',
                   codigo_instalador: snapshot.child("codigo_instalador").val() || '',
                   nombre_instalador: snapshot.child("nombre_instalador").val() || ''
                   
                  
                  })    
 
                  
  }
  )

   


}
}



