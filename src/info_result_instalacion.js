import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Button} from 'react-native';
import tec2 from '../assets/tec2.gif'; 
import ImageOverlay from "react-native-image-overlay";
import Icon from 'react-native-vector-icons/FontAwesome';
import {db} from '../fire';
import Fire from '../fire';

var {height} = Dimensions.get('window');
var viabilidad, viabilidad2, user
var text,text1,text2,text3,color,opacity


data = () => db.ref('/Usuarios/' +  Fire.getUid()).on('value', (snapshot) => {
 
  //viabilidad1 = snapshot.Viabilidad;
  //const key = snapshot.key 
  
  user = snapshot.hasChild('name')
  viabilidad = snapshot.child("Viabilidad").val()
  
  
  
 //this.Viabilidad = userObj.name;
  
   //viabilidad2 = user.Viabilidad
   console.log('viabilidad: ' + viabilidad)

  //console.warn('viabilidad: ' + userObj.Viabilidad)
  
  if (viabilidad == '100%'){
    text = '¡Felicidades! Se puede realizar en su hogar el ' + viabilidad + ' de la instalación' 
    text1 = 'El coste total de la instalación será de 5500 $, impuestos incluidos. Se podría llevar a cabo con un pago único o con cómodas mensualidades de 458,33 $ en 12 mesesaaa' 
    text2 = 'Desde la instalación ahorrarás 300$ al mes, lo que hará que tu inversión se rentabilizará en 12 mesesaaa' 
    text3 = 'Con esta instalación, estarás contribuyendo a la protección del planeta, disminuyendo su huella de carbono en 70 Kg/añoaaa' 
    color = 'green'
    opacity = 1
     
  } else if (viabilidad == 'evaluando' || viabilidad == null){
    text = 'Espere mientras se evalúa su posible instalación' 
    text1 = 'En breve nos pondremos en contacto con usted' 
    text2 = 'Muchas gracias por la espera' 
    text3 = 'Espere mientras se evalúa su posible instalación' 
    color = 'grey'
    opacity = 0

   
  } else if (viabilidad == '50%'){
    text = '¡Felicidades! Al menos se puede realizar un ' + viabilidad + ' de la instalación, lo cual supone el siguiente ahorro:' 
    text1 = 'El coste total de la instalación será de 3025 $, impuestos incluidos. Se podría llevar a cabo con un pago único o con cómodas mensualidades de 252.08 $ en 12 meses' 
    text2 = 'Desde la instalación ahorrarás 165$ al mes, lo que hará que tu inversión se rentabilizará en 10 meses.' 
    text3 = 'Con esta instalación, estarás contribuyendo a la protección del planeta, disminuyendo su huella de carbono en 55 Kg/año' 
    color = 'orange'
    opacity = 1
    
  } else {
    text = 'Lo sentimos, no se puede realizar la instalación' 
    text1 = 'Debido a problemas técnicos causados por la situación geográfica de su hogar, no es posible llevar a cabo la instalación.' 
    text2 = 'Gracias por su tiempo.' 
    text3 = 'Saludos' 
    color = 'red'
    opacity = 0
    
  }


});



export class InfoResultInsta extends React.Component {

  

  //console.warn(key)

    
  
  render() {

      data()

  return (  

 

    <ImageOverlay source={tec2}
                    height={height}
                     
                    >
       
                 <View style={{ flex: 1,  marginTop:'0%', marginBottom:'100%', alignItems:'center'}}>

                             
                 <View style={{flexDirection: 'row'}}>
                               

                 <Text style={{
    
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
            
              }}>{text}</Text>

                  
                  <View
                            style={{
                            
                            marginTop: '5%',
                            marginBottom:'0%',
                            marginRight:'2%',
                            marginLeft:'0%',
                            width:'20%',
                            height:'50%',
                           }}>
                    <Button 
                              onPress={() => this.props.navigation.navigate('Chat')}
                              title=' Chat'
                              icon={
                                          <Icon
                                            name="comments"
                                            size={20}
                                            color="white"
                                          />
                                        }
                                                            
                                    >
                                  
                    </Button>
                   </View>
                   </View>

                   
                   <Text style={{color: '#000',
                                backgroundColor: 'white',
                                fontSize: 15,
                                marginHorizontal: 15,
                                marginTop: "1%",
                                fontWeight: 'bold',
                                padding: 10,
                                textAlign: 'center',
                                borderRadius:10}} >{text1}</Text>

                  

                 
                   <Text style={{color: '#000',
                                backgroundColor: 'white',
                                fontSize: 15,
                                marginHorizontal: 15,
                                marginTop: 10,
                                fontWeight: 'bold',
                                padding: 10,
                                textAlign: 'center',
                                borderRadius:10}} h1>{text2}</Text>

                

                   <Text style={{color: '#000',
                                backgroundColor: 'white',
                                fontSize: 15,
                                marginHorizontal: 15,
                                marginTop: 10,
                                marginBottom:'5%',
                                fontWeight: 'bold',
                                padding: 10,
                                textAlign: 'center',
                                borderRadius:10}} h1>{text3}</Text>
   

                  <View style={{ marginBottom: '5%'}}>

                           <View style={{ marginBottom: 10, marginTop: 10, opacity:opacity}}>

                            <Button title="   Acepto la oferta" onPress={() =>  this.props.navigation.navigate('Proceso de pago')} 
                                                                  
                                    icon={
                                        <Icon
                                          name="thumbs-up"
                                          size={25}
                                          color="black"
                                        />
                                      }/>
                           
                            </View>

                           <View style={{opacity:opacity}}>
           
                            <Button 
                              title="   Rechazo la oferta"
                              onPress={() => this.props.navigation.navigate('Solfium')}
                         
                              icon={
                                        <Icon
                                          name="arrow-circle-left"
                                          size={25}
                                          color="black"
                                        />
                                      }
                            
                            />


                            
                           </View>
                           
                                
                  </View> 

                  </View>
      </ImageOverlay>
     
       
  )}
}



const styles = StyleSheet.create({

  fondo: {
    width: '100%'
        
  },
  btnContainer1: {
    
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'green',
    padding: 15,
    textAlign:'center',
    alignItems:'center',
    flexDirection: 'column',
    width:300,
    height:100,
    marginBottom:10, marginTop:30

  
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