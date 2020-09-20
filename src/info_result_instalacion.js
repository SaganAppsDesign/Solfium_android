import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';
import tec2 from '../assets/fondo2.jpg'; 
import ImageOverlay from "react-native-image-overlay";
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import {db} from '../fire';
import Fire from '../fire';
import { Button, Card } from 'react-native-elements';
import chat from '../assets/chat.png';
import logo from '../assets/logo.png'; 
import codigo_qr from '../assets/codigo_qr.png'; 
import qr2 from '../assets/qr2.png'; 
import confirmado from '../assets/confirmado.png'; 
import verResultado from '../assets/verResultado.png'; 
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'
import fondo from '../assets/fondo2.jpg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//var viabilidad, user=''
var text,text1,text2,text3,text4,text5,color,opacity,backgroundcolor, viable, viabilidad,user


data = () =>  {
   
   
  if (viabilidad == '100%'){
    viable = "VIABLE"
    text = '¡Felicidades ' + user + '! Se puede realizar en su hogar el ' + viabilidad + ' de la instalación' 
    text1 = '$24,000' 
    text2 = '$2,000' 
    text3 = '$30,000' 
    text4 = '540 Kg de carbono' 
    text5 = '$600,000' 
    color = '#5DCB31'
    opacity = 1
    backgroundcolor = 'white'
     
  } else if (viabilidad == 'evaluando'){
    viable = "EVALUANDO INSTALACIÓN"
    text = user + ', espere mientras se evalúa su posible instalación' 
    text1 = '-' 
    text2 = '-' 
    text3 = '-' 
    text4 = '-' 
    text5 = '-' 
    color = 'grey'
    backgroundcolor = 'rgba(255, 255, 255, 0)'
    opacity = 0

  } else if (viabilidad == null){
    viable = "PENDIENTE CONTACTO CON INSTALADOR"
    text = user + ', en breve el personal de instalación se pondrá en contacto con usted.' 
    text1 = '-' 
    text2 = '-' 
    text3 = '-' 
    text4 = '-' 
    text5 = '-' 
    color = 'grey'
    backgroundcolor = 'rgba(255, 255, 255, 0)'
    opacity = 0

   
  } else if (viabilidad == '50%'){
    viable = "VIABLE A LA BAJA"
    text = '¡Felicidades ' + user + '! Al menos se puede realizar un ' + viabilidad + ' de la instalación, lo cual supone el siguiente ahorro:' 
    text1 = '$20,000' 
    text2 = '$1,000' 
    text3 = '$22,000' 
    text4 = '210 Kg de carbono' 
    text5 = '$250,000' 
    color = 'orange'
    opacity = 1
    backgroundcolor = 'white'
    
  } else {
    viable = "NO ES VIABLE"
    text = user + ', lo sentimos, no se puede realizar la instalación' 
    text1 = '-' 
    text2 = '-' 
    text3 = '-' 
    text4 = '-' 
    text5 = '-' 
    color = 'red'
    opacity = 0
    backgroundcolor = 'white'

 

  }

}


export class InfoResultInsta extends React.Component {
  
  state = {
    viabilidad: '',
    username: ''
  }

 
  render() {
    console.log('viabilidad componentDidMount',   this.state.viabilidad)
    

  if (this.state.viabilidad == '100%'){
    viable = "VIABLE"
    text = '¡Felicidades ' + this.state.username + '! Se puede realizar en su hogar el ' + this.state.viabilidad + ' de la instalación' 
    text1 = '$24,000' 
    text2 = '$2,000' 
    text3 = '$30,000' 
    text4 = '540 Kg de carbono' 
    text5 = '$600,000' 
    color = '#5DCB31'
    opacity = 1
    backgroundcolor = 'white'
     
  } else if (this.state.viabilidad == 'evaluando'){
    viable = "EVALUANDO INSTALACIÓN"
    text = this.state.user + ', espere mientras se evalúa su posible instalación' 
    text1 = '-' 
    text2 = '-' 
    text3 = '-' 
    text4 = '-' 
    text5 = '-' 
    color = 'grey'
    backgroundcolor = 'rgba(255, 255, 255, 0)'
    opacity = 0

  } else if (this.state.viabilidad == null){
    viable = "PENDIENTE CONTACTO CON INSTALADOR"
    text = this.state.user + ', en breve el personal de instalación se pondrá en contacto con usted.' 
    text1 = '-' 
    text2 = '-' 
    text3 = '-' 
    text4 = '-' 
    text5 = '-' 
    color = 'grey'
    backgroundcolor = 'rgba(255, 255, 255, 0)'
    opacity = 0

   
  } else if (this.state.viabilidad == '50%'){
    viable = "VIABLE A LA BAJA"
    text = '¡Felicidades ' + this.state.user + '! Al menos se puede realizar un ' + this.state.viabilidad + ' de la instalación, lo cual supone el siguiente ahorro:' 
    text1 = '$20,000' 
    text2 = '$1,000' 
    text3 = '$22,000' 
    text4 = '210 Kg de carbono' 
    text5 = '$250,000' 
    color = 'orange'
    opacity = 1
    backgroundcolor = 'white'
    
  } else {
    viable = "NO ES VIABLE"
    text = this.state.user + ', lo sentimos, no se puede realizar la instalación' 
    text1 = '-' 
    text2 = '-' 
    text3 = '-' 
    text4 = '-' 
    text5 = '-' 
    color = 'red'
    opacity = 0
    backgroundcolor = 'white'
  
  }
    //data()

  return (  

  

    <ImageOverlay 
    
    source={fondo}
    height={hp('100%')}   
    overlayAlpha={0}                 
    >
   
    <View style={{alignItem:'center', justifyContent:'center', flex:1, flexDirection:'column'}}>

                 <View style={{marginTop:hp('1%'), marginLeft:wp('75%'), flex:1}}>   
                                          
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
    
    
    <View style={{alignItems: 'center', alignContent: 'center', marginTop:hp('2%'), flex:15}}>
         
          <Card containerStyle={{backgroundColor:'white', marginTop: hp('0%'),  borderRadius: 50, 
          width:wp('80%'), height:hp('85%'), alignItems: 'center'}}>
    
            <View style={{flexDirection:'column', width:wp('100%'), height:hp('100%'), alignItems: 'center'}}>
           
              <View style={{width:wp('100%'), height:hp('100%'), flex:0.8, alignItems:'center'}}>
                                    <Text style={{height:'80%', 
                                    width:wp('60%'),
                                    borderRadius:50,
                                    fontWeight:'bold',
                                    fontSize:hp('3%'),
                                    color: 'white', 
                                    alignItems: 'center',
                                    textAlign:'center',
                                    backgroundColor: color,
                                    textAlignVertical:'center'
                                  }}> {viable} </Text>
              </View> 

             {/*  texto viabilidad */}
              <View style={{width:wp('100%'), height:hp('70%'), marginBottom:hp('0%'),alignItems:'center',flex:0.8}}>
                      <Text style={{color: '#878787',
                                    textAlign:'center',
                                    fontSize:hp('2%'),
                                    marginTop: hp('0%'),
                                    height:hp('45%'),
                                    width:wp('60%'),
                                  
                                     }}> {text} </Text>
             </View> 
              
            {/*  inversion total */}

            <View style={{flexDirection:'row', flex:1, alignItems:'center',width:wp('55%')}} >
             
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
            alignItems:'center', justifyContent:'center', flex:4, flexDirection: 'column'}}>
                  
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
       <View style={{flex:2, alignItems:'center',width:wp('55%')}}>

               <TouchableOpacity
                     
                     
                     onPress={() => this.props.navigation.navigate('Proceso de pago')} 
                                         
                     >

                     <Text style={{
                     height: hp('5%'), 
                     width: wp('64%'),
                     borderRadius:50,
                     fontWeight:'bold',
                     fontSize:20,
                     color: 'white', 
                     textAlign:'center',
                     paddingLeft:40, 
                     paddingRight:40,
                     backgroundColor: '#5DCB31',
                     opacity:opacity,
                     textAlignVertical:'center'}}>HACER PEDIDO</Text>

               </TouchableOpacity>
             </View>

            </View>  

  </Card>
              

</View>

 

     

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



const styles = StyleSheet.create({

  fondo: {
    width: '100%'
        
  },
  boton: {
        
    height: '50%', 
    width:'100%',
    borderRadius:50,
    fontWeight:'bold',
    fontSize:25,
    color: 'white', 
    marginBottom: "0%", 
    marginTop: "0%", 
    marginLeft: "0%", 
    marginRight: "0%",
    alignItems: "center",
    textAlign:'center',
    paddingLeft:40, 
    paddingRight:40,
    backgroundColor: color,
    textAlignVertical:'center'
   
   
 },
 boton2: {
        
  height: '75%', 
  width:'100%',
  borderRadius:50,
  fontWeight:'bold',
  fontSize:20,
  color: 'white', 
  marginBottom: "0%", 
  marginTop: "5%", 
  marginLeft: "0%", 
  marginRight: "0%",
  alignItems: "center",
  textAlign:'center',
  paddingLeft:40, 
  paddingRight:40,
  backgroundColor: '#5DCB31',
  textAlignVertical:'center'
 
 
},

  texto:{
    
      flex:1,
      color: '#000',
      backgroundColor: color,
      fontSize: 20,
      marginHorizontal: 15,
      marginTop: '5%',
      marginBottom:'5%',
      marginRight:'5%',
      marginLeft:'5%',
      fontWeight: 'bold',
      padding: 10,
      alignItems:'center'

  },

   btnContainer2: {
    
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'orange',
    padding: 15,
    textAlign:'center',
    alignItems:'center',
    flexDirection: 'column',
    width:300,
    height:100,
    marginBottom:10, marginTop:10

  
  },


   btnContainer3: {
   
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'red',
    padding: 20,
    textAlign:'center',
    alignItems:'center',
    flexDirection: 'column',
    width:300,
    height:110,
    marginBottom:100, marginTop:10

  
  },
  btnIcon: {
    height: 50,
    width: 50,
  },
  btnText: {
    fontSize: 18,
    color: '#FAFAFA',
    marginLeft: 0,
    marginTop: 5,
    textAlign:'center',
    fontWeight: 'bold'

  }

});