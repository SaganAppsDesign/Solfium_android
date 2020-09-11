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


var {height} = Dimensions.get('window');


var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year



export function DatosInstalador({ navigation }) {
 return (

       
      <ImageOverlay source={fondo}
                    height={height}  
                    overlayAlpha={0}                 
                    >
                   
         <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%', width:'100%', height:'100%'
         , flex:1}}>
                    
                    <View style={{marginTop:'5%', marginBottom:'0%', marginLeft:'82%', flex:1}}>   
                          
                          <TouchableOpacity 
                                                                                        
                          onPress={() => navigation.navigate('Chat')}
                            > 
                            <View>
                          
                                  <Image 
                              
                                  source={chat}
                                  style={{width:'80%', height:'90%'}}
                                  
                                  >    
                                  </Image> 

                            </View>
                        
                          </TouchableOpacity> 

                    </View>


                    <View style={{alignItems: 'center', marginBottom:'0%', marginTop: '1%', flex:3, width:'100%', height:'100%'}}>

                                      
                      <Card containerStyle={{backgroundColor:'white', marginTop: '0%',  borderRadius: 15, 
                            width:'80%', height:'90%', marginBottom:'0%'}}>
                            
                            <View >

                            <Text style={{color: '#E53D18',
                                    backgroundColor: 'white',
                                    fontSize: 20,
                                    marginHorizontal: '10%',
                                    marginTop: '0%',
                                    marginBottom: '1%',
                                    fontWeight: 'bold',
                                    padding: 5,
                                    textAlign: 'center',
                                     }}>CITA CONFIRMADA</Text>

                              <Text style={{color: 'black',
                                    backgroundColor: 'white',
                                    fontSize:18,
                                    marginHorizontal: '10%',
                                    marginTop: '0%',
                                    marginBottom: '1%',
                                    fontWeight: 'bold',
                                    padding: 10,
                                    textAlign: 'center',
                                    fontWeight:'bold'
                                    }}>Sábado, 5 de Noviembre 2020, 10:00 am</Text>

                                     {/*  Foto y descripción instalador */}

                                    <View style={{flexDirection:'row', width:'90%', height:'80%', marginBottom:'0%'}}>
                          
                                    <View style={{flex:5}}>
      
                                        <Image
                                        style={{borderRadius:60 , width:'65%', height:'30%', marginLeft:'20%', marginTop: 2, borderWidth:1, borderColor:'black'}}
                                        source={require('../assets/tecnico.jpg')}
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
 
                          </View>
                            

                         </Card>
                              

    </View>

    {/*Botone QR*/} 

    <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%', width:'100%', 
    height:'100%', flex:2, flexDirection:'row'}}>  
    
    <TouchableOpacity 
                                             
     onPress={() => navigation.navigate('Escanear QR Instalador')}
       > 
       <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'31%', marginRight:'0%', width:'100%', height:'100%', flex:1}}>
       
                 <Image 
                 
                 source={codigo_qr}
                 style={{
                 width:'100%', height:'100%'}}
                 
                 >    
                 </Image> 

     </View>
     
     </TouchableOpacity> 


     <View style={{flex:3, marginRight:'5%'}}>
     <Text style={{color: '#fff',
          
           marginTop: '10%',
           marginRight:'100%',
           marginLeft:'20%',
           height:'80%',
           width:'65%',
           padding: 0,
           fontWeight:'bold'
          }}>

          <Text style={{marginBottom:'100%', fontSize: 18}}>El día de la cita el técnico deberá presentar credencial con 
          
          código QR para confirmar.</Text>

         </Text>

       </View>

   </View>
    

     {/*Botones*/}     
    
     <View style={{alignItems:'center', alignContent:'center',  marginTop:'0%', marginBottom:'0%', marginLeft:'4%', marginRight:'0%', width:'100%', 
     height:'100%', flex:1, flexDirection:'row'}}>  
                     
               
     <TouchableOpacity 
                                                                  
     onPress={() => navigation.navigate('Solfium')}
       > 
       <View style={{marginTop:'4%', marginBottom:'0%', marginLeft:'30%'}}>
      
                <Image 
                
                source={home}
                style={{width:'78%', height:'93%'}}
                
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
            style={{width:'78%', height:'93%'}}
            
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
      style={{width:'78%', height:'93%'}}
      
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



