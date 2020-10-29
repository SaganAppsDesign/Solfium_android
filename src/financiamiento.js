import * as React from 'react';
import {Text, View, Image, ImageBackground, TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import tec3 from '../assets/fondo6.jpg'; 
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import logo from '../assets/logo.png'; 
import chat from '../assets/chat.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import backBtn from '../assets/backBtn.png';
import {db} from '../fire';
import Fire from '../fire';

var potenciaFinal
var factor24= 1.14
var factor36= 1.21
var factor48= 1.28
var factor60= 1.35


//console.log("text12",text12)

const financiacion = (factor, meses) => {
 
  var finam = new Intl.NumberFormat('de-DE').format(Math.trunc(potenciaFinal/meses*factor))

  return finam
 
}




export class Financiamiento extends React.Component {

  state = {
    potenciaSistema: '',
   
  }


 render() {

  potenciaFinal =this.state.potenciaSistema
  console.log("financiacion",financiacion(factor60,60))

  return (


    <ImageOverlay 
          source={tec3}
          height={hp('100%')}   
          overlayAlpha={0}                 
          > 
                              
          <View style={{flex:1, width:wp('100%'), height:hp('100%')}}>
                    
           
                      
                  {/*BODY*/}          
                  {/* TOTAL */}     
                                      
                 <View style={{alignItems: 'center', flex: 1, flexDirection:'column', width:wp('100%'), height:hp('100%')}}> 
                    
                    <View style={{alignItems: 'center', flex:1, width:wp('100%'), height:hp('5%'), marginTop:hp('22%'), position: 'absolute' }}>
                            <ImageBackground source={require('../assets/fondo2.jpg')} style={{alignItems:'center', overflow: 'hidden', resizeMode: "cover", aspectRatio:2.5, height:hp('15%'),  borderRadius: 10}}>
                              <Text style={{
                              color: '#fff',
                              marginTop: hp('5%'),
                              textAlign:'center',
                              height:hp('5%'),
                              fontSize:hp('4%'),
                              }}>FINANCIAMIENTO</Text>
                           
                            </ImageBackground>
                     
                    </View>

                    <View style={{alignItems: 'center', flex:2, width:wp('100%'), height:hp('15%') }}>
                    <Image
                        style={{aspectRatio:1, height:hp('20%'), marginTop:hp('9%')}}
                        source={require('../assets/carrito.png')}
                        />
                    </View>

                    <View style={{alignItems: 'center', flex:2,  width:wp('100%'), height:hp('100%'), marginTop:hp('1%')}}>
                     
                        <View style={{alignItems: 'center', flex:3,  width:wp('100%'), height:hp('100%'), marginTop:hp('0%')}}>
                        <TouchableOpacity
                          
                          //onPress={() => this.props.navigation.navigate('Pago único')} 
                                              
                          >
                          <ImageBackground source={require('../assets/boton_naranja.png')} style={{opacity:0.6, justifyContent:'center',overflow: 'hidden', resizeMode: "cover", aspectRatio:4, height:hp('7%'),   borderRadius: 10}}>
                                  
                                <Text style={{
                                  color: '#fff',
                                  textAlign:'center',
                                  fontWeight:'bold',
                                  fontSize:wp('3.5%'),
                                 }}>24 mesualidades de {financiacion(factor24,24)} MXN</Text>
                                </ImageBackground>
                          </TouchableOpacity>
                          </View>
                          <View style={{alignItems: 'center', flex:3,  width:wp('100%'), height:hp('100%'), marginTop:hp('0%')}}>
                        <TouchableOpacity
                          
                          //onPress={() => this.props.navigation.navigate('Pago único')} 
                                              
                          >
                          <ImageBackground source={require('../assets/boton_naranja.png')} style={{opacity:0.6, justifyContent:'center',overflow: 'hidden', resizeMode: "cover", aspectRatio:4, height:hp('7%'),   borderRadius: 10}}>
                                  
                                <Text style={{
                                  color: '#fff',
                                  textAlign:'center',
                                  fontWeight:'bold',
                                  fontSize:wp('3.5%'),
                                 }}>36 mesualidades de {financiacion(factor36,36)} MXN</Text>
                                </ImageBackground>
                          </TouchableOpacity>
                          </View>
                        <View style={{alignItems: 'center', flex:3,  width:wp('100%'), height:hp('100%'), marginTop:hp('0%')}}>
                        <TouchableOpacity
                          
                          //onPress={() => this.props.navigation.navigate('Pago único')} 
                                              
                          >
                          <ImageBackground source={require('../assets/boton_naranja.png')} style={{opacity:0.6, justifyContent:'center',overflow: 'hidden', resizeMode: "cover", aspectRatio:4, height:hp('7%'),   borderRadius: 10}}>
                                  
                                <Text style={{
                                  color: '#fff',
                                  textAlign:'center',
                                  fontWeight:'bold',
                                  fontSize:wp('3.5%'),
                                 }}>48 mesualidades de {financiacion(factor48,48)} MXN</Text>
                                </ImageBackground>
                          </TouchableOpacity>
                          </View>
                          

                          <View style={{alignItems: 'center', flex:3,  width:wp('100%'), height:hp('100%') }}>
                          <TouchableOpacity
                            
                        
                            //onPress={() => this.props.navigation.navigate('Financiamiento')} 
                                                
                            >
                            <ImageBackground source={require('../assets/boton_naranja.png')} style={{opacity:0.6,justifyContent:'center', overflow: 'hidden', resizeMode: "cover", aspectRatio:4, height:hp('7%'),  borderRadius: 10}}>
                                    
                                  <Text style={{
                                    color: '#fff',
                                    textAlign:'center',
                                    fontWeight:'bold',
                                    padding:8,
                                    fontSize:wp('3.5%')}}>60 mesualidades de {financiacion(factor60,60)} MXN</Text>
                                  </ImageBackground>
                            </TouchableOpacity>
                            </View>

                            {/* <View style={{backgroundColor: '#5DCB31',borderRadius:50, justifyContent:'center', alignItems:'center', marginTop:hp('1%'), width:hp('28%'), height:hp('100%'), flex:2}}>

                              <TouchableOpacity

                                 disabled={true}
                                  
                                
                                  onPress={() => this.props.navigation.navigate('Compra Finan')} 
                                                      
                                  >
              
                                  <Text style={{
                                                              
                                  fontWeight:'bold',
                                  fontSize:hp('2.5%'),
                                  color: 'white', 
                                  textAlign:'center',
                                  textAlignVertical:'center'}}>REALIZAR PAGO</Text>
              
                              </TouchableOpacity>
                          </View>
 */}

                        </View>

                    </View>

                     
                    </View>
              
            
         
            
            { /* LOGO*/}

            <View style={{alignItems:'center', flex:0.08, marginTop:hp('4%')}}>  

            <Image 
              
              source={logo}
              style={{aspectRatio:4.5, height:hp('5%')}}
              
              >    
            </Image>  

            </View> 
            {/*FIN LOGO*/}   

            {/* header */}              
           {/*Botones*/}     
           <View style={{alignItems:'center', flex:0.16,  justifyContent:'center', flexDirection:'row', marginBottom:hp('0%')}}>  
                         

                         <View  style={{ alignItems:'center', flex:1,  justifyContent:'center'}}>
                            <TouchableOpacity 
                                                                                         
                               onPress={() => this.props.navigation.navigate('Pago')}
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
                                                                                                      
                                          onPress={() => this.props.navigation.navigate('Chat',  {valor: 6})}
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
       



    </ImageOverlay> 

  )
}

componentDidMount() {


  const ref = db.ref('/Usuarios/' +  Fire.getUid())

  this.listener = ref.on("value", snapshot => {

  this.setState({potenciaSistema: snapshot.child("PotenciaSistemaDefinitivo").val() || ''})})
                

  }

}