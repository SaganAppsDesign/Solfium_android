import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View, Image, KeyboardAvoidingView
} from 'react-native';
import Fire, {db} from '../fire';
import fondo from '../assets/fondo5.jpg'
import logo from '../assets/logo.png'
import { TextInput } from 'react-native-paper'
import ImageOverlay from "react-native-image-overlay"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import backBtn from '../assets/backBtn.png'; 


export var codigo_agente
export var codigo_instalador

//console.log("main codigo_instalador", codigo_instalador)
//console.log("main codigo_aggente", codigo_agente)

export class Main extends React.Component {
   
  state = {

    name: '',
    uid: '',
    codigo_agente:'',
    codigo_instalador:'',
    opacity: 0.4,
    bool: false

  }

  codigo_agente = this.state.codigo_agente
  //codigo_instalador = this.state.codigo_instalador


 
  user = () =>  db.ref('Usuarios/' +  Fire.getUid()).update({
    
    name: this.state.name,
    codigo_agente: this.state.codigo_agente,
    codigo_instalador: this.state.codigo_instalador,
    estado_cliente: "Cliente abre CHAT con instalador por primera vez"
    
    
    })

  

  onChangeText = name => this.setState({ name });
  agentCode = codigo_agente => this.setState({ codigo_agente});
  installCode = codigo_instalador => this.setState({ codigo_instalador});
  
  onPress = () =>

      this.props.navigation.navigate('Chat', { 
        
        name: this.state.name,
        valor:2
       
    }
   )


  onPress2 = () => {
    
    this.setState({opacity:1}) 
    this.setState({bool:true}) 
  }

     
  render() {

  
          
    return (

         
  
      <ImageOverlay 

      source={fondo}
      height={ hp('100%')}
      overlayAlpha={0}
        

      //resizeMode="stretch"
      //style={styles.fondo} 
      >

      <View style={{ marginTop:hp('0%'),alignItems:'center', marginBottom:'0%', flex:1}}> 
  
                  
      <View style={{marginTop:hp('0%'),alignItems:'center', marginBottom:'0%', flex:8, height:hp('3%')}}> 
      
          <View style={{width:hp('40%'), borderRadius:10, marginTop:hp('8%'), backgroundColor: 'orange', alignItems:'center', marginBottom:'0%', flex:2, height:hp('5%'), 
          justifyContent:'center'}}> 
              <Text style={{color: 'white',
                
                fontSize: hp('2.2%'),
                marginHorizontal: wp('0%'),
                marginTop:hp('0%'),
                fontWeight: 'bold',
                padding: hp('2%'),
                textAlign: 'center',
                borderRadius:10}} h1>Nos dará mucho gusto aclarar tus dudas.
                Ingresa tus preguntas y te responderemos a la brevedad</Text>
           </View>

    
            <View style={{height:hp('80%'), width:hp('100%'), alignItems:'center', flex:1.5, marginTop:hp('5%')}}>

                          
                <TextInput
                  style={styles.nameInput}
                  label="Dinos tu nombre"
                  onChangeText={this.onChangeText}
                  value={this.state.name}
                  returnKeyType={ 'done' }
                  theme={{ colors: { primary: 'orange',underlineColor:'transparent'}}}
              
                />
                                     

            </View>

              <View style={{width:hp('42%'), borderRadius:10, marginTop:hp('0%'),marginBottom:hp('0%'), backgroundColor: '#2C80E5', 
              alignItems:'center', flex:1.1, height:hp('45%'), justifyContent:'center'}}> 
                  <TouchableOpacity onPress={
                            () => {this.onPress2()}
                      
                          }
                          >
                  <Text style={{color: 'white',
                    
                    fontSize: hp('1.8%'),
                    marginHorizontal: wp('0%'),
                    marginTop:hp('0%'),
                    fontWeight: 'bold',
                    padding: hp('0%'),
                    textAlign: 'center',
                    height: hp('8%'),
                    borderRadius:10}} h1>¿Has contactado con nuestros agentes comerciales?¿Sabes el código de tu asesor técnico? Pincha aquí e ingresa el código</Text>
                                                
                  </TouchableOpacity>

                </View>

                <View style={{width:hp('100%'), marginTop:hp('0%'),marginBottom:hp('0%'), alignItems:'center', flex:1.5, 
                 height:hp('100%'), justifyContent:'center'}}>    
                        <TextInput
                        editable={this.state.bool}
                        
                        style={{height:hp('8%'),
                        marginLeft: hp('0%'),
                        marginTop:hp('0%'),
                        marginBottom:hp('0%'),
                        width:wp('60%'),
                        paddingHorizontal: wp('5%'),
                        backgroundColor: 'white',
                        fontSize:hp('2%'),
                        fontWeight: 'bold',
                        borderRadius: 2, 
                        color:'#2C80E5',
                        opacity:this.state.opacity}}
                        label="Código agente"
                        onChangeText={this.agentCode}
                        value={this.state.codigo_agente}
                        returnKeyType={ 'done' }
                        theme={{ colors: { primary: 'orange',underlineColor:'transparent'}}}
                                        
                        />
                      </View>
                      <View style={{width:hp('100%'), marginTop:hp('0%'),marginBottom:hp('0%'), alignItems:'center', marginBottom:'0%', flex:1.5, 
                      height:hp('100%'), justifyContent:'center'}}>    
                        <TextInput
                        editable={this.state.bool}
                        
                        style={{height:hp('8%'),
                        marginLeft: hp('0%'),
                        marginTop:hp('0%'),
                        marginBottom:hp('0%'),
                        width:wp('60%'),
                        paddingHorizontal: wp('5%'),
                        backgroundColor: 'white',
                        fontSize:hp('2%'),
                        fontWeight: 'bold',
                        borderRadius: 2, 
                        color:'#2C80E5',
                        opacity:this.state.opacity}}
                        label="Código asesor técnico"
                        onChangeText={this.installCode}
                        value={this.state.codigo_instalador}
                        returnKeyType={ 'done' }
                        theme={{ colors: { primary: 'orange',underlineColor:'transparent'}}}
                                        
                        />
                      </View>


              <View style={{width:hp('20%'),height:hp('5%'), borderRadius:15, marginTop:hp('0%'), backgroundColor: '#DD650C', alignItems:'center', 
              marginBottom:'0%', justifyContent:'center', flex:0.5}}> 
                      <TouchableOpacity onPress={
                        () => { this.onPress(); this.user()}
                      }
                      >
                      <Text style={styles.buttonText}>Abrir chat</Text>
                      </TouchableOpacity>

              </View>
             
            </View>

              

              { /* LOGO*/}

                  <View style={{alignItems:'center', justifyContent:'center', flex:1, marginTop:hp('0%')}}>  
                  
                  <Image 
                    
                    source={logo}
                    style={{aspectRatio:4.5, height:hp('5%')}}
                    
                    >    
                  </Image>  

                  </View> 

                  {/* header */}              
           {/*Botones*/}     
           <View style={{opacity: 1, alignItems:'center', flex:1,  justifyContent:'center', flexDirection:'row', marginBottom:hp('0%'),marginTop:hp('3%')}}>  
                         

                         <View  style={{ textAlign:'center', borderRadius:5, marginLeft:wp('2%'), alignItems:'center',justifyContent:'center', opacity:1}}>
                            <TouchableOpacity 
                                                                                         
                               onPress={() => this.props.navigation.navigate('Implementación')}
                              > 
                                                    
                                                     
                               <Image 
                               
                               source={backBtn}
                               style={{aspectRatio:1, height:hp('5%')}}
                               
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




const styles = StyleSheet.create({
 
  nameInput: {
    height: hp('8%'),
 
    marginLeft: hp('0%'),
    marginTop:hp('0%'),
    marginBottom:hp('0%'),
    width:wp('80%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: 'white',
    fontSize:hp('2%'),
    fontWeight: 'bold',
    borderRadius: 2,
   
   
  },

  nameInput2: {
    height:hp('6%'),
    marginLeft: hp('0%'),
    marginTop:hp('0%'),
    marginBottom:hp('0%'),
    width:wp('60%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: 'white',
    fontSize:hp('2%'),
    fontWeight: 'bold',
    borderRadius: 2
    
   
   
  },
 

  buttonText: {
// marginLeft: hp('30%'),
    marginTop:hp('2%'),
    fontSize: hp('2%'),
    marginBottom:hp('0%'),
    fontWeight:'bold',
    
    width:wp('25%'),
    height:hp('4%'),
    
    textAlign:'center'
    
  },
});


