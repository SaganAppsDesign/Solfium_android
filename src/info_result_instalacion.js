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
var text,text12,text2,text3,text4,text5,text6,text7,color,opacity,backgroundcolor, viable
export var costoSistemaExport

var cargoFijoMensual = 114
var tarifaDAC = 4.3333
var horasSolDiarias = 7.7
var factorEficiencia = 1.15
var factorPagoCero = 1.2


const format = (num) => {
 
  numFormat =  new Intl.NumberFormat().format(Math.trunc(num))

  return numFormat
 
}

 estadoCliente3 = () => db.ref('Usuarios/' +  Fire.getUid()).update({
                
  estado_cliente5: "1/5 - Oferta ACEPTADA"
  
      
  })



export class InfoResultInsta extends React.Component {
  
  state = {
  
    username: '',
    potencia:'',
    text12:'',
    consumoMensual:''
  }



  render() {
    
    
 
    var poten = this.state.potencia
    var consumo_mensual = this.state.consumoMensual
    var potenInt = parseInt(poten)

    console.log('consumo_mensual',  consumo_mensual)
     

    var produccion_mensual = (30*potenInt*horasSolDiarias)/(factorEficiencia*factorPagoCero)
    var diferencial_consumo = consumo_mensual - produccion_mensual

   
    if (diferencial_consumo <=0){

      diferencial_consumo=0

    } else {
      
      diferencial_consumo

    }
    
   var diferencia_costo_mensual = (tarifaDAC*diferencial_consumo+cargoFijoMensual)*(1.16)
   var nueva_facturacion = (tarifaDAC*consumo_mensual+cargoFijoMensual)*1.16
   var ahorro_factura = (nueva_facturacion-diferencia_costo_mensual)*100/nueva_facturacion

   
    viable = "VIABLE"
    text = '¡Felicidades ' + this.state.username + '! Es viable instalar tu sistema Solfium"'  

  if (potenInt == 10){
    //viable = "VIABLE"
    //text = '¡Felicidades ' + this.state.username + '! Es viable instalar tu sistema Solfium"' 
    text12 = 299180*1.16
    text2 = 6731*1.16
    text3 = text12/(nueva_facturacion-diferencia_costo_mensual)
    text4 = (25*12-text3)*(nueva_facturacion-diferencia_costo_mensual)
    text5 = '1875' 
    text6 = '123' 
    text7 = '883.970' 
    color = '#5DCB31'
    opacity = 1
    backgroundcolor = 'white'
    //this.setState({text12: text12 || '' }) 
    db.ref('Usuarios/' +  Fire.getUid()).update({
    
        PotenciaSistemaDefinitivo: text12,
             
      })
       
    
   
  } else if ( potenInt == 7){
    //viable = "OPTIMIZADA A LA BAJA"
    //text = '¡Felicidades ' + this.state.username + '! Es viable instalar tu sistema Solfium. Hemos optimizado la propuesta inicial de la siguiente forma:' 
    text12 = 209426*1.16
    text2 = 4712*1.16
    text3 = text12/(nueva_facturacion-diferencia_costo_mensual)
    text4 = (25*12-text3)*(nueva_facturacion-diferencia_costo_mensual)
    text5 = '1312' 
    text6 = '86' 
    text7 = '618.779'  
    color = '#5DCB31'
    opacity = 1
    backgroundcolor = 'white'
    //this.setState({text12: text12 || '' })   
    db.ref('Usuarios/' +  Fire.getUid()).update({
    
      PotenciaSistemaDefinitivo: text12,
           
    }) 

  } else if ( potenInt == 5){
    
    text12 = 149590*1.16
    text2 = 3365*1.16
    text3 = text12/(nueva_facturacion-diferencia_costo_mensual)
    text4 = (25*12-text3)*(nueva_facturacion-diferencia_costo_mensual)
    text5 = '937' 
    text6 = '61' 
    text7 = '441.985' 
    color = '#5DCB31'
    opacity = 1
    backgroundcolor = 'white'
    //this.setState({text12: text12 || '' })    
    db.ref('Usuarios/' +  Fire.getUid()).update({
    
      PotenciaSistemaDefinitivo: text12,
           
    })

  } else if ( potenInt == 3){
    //viable = "OPTIMIZADA A LA BAJA"
    //text = '¡Felicidades ' + this.state.username + '! Es viable instalar tu sistema Solfium. Hemos optimizado la propuesta inicial de la siguiente forma:' 
    text12 = 89754*1.16
    text2 = 2019*1.16 
    text3 = text12/(nueva_facturacion-diferencia_costo_mensual)
    text4 = (25*12-text3)*(nueva_facturacion-diferencia_costo_mensual)
    text5 = '562' 
    text6 = '37' 
    text7 = '265.191' 
    color = '#5DCB31'
    opacity = 1
    backgroundcolor = 'white'
    //this.setState({text12: text12 || '' })  
    db.ref('Usuarios/' +  Fire.getUid()).update({
    
      PotenciaSistemaDefinitivo: text12,
           
    })  

  } else if (potenInt == 'evaluando'){
    viable = "EVALUANDO INSTALACIÓN"
    text = this.state.username + ', espera mientras se evalúa su posible instalación' 
    text12 = '-' 
    text2 = '-' 
    text3 = '-' 
    text4 = '-' 
    text5 = '-' 
    text6 = '-' 
    text7 = '-'  
    color = 'grey'
    backgroundcolor = 'rgba(255, 255, 255, 0)'
    opacity = 0
    
  } else if ( poten = 'No viable'){
    viable = "NO VIABLE"
    text = 'Gracias por tu interés en Solfium, pero lamentablemente no es posible instalar el sistema en tu hogar. Nuestro experto estará encantado de resolver cualquier duda' 
    text12 = '-' 
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
    text12 = '-' 
    text2 = '-' 
    text3 = '-' 
    text4 = '-' 
    text5 = '-' 
    text6 = '-' 
    text7 = '-' 
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
          width:wp('80%'), height:hp('81%'), alignItems: 'center'}}>
    
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
              <View style={{idth:wp('100%'), height:hp('0%'), marginBottom:hp('0%'),alignItems:'center',flex:1.3}}>
                      <Text style={{color: '#878787',
                                    textAlign:'center',
                                    fontSize:hp('1.8%'),
                                    marginTop: hp('1%'),
                                    height:hp('30%'),
                                    width:wp('60%'),
                                  
                                     }}> {text} </Text>
             </View> 
              
            {/*  inversion total */}
            <View style={{width:wp('100%'), height:hp('0%'), marginBottom:hp('0%'),alignItems:'center',flex:7}}>
            <View style={{flexDirection:'row', flex:2, alignItems:'center',width:wp('80%'), marginTop:hp('0%')}} >
             
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
                            fontSize:hp('2%'),
                            alignItems:'center',
                            marginTop: '0%',
                            marginRight:'0%',
                            marginLeft:'0%',
                            height:hp('5%'),
                            width:wp('35%'),
                            fontWeight:'bold',
                            textAlign:'center',
                            
                            }}>{format(text12)} MXN</Text>
                </View> 

            </View>
             {/*  FIN inversion total */}

            {/*  mensualidad */}

            <View style={{flexDirection:'row', flex:2, alignItems:'center',width:wp('80%')}} >
                        
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
                        fontSize:hp('2%'),
                        alignItems:'center',
                        marginTop: '0%',
                        marginRight:'0%',
                        marginLeft:'0%',
                        height:hp('5%'),
                        width:wp('35%'),
                        fontWeight:'bold',
                        textAlign:'center',
                        
                        }}>{format(text2)} MXN</Text>
            </View> 

            </View>
        
         {/*  FIN mensualidad */}
       
         {/*  ahorro anual */}
     
     <View style={{flexDirection:'row', flex:2, alignItems:'center',width:wp('80%')}} >
                        
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
                        fontSize:hp('2%'),
                        alignItems:'center',
                        marginTop: '0%',
                        marginRight:'0%',
                        marginLeft:'0%',
                        height:hp('5%'),
                        width:wp('35%'),
                        fontWeight:'bold',
                        textAlign:'center',
                        
                        }}>{Math.trunc(text3)} meses</Text>
            </View> 

            </View>

        
    
      {/*  Ahorro a 25 años*/}
        <View style={{flexDirection:'row', flex:2, alignItems:'center',width:wp('80%')}} >
                            
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
                    fontSize:hp('2%'),
                    alignItems:'center',
                    marginTop: '0%',
                    marginRight:'0%',
                    marginLeft:'0%',
                    height:hp('5%'),
                    width:wp('35%'),
                    fontWeight:'bold',
                    textAlign:'center',
                    
                    }}>{format(text4)} MXN</Text>
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
                    marginRight:'30%',
                    marginLeft:'0%',
                    height:hp('5%'),
                    width:wp('30%'),
                    fontWeight:'bold',
                    textAlign:'center',
                 
                    
                    }}>{text5} Árboles apadrinados</Text>
                    
                  <Text style={{color: '#5DCB31',
                    fontSize:hp('1.5%'),
                    
                    marginTop: hp('1.5%'),
                    marginRight:'30%',
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

      {/*  texto ahorro */}
      <View style={{idth:wp('100%'), height:hp('0%'), marginBottom:hp('0%'),alignItems:'center',flex:1.3}}>
                      <Text style={{color: '#878787',
                                    textAlign:'center',
                                    fontSize:hp('1.8%'),
                                    marginTop: hp('1%'),
                                    height:hp('30%'),
                                    width:wp('60%'),
                                    fontWeight:'bold'
                                  
                                     }}>Ahorrarás aproximadamente el {Math.trunc(ahorro_factura)}% de tu factura eléctrica </Text>
      </View> 

      {/* Botón ACEPTAR*/}
      <View style={{backgroundColor:'#5DCB31', borderRadius:50, width:wp('60%'), height:hp('10%'), flex:1, alignItems:'center', marginTop:hp('1%')}}>

               <TouchableOpacity
                     
                                         
                     onPress = {() => {this.props.navigation.navigate('Pago');estadoCliente3()}}              
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
                   potencia: snapshot.child("potenciaContratada").val() || '',
                   consumoMensual: snapshot.child("consumoMensual").val() || '' })    
  
  }
  )

}

}



