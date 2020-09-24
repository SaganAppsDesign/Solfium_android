import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Linking, ToastAndroid} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import logo from '../assets/logo.png'; 
import fondo4 from '../assets/fondo4.jpg';  
import instalador from '../assets/instalador.png';  
import pago from '../assets/pago.png';  
import visita from '../assets/visita.png';  
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button} from 'react-native-elements';
import * as React from 'react';
import Fire, {db} from '../fire';
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const user = () => {
  ToastAndroid.show("Perfil usuario", ToastAndroid.SHORT);
 
};

const settings = () => {
  ToastAndroid.show("Settings", ToastAndroid.SHORT);
 
};
       


export function MeInteresa({ route, navigation }) {

return (

         <ImageOverlay 

                  source={fondo4}
                  height={hp('100%')}
                  overlayAlpha={0}
                    

                  //resizeMode="stretch"
                  //style={styles.fondo} 
                  >
                       
                <View style={{alignItem:'center', justifyContent:'center', width:wp('100%'), height:hp('100%'), flex:1, flexDirection:'column'}}>           
                   


                   <View  style={{alignItems:'center', flex:1}}>

                      <Text 
                          style={{textAlign:'center',  fontSize:hp('2.5%'), width:wp('70%'), height: hp('10%'), fontWeight:'bold',
                                  color: 'white', marginBottom: hp('0%'),  marginLeft: "0%", marginTop:hp('3%')}} 
                         >El proceso para implementar el sistema en su hogar es el siguiente:</Text>
                   </View>
           
                  { /* Botones*/}
                      <View  style={{ alignItems:'center', flex:4,  justifyContent:'center'}}>

                       <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                            <TouchableOpacity 
                                                                                        
                                  onPress={() => navigation.navigate('Nombre usuario')}
                                    > 
                                                              
                                    <Image 
                              
                                    source={visita}
                                    style={{marginLeft:wp('0%'), width:wp('70%'), height:hp('16%')}}
                                    
                                    >    
                                  </Image> 
          
                            </TouchableOpacity> 
                       </View>
                       <View  style={{opacity:0.8, alignItems:'center', flex:1,  justifyContent:'center'}}>
                          <TouchableOpacity 
                            disabled={true}> 
                                                   
                          <Image 
                          
                              source={instalador}
                              style={{marginTop:'0%', marginBottom:'0%', marginLeft:wp('0%'), marginRight:'0%', width:wp('70%'), height:hp('16%')}}
                              
                              >               
                              </Image> 
                          
                          </TouchableOpacity> 
                       </View>
                      <View  style={{opacity:0.8, alignItems:'center', flex:1,  justifyContent:'center'}}>
                      <TouchableOpacity 

                            disabled={true} 
                                                                                  
                            onPress={() => navigation.navigate('Proceso de pago')}
                              > 
                           
                             
                              <Image 
                                    source={pago}
                                    style={{marginTop:'0%', marginBottom:'0%', marginLeft:wp('0%'), marginRight:'0%', width:wp('70%'), height:hp('16%')}}
                                    
                                    />

                       </TouchableOpacity>
                       </View>

                       </View>


                                 
    {/*Botones*/}     
           <View style={{marginTop:hp('9%'),   alignItems:'center', flex:1,  justifyContent:'center', flexDirection:'row'}}>  
                         
           <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
               <TouchableOpacity 
                                                                            
               onPress={() => navigation.navigate('Ingresar Consumo')}
                 > 
                                       
                  <Image 
                  
                  source={home}
                  style={{aspectRatio:1, height:hp('9%')}}
                  
                  >    
                  </Image> 

                                
              </TouchableOpacity> 

           </View>

          <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
              <TouchableOpacity 
                                                                           
              onPress={() => user()}
                > 
                                      
                 <Image 
                 
                 source={usuario}
                 style={{aspectRatio:1, height:hp('9%')}}
                 
                 >    
                 </Image> 

                               
             </TouchableOpacity> 

            </View>

            <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
            
            <TouchableOpacity 
                                                                           
              onPress={() => settings()}
                > 
                                      
                 <Image 
                 
                 source={setting}
                 style={{aspectRatio:1, height:hp('9%')}}
                 
                 >    
                 </Image> 

                               
             </TouchableOpacity> 

            </View>

                 

          </View>
          
          
          { /* LOGO*/}
  
          <View style={{alignItems:'center', justifyContent:'center',width:wp('100%'), height:hp('100%'), flex:1}}>  
          
          <Image 
            
            source={logo}
            style={{aspectRatio:4.5, width:wp('100%'), height:hp('6%')}}
            
            >    
          </Image>  

         </View> 

    </View>

    </ImageOverlay>

  );
  
}





