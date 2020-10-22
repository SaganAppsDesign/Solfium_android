import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import 'react-native-gesture-handler';
import {db} from '../fire';
import Fire from '../fire';
import { Card } from 'react-native-elements';
import chat from '../assets/chat.png';
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'
import fondo from '../assets/fondo2.jpg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import backBtn from '../assets/backBtn.png';

//var viabilidad, user=''
var text,text1,text2,text3,text4,text5,color,opacity,backgroundcolor, viable



export class InfoResultInsta extends React.Component {
  
  state = {
    viabilidad: '',
    username: ''
  }

 
  render() {
    //console.log('viabilidad componentDidMount',   this.state.viabilidad)
    

    var viab = this.state.viabilidad
    var  viabInt = parseInt(viab)

    console.log('viabilidad número',  typeof(viab))
    

  if (viabInt >= 95 && viabInt < 100){
    viable = "VIABLE"
    text = '¡Felicidades ' + this.state.username + '! Es viable instalar tu sistema Solfium"' 
    text1 = '$24,000' 
    text2 = '$2,000' 
    text3 = '$30,000' 
    text4 = '540 Kg de carbono' 
    text5 = '$600,000' 
    color = '#5DCB31'
    opacity = 1
    backgroundcolor = 'white'
    
   
  } else if ( viabInt >= 5 && viabInt < 95){
    viable = "OPTIMIZADA A LA BAJA"
    text = '¡Felicidades ' + this.state.username + '! Es viable instalar tu sistema Solfium. Hemos optimizado la propuesta inicial de la siguiente forma:' 
    text1 = '$20,000' 
    text2 = '$1,000' 
    text3 = '$22,000' 
    text4 = '210 Kg de carbono' 
    text5 = '$250,000' 
    color = 'orange'
    opacity = 1
    backgroundcolor = 'white'

  } else if (viab == 'evaluando'){
    viable = "EVALUANDO INSTALACIÓN"
    text = this.state.username + ', espere mientras se evalúa su posible instalación' 
    text1 = '-' 
    text2 = '-' 
    text3 = '-' 
    text4 = '-' 
    text5 = '-' 
    color = 'grey'
    backgroundcolor = 'rgba(255, 255, 255, 0)'
    opacity = 0
    
  } else if ( viabInt >= 0 && viabInt < 5){
    viable = "NO VIABLE"
    text = 'Gracias por tu interés en Solfium, pero lamentablemente no es posible instalar el sistema en tu hogar. Nuestro experto estará encantado de resolver cualquier duda' 
    text1 = '-' 
    text2 = '-' 
    text3 = '-' 
    text4 = '-' 
    text5 = '-' 
    color = 'red'
    opacity = 0
    backgroundcolor = 'white'
  
  } else {
    viable = "PENDIENTE CONTACTO CON INSTALADOR"
    text = this.state.username + ', en breve el personal de instalación se pondrá en contacto con usted.' 
    text1 = '-' 
    text2 = '-' 
    text3 = '-' 
    text4 = '-' 
    text5 = '-' 
    color = 'grey'
    backgroundcolor = 'rgba(255, 255, 255, 0)'
    opacity = 0
  }
 

  return (  

  

    <ImageOverlay 
    
    source={fondo}
    height={hp('100%')}   
    overlayAlpha={0}                 
    >
   
    <View style={{width:wp('100%'), height:hp('100%'),alignItem:'center', justifyContent:'center', flex:1}}>


        

                   
    
    <View style={{alignItems: 'center', alignContent: 'center', marginTop:hp('1%'), flex:15}}>
         
          <Card containerStyle={{backgroundColor:'white', marginTop: hp('4%'),  borderRadius: 50, 
          width:wp('80%'), height:hp('81%'), alignItems: 'center'}}>
    
            <View style={{flexDirection:'column', width:wp('100%'), height:hp('100%'), alignItems: 'center'}}>
           
              <View style={{textAlignVertical:'center',backgroundColor:color, borderRadius:50, width:wp('70%'), height:hp('100%'), flex:0.4, alignItems:'center'}}>
                                    <Text style={{height:'80%', 
                                    width:wp('60%'),
                                    marginTop:hp('0.5%'),
                                    fontWeight:'bold',
                                    fontSize:hp('2.3%'),
                                    color: 'white', 
                                    
                                    textAlign:'center',
                                    
                                   
                                  }}> {viable} </Text>
              </View> 

             {/*  texto viabilidad */}
              <View style={{width:wp('100%'), height:hp('70%'), marginBottom:hp('0%'),alignItems:'center',flex:0.8}}>
                      <Text style={{color: '#878787',
                                    textAlign:'center',
                                    fontSize:hp('1.9%'),
                                    marginTop: hp('1%'),
                                    height:hp('45%'),
                                    width:wp('60%'),
                                  
                                     }}> {text} </Text>
             </View> 
              
            {/*  inversion total */}

            <View style={{flexDirection:'row', flex:1, alignItems:'center',width:wp('55%'), marginTop:hp('2%')}} >
             
                <View style={{flexDirection: 'row', flex:4, justifyContent:'center', alignItems:'center'}}>
                      <Image
                      style={{ width:wp('22%'), height:hp('12%'), marginLeft:'0%', 
                      marginTop: '0%'}}
                      source={require('../assets/calculadora.png')}
                      />
                </View>
            
                <View style={{height:hp('4%'), marginBottom:wp('0%'),
                    alignItems:'center', justifyContent:'center', flex:4, flexDirection: 'column'}}>
                          
                          <Text style={{color: '#878787',
                            alignItems:'center',
                            fontSize:hp('1.9%'),
                            textAlign:'center',
                            height:hp('3%'),
                            width:wp('35%'),
                            }}> Inversión total: </Text>

                          <Text style={{color: 'black',
                            fontSize:hp('3.5%'),
                            alignItems:'center',
                            marginTop: '0%',
                            marginRight:'0%',
                            marginLeft:'0%',
                            height:hp('5%'),
                            width:wp('35%'),
                            fontWeight:'bold',
                            textAlign:'center',
                            
                            }}>{text1}</Text>
                </View> 

            </View>
             {/*  FIN inversion total */}

            {/*  mensualidad */}

            <View style={{flexDirection:'row', flex:1, alignItems:'center',width:wp('55%')}} >
                        
            <View style={{flexDirection: 'row', flex:4, justifyContent:'center', alignItems:'center'}}>
                  <Image
                  style={{ width:wp('22%'), height:hp('12%'), marginLeft:'0%', 
                  marginTop: '0%'}}
                  source={require('../assets/money.png')}
                  />
            </View>

            <View style={{height:hp('4%'), marginBottom:wp('0%'),
                alignItems:'center', justifyContent:'center', flex:4, flexDirection: 'column'}}>
                      
                      <Text style={{color: '#878787',
                        alignItems:'center',
                        fontSize:hp('2%'),
                        textAlign:'center',
                        height:hp('3%'),
                        width:wp('35%'),
                        }}>12 pagos de:</Text>

                      <Text style={{color: 'black',
                        fontSize:hp('3.5%'),
                        alignItems:'center',
                        marginTop: '0%',
                        marginRight:'0%',
                        marginLeft:'0%',
                        height:hp('5%'),
                        width:wp('35%'),
                        fontWeight:'bold',
                        textAlign:'center',
                        
                        }}>{text2}</Text>
            </View> 

            </View>
        
         {/*  FIN mensualidad */}
       
         {/*  ahorro anual */}
     
     <View style={{flexDirection:'row', flex:1, alignItems:'center',width:wp('50%')}} >
                        
            <View style={{flexDirection: 'row', flex:4, justifyContent:'center', alignItems:'center'}}>
                  <Image
                  style={{ width:wp('18%'), height:hp('11%'), marginLeft:'0%', 
                  marginTop: '0%'}}
                  source={require('../assets/hucha.png')}
                  />
            </View>

            <View style={{height:hp('4%'), marginBottom:wp('0%'),
                alignItems:'center', justifyContent:'center', flex:4, flexDirection: 'column'}}>
                      
                      <Text style={{color: '#878787',
                        alignItems:'center',
                        fontSize:hp('2%'),
                        textAlign:'center',
                        height:hp('3%'),
                        width:wp('35%'),
                        }}>Ahorro anual:</Text>

                      <Text style={{color: '#5DCB31',
                        fontSize:hp('2.5%'),
                        alignItems:'center',
                        marginTop: '0%',
                        marginRight:'0%',
                        marginLeft:'0%',
                        height:hp('5%'),
                        width:wp('35%'),
                        fontWeight:'bold',
                        textAlign:'center',
                        
                        }}>{text3}</Text>
            </View> 

            </View>

      {/*  Evitarás contaminar */}
        
        <View style={{flexDirection:'row', flex:1, alignItems:'center',width:wp('50%')}} >
                            
        <View style={{ flexDirection: 'row', flex:4, justifyContent:'center', alignItems:'center'}}>
              <Image
              style={{ width:wp('18%'), height:hp('11%'), marginLeft:'0%', 
              marginTop: '0%'}}
              source={require('../assets/manos.png')}
              />
        </View>

        <View style={{height:hp('4%'), marginBottom:wp('0%'),
            alignItems:'center', justifyContent:'center', flex:4, flexDirection: 'column'}}>
                  
                  <Text style={{color: '#878787',
                    alignItems:'center',
                    fontSize:hp('2%'),
                    textAlign:'center',
                    height:hp('3%'),
                    width:wp('35%'),
                    }}>Evitarás contaminar:</Text>

                  <Text style={{color: '#5DCB31',
                    fontSize:hp('2.1%'),
                    alignItems:'center',
                    marginTop: '0%',
                    marginRight:'0%',
                    marginLeft:'0%',
                    height:hp('5%'),
                    width:wp('35%'),
                    fontWeight:'bold',
                    textAlign:'center',
                    
                    }}>{text4}</Text>
        </View> 

        </View>
            {/*  Ahorro a 20 años*/}
        <View style={{flexDirection:'row', flex:1, alignItems:'center',width:wp('50%')}} >
                            
        <View style={{ flexDirection: 'row', flex:4, justifyContent:'center', alignItems:'center'}}>
              <Image
              style={{width:wp('18%'), height:hp('11%'), marginLeft:'0%', 
              marginTop: '0%'}}
              source={require('../assets/saco.png')}
              />
        </View>

        <View style={{height:hp('4%'), marginBottom:wp('0%'),
            alignItems:'center', justifyContent:'center', flex:5, flexDirection: 'column'}}>
                  
                  <Text style={{color: '#878787',
                    alignItems:'center',
                    fontSize:hp('2%'),
                    textAlign:'center',
                    height:hp('3%'),
                    width:wp('35%'),
                    }}>Ahorro a 20 años:</Text>

                  <Text style={{color: '#5DCB31',
                    fontSize:hp('2.5%'),
                    alignItems:'center',
                    marginTop: '0%',
                    marginRight:'0%',
                    marginLeft:'0%',
                    height:hp('5%'),
                    width:wp('35%'),
                    fontWeight:'bold',
                    textAlign:'center',
                    
                    }}>{text5}</Text>
        </View> 

        </View>

               {/* Botón*/}
               <View style={{backgroundColor:'#5DCB31', borderRadius:50, width:wp('60%'), height:hp('0.1%'), flex:0.5, alignItems:'center', marginBottom:hp('20%')}}>

               <TouchableOpacity
                     
                     
                     onPress={() => this.props.navigation.navigate('Pago')} 
                                         
                     >

                     <Text style={{
                     height: hp('3%'), 
                     width: wp('64%'),
                     fontWeight:'bold',
                     fontSize:hp('2%'),
                     color: 'white', 
                     textAlign:'center',
                     opacity:opacity,
                     marginTop:hp('1.5%')
                    }}>ACEPTAR OFERTA</Text>

               </TouchableOpacity>
             </View>

            </View>  

  </Card>
              

</View>
{/* header */}              
           {/*Botones*/}     
           <View style={{backgroundColor:"white", opacity: 1, alignItems:'center', flex:2.3,  justifyContent:'center', flexDirection:'row',marginTop:hp('3%')}}>  
                         

                         <View  style={{ alignItems:'center', flex:1,  justifyContent:'center'}}>
                            <TouchableOpacity 
                                                                                         
                               onPress={() => this.props.navigation.navigate('Escanear QR Instalador')}
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
                                                                                                      
                                          onPress={() => this.props.navigation.navigate('Chat',  {valor: 3})}
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
     
       
  )}

  componentDidMount() {


    const ref = db.ref('/Usuarios/' +  Fire.getUid());

    this.listener = ref.on("value", snapshot => {
  
    this.setState({viabilidad: snapshot.child("Viabilidad").val() || '',
                   username: snapshot.child("name").val() || ''  })    
 
   // this.setState({username: snapshot.child("name").val() || ''})
  
  }
  )

}

}



