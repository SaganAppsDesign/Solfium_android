import * as React from 'react';
import {Text, View, Dimensions, ScrollView, Image, ImageBackground,ToastAndroid, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Card} from 'react-native-elements';
import ImageOverlay from "react-native-image-overlay";
import tec3 from '../assets/fondo6.jpg'; 
import fondo2 from '../assets/fondo2.jpg';   
import fondo6 from '../assets/fondo6.jpg'; 
import calculos from '../assets/calculos_finales.png';  
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import logo from '../assets/logo.png'; 
import chat from '../assets/chat.png';
import carrito from "../assets/carrito.svg"




var {height} = Dimensions.get('window');
var {width} = Dimensions.get('window');
const user = () => {
  ToastAndroid.show("Perfil usuario", ToastAndroid.SHORT);
 
};

const settings = () => {
  ToastAndroid.show("Settings", ToastAndroid.SHORT);
 
};

const meses = () => {
  ToastAndroid.show("Meses de financiación", ToastAndroid.SHORT);
 
};


export class Financiamiento extends React.Component {


 render() {


  return (


    <ImageOverlay 
          source={tec3}
          height={height}  
          overlayAlpha={0}                 
          > 
                              
            <View style={{flex:1,  marginTop:'0%', marginBottom:'0%', width:'100%', height:'100%'}}>
                    
                  <View style={{marginTop:'1%', marginBottom:'0%', marginLeft:'80%', flex:2, width:'100%', height:'100%', justifyContent:'center'}}>   
                                    
                        <TouchableOpacity 
                                                                                    
                        onPress={() => this.props.navigation.navigate('Chat')}
                        > 
                            <Image 
                            
                                source={chat}
                                style={{width:'12%', height:'92%'}}
                                
                                >    
                                </Image> 
                   
                        </TouchableOpacity> 

                </View>
                      
                          
                <View style={{ alignItems: 'center', flexDirection:'column', marginBottom:'0%', marginTop: '0%', flex:15, width:'100%', height:'100%'}}>
                
                
                  <View style={{ alignItems: 'center', flexDirection:'column', flex:1,  width:'100%', height:'100%', margiTop:'0%'}}>
                   
                    <View style={{backgroundColor:'rgba(0,0,0,0)', alignItems: 'center', flex:12, flexDirection:'column', width:'100%', height:'100%'}}>     
                    <Card containerStyle={{backgroundColor:'rgba(0,0,0,0)',  marginTop: '10%', borderRadius: 10, 
                          width:'65%', height:'0%', marginBottom:'0%', padding:0, flex:1}}>

                        <ImageBackground source={require('../assets/fondo2.jpg')} style={{overflow: 'hidden', resizeMode: "cover", width:'100%', height:'100%',  borderRadius: 10}}>
                          <Text style={{
                          color: '#fff',
                          marginTop: '2%',
                          textAlign:'center',
                          fontWeight:'bold',
                          marginRight:'0%',
                          marginLeft:'0%',
                          height:'100%',
                          width:'100%',
                          fontSize:20,
                          padding: 0}}>FINANCIAMIENTO</Text>
                       
                        </ImageBackground>
                      
                    </Card>

                    <Card containerStyle={{marginTop: '5%', borderRadius: 10, 
                    width:'50%', height:'0%', marginBottom:'0%', padding:0, flex:1}}>

                    
                     <TouchableOpacity
                       
                       style={{alignItems: 'center', marginBottom:'0%', width:'100%', height:'100%'}}
                       onPress={() => meses()} 
                                           
                       >
                       <ImageBackground source={require('../assets/fondo4.jpg')} style={{overflow: 'hidden', resizeMode: "cover", width:'100%', height:'100%',  borderRadius: 10}}>
                              
                            <Text style={{
                              color: '#fff',
                              marginTop: '7%',
                              textAlign:'center',
                              fontWeight:'bold',
                              marginRight:'0%',
                              marginLeft:'0%',
                              height:'100%',
                              width:'100%',
                              fontSize:15,
                              padding: 0}}>24 MESES</Text>
                            </ImageBackground>
                       </TouchableOpacity>
                  
                    </Card>

                    <Card containerStyle={{ marginTop: '5%', borderRadius: 10, 
                    width:'50%', height:'0%', marginBottom:'0%', padding:0, flex:1}}>

                    <TouchableOpacity
                       
                       style={{alignItems: 'center', marginBottom:'0%', width:'100%', height:'100%'}}
                       onPress={() =>  meses()} 
                                           
                       >
                       <ImageBackground source={require('../assets/fondo4.jpg')} style={{overflow: 'hidden', resizeMode: "cover", width:'100%', height:'100%',  borderRadius: 10}}>
                              
                            <Text style={{
                              color: '#fff',
                              marginTop: '7%',
                              textAlign:'center',
                              fontWeight:'bold',
                              marginRight:'0%',
                              marginLeft:'0%',
                              height:'100%',
                              width:'100%',
                              fontSize:15,
                              padding: 0}}>36 MESES</Text>
                            </ImageBackground>
                       </TouchableOpacity>
                  
                    </Card>
                    <Card containerStyle={{ marginTop: '5%', borderRadius: 10, 
                    width:'50%', height:'0%', marginBottom:'0%', padding:0, flex:1}}>

                    <TouchableOpacity
                       
                       style={{alignItems: 'center', marginBottom:'0%', width:'100%', height:'100%'}}
                       onPress={() =>  meses()} 
                                           
                       >
                       <ImageBackground source={require('../assets/fondo4.jpg')} style={{overflow: 'hidden', resizeMode: "cover", width:'100%', height:'100%',  borderRadius: 10}}>
                              
                            <Text style={{
                              color: '#fff',
                              marginTop: '7%',
                              textAlign:'center',
                              fontWeight:'bold',
                              marginRight:'0%',
                              marginLeft:'0%',
                              height:'100%',
                              width:'100%',
                              fontSize:15,
                              padding: 0}}>48 MESES</Text>
                            </ImageBackground>
                       </TouchableOpacity>
                  
                    </Card>
                    <Card containerStyle={{ marginTop: '5%', borderRadius: 10, 
                    width:'50%', height:'0%', marginBottom:'0%', padding:0, flex:1}}>

                    <TouchableOpacity
                       
                       style={{alignItems: 'center', marginBottom:'0%', width:'100%', height:'100%'}}
                       onPress={() =>  meses()} 
                                           
                       >
                       <ImageBackground source={require('../assets/fondo4.jpg')} style={{overflow: 'hidden', resizeMode: "cover", width:'100%', height:'100%',  borderRadius: 10}}>
                              
                            <Text style={{
                              color: '#fff',
                              marginTop: '7%',
                              textAlign:'center',
                              fontWeight:'bold',
                              marginRight:'0%',
                              marginLeft:'0%',
                              height:'100%',
                              width:'100%',
                              fontSize:15,
                              padding: 0}}>60 MESES</Text>
                            </ImageBackground>
                       </TouchableOpacity>
                  
                    </Card>

                    </View>

                      <View style={{alignItems: 'center', flex:2, width:'100%', height:'100%'}}>
                      <Image
                          style={{width:'19%', height:'100%', marginLeft:'0%', marginTop: '-95%'}}
                          source={require('../assets/carrito.png')}
                          />
                    </View>
                    </View>
                 </View>
                
              <View style={{marginLeft:'20%', marginTop:'0%', width:'60%', height:'100%', flex:2}}>

                 <TouchableOpacity
                       
                       style={{alignItems: 'center', marginBottom:'0%', width:'100%', height:'90%'}}
                       onPress={() => this.props.navigation.navigate('Confirmar compra')} 
                                           
                       >
  
                       <Text style={{
                       height: '100%', 
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
                       backgroundColor: '#5DCB31',
                       textAlignVertical:'center'}}> PAGAR </Text>
  
                 </TouchableOpacity>
               </View>

            {/*Botones*/}     
            <View style={{marginTop:'2%', marginBottom:'2%', marginLeft:'0%', marginRight:'0%', width:'100%', height:'100%', flex:2, flexDirection:'row'}}>  
              {/*HOME*/}  
              
              <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'0%', width:'100%', height:'100%', marginRight:'0%', flex:1}}>      
                <TouchableOpacity 
                                                                            
                onPress={() => this.props.navigation.navigate('Solfium')}
                  > 
                  
                  <View style={{alignItems:'center'}}>
                          <Image 
                          
                          source={home}
                          style={{ marginTop:'0%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%', width:'41%', height:'100%'}}
                          >    
                          </Image> 

                  </View>
              
              </TouchableOpacity> 
               </View>
           {/*USUARIO*/} 
           
           <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%', width:'100%', height:'100%', flex:1}}>
              <TouchableOpacity 
                                                                            
              onPress={() => user()            
                }> 
               
                <View style={{alignItems:'center'}}>
                      <Image 
                      
                      source={usuario}
                      style={{marginTop:'0%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%', width:'41%', height:'100%'}}
                      
                      >    
                      </Image> 

                      </View>
              </TouchableOpacity> 
            </View>
         
          {/*SETTING*/}    
          
          <View style={{marginTop:'0%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%', width:'100%', height:'100%', flex:1}}>
              <TouchableOpacity 
                                                                            
              onPress={() => settings()}
                > 
              
                <View style={{alignItems:'center'}}>
                          
                <Image 
                
                source={setting}
                style={{marginTop:'0%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%', width:'41%', height:'100%'}}
                
                >    
                </Image> 

                </View>
                         
            </TouchableOpacity> 
            </View>

       </View> 

      {/*logo*/}  

       <View style={{alignItems:'center',  marginTop:'0%', marginBottom:'10%', marginLeft:'0%', marginRight:'0%', width:'100%', height:'100%', flex:1}}>  
                
           <Image 
             
             source={logo}
             style={{alignItems:'center', marginTop:'0%', marginBottom:'0%', marginLeft:'0%', marginRight:'0%', width:'30%', height:'100%'}}
             
             >    
            </Image>  

        </View> 

       
       </View>


    </ImageOverlay> 

  );
}
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    height:'100%',
        
  },

  logo: {
    
    width: "20%",
    height: "50%",
    marginBottom: "10%",
    marginTop: "2%",
    marginLeft: "59%",
    marginRight: "0%"
    
    
  },

  boton: {
        
     height: '55%', 
     width:'100%',
     borderRadius:20,
     fontWeight:'bold',
     fontSize:15,
     color: 'white', 
     marginBottom: "0%", 
     marginTop: "0%", 
     marginLeft: "0%", 
     marginRight: "0%",
     alignItems: "center",
     paddingLeft:40, 
     paddingRight:40,
     backgroundColor: '#5DCB31',
     textAlignVertical:'center'
    
    
  },

  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },



 



  

});