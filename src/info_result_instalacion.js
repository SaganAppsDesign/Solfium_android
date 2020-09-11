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
import fondo from '../assets/fondo2.jpg';import { ContactoInstalador } from './contacto_instalador';
  ; 


var {height} = Dimensions.get('window');
var viabilidad, user
var text,text1,text2,text3,text4,text5,color,opacity,backgroundcolor, viable


data = () => db.ref('/Usuarios/' +  Fire.getUid()).on('value', (snapshot) => {
 
  user = snapshot.hasChild('name')
  viabilidad = snapshot.child("Viabilidad").val()

 console.warn('viabilidad: ',viabilidad)
  
  if (viabilidad == '100%'){
    viable = "VIABLE"
    text = '¡Felicidades! Se puede realizar en su hogar el ' + viabilidad + ' de la instalación' 
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
    text = 'Espere mientras se evalúa su posible instalación' 
    text1 = '-' 
    text2 = '-' 
    text3 = '-' 
    text4 = '-' 
    text5 = '-' 
    color = 'grey'
    backgroundcolor = 'rgba(255, 255, 255, 0)'
    opacity = 0

  } else if (viabilidad == null){
    viable = "VIABLE"
    text = 'En breve el personal de instalación se pondrá en contacto con usted.' 
    text1 = '-' 
    text2 = '-' 
    text3 = '-' 
    text4 = '-' 
    text5 = '-' 
    color = 'yellow'
    backgroundcolor = 'rgba(255, 255, 255, 0)'
    opacity = 0

   
  } else if (viabilidad == '50%'){
    viable = "VIABLE A LA BAJA"
    text = '¡Felicidades! Al menos se puede realizar un ' + viabilidad + ' de la instalación, lo cual supone el siguiente ahorro:' 
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
    text = 'Lo sentimos, no se puede realizar la instalación' 
    text1 = '-' 
    text2 = '-' 
    text3 = '-' 
    text4 = '-' 
    text5 = '-' 
    color = 'red'
    opacity = 0
    backgroundcolor = 'white'
    
  }

});



export class InfoResultInsta extends React.Component {
 

  render() {

      data()

  return (  

    <ImageOverlay source={fondo}
    height={height}  
    overlayAlpha={0}                 
    >
   
    <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%', width:'100%', height:'100%'
    , flex:1}}>

     <View style={{marginTop:'5%', marginBottom:'0%', marginLeft:'80%', flex:1}}>   
                    
        <TouchableOpacity 
                                                                    
        onPress={() => navigation.navigate('Chat')}
        > 
        <View>
        
                <Image 
            
                source={chat}
                style={{width:'60%', height:'100%'}}
                
                >    
                </Image> 

        </View>
    
        </TouchableOpacity> 

    </View>
    
    
    <View style={{alignItems: 'center', alignContent: 'center', marginBottom:'10%', marginTop: '0%', flex:12, width:'100%', height:'100%'}}>
         
      <Card containerStyle={{backgroundColor:'white', marginTop: '0%',  borderRadius: 50, 
            width:'80%', height:'100%', marginBottom:'0%', alignContent: 'center'}}>
    
            <View style={{flexDirection:'column', width:'100%', height:'100%', marginBottom:'0%', alignContent: 'center'}}>
           
              <View style={{width:'100%', height:'4%', marginBottom:'0%', marginTop:'0%', flex:2}}>
                                    <Text style={{height: '80%', 
                                    width:'100%',
                                    borderRadius:50,
                                    fontWeight:'bold',
                                    fontSize:20,
                                    color: 'white', 
                                    marginBottom: "0%", 
                                    marginTop: "0%", 
                                    marginLeft: "0%", 
                                    marginRight: "0%",
                                    alignItems: "center",
                                    textAlign:'center',
                                    paddingLeft:"0%", 
                                    paddingRight:"0%",
                                    backgroundColor: color,
                                    textAlignVertical:'center'
                                  }}> {viable} </Text>
              </View> 

             {/*  texto viabilidad */}
              <View style={{width:'100%', height:'10%', marginBottom:'5%', marginTop:'0%',flex:2}}>
                      <Text style={{color: '#878787',
                                     textAlign:'center',
                                    fontSize:16,
                                    marginTop: '2%',
                                    marginRight:'0%',
                                    marginLeft:'0%',
                                    height:'100%',
                                    width:'100%',
                                    padding: 0,
                                     }}> {text} </Text>
             </View> 
              
            {/*  inversion total */}

            <View style={{ flexDirection:'row', flex:3, width:'100%', height:'50%' ,alignContent: 'center'}} >
             
                <View style={{flexDirection: 'row', flex:3, height:'100%', width:'100%', alignItems:'center'}}>
                      <Image
                      style={{width:'70%', height:'100%', marginBottom:0, marginRight:0, marginLeft:'40%', 
                      marginTop: '0%',alignItems:'center'}}
                      source={require('../assets/calculadora.png')}
                      />
                </View>
            
                <View style={{width:'80%', height:'35%', marginBottom:'0%',
                 marginTop:'1%', alignContent:'center', flex:4, flexDirection: 'column'}}>
                          
                          <Text style={{color: '#878787',
                            alignItems:'center',
                            fontSize:16,
                            textAlign:'center',
                            marginTop: '0%',
                            marginRight:'100%',
                            marginLeft:'0%',
                            height:'100%',
                            width:'80%',
                            padding: 0,
                            
                            }}> Inversión total </Text>

                          <Text style={{color: 'black',
                            fontSize:24,
                            alignItems:'center',
                            marginTop: '0%',
                            marginRight:'0%',
                            marginLeft:'0%',
                            height:'100%',
                            width:'80%',
                            padding: 0,
                            fontWeight:'bold',
                            textAlign:'center',
                            
                            }}>{text1}</Text>
                </View> 

            </View>
             {/*  FIN inversion total */}

              {/*  mensualidad */}

            <View style={{ flexDirection:'row', flex:3, width:'100%', height:'50%' ,alignContent: 'center'}} >
             
            <View style={{flexDirection: 'row', flex:3, height:'100%', width:'100%', alignItems:'center'}}>
                  <Image
                  style={{width:'70%', height:'100%', marginBottom:0, marginRight:0, marginLeft:'40%', 
                  marginTop: '0%',alignItems:'center'}}
                  source={require('../assets/money.png')}
                  />
            </View>
        
            <View style={{width:'80%', height:'35%', marginBottom:'0%',
             marginTop:'1%', alignContent:'center', flex:4, flexDirection: 'column'}}>
                      
                      <Text style={{color: '#878787',
                        alignItems:'center',
                        fontSize:16,
                        textAlign:'center',
                        marginTop: '0%',
                        marginRight:'100%',
                        marginLeft:'0%',
                        height:'100%',
                        width:'80%',
                        padding: 0,
                        
                        }}> 12 pagos de: </Text>

                      <Text style={{color: 'black',
                        fontSize:24,
                        alignItems:'center',
                        marginTop: '0%',
                        marginRight:'0%',
                        marginLeft:'0%',
                        height:'100%',
                        width:'80%',
                        padding: 0,
                        fontWeight:'bold',
                        textAlign:'center',
                        
                        }}>{text2}</Text>
            </View> 

        </View>
         {/*  FIN mensualidad */}
        {/*  ahorro anual */}
            
        <View style={{ flexDirection:'row', flex:2, width:'100%', height:'50%' ,alignContent: 'center', marginTop:'4%'}} >
             
          <View style={{flexDirection: 'row', flex:2, height:'100%', width:'100%', alignItems:'center'}}>
                <Image
                style={{width:'70%', height:'100%', marginBottom:0, marginRight:0, marginLeft:'50%', 
                marginTop: '0%',alignItems:'center'}}
                source={require('../assets/hucha.png')}
                />
          </View>
    
          <View style={{width:'80%', height:'35%', marginBottom:'0%',
          marginTop:'1%', alignContent:'center', flex:4, flexDirection: 'column', fontSize:10}}>
                    
                    <Text style={{color: '#878787',
                      alignItems:'center',
                      textAlign:'center',
                      marginTop: '0%',
                      marginRight:'0%',
                      marginLeft:'0%',
                      height:'100%',
                      width:'80%',
                      padding: 0,
                      
                      }}> Ahorro anual: </Text>

                    <Text style={{color: '#5DCB31',
                      
                      alignItems:'center',
                      marginTop: '0%',
                      marginRight:'0%',
                      marginLeft:'0%',
                      height:'100%',
                      width:'80%',
                      padding: 0,
                      fontWeight:'bold',
                      textAlign:'center',
                      fontSize:16,
                     
                      }}>{text3}</Text>
          </View> 

    </View>


      {/*  Evitarás contaminar */}
      <View style={{ flexDirection:'row', flex:2, width:'100%', height:'100%' ,alignContent: 'center', marginTop:'4%'}} >
             
          <View style={{flexDirection: 'row', flex:2, height:'100%', width:'100%', alignItems:'center'}}>
                <Image
                style={{width:'70%', height:'100%', marginBottom:0, marginRight:0, marginLeft:'50%', 
                marginTop: '0%',alignItems:'center'}}
                source={require('../assets/manos.png')}
                />
          </View>
    
          <View style={{width:'80%', height:'35%', marginBottom:'0%', marginLeft:'0%',
          marginTop:'1%', alignItems:'center', flex:4, flexDirection: 'column', fontSize:10}}>
                    
                    <Text style={{color: '#878787',
                      
                      marginTop: '0%',
                      marginRight:'0%',
                      marginLeft:'15%',
                      height:'100%',
                      width:'80%',
                      padding: 0,
                      
                      }}>Evitarás contaminar: </Text>

                    <Text style={{color: '#5DCB31',
                      marginTop: '0%',
                      marginRight:'0%',
                      marginLeft:'15%',
                      height:'100%',
                      width:'80%',
                      padding: 0,
                      fontWeight:'bold',
                      fontSize:15
                      }}>{text4}</Text>
             </View> 

           </View>
            {/*  Ahorro a 20 años*/}
            <View style={{ flexDirection:'row', flex:2, width:'100%', height:'100%' ,alignContent: 'center', marginTop:'4%',marginBottom:'0%'}} >
             
              <View style={{flexDirection: 'row', flex:2, height:'100%', width:'100%', alignItems:'center'}}>
                    <Image
                    style={{width:'70%', height:'100%', marginBottom:0, marginRight:0, marginLeft:'50%', 
                    marginTop: '0%',alignItems:'center'}}
                    source={require('../assets/saco.png')}
                    />
              </View>
        
              <View style={{ width:'80%', height:'35%', marginBottom:'0%',
              marginTop:'1%', alignContent:'center', flex:4, flexDirection: 'column', fontSize:10, marginLeft:'0%'}}>
                        
                        <Text style={{color: '#878787',
                         
                          marginTop: '0%',
                          marginRight:'100%',
                          marginLeft:'15%',
                          height:'100%',
                          width:'80%',
                          padding: 0,
                          
                          }}> Ahorro a 20 años: </Text>

                        <Text style={{color: '#5DCB31',
                                                  
                          marginTop: '0%',
                          marginRight:'0%',
                          marginLeft:'27%',
                          height:'100%',
                          width:'80%',
                          padding: 0,
                          fontWeight:'bold',
                          fontSize:16
                          
                          }}>{text5}</Text>
                    </View> 

                  </View>

               {/* Botón*/}
               <View style={{marginBottom:'0%', marginTop:'0%', width:'100%', height:'90%', flex:2 }}>

               <TouchableOpacity
                     
                     style={{ marginBottom:'0%'}}
                     onPress={() => this.props.navigation.navigate('Proceso de pago')} 
                                         
                     >

                     <Text style={{height: '75%', 
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
                     opacity:opacity,
                     textAlignVertical:'center'}}> HACER PEDIDO </Text>

               </TouchableOpacity>
             </View>

            </View>  

  </Card>
              

</View>

 

     

</View>

</ImageOverlay>
     
       
  )}
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