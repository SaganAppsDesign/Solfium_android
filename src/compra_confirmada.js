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
import backBtn from '../assets/backBtn.png'; 

estadoCliente5 = () => db.ref('Usuarios/' +  Fire.getUid()).update({
                
  estado_cliente: "Instalación realizada. Su comisión asciende a 200 MXN",
      
  })

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
  var hour = parseInt(date.slice(11,16))+2

  var opacity, bool, opacity2, estado

    if (date == ''){
    
      opacity=0
      opacity2=1
      estado="PENDIENTE DE PAGO"
     
    } else {

      opacity=1
      opacity2=0
      bool=false
      estado="COMPRA CONFIRMADA"
      
      }

    
  return (


    <ImageOverlay 
          source={tec3}
          height={hp('100%')}   
          overlayAlpha={0}                 
          > 
                              
            <View style={{flex:1, width:wp('100%'), height:hp('100%')}}>
                    
           
                      
                  {/*BODY*/}          
             
                                      
                 <View style={{alignItems: 'center', flex:6, flexDirection:'column', width:wp('100%'), height:hp('100%')}}> 
                    
                    <View style={{alignItems: 'center', flex:1.5, width:wp('100%'), height:hp('5%'), marginTop:hp('22%'), position: 'absolute' }}>
                            <ImageBackground source={require('../assets/fondo_verde.png')} style={{alignItems:'center', overflow: 'hidden', resizeMode: "cover", aspectRatio:2.2 , height:hp('19%'),  borderRadius: 10}}>
                              <Text style={{
                              color: '#fff',
                              marginTop: hp('8%'),
                              textAlign:'center',
                              height:hp('5%'),
                              fontSize:hp('3%'),
                             
                              }}>{estado}</Text>
                              <Text style={{
                              color: '#fff',
                              marginTop: hp('0%'),
                              textAlign:'center',
                              height:hp('5%'),
                              fontSize:hp('2%'),
                             
                              }}>Tarjeta de crédito/Transferencia bancaria</Text>
                          
                            </ImageBackground>
                     
                    </View>

                    <View style={{alignItems: 'center', flex:2, width:wp('100%'), height:hp('15%') }}>
                    <Image
                        style={{aspectRatio:1, height:hp('20%'), marginTop:hp('12%')}}
                        source={require('../assets/carrito.png')}
                        />
                    </View>

                     <View style={{backgroundColor:'rgba(0,255,54,0)', alignItems: 'center', flex:3,  width:wp('100%'), height:hp('5%'), marginTop:hp('40%'), marginBottom:hp('5%')}}>
                     

                     <Card containerStyle={{ marginTop: hp('0%'), borderRadius: 10, 
                     width:wp('70%'), height:hp('20%'), opacity: 1}}>
 
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
                                      
                              
                                      }}>{nombre}, tu equipo se instalará el {day}-{month}-{year} a las {hour-6} h</Text>
                              </View>

                              <Text style={{
                                      color: '#000',
                                      marginTop: hp('1%'),
                                      textAlign:'center',
                                      fontWeight:'bold',
                                      height:hp('15%'),
                                      width:wp('60%'),
                                      fontSize:hp('3%'),
                                      opacity: opacity2,
                                      
                              
                                      }}>Agenda tu instalación con nuestro experto vía chat</Text>
                     
                      </Card>

                     
                     </View>


                    </View>

                    <View style={{opacity:opacity,  marginTop:hp('10%'), marginLeft:wp('0%'), flex:2, flexDirection:'row'}}> 
                                    

                                    <View style={{marginTop:hp('0%'), marginLeft:wp('0%'), flex:3}}> 
                                            
                                            <Text style={{
                                                color: '#000',
                                                marginTop: hp('3%'),
                                                textAlign:'center',
                                                fontWeight:'bold',
                                                height:hp('5%'),
                                                width:wp('25%'),
                                                fontSize:hp('1.8%'),
                                                marginLeft:wp('55%'),
                                              
                                        
                                              }}>Valora a tu instalador</Text>
  
                                          </View>

                                      <View style={{opacity:opacity, marginTop:hp('0%'), marginLeft:wp('-10%'), flex:3}}> 
                                            
                                                <TouchableOpacity 

                                                  disabled={true}
                                                                                                      
                                                  onPress={() => this.props.navigation.navigate('Rating')}
                                                  style={{alignItems:'center',marginTop:hp('0%'), marginLeft:wp('-50%'),width:wp('40%'), height:hp('5%'), flex:1}}
                                                  > 


                                                      <Text style={{
                                                        opacity:0.3,
                                                        color: '#000',
                                                        marginTop: hp('7%'),
                                                        textAlign:'center',
                                                        fontWeight:'bold',
                                                        height:hp('10%'),
                                                        width:wp('30%'),
                                                        fontSize:hp('1.4%'),
                                                        marginLeft:wp('0%'),
                                                      
                                                
                                                      }}>¿Algún problema durante tu instalación? Click aquí</Text>

                                                  </TouchableOpacity> 

                                        </View>
                                            
                   
                                                  
                                          <TouchableOpacity 

                                                  disabled={bool}
                                                  onPress = {() => {this.props.navigation.navigate('Rating');estadoCliente5()}}  
                                                  style={{alignItems:'center',marginTop:hp('0%'), marginLeft:wp('-60%'),width:wp('40%'), height:hp('5%'), flex:1}}
                                          > 

                                        
                                          <View> 

                                            <Image 
                                        
                                            source={star}
                                            style={{opacity:opacity, aspectRatio:1, height:hp('8%')}}
                                            
                                            >    
                                            </Image> 
                      
                                        </View>
                                    
                                        </TouchableOpacity> 
 
                                      
                               </View>

          { /* LOGO*/}
  
          <View style={{alignItems:'center', flex:0.2, marginTop:hp('0%')}}>  
          
          <Image 
            
            source={logo}
            style={{aspectRatio:4.5,  height:hp('5%')}}
            
            >    
          </Image>  

         </View> 


         {/* header */}              
           {/*Botones*/}     
           <View style={{opacity: 1, alignItems:'center', flex:1.5,  justifyContent:'center', flexDirection:'row', marginBottom:hp('0%'),marginTop:hp('3%')}}>  
                         

                         <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                            <TouchableOpacity 
                                                                                         
                               onPress={() => this.props.navigation.navigate('Pago único')}
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

                         <View style={{alignItems:'center', flex:1, justifyContent:'center'}}>   
                                          
                                          <TouchableOpacity 

                                          disabled={bool}
                                                                                                      
                                          onPress={() => this.props.navigation.navigate('Chat',  {valor: 7})}
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

  this.setState({fecha: snapshot.child("fechaInstalacion").val() || '' ,
                 username: snapshot.child("name").val() || '' })    

 
}
)

}
}


