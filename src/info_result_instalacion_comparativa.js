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
//import {costoPromedioSistema} from './calculos';

//var viabilidad, user=''
var text,text1,text2,text3,text4,text5,text6,text7,color,opacity,backgroundcolor, viable

//console.log('costoPromedioSistema', costoPromedioSistema)


export class InfoResultInsta2 extends React.Component {
  
  state = {
    
    username: '',
    potencia:'',
    inversionTotal:'',
    mensualidad60:'',
    amortizacion:'',
    ahorro25:'',
    arboles:'',
    co2:'',
    coches:''

  }

                 
  render() {

   
    //console.log('viabilidad componentDidMount',   this.state.viabilidad)
    

    
    var poten = this.state.potencia
    var inversionTotal = this.state.inversionTotal
    var mensualidad60 = this.state.mensualidad60
    var amortizacion = this.state.amortizacion
    var ahorro25 = this.state.ahorro25
    var arboles = this.state.arboles
    var co2 = this.state.co2
    var coches = this.state.coches


    var potenInt = parseInt(poten)

    console.log('potenInt',  potenInt)
    

  if (potenInt == 10){
    viable = "VIABLE"
    text = '¡Felicidades ' + this.state.username + '! Es viable instalar tu sistema Solfium"' 
    text1 = '299.180 MXN' 
    text2 = '6.731 MXN' 
    text3 = '44 meses' 
    text4 = '1.720.285 MXN' 
    text5 = '1875' 
    text6 = '123' 
    text7 = '883.970' 
    color = '#5DCB31'
    opacity = 1
    backgroundcolor = 'white'
    
   
  } else if ( potenInt == 7){
    viable = "OPTIMIZADA A LA BAJA"
    text = '¡Felicidades ' + this.state.username + '! Es viable instalar tu sistema Solfium. Hemos optimizado la propuesta inicial de la siguiente forma:' 
    text1 = '209.426 MXN'
    text2 = '4.712 MXN' 
    text3 = '44 meses' 
    text4 = '1.204.199 MXN' 
    text5 = '1312' 
    text6 = '86' 
    text7 = '618.779' 
    opacity = 1
    backgroundcolor = 'white'

  } else if ( potenInt == 5){
    viable = "OPTIMIZADA A LA BAJA"
    text = '¡Felicidades ' + this.state.username + '! Es viable instalar tu sistema Solfium. Hemos optimizado la propuesta inicial de la siguiente forma:' 
    text1 = '149.590 MXN'
    text2 = '3.365 MXN' 
    text3 = '44 meses' 
    text4 = '860.142 MXN' 
    text5 = '937' 
    text6 = '61' 
    text7 = '441.985'  
    color = 'orange'
    opacity = 1
    backgroundcolor = 'white'

  } else if ( potenInt == 3){
    viable = "OPTIMIZADA A LA BAJA"
    text = '¡Felicidades ' + this.state.username + '! Es viable instalar tu sistema Solfium. Hemos optimizado la propuesta inicial de la siguiente forma:' 
    text1 = '89.754 MXN'
    text2 = '2.019 MXN' 
    text3 = '44 meses' 
    text4 = '516,085 MXN' 
    text5 = '562' 
    text6 = '37' 
    text7 = '265.191'  
    color = 'orange'
    opacity = 1
    backgroundcolor = 'white'

  } else if (potenInt == 'evaluando'){
    viable = "EVALUANDO INSTALACIÓN"
    text = this.state.username + ', espera mientras se evalúa su posible instalación' 
    text1 = '-' 
    text2 = '-' 
    text3 = '-' 
    text4 = '-' 
    text5 = '-' 
    text6 = '-' 
    text7 = '-'  
    color = 'grey'
    backgroundcolor = 'rgba(255, 255, 255, 0)'
    opacity = 0
    
  } else if ( potenInt = 1){
    viable = "NO VIABLE"
    text = 'Gracias por tu interés en Solfium, pero lamentablemente no es posible instalar el sistema en tu hogar. Nuestro experto estará encantado de resolver cualquier duda' 
    text1 = '-' 
    text2 = '-' 
    text3 = '-' 
    text4 = '-' 
    text5 = '-' 
    text6 = '-' 
    text7 = '-' 
    color = 'red'
    opacity = 0
    backgroundcolor = 'white'
  
  } else {
    viable = "PENDIENTE CONTACTO CON INSTALADOR"
    text = this.state.username + ', en breve el personal de instalación se pondrá en contacto contigo.' 
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

    <View style={{alignItems: 'center', alignContent: 'center', marginTop:hp('1%'), flex:18}}>
         
          <Card containerStyle={{backgroundColor:'white', marginTop: hp('4%'),  borderRadius: 50, 
          width:wp('85%'), height:hp('81%'), alignItems: 'center'}}>
    
            <View style={{flexDirection:'column', width:wp('100%'), height:hp('100%'), alignItems: 'center', flex:5}}>
           
              <View style={{textAlignVertical:'center',backgroundColor:color, borderRadius:50, width:wp('70%'), height:hp('100%'), flex:0.8, alignItems:'center'}}>
                                    <Text style={{height:'80%', 
                                    width:wp('60%'),
                                    marginTop:hp('0.5%'),
                                    fontWeight:'bold',
                                    fontSize:hp('2%'),
                                    color: 'white', 
                                    textAlign:'center',
                                    
                                   
                                  }}> {viable} </Text>
              </View> 

             {/*  texto viabilidad */}
              <View style={{idth:wp('100%'), height:hp('0%'), marginBottom:hp('0%'),alignItems:'center',flex:1.5}}>
                      <Text style={{color: '#878787',
                                    textAlign:'center',
                                    fontSize:hp('1.4%'),
                                    marginTop: hp('1%'),
                                    height:hp('45%'),
                                    width:wp('60%'),
                                  
                                     }}> {text} </Text>
             </View> 
              
            {/*  inversion total */}
            <View style={{width:wp('100%'), height:hp('0%'), marginBottom:hp('0%'),alignItems:'center',flex:7}}>
            <View style={{flexDirection:'row', flex:2, alignItems:'center',width:wp('80%'), marginTop:hp('0%')}} >
             


            <View style={{height:hp('4%'), marginBottom:wp('0%'),
                    alignItems:'center', justifyContent:'center', flex:5, flexDirection: 'column'}}>
                          
                          <Text style={{color: '#878787',
                            alignItems:'center',
                            fontSize:hp('1.3%'),
                            textAlign:'center',
                            height:hp('3%'),
                            width:wp('35%'),
                            }}> Inversión total: </Text>

                          <Text style={{color: 'black',
                            fontSize:hp('1.5%'),
                            alignItems:'center',
                            marginTop: '0%',
                            marginRight:'0%',
                            marginLeft:'0%',
                            height:hp('5%'),
                            width:wp('35%'),
                            fontWeight:'bold',
                            textAlign:'center',
                            
                            }}>{inversionTotal} MXN</Text>
                </View> 
                <View style={{flexDirection: 'row', flex:4, justifyContent:'center', alignItems:'center'}}>
                      <Image
                      style={{  width:wp('20%'), height:hp('10%'), marginLeft:'0%', 
                      marginTop: '0%'}}
                      source={require('../assets/calculadora.png')}
                      />
                </View>
            
                <View style={{height:hp('4%'), marginBottom:wp('0%'),
                    alignItems:'center', justifyContent:'center', flex:5, flexDirection: 'column'}}>
                          
                          <Text style={{color: '#878787',
                            alignItems:'center',
                            fontSize:hp('1.3%'),
                            textAlign:'center',
                            height:hp('3%'),
                            width:wp('35%'),
                            }}> Inversión total: </Text>

                          <Text style={{color: 'black',
                            fontSize:hp('1.5%'),
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

            <View style={{flexDirection:'row', flex:2, alignItems:'center',width:wp('80%')}} >

            <View style={{height:hp('4%'), marginBottom:wp('0%'),
                alignItems:'center', justifyContent:'center', flex:5, flexDirection: 'column'}}>
                      
                      <Text style={{color: '#878787',
                        alignItems:'center',
                        fontSize:hp('1.3%'),
                        textAlign:'center',
                        height:hp('3%'),
                        width:wp('35%'),
                        }}>Hasta 60 pagos de:</Text>

                      <Text style={{color: 'black',
                        fontSize:hp('1.5%'),
                        alignItems:'center',
                        marginTop: '0%',
                        marginRight:'0%',
                        marginLeft:'0%',
                        height:hp('5%'),
                        width:wp('35%'),
                        fontWeight:'bold',
                        textAlign:'center',
                        
                        }}>{mensualidad60} MXN</Text>
            </View> 
                        
            <View  style={{flexDirection: 'row', flex:4, justifyContent:'center', alignItems:'center'}}>
                  <Image
                  style={{  width:wp('20%'), height:hp('10%'), marginLeft:'0%', 
                  marginTop: '0%'}}
                  source={require('../assets/money.png')}
                  />
            </View>

            <View style={{height:hp('4%'), marginBottom:wp('0%'),
                alignItems:'center', justifyContent:'center', flex:5, flexDirection: 'column'}}>
                      
                      <Text style={{color: '#878787',
                        alignItems:'center',
                        fontSize:hp('1.3%'),
                        textAlign:'center',
                        height:hp('3%'),
                        width:wp('35%'),
                        }}>Hasta 60 pagos de:</Text>

                      <Text style={{color: 'black',
                        fontSize:hp('1.5%'),
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
     
     <View style={{flexDirection:'row', flex:2, alignItems:'center',width:wp('80%')}} >

     <View style={{height:hp('4%'), marginBottom:wp('0%'),
                alignItems:'center', justifyContent:'center', flex:5, flexDirection: 'column'}}>
                      
                      <Text style={{color: '#878787',
                        alignItems:'center',
                        fontSize:hp('1.2%'),
                        textAlign:'center',
                        height:hp('3%'),
                        width:wp('35%'),
                        }}>Tu inversión se amortiza en:</Text>

                      <Text style={{color: 'black',
                        fontSize:hp('1.5%'),
                        alignItems:'center',
                        marginTop: '3%',
                        marginRight:'0%',
                        marginLeft:'0%',
                        height:hp('5%'),
                        width:wp('35%'),
                        fontWeight:'bold',
                        textAlign:'center',
                        
                        }}>{amortizacion} meses</Text>
            </View> 
         
                        
            <View style={{flexDirection: 'row', flex:4, justifyContent:'center', alignItems:'center'}}>
                  <Image
                  style={{  width:wp('20%'), height:hp('10%'), marginLeft:'0%', 
                  marginTop: '0%'}}
                  source={require('../assets/hucha.png')}
                  />
            </View>

            <View style={{height:hp('4%'), marginBottom:wp('0%'),
                alignItems:'center', justifyContent:'center', flex:5, flexDirection: 'column'}}>
                      
                      <Text style={{color: '#878787',
                        alignItems:'center',
                        fontSize:hp('1.2%'),
                        textAlign:'center',
                        height:hp('3%'),
                        width:wp('35%'),
                        }}>Tu inversión se amortiza en:</Text>

                      <Text style={{color: 'black',
                        fontSize:hp('1.5%'),
                        alignItems:'center',
                        marginTop: '3%',
                        marginRight:'0%',
                        marginLeft:'0%',
                        height:hp('5%'),
                        width:wp('35%'),
                        fontWeight:'bold',
                        textAlign:'center',
                        
                        }}>{text3}</Text>
            </View> 

            </View>

        
    
      {/*  Ahorro a 25 años*/}
        <View style={{flexDirection:'row', flex:2, alignItems:'center',width:wp('80%')}} >
        <View style={{ height:hp('4%'), marginBottom:wp('0%'),
            alignItems:'center', justifyContent:'center', flex:5, flexDirection: 'column'}}>
                  
                  <Text style={{color: '#878787',
                    alignItems:'center',
                    fontSize:hp('1.3%'),
                    textAlign:'center',
                    height:hp('3%'),
                    width:wp('35%'),
                    }}>Ahorro a 25 años:</Text>

                  <Text style={{color: 'black',
                    fontSize:hp('1.5%'),
                    alignItems:'center',
                    marginTop: '0%',
                    marginRight:'0%',
                    marginLeft:'0%',
                    height:hp('5%'),
                    width:wp('35%'),
                    fontWeight:'bold',
                    textAlign:'center',
                    
                    }}>{ahorro25} MXN</Text>
        </View>

                            
        <View style={{ flexDirection: 'row', flex:4, justifyContent:'center', alignItems:'center'}}>
              <Image
              style={{  width:wp('20%'), height:hp('10%'), marginLeft:'0%', 
              marginTop: '0%'}}
              source={require('../assets/saco.png')}
              />
        </View>

        <View style={{ height:hp('4%'), marginBottom:wp('0%'),
            alignItems:'center', justifyContent:'center', flex:5, flexDirection: 'column'}}>
                  
                  <Text style={{color: '#878787',
                    alignItems:'center',
                    fontSize:hp('1.3%'),
                    textAlign:'center',
                    height:hp('3%'),
                    width:wp('35%'),
                    }}>Ahorro a 25 años:</Text>

                  <Text style={{color: 'black',
                    fontSize:hp('1.5%'),
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

        </View>

        <View style={{height:hp('2%'), marginBottom:wp('0%'),
            alignItems:'center', justifyContent:'center', flex:0.5}}>
                  
                  <Text style={{color: 'green',
                    fontSize:hp('2%'),
                    textAlign:'center',
                    height:hp('3%'),
                    width:wp('70%'),
                    }}>_______________________________________________</Text>
        </View> 

        {/*  Evitarás contaminar*/}

        <View style={{width:wp('80%'), height:hp('0%'), marginBottom:hp('0%'),alignItems:'center',flex:4}}>
        
        <View style={{flexDirection:'row', flex:5, alignItems:'center', marginTop:hp('0%')}} >

        <View style={{width:wp('20%'), height:hp('18.6%'), marginBottom:hp('0%'),
            alignItems:'center', justifyContent:'center', flex:5, flexDirection: 'column'}}>
                  
                 

                  <Text style={{color: '#5DCB31',
                    fontSize:hp('1.5%'),
                    
                    marginTop: hp('1.5%'),
                    marginRight:'0%',
                    marginLeft:'0%',
                    height:hp('5%'),
                    width:wp('30%'),
                    fontWeight:'bold',
                    textAlign:'center',
                 
                    
                    }}>{arboles} Árboles apadrinados</Text>
                    
                  <Text style={{color: '#5DCB31',
                    fontSize:hp('1.5%'),
                    
                    marginTop: hp('1.5%'),
                    marginRight:'0%',
                    marginLeft:'0%',
                    height:hp('5%'),
                    width:wp('30%'),
                    fontWeight:'bold',
                    textAlign:'center',
            
                    
                    }}>{co2} Tn de CO2 sin emitir</Text>


                  <Text style={{color: '#5DCB31',
                    fontSize:hp('1.5%'),
                    
                    marginTop: hp('1.5%'),
                    marginRight:'0%',
                    marginLeft:'0%',
                    height:hp('5%'),
                    width:wp('30%'),
                    fontWeight:'bold',
                    textAlign:'center',
               
                    
                    }}>{coches} Km recorrido en auto equivalente</Text>
        </View> 

        <View style={{  marginBottom:wp('0%'),
            alignItems:'center', justifyContent:'center', flex:4, flexDirection: 'column'}}>


                            
        <View style={{ flexDirection: 'row', flex:3, justifyContent:'center', alignItems:'center'}}>
              <Image
              style={{  width:wp('15%') ,height:wp('12%'),  marginLeft:'0%', 
              marginBottom: '0%'}}
              source={require('../assets/co2.png')}
              />
        </View>

        <View style={{ flexDirection: 'row', flex:3, justifyContent:'center', alignItems:'center'}}>
              <Image
              style={{  width:wp('15%') ,height:wp('12%'),  marginLeft:'0%', 
              marginTop: '0%'}}
              source={require('../assets/coche.png')}
              />
        </View>

        <View style={{flexDirection: 'row', flex:3, justifyContent:'center', alignItems:'center'}}>
              <Image
              style={{ width:wp('15%') ,height:wp('12%'),  marginLeft:'0%', 
              marginTop: '0%'}}
              source={require('../assets/arbol.png')}
              />
        </View>
        </View>



        <View style={{width:wp('20%'), height:hp('18.6%'), marginBottom:hp('0%'),
            alignItems:'center', justifyContent:'center', flex:5, flexDirection: 'column'}}>
                  
                 

                  <Text style={{color: '#5DCB31',
                    fontSize:hp('1.5%'),
                    
                    marginTop: hp('1.5%'),
                    marginRight:'0%',
                    marginLeft:'0%',
                    height:hp('5%'),
                    width:wp('30%'),
                    fontWeight:'bold',
                    textAlign:'center',
                 
                    
                    }}>{text5} Árboles apadrinados</Text>
                    
                  <Text style={{color: '#5DCB31',
                    fontSize:hp('1.5%'),
                    
                    marginTop: hp('1.5%'),
                    marginRight:'0%',
                    marginLeft:'0%',
                    height:hp('5%'),
                    width:wp('30%'),
                    fontWeight:'bold',
                    textAlign:'center',
            
                    
                    }}>{text6} Tn de CO2 sin emitir</Text>


                  <Text style={{color: '#5DCB31',
                    fontSize:hp('1.5%'),
                    
                    marginTop: hp('1.5%'),
                    marginRight:'30%',
                    marginLeft:'0%',
                    height:hp('5%'),
                    width:wp('30%'),
                    fontWeight:'bold',
                    textAlign:'center',
               
                    
                    }}>{text7} Km recorrido en auto equivalente</Text>
        </View> 
        </View> 


          
        <View style={{height:hp('2%'), marginBottom:wp('0%'),
            alignItems:'center', justifyContent:'center', flex:0.5}}>
                  
                  <Text style={{color: 'green',
                    fontSize:hp('2%'),
                    textAlign:'center',
                    height:hp('3%'),
                    width:wp('70%'),
                    }}>_______________________________________________</Text>
        </View> 
      </View>   

               {/* Botón*/}
               <View style={{backgroundColor:'#5DCB31', borderRadius:50, width:wp('60%'), height:hp('10%'), flex:1, alignItems:'center', marginTop:hp('1%')}}>

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
                   username: snapshot.child("name").val() || '' ,
                   potencia: snapshot.child("potenciaContratada").val() || '' ,
                   inversionTotal: snapshot.child("CostoPromedioSistema").val() || '' ,
                   mensualidad60: snapshot.child("Mensualidad60").val() || '' ,
                   amortizacion: snapshot.child("Amortizacion").val() || '' ,
                   ahorro25: snapshot.child("Ahorro25").val() || '' ,
                   arboles: snapshot.child("Arboles").val() || '' ,
                   co2: snapshot.child("CO2").val() || '' ,
                   coches: snapshot.child("KM").val() || ''
                   
                   }
                                      
                   )    
 
   // this.setState({username: snapshot.child("name").val() || ''})
  
  }
  )

}

}



