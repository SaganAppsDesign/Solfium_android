import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View, Image} from 'react-native';
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


export var codigo_agente, instalador, id,id2, array2
export var codigo_instalador
var lista_items


export class IntroducirNombre extends React.Component {
   
  state = {

    name: '',
    uid: '',
    codigo_agente:'',
    codigo_instalador:'',
    opacity: 0.4,
    bool: false,
    list:[],
    lista_codigos_agentes:[]
   

  }

  codigo_agente = this.state.codigo_agente
  codigo_instalador = this.state.codigo_instalador
 
 
//Reparto de instaladores dependiendo del número de usuarios en la BBDD
  distribucionUsuariosInstaladores(){

    var array = this.state.list
 
    if (array.length >= 1 && array.length < 200){
      
      
      instalador = "solan"
     
    
    } if (array.length >= 200 && array.length < 300) {
  
       instalador = "desmex02"
     
      
    } if (array.length >= 300 && array.length < 400) {
    
      instalador = "desmex03"
      
    }
     
  
  }

 //Actualización estado cliente, código agente y nombre cliente en BBDD
  user = () =>  db.ref('Usuarios/' +  Fire.getUid()).update({
    
    name: this.state.name,
    codigo_agente: this.state.codigo_agente,
    codigo_instalador: instalador,
    estado_cliente: "3/8 - Cliente abre CHAT con instalador por primera vez"
    
    
    })

  
//Nombre cliente tomado del textinput y volcado a estado 'name'
onChangeText = name => this.setState({ name })


 // Búsqueda en BBDD de los códigos de los comerciales 
 rastrearCodigosComerciales(codigo_agente){
  var a
  array2 = this.state.lista_codigos_agentes  
  lista_items = []  
  //crear lista de códigos de agentes comerciales desde la BBDD
  for (id in array2) {
             
           lista_items.push(array2[id].id)
                         
      }
  //Comparar códigos agentes con código cliente
  for (var i=0; i < lista_items.length; i++) {

       if (lista_items[i] == codigo_agente){
                   
          a=1
                             
        } 
               
      }

  if (a==1) {

    return true
    
  } else{

    return false
  }
  
}

//Función código agente
agentCode = codigo_agente => this.setState({ codigo_agente}, () => {

    
  if(this.rastrearCodigosComerciales(codigo_agente)){
    alert("Código correcto")

  }
  
  if (!this.rastrearCodigosComerciales(codigo_agente)&&codigo_agente.length==4){
           
      alert("Por favor, introduce código correcto. Inténtalo de nuevo")
      this.setState({ codigo_agente: "" })

  }
   
})

//Función botón "Abrir chat"  
  onPress = () =>

      this.props.navigation.navigate('Chat', { 
        
        name: this.state.name,
        valor:2
       
    }
   )

     
  render() {

    this.distribucionUsuariosInstaladores()

    return (

         
  
      <ImageOverlay 

      source={fondo}
      height={ hp('100%')}
      overlayAlpha={0}
 
      >

      <View style={{ marginTop:hp('0%'),alignItems:'center', marginBottom:'0%', flex:1}}> 
  
                  
      <View style={{marginTop:hp('0%'),alignItems:'center', marginBottom:'0%', flex:5, height:hp('3%')}}> 
      
          
          <View style={{marginTop:hp('0%'),alignItems:'center', marginBottom:'0%', flex:1.5, height:hp('3%')}}> 
              <View style={{backgroundColor:'blue', width:hp('40%'), borderRadius:10, marginTop:hp('8%'), backgroundColor: 'orange', alignItems:'center', marginBottom:'0%', flex:1.2, height:hp('5%'), 
              justifyContent:'center'}}> 
                  <Text style={{color: 'white',
                    
                    fontSize: hp('2%'),
                    marginHorizontal: wp('0%'),
                    marginTop:hp('0%'),
                    fontWeight: 'bold',
                    padding: hp('2%'),
                    textAlign: 'center',
                    borderRadius:10}} h1>Nos dará mucho gusto aclarar tus dudas.
                    Ingresa tus preguntas y te responderemos a la brevedad</Text>
              </View>

        
                <View style={{height:hp('80%'), width:hp('100%'), alignItems:'center', flex:1, marginBottom:hp('3%'), alignContent:'center'}}>

                              
                    <TextInput
                      style={styles.nameInput}
                      label="Dinos tu nombre"
                      onChangeText={this.onChangeText}
                      value={this.state.name}
                      returnKeyType={ 'done' }
                      theme={{ colors: { primary: 'orange',underlineColor:'transparent'}}}
                  
                    />
                   
                </View>

        </View>

            <View style={{height:hp('80%'), width:hp('100%'), alignItems:'center', flex:1, marginTop:hp('0%')}}>

              <View style={{backgroundColor:'red',  width:hp('45%'), borderRadius:10, marginTop:hp('0%'),marginBottom:hp('0%'), backgroundColor: '#2C80E5', 
              alignItems:'center', flex:0.3, height:hp('100%'), justifyContent:'center'}}> 
                  <TouchableOpacity 
                  disabled={true}
                        >
                  <Text style={{color: 'white',
                    
                    fontSize: hp('1.8%'),
                    marginHorizontal: wp('0%'),
                    marginTop:hp('3%'),
                    fontWeight: 'bold',
                    padding: hp('0%'),
                    textAlign: 'center',
                    height: hp('8%'),
                    borderRadius:10}} h1>¿Has contactado con nuestros agentes comerciales? Ingresa tú código de 4 NÚMEROS</Text>
                                                
                  </TouchableOpacity>

                </View>

                <View style={{width:hp('100%'), marginTop:hp('0%'),marginBottom:hp('3%'), alignItems:'center', flex:0.7, 
                 height:hp('100%'), justifyContent:'center'}}>    
                        <TextInput
                       
                        maxLength={4}
                        style={{height:hp('8%'),
                        marginLeft: hp('0%'),
                        marginTop:hp('0%'),
                        marginBottom:hp('0%'),
                        width:wp('40%'),
                        paddingHorizontal: wp('5%'),
                        backgroundColor: 'white',
                        fontSize:hp('2%'),
                        fontWeight: 'bold',
                        borderRadius: 2, 
                        color:'#2C80E5',
                       }
                                            
                        }
                        label="Código"
                        onChangeText={this.agentCode}
                        value={this.state.codigo_agente}
                        returnKeyType={ 'done' }
                        theme={{ colors: { primary: 'orange',underlineColor:'transparent'}}}
                                        
                        />
                  </View>

                  </View>

                  <View style={{width:hp('20%'),height:hp('100%'), borderRadius:15, marginTop:hp('0%'), alignItems:'center', 
                                      marginBottom:'0%', justifyContent:'center', alignContent:'center', flex:0.5}}> 
                   
                      <Text></Text>
                          

                  </View>
            
              <View style={{width:hp('20%'),height:hp('100%'), borderRadius:15, marginTop:hp('0%'), alignItems:'center', 
              marginBottom:'0%', justifyContent:'center', alignContent:'center', flex:0.5}}> 

                  

                  <View style={{width:hp('20%'),height:hp('100%'), borderRadius:15, marginTop:hp('0%'), alignItems:'center', 
                                      marginBottom:'0%', justifyContent:'center', alignContent:'center', flex:0.1}}> 
                                            
                      <TouchableOpacity onPress={
                        () => { this.onPress(); this.user()}
                      }
                      >
                      <Text style={styles.buttonText}>¡¡Abrir chat!!</Text>
                      </TouchableOpacity>
                  </View>
                     

              </View>
             
            </View>

              

              { /* LOGO*/}

            <View style={{alignItems:'center', justifyContent:'center', flex:0.6, marginTop:hp('0%')}}>  
            
            <Image 
              
              source={logo}
              style={{aspectRatio:4.5, height:hp('5%')}}
              
              >    
            </Image>  

            </View> 

            {/* header */}              
           {/*Botones*/}     
           <View style={{opacity: 1, alignItems:'center', flex:0.6,  justifyContent:'center', flexDirection:'row', marginBottom:hp('2%'),marginTop:hp('0%')}}>  
                         

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

  componentDidMount() {

this.setState({codigo_instalador: instalador})

//Llamada a la BBDD para poder calcular el número de clientes que hay en este momento
    db.ref('/Usuarios/').on('value', (snapshot) =>{
      var li = []
                
      snapshot.forEach((child)=>{
       li.push({
                key: child.key,
                  
      })
    })
    
    
    this.setState({list:li})
    
    
    })

//Llamada a la BBDD para poder rastrear los códigos de los Agentes Comerciales e impedir que se introduzca un código que no exista en el TextInput del interfaz

    db.ref('/Agentes_comerciales/').on('value', (snapshot) =>{
      var codigos_agentes = []

     // console.log("codigos_agentes.id DID",codigos_agentes.id)
                
      snapshot.forEach((child)=>{
        codigos_agentes.push({
                //key: child.key,
                id:child.val().id,
              

        
      })
    })


 this.setState({lista_codigos_agentes:codigos_agentes})


})
   
                    
    }

}

const styles = StyleSheet.create({
 
  nameInput: {
    height: hp('8%'),
    alignContent:'center',
    marginLeft: hp('0%'),
    marginTop:hp('3%'),
    marginBottom:hp('7%'),
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
    marginTop:hp('0%'),
    fontSize: hp('4%'),
    marginBottom:hp('0%'),
    fontWeight:'bold',
    color:'white',
    width:wp('50%'),
    height:hp('6%'),
    padding:hp('0%'),
    textAlign:'center',
    alignContent:'center',
    alignItems:'center'
    
  },
});
