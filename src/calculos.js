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



var opacity



export class Calculos extends React.Component {

  state = {
    potenciaUbicacion: 0
  }


  render() {

    
    //console.log('Valor en el render ', potencia)


    return (

    
   
      <ImageOverlay 
          source={tec3}
          height={hp('100%')}  
          overlayAlpha={0}                 
          > 
                 
          <View style={{alignContent: 'center', alignItem:'center', justifyContent:'center', flex:1, flexDirection:'column'}}>

           
            
          <View style={{alignItems: 'center', alignContent: 'center', marginTop:hp('0%'), flex:5}}>
         
          <Card containerStyle={{backgroundColor:'white', marginTop: hp('8%'),  borderRadius: 50, 
            width:wp('82%'), height:hp('68%'), alignItems: 'center'}}>
    
            <View style={{flexDirection:'column', width:wp('55%'), height:'100%'}}>
          
                        
            {/*  inversion total */}

            <View style={{flexDirection:'row', flex:3, alignItems:'center'}} >
             
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
                            fontSize:hp('2%'),
                            textAlign:'center',
                            height:hp('3%'),
                            width:wp('35%'),
                            }}> Inversión total </Text>

                          <Text style={{color: 'black',
                            fontSize:hp('3%'),
                            alignItems:'center',
                            height:hp('5%'),
                            width:wp('40%'),
                            fontWeight:'bold',
                            textAlign:'center',
                            
                            }}>{'$ ' + potencia*8000}</Text>
                </View> 

            </View>
             {/*  FIN inversion total */}

            {/*  mensualidad */}

            <View style={{flexDirection:'row', flex:3, alignItems:'center'}} >
                        
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
                        
                        }}>{'$ ' + parseFloat(potencia*8000/12).toFixed(1)}</Text>
            </View> 

            </View>
        
         {/*  FIN mensualidad */}
       
         {/*  ahorro anual */}
     
     <View style={{flexDirection:'row', flex:3, alignItems:'center'}} >
                        
            <View style={{flexDirection: 'row', flex:4, justifyContent:'center', alignItems:'center'}}>
                  <Image
                  style={{ width:wp('22%'), height:hp('12%'), marginLeft:'0%', 
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
                        15 meses</Text>

                      <Text style={{color: 'black',
                        fontSize:hp('2%'),
                        alignItems:'center',
                        marginTop: '0%',
                        marginRight:'0%',
                        marginLeft:'0%',
                        height:hp('5%'),
                        width:wp('40%'),
                        fontWeight:'bold',
                        textAlign:'center',
                        
                        }}>{'$ ' + (potencia*8000 + Number(6000))}</Text>
            </View> 

            </View>

      
            {/*  Ahorro a 20 años*/}
        <View style={{flexDirection:'row', flex:3, alignItems:'center'}} >
                            
        <View style={{flexDirection: 'row', flex:4, justifyContent:'center', alignItems:'center'}}>
              <Image
              style={{ width:wp('22%'), height:hp('12%'), marginLeft:'0%', 
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
                    fontSize:hp('2%'),
                    height:hp('5%'),
                    width:wp('40%'),
                    fontWeight:'bold',
                    textAlign:'center',
                    
                    }}>{'$ ' + ((potencia*8000 + Number(6000))*20)}</Text>
        </View> 

        </View>

        {/*  Evitarás contaminar */}
        
        <View style={{flexDirection:'row', flex:3, alignItems:'center', marginTop:hp('3%')}} >
                            
        <View style={{ flexDirection: 'row', flex:4, justifyContent:'center', alignItems:'center'}}>
              <Image
              style={{ width:wp('22%'), height:hp('12%'), marginLeft:'0%', 
              marginTop: '0%'}}
              source={require('../assets/manos.png')}
              />
        </View>

        <View style={{height:hp('4%'), marginBottom:wp('0%'),
            alignItems:'center', justifyContent:'center', flex:4, flexDirection: 'column'}}>
                  
                 

                  <Text style={{color: '#5DCB31',
                    fontSize:hp('1.5%'),
                    alignItems:'center',
                    marginTop: '0%',
                    marginRight:'0%',
                    marginLeft:'0%',
                    height:hp('5%'),
                    width:wp('35%'),
                    fontWeight:'bold',
                    textAlign:'center',
                    
                    }}>{(potencia*8000 / Number(50))+ ' Árboles apadrinados'}</Text>
                    
                  <Text style={{color: '#5DCB31',
                    fontSize:hp('1.5%'),
                    alignItems:'center',
                    marginTop: '0%',
                    marginRight:'0%',
                    marginLeft:'0%',
                    height:hp('5%'),
                    width:wp('35%'),
                    fontWeight:'bold',
                    textAlign:'center',
                    
                    }}>{('500 Tn de CO2 sin emitir')}</Text>


                  <Text style={{color: '#5DCB31',
                    fontSize:hp('1.5%'),
                    alignItems:'center',
                    marginTop: '0%',
                    marginRight:'0%',
                    marginLeft:'0%',
                    height:hp('5%'),
                    width:wp('35%'),
                    fontWeight:'bold',
                    textAlign:'center',
                    
                    }}>{('1000 Km recorrido en auto equivalente')}</Text>
        </View> 

        </View>

          {/* Botón -me intresa-*/}
           <View style={{height: hp('0%'), marginTop:hp('4%'), 
                     width: wp('58%'),backgroundColor: '#5DCB31', flex:1, borderRadius:100, justifyContent:'center'}}>

               <TouchableOpacity
                     
                     
                     onPress={() => this.props.navigation.navigate('Implementación')} 
                                         
                     >

                     <Text style={{
                     height: hp('3%'),
                     
                     width: wp('100%'),
                     fontWeight:'bold',
                     fontSize:hp('2.5%'),
                     color: 'white', 
                     marginLeft:wp('13.5%'),
                     opacity:opacity,
                     }}>ME INTERESA</Text>

               </TouchableOpacity>
             </View>

          </View>  

  </Card>
              

</View>
        
{ /* LOGO*/}

<View style={{alignContent:'center', alignItems:'center', width:wp('100%'), height:hp('0%'), flex:0.5, marginTop:hp('0%')}}>  

<Image 
  
  source={logo}
  style={{aspectRatio:4.5, height:hp('4%'), justifyContent:'center'}}
  
  >    
</Image>  

</View> 
         {/* header */}              
           {/*Botones*/}     
           <View style={{alignItems:'center', flex:0.6,  justifyContent:'center', flexDirection:'row', marginBottom:hp('3%'),marginTop:hp('0%')}}>  
                         

                          <View  style={{ alignItems:'center', flex:0.5,  justifyContent:'center'}}>
                             <TouchableOpacity 
                                                                                          
                                onPress={() => this.props.navigation.navigate('Ingresar Consumo')}
                               > 
                                                     
                               <Image 
                                
                                source={backBtn}
                                style={{aspectRatio:1, height:hp('4%')}}
                                
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
 

  );
}







}






 



