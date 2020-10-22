import * as React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import fondo from '../assets/fondo5.jpg';  
import chat from '../assets/chat.png';
import ImageOverlay from "react-native-image-overlay";
import 'react-native-gesture-handler';
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import { Card } from 'react-native-elements';
import logo from '../assets/logo.png'; 
import qr2 from '../assets/qr2.png'; 
import confirmado from '../assets/confirmado.png'; 
import verResultado from '../assets/verResultado.png'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import  Fire , {db} from '../fire';
import backBtn from '../assets/backBtn.png';

                        

export class IdentidadConfirmada extends React.Component {

  state = {
 
    nombre_instalador:'',
    viabilidad:'',
    QR:''
  }

  
  render() {

    var viabilidad = this.state.viabilidad
    var QR = this.state.QR
    var bool,opacity, opacity2, opacity3

    //console.log(QR)

     if (viabilidad == ''){
            
      bool=true
      opacity=0
      } else {

      bool=false
      opacity=1
      }
    
      if (QR == ''){
       
      opacity2=0
      } else {
           
      opacity2=1
      
      }

      if (QR == 'OK' && viabilidad==''){
       
        opacity3=1
        } else {
        
        opacity3=0
        }




     return (

       
      <ImageOverlay source={fondo}
                    height={hp('100%')}
                    overlayAlpha={0}                 
                    >
                   
            <View style={{width:wp('100%'), height:hp('100%'), flex:1}}>

                                          
                    
                    <View style={{alignItems: 'center', marginTop: hp('17%'), flex:5}}>
                         
                      <Card containerStyle={{backgroundColor:'white', borderRadius: 15, 
                            width:wp('75%'), height:hp('35%')}}>
                            
                            <View style={{flexDirection:'row', height:hp('18%')}}>   
                                

                              <View style={{flex:5, marginTop:hp('1%')}}>


                                <TouchableOpacity 
                                             
                                    onPress={() => this.props.navigation.navigate('QR correcto')}
                                    >
                                    <Image 
                                
                                    source={qr2}
                                    style={{aspectRatio:1, height:hp('15%'), marginLeft:wp('3%')}}
                                    
                                    >    
                                    </Image> 

                                </TouchableOpacity>

                                </View>    

                                <View style={{flex:5}}>
                                    <Text style={{color: '#000',
                                        backgroundColor: 'white',
                                        marginTop: hp('5%'),
                                        marginRight:wp('2%'),
                                        marginLeft:wp('3%'),
                                        height:hp('10%'),
                                        width:wp('30%'),
                                        fontSize: hp('2%')
                                       
                                        }}>

                                       Presiona para leer código QR del experto
                                 
                              </Text>
                        
                    </View>

                   </View>

                            

                    {/*  Foto y descripción instalador */}

                    <View style={{flexDirection:'row', height:hp('35%'),
                    width:wp('70%')}}>
            
                    <View style={{flex:3}}>

                        <Image
                        style={{aspectRatio:1, borderRadius:60 , height:hp('11%'), marginLeft:wp('2%'), borderWidth:1, borderColor:'black'}}
                        source={require('../assets/tecnico.jpg')}
                        />
                    </View> 
    
                    <View style={{flex:4}}>
                                <Text style={{color: '#000',
                                      backgroundColor: 'white',
                                      marginTop: hp('2%'),
                                                                         
                                      }}>

                                      <Text style={{fontSize:hp('2%')}}>Experto asignado:</Text>
                                      <Text>{`

  `}</Text>

                                      <Text style={{ fontWeight: "bold", fontSize: hp('2.5%'),marginTop: hp('5%'),
                                      marginRight:wp('3%'),
                                      marginLeft:wp('2%'),
                                      height:hp('10%'),
                                      width:wp('30%'),}}>{this.state.nombre_instalador}</Text>
                                      
                              
                              </Text>
                        
                    </View>
      
                  </View>
                </Card>
                              

            </View>

    {/*Imagen Confirmar*/} 

    <View style={{flex:1, flexDirection:'row', marginBottom:hp('2%'),}}>  
    
       <View style={{marginTop:hp('0%'), marginLeft:wp('15%'), flex:1}}>
       
                 <Image 
                 
                 source={confirmado}
                 style={{
                 aspectRatio:0.9, height:hp('9%'),opacity:opacity2}}
                 
                 >    
                 </Image> 
     
       </View>
     
     <View style={{flex:2, marginRight:wp('10%')}}>

          <Text style={{color: '#fff',
                marginTop: hp('5%'),
                marginLeft:hp('5%'),
                height:hp('10%'),
                width:wp('50%'),
                fontWeight:'bold',opacity:opacity3, fontSize: hp('4%')}}>En Revisión...</Text>
          <Text style={{color: '#fff',
                marginTop: hp('-9%'),
                marginLeft:hp('7%'),
                height:hp('10%'),
                width:wp('50%'),
                fontWeight:'bold',
                opacity:opacity,
                fontSize: hp('4%')
                }}>
                
                <Text style={{fontSize: hp('2%')}}>VER RESULTADO</Text>

            </Text>

       </View>

   </View>

   <View style={{marginBottom:hp('10%'), flex:1, flexDirection:'row'}}>  
   
        <View style={{flex:1}}>
        <Text style={{color: '#28F33D',
                           
              marginLeft:wp('9%'),
              marginTop:hp('1%'),
              height:hp('10%'),
              width:wp('30%'),
              fontWeight:'bold',
              textAlign:'center', 
              fontSize: hp('2%'),
              opacity:opacity2
              }}>

              Identidad confirmada

            </Text>

          </View>
    
            <View style={{flex:1}}>
              
            <TouchableOpacity 
                                                    
              onPress={() => this.props.navigation.navigate('Viabilidad Instalación')}
              disabled={bool}
              >
                        <Image 
                        
                        source={verResultado}
                        style={{
                        width:wp('10%'), height:wp('10%'), marginLeft:wp('20%'),opacity: opacity}}
                        
                        >    
                        </Image> 
            </TouchableOpacity>
            
            </View>

  </View>
       
     
     { /* LOGO*/}

     <View style={{alignItems:'center', flex:0.2, marginTop:hp('0%')}}>  
     
     <Image 
       
       source={logo}
       style={{aspectRatio:4.5, height:hp('6%')}}
       
       >    
     </Image>  

    </View> 
{/*FIN LOGO*/} 
 {/* header */}              
{/*Botones*/}     
           <View style={{opacity: 1, alignItems:'center', flex:1.5,  justifyContent:'center', flexDirection:'row', marginBottom:hp('0%'),marginTop:hp('3%')}}>  
                         

                         <View  style={{ alignItems:'center', flex:1,  justifyContent:'center'}}>
                            <TouchableOpacity 
                                                                                         
                               onPress={() => this.props.navigation.navigate('Próxima visita')}
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

                         <View style={{alignItems:'center', flex:1,  justifyContent:'center'}}>   
                                          
                                          <TouchableOpacity 
                                                                                                      
                                          onPress={() => this.props.navigation.navigate('Chat',  {valor: 1})}
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

  this.setState({ nombre_instalador: snapshot.child("nombre_instalador").val() || '',
                  viabilidad: snapshot.child("Viabilidad").val() || '',
                  QR: snapshot.child("QR_instalador").val() || ''
                                
                })    

 
}
)

}
}



