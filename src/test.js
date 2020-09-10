import * as React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import fondo from '../assets/fondo5.jpg';  
import chat from '../assets/chat.png';
import ImageOverlay from "react-native-image-overlay";
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import ok from '../assets/ok.png'; 
import { Button, Card } from 'react-native-elements';
import logo from '../assets/logo.png'; 
import codigo_qr from '../assets/codigo_qr.png'; 
import qr2 from '../assets/qr2.png'; 
import confirmado from '../assets/confirmado.png'; 
import verResultado from '../assets/verResultado.png'; 


var {height} = Dimensions.get('window');
                        

export function DatosInstalador2({ navigation }) {
 return (

       
      <ImageOverlay source={fondo}
                    height={height}  
                    overlayAlpha={0}                 
                    >
                   
                <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%', width:'100%', height:'100%'
                , flex:1}}>

                <View style={{marginTop:'5%', marginBottom:'0%', marginLeft:'75%', flex:1}}>   
                                
                        <TouchableOpacity 
                                                                                    
                        onPress={() => navigation.navigate('Chat')}
                        > 
                        <View>
                        
                                <Image 
                            
                                source={chat}
                                style={{width:'80%', height:'98%'}}
                                
                                >    
                                </Image> 

                        </View>
                    
                        </TouchableOpacity> 

                </View>
                    
                    
                    <View style={{alignItems: 'center', marginBottom:'0%', marginTop: '1%', flex:3, width:'100%', height:'50%'}}>
                         
                      <Card containerStyle={{backgroundColor:'white', marginTop: '0%',  borderRadius: 15, 
                            width:'80%', height:'100%', marginBottom:'0%'}}>
                            
                            <View style={{flexDirection:'row', width:'100%', height:'50%', marginBottom:'0%'}}>   
                                

                                <View style={{flex:5, marginTop:'5%', marginBottom:'5%', marginLeft:'5%', width:'45%', height:'75%'}}>


                                <TouchableOpacity 
                                             
                                    onPress={() => navigation.navigate('QR Escaneado')}
                                    >
                                    <Image 
                                
                                    source={qr2}
                                    style={{width:'75%', height:'100%'}}
                                    
                                    >    
                                    </Image> 

                                </TouchableOpacity>

                                </View>    

                                <View style={{flex:5, marginRight:'5%'}}>
                                    <Text style={{color: '#000',
                                        backgroundColor: 'white',
                                        marginTop: '30%',
                                        marginRight:'100%',
                                        marginLeft:'5%',
                                        height:'40%',
                                        width:'100%',
                                        padding: 0,
                                        }}>

                                        <Text style={{marginBottom:'100%', fontSize: 15}}>Presiona para leer código QR del técnico</Text>
                                 
                              </Text>
                        
                    </View>

                   </View>

                            

                    {/*  Foto y descripción instalador */}

                    <View style={{flexDirection:'row', width:'100%', height:'80%'}}>
            
                    <View style={{flex:5}}>

                        <Image
                        style={{borderRadius:60 , width:'65%', height:'40%', marginLeft:'15%', marginTop: '0%', borderWidth:1, borderColor:'black'}}
                        source={require('../assets/yoda.jpg')}
                        />
                    </View> 
    
                                <View style={{flex:5, marginRight:'5%'}}>
                                            <Text style={{color: '#000',
                                                  backgroundColor: 'white',
                                                  marginTop: '5%',
                                                  marginRight:'100%',
                                                  marginLeft:'0%',
                                                  height:'30%',
                                                  width:'100%',
                                                  padding: 0,
                                                 }}>
      
                                                 <Text style={{marginBottom:'100%', fontSize: 15}}>Técnico asignado:</Text>
                                                 <Text>{`
                                                         `}</Text>
      
                                                 <Text style={{fontWeight: "bold", fontSize: 16}}>Juan Carlos Díaz</Text>
                                                 
                                          
                                          </Text>
                                    
                                </View>
      
                            </View>
                          </Card>
                              

            </View>

    {/*Imagen Confirmar*/} 

    <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%', width:'100%', 
    height:'100%', flex:1, flexDirection:'row'}}>  
    
       <View style={{marginTop:'5%', marginBottom:'0%', marginLeft:'20%', marginRight:'0%', width:'100%', height:'100%', flex:1}}>
       
                 <Image 
                 
                 source={confirmado}
                 style={{
                 width:'70%', height:'100%',marginTop:'0%'}}
                 
                 >    
                 </Image> 
     


       </View>
     
     <View style={{flex:2, marginRight:'5%'}}>
     <Text style={{color: '#fff',
          
           marginTop: '30%',
           marginRight:'100%',
           marginLeft:'35%',
           height:'80%',
           width:'65%',
           padding: 0,
           fontWeight:'bold'
          }}>

          <Text style={{marginBottom:'100%', fontSize: 18}}>Ver resultado</Text>

         </Text>

       </View>

   </View>

   <View style={{marginTop:'5%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%', width:'100%', 
   height:'100%', flex:1, flexDirection:'row'}}>  
   
   <View style={{flex:1, marginRight:'0%'}}>
   <Text style={{color: '#28F33D',
        
         marginTop: '0%',
         marginRight:'100%',
         marginLeft:'25%',
         height:'70%',
         width:'65%',
         padding: 0,
         fontWeight:'bold',
         textAlign:'center', alignItems:'center',
         fontSize: 18
        }}>

         Identidad confirmada

       </Text>

     </View>
    
     <View style={{marginTop:'0%', marginBottom:'0%', 
     marginLeft:'0%', marginRight:'0%', width:'0%', height:'100%', flex:1}}>
      
     <TouchableOpacity 
                                             
       onPress={() => navigation.navigate('Viabilidad Instalación')}
       >
                <Image 
                
                source={verResultado}
                style={{
                width:'25%', height:'80%', marginLeft:'50%'}}
                
                >    
                </Image> 
    </TouchableOpacity>
    
    </View>

  </View>
    

     {/*Botones*/}     
    
     <View style={{alignItems:'center', alignContent:'center',  marginTop:'0%', marginBottom:'0%', marginLeft:'4%', 
     marginRight:'0%', width:'100%', 
     height:'100%', flex:1, flexDirection:'row'}}>  
                   
               
     <TouchableOpacity 
                                                                  
     onPress={() => navigation.navigate('Solfium')}
       > 
       <View style={{marginTop:'4%', marginBottom:'0%', marginLeft:'30%'}}>
      
                <Image 
                
                source={home}
                style={{width:'78%', height:'95%'}}
                
                >    
                </Image> 

      </View>
    
    </TouchableOpacity> 

    <TouchableOpacity 
                                                                  
    onPress={() => navigation.navigate('Solfium')}
      > 
      <View style={{marginTop:'4%', marginBottom:'0%', marginLeft:'30%'}}>
     
            <Image 
            
            source={usuario}
            style={{width:'78%', height:'95%'}}
            
            >    
            </Image> 

    </View>
   
   </TouchableOpacity> 
   
   <TouchableOpacity 
                                                                  
   onPress={() => navigation.navigate('Solfium')}
     > 
     <View style={{marginTop:'4%', marginBottom:'0%', marginLeft:'30%'}}>
    
     
     <Image 
      
      source={setting}
      style={{width:'78%', height:'95%'}}
      
      >    
     </Image> 

   </View>
  
  </TouchableOpacity> 

       

</View> 
 {/*FIN Botones*/}   
 
{/*LOGO*/}    
     
<View style={{alignItems:'center', justifyContent:'center',  marginTop:'0%', marginBottom:'0%', width:'100%', flex:1, flexDirection:'row'}}>  
            
    <Image 
      
      source={logo}
      style={{marginTop:'0%', marginBottom:'7%', width:'40%', height:'44%'}}
      
      >    
    </Image>  

</View>     
{/*FIN LOGO*/}          
         
</View>

</ImageOverlay>
   

  );
}



