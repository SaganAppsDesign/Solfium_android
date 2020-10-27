import * as React from 'react';
import {Text, View, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import tec3 from '../assets/fondo3.png';  
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import logo from '../assets/logo.png'; 
import backBtn from '../assets/backBtn.png'; 
import { Card } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {potencia} from './ingresar_consumo2'
import Fire, {db} from '../fire';

/* 
Parámetros:
Impuesto IVA en % (IVA%). Valor inicial = 16%
Derecho al Alumbrado Público en % (DAP%).  Valor inicial = 6,451%
Cargo fijo mensual. Valor inicial: $114 (pesos MXN)
Tarifa DAC. Valor inicial = $4,333/KWh
Horas de sol diarias. Valor inicial = 7,7 horas
Factor de eficiencia. Valor inicial = 1,15
Factor de pago cero. Valor inicial = 1,20
Factor de costo. Valor inicial = 140 centavos/W
Factor cambio = 21,37 MXN/USD

Formulas:
DAP = DAP% * Costo
Facturación del Periodo = Costo - DAP
Costo de energía = Facturación del Periodo / (1 + IVA%)
Consumo mensual = (Costo de energía – Cargo fijo mensual) / (Tarifa DAC)
Consumo diario = Consumo mensual / 30
Potencia del sistema = (Consumo diario) * (Factor de eficiencia) * (Factor de pago cero) / (Horas de sol diaria)
Costo promedio del sistema = (Potencia del sistema) * 10 * (Factor de costo) * (Factor cambio) */

var opacity, facturacionPeriod, costoEnergia, consumoMensual, consumoDiario, potenciaSistema, 
costoPromedioSistemaDec, mensualidad60pagosSinFormato, mensualidad60pagos,
ahorro25sinformato, ahorro25, amortizacionMesesSinFormato, amortizacionMeses, DAP 

export var costoPromedioSistema

var factor24= 1.14
var factor36= 1.21
var factor48= 1.28
var factor60= 1.35
var cargoFijoMensual = 114
var tarifaDAC = 4.3333
var horasSolDiarias = 7.7
var factorEficiencia = 1.15
var factorPagoCero = 1.4
var factorCosto = 140
var factorCambio = 21.37
var factorArbol = 7.5
var factorCO2 = 0.495
var factorKm = 3535.88
var garantia = 25

var sistema, msg

const format= (num) => {
 
  numFormat =  Intl.NumberFormat('de-DE').format(Math.trunc(num))

  return numFormat
 
}
const calculosEcologicos = (factor) => {
 
  calculo =  Intl.NumberFormat('de-DE').format(Math.trunc(factor*sistema*garantia))

  return calculo
 
}


export class Calculos extends React.Component {


  render() {



  //Cálculos  
  DAP = (6.451*potencia)/100
  facturacionPeriod = potencia - DAP
  costoEnergia = facturacionPeriod /(1 + 0.16)
  consumoMensual = (costoEnergia - cargoFijoMensual)/tarifaDAC
  consumoDiario = consumoMensual/30
  potenciaSistema = (consumoDiario*factorEficiencia*factorPagoCero)/horasSolDiarias
  costoPromedioSistemaDec = potenciaSistema*10*factorCosto*factorCambio


  costoPromedioSistema = format(costoPromedioSistemaDec)

  //mensualidad60pagosSinFormato = (costoPromedioSistema*1000/60)*factor60
  //mensualidad60pagos = format(mensualidad60pagosSinFormato)

  function mensualidad(meses,factor){
    var mensualidadSinFormato = (costoPromedioSistema*1000/meses)*factor
    var mensualidadpagos = format(mensualidadSinFormato)

    return mensualidadpagos

  }

  //ahorro25sinformato = (25*12 - (costoPromedioSistema*1000/(costoPromedioSistema*1000/60*factor60)))*(costoPromedioSistema*1000/60*factor60)
  //ahorro25 = format(ahorro25sinformato)

  function ahorro25(meses,factor){
    var ahorro25sinformato = (25*12 - (costoPromedioSistema*1000/(costoPromedioSistema*1000/meses*factor)))*(costoPromedioSistema*1000/meses*factor)
    var ahorro25 = format(ahorro25sinformato)

    return ahorro25

  }

    
  //amortizacionMesesSinFormato = costoPromedioSistema/mensualidad60pagos
  //amortizacionMeses = format(amortizacionMesesSinFormato)

  function amortizacion(meses,factor){
    var amortizacionSinFormato = costoPromedioSistema/mensualidad(meses,factor)
    var amortizacion = format(amortizacionSinFormato)

    return amortizacion

  }
 
 
//Condicionales para saber el Sistema Eléctrico

if (potenciaSistema < 1.5){
   
  msg = "Su consumo es muy bajo"
  

} else if (potenciaSistema >= 1.5 && potenciaSistema < 3.5){

  sistema = 3
 

}  

else if (potenciaSistema >= 3.5 && potenciaSistema < 5.5){

  sistema = 5
  

} 

else if (potenciaSistema >= 5.5 && potenciaSistema < 7.5){

  sistema = 7
  

} 

else if (potenciaSistema >= 7.5 && potenciaSistema < 10.5){

  sistema = 10
  

} 

else if (potenciaSistema > 10,5){

  msg = "Su consumo necesita más atención"
  

} 


var arboles = calculosEcologicos(factorArbol)
  console.log('arboles=',arboles)

  var co2 = calculosEcologicos(factorCO2)
  console.log('co2=',co2)

  var km = calculosEcologicos(factorKm)
  
  console.log('km=',km)
  console.log('sistema =' ,potenciaSistema)
  console.log('RENDER------------------------------')
  console.log('Costo MXN =',potencia)
  console.log('DAP =',DAP)
  console.log('facturacionPeriod =',facturacionPeriod)
  console.log('costoEnergia =',costoEnergia)
  console.log('consumoMensual =',consumoMensual)
  console.log('consumoDiario =',consumoDiario)
  console.log('potenciaSistema =' ,potenciaSistema)
  //console.log('costoPromedioSistemaSinFormato',costoPromedioSistemaSinFormato)
  console.log('costoPromedioSistema',costoPromedioSistema)
  //console.log('mensualidad60pagosSinFormato',mensualidad60pagosSinFormato)
  console.log('mensualidad60pagos',mensualidad(60,factor60))
  //console.log('ahorro25sinformato ',ahorro25sinformato )
  console.log('ahorro25 ',ahorro25(60,factor60) )
  //console.log('amortizacionMesesSinFormato ',amortizacionMesesSinFormato )
  console.log('amortizacionMeses ',amortizacion(60, factor60) )
  console.log('------------------------------')   



  db.ref('Usuarios/' +  Fire.getUid()).update({
    
    
    CalculoPotenciaSistema: potenciaSistema,
    Sistema:sistema,
    ConsumoMensual:potencia,
    CostoPromedioSistema:costoPromedioSistema,
    Mensualidad60:mensualidad(60,factor60),
    Amortizacion:amortizacion(60, factor60),
    Ahorro25:ahorro25(60,factor60),
    Arboles:arboles,
    CO2:co2,
    KM:km


    
    
    })
  
    return (

    
   
      <ImageOverlay 
          source={tec3}
          height={hp('100%')}  
          overlayAlpha={0}                 
          > 
                 
          <View style={{alignContent: 'center', alignItem:'center', justifyContent:'center', flex:1, flexDirection:'column'}}>

           
            
          <View style={{alignItems: 'center', alignContent: 'center', marginTop:hp('0%'), flex:5}}>
         
          <Card containerStyle={{backgroundColor:'white', marginTop: hp('6%'),  borderRadius: 40, 
            width:wp('82%'), height:hp('70%'), alignItems: 'center'}}>
    
            <View style={{flexDirection:'column', width:wp('70%'), height:'100%'}}>
          
                        
            {/*  inversion total */}

            <View style={{flexDirection:'row', flex:3, alignItems:'center'}} >
             
                <View style={{flexDirection: 'row', flex:2, justifyContent:'center', alignItems:'center'}}>
                      <Image
                      style={{ width:wp('22%'), height:hp('12%'),  marginLeft:'-30%', 
                      marginTop: '0%'}}
                      source={require('../assets/calculadora.png')}
                      />
                </View>
            
                <View style={{height:hp('4%'), marginBottom:wp('0%'),
                    alignItems:'center', justifyContent:'center', flex:3, flexDirection: 'column'}}>
                          
                          <Text style={{color: '#878787',
                            alignItems:'center',
                            fontSize:hp('2%'),
                            textAlign:'center',
                            height:hp('3%'),
                            width:wp('35%'),
                            }}> Inversión total </Text>

                          <Text style={{color: 'black',
                            fontSize:hp('3%'),
                            alignItems:'center',
                            height:hp('5%'),
                            width:wp('44%'),
                            fontWeight:'bold',
                            textAlign:'center',
                            
                            }}>{costoPromedioSistema} MXN</Text>
                </View> 

            </View>
             {/*  FIN inversion total */}

            {/*  mensualidad */}

            <View style={{flexDirection:'row', flex:3, alignItems:'center'}} >
                        
            <View style={{flexDirection: 'row', flex:3, justifyContent:'center', alignItems:'center'}}>
                  <Image
                  style={{ width:wp('22%'), height:hp('12%'),  marginLeft:'-30%', 
                  marginTop: '0%'}}
                  source={require('../assets/money.png')}
                  />
            </View>

            <View style={{height:hp('4%'), marginBottom:wp('0%'),
                alignItems:'center', justifyContent:'center', flex:4, flexDirection: 'column'}}>
                      
                      <Text style={{color: '#878787',
                        alignItems:'center',
                        fontSize:hp('1.5%'),
                        textAlign:'center',
                        height:hp('3%'),
                        width:wp('35%'),
                        }}>Hasta 60 pagos de:</Text>

                      <Text style={{color: 'black',
                        fontSize:hp('3%'),
                        alignItems:'center',
                        marginTop: '0%',
                        marginRight:'0%',
                        marginLeft:'0%',
                        height:hp('5%'),
                        width:wp('40%'),
                        fontWeight:'bold',
                        textAlign:'center',
                        
                        }}>{mensualidad(60,factor60)} MXN</Text>
            </View> 

            </View>
        
         {/*  FIN mensualidad */}
       
         {/*  ahorro anual */}
     
     <View style={{flexDirection:'row', flex:3, alignItems:'center'}} >
                        
            <View style={{flexDirection: 'row', flex:3, justifyContent:'center', alignItems:'center'}}>
                  <Image
                  style={{ width:wp('22%'), height:hp('12%'), marginLeft:'-30%', 
                  marginTop: '0%'}}
                  source={require('../assets/hucha.png')}
                  />
            </View>

            <View style={{height:hp('4%'), marginBottom:wp('0%'),
                alignItems:'center', justifyContent:'center', flex:4, flexDirection: 'column'}}>
                      
                      <Text style={{color: '#878787',
                        alignItems:'center',
                        fontSize:hp('1.2%'),
                        textAlign:'center',
                        height:hp('3%'),
                        width:wp('35%'),
                        }}>Tu inversión se amortiza en:
                        </Text>

                      <Text style={{color: 'black',
                        fontSize:hp('3%'),
                        alignItems:'center',
                        marginTop: '0%',
                        marginRight:'0%',
                        marginLeft:'0%',
                        height:hp('5%'),
                        width:wp('40%'),
                        fontWeight:'bold',
                        textAlign:'center',
                        
                        }}>{amortizacion(60,factor60)} meses</Text>
            </View> 

            </View>

      
            {/*  Ahorro a 20 años*/}
        <View style={{flexDirection:'row', flex:3, alignItems:'center'}} >
                            
        <View style={{flexDirection: 'row', flex:3, justifyContent:'center', alignItems:'center'}}>
              <Image
              style={{ width:wp('22%'), height:hp('12%'), marginLeft:'-30%', 
              marginTop: '0%'}}
              source={require('../assets/saco.png')}
              />
        </View>

        <View style={{height:hp('4%'), marginBottom:wp('0%'),
            alignItems:'center', justifyContent:'center', flex:4}}>
                  
                  <Text style={{color: '#878787',
                    fontSize:hp('2%'),
                    textAlign:'center',
                    height:hp('3%'),
                    width:wp('35%'),
                    }}>Ahorro a 25 años:</Text>

                  <Text style={{color: 'black',
                    fontSize:hp('3%'),
                    height:hp('5%'),
                    width:wp('50%'),
                    fontWeight:'bold',
                    textAlign:'center',
                    
                    }}>{ahorro25(60,factor60)} MXN</Text>


        </View> 

        

        </View>


        <View style={{height:hp('2%'), marginBottom:wp('0%'),
            alignItems:'center', justifyContent:'center', flex:1}}>
                  
                  <Text style={{color: 'green',
                    fontSize:hp('2%'),
                    textAlign:'center',
                    height:hp('3%'),
                    width:wp('70%'),
                    }}>_______________________________________________</Text>

         
        </View> 

        {/*  Evitarás contaminar*/}
        
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
                 
                    
                    }}>{arboles} Árboles apadrinados</Text>
                    
                  <Text style={{color: '#5DCB31',
                    fontSize:hp('1.5%'),
                    
                    marginTop: hp('1.5%'),
                    marginRight:'30%',
                    marginLeft:'0%',
                    height:hp('5%'),
                    width:wp('30%'),
                    fontWeight:'bold',
                    textAlign:'center',
            
                    
                    }}>{co2} Tn de CO2 sin emitir</Text>


                  <Text style={{color: '#5DCB31',
                    fontSize:hp('1.5%'),
                    
                    marginTop: hp('1.5%'),
                    marginRight:'30%',
                    marginLeft:'0%',
                    height:hp('5%'),
                    width:wp('30%'),
                    fontWeight:'bold',
                    textAlign:'center',
               
                    
                    }}>{km} Km recorrido en auto equivalente</Text>
        </View> 

        </View>

          

      </View>  

  </Card>

  {/* Botón -me interesa-*/}
  <View style={{height: hp('0%'), marginTop:hp('2%'), alignItems:'center',
                     width: wp('50%'),backgroundColor: '#5DCB31', flex:1, borderRadius:100, justifyContent:'center'}}>

               <TouchableOpacity
                     
                     
                     onPress={() => this.props.navigation.navigate('Implementación')} 
                                         
                     >

                     <Text style={{
                     height: hp('3%'),
                     textAlign:'center',
                     width: wp('100%'),
                     fontWeight:'bold',
                     fontSize:hp('2.5%'),
                     color: 'white', 
                     marginLeft:wp('0%'),
                     opacity:opacity,
                     }}>ME INTERESA</Text>

               </TouchableOpacity>
             </View>

             {/* Botón -me intresa-*/}
              

</View>
        
{ /* LOGO*/}

<View style={{alignContent:'center', alignItems:'center', width:wp('100%'), height:hp('0%'), flex:0.2, marginTop:hp('2%')}}>  

<Image 
  
  source={logo}
  style={{aspectRatio:4.5, height:hp('4%'), justifyContent:'center'}}
  
  >    
</Image>  

</View> 
         {/* header */}              
           {/*Botones*/}     
           <View style={{alignItems:'center', flex:0.6,  justifyContent:'center', flexDirection:'row', marginBottom:hp('3%'),marginTop:hp('0%')}}>  
                         

                          <View  style={{ alignItems:'center', flex:1,  justifyContent:'center'}}>
                             <TouchableOpacity 
                                                                                          
                                onPress={() => this.props.navigation.navigate('Ingresar Consumo')}
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
        
                               
        
                        </View>
                      
                      
          {/* FIN header */}      
        


       
       </View>


    </ImageOverlay> 
 

  )
}




}






 



