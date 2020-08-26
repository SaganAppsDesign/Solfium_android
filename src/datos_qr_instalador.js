import * as React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import tec3 from '../assets/tec3.gif';  
import ImageOverlay from "react-native-image-overlay";
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Card } from 'react-native-elements';


var {height} = Dimensions.get('window');


var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year



export function DatosInstalador({ navigation }) {
 return (

       
      <ImageOverlay source={tec3}
                    height={height}                   
                    >

                    <View>

                    <View
                       style={{                    
                          marginTop: '10%',
                          marginBottom:'2%',
                          marginRight:'2%',
                          marginLeft:'75%'}}>
                       <Button 
                          onPress={() => navigation.navigate('Chat')}
                          title=' Chat'
                          icon={
                                      <Icon
                                        name="comments"
                                        size={50}
                                        color="white"
                                      />
                                    }
                                                        
                                >
                         
                        </Button>
                    </View>
                    <Text style={{color: '#000',
                                    backgroundColor: 'white',
                                    fontSize: 20,
                                    marginHorizontal: 15,
                                    marginTop: '0%',
                                    marginBottom: '10%',
                                    fontWeight: 'bold',
                                    padding: 10,
                                    textAlign: 'center',
                                    borderRadius:10}} h1>Me pasaré por su domicilio el próximo martes a las 10 a.m. A continuación tiene mis datos:</Text>
                  
                   
                      <Card containerStyle={{padding: 17, backgroundColor:'#F7CD63', marginTop: '2%'}}>
                         <View style={[styles.box1]}>      
                         <View style={{flexDirection: 'column'}}>
                         <Image
                          style={{width:130, height:130, marginLeft:2, marginTop: 2, borderWidth:4, borderColor:'black'}}
                          source={require('../assets/yoda.jpg')}
                          />

                          </View>
                         <View style={{flexDirection: 'column'}}>
                         <Text style={{color: '#000',
                                backgroundColor: '#BBCEEF',
                                fontSize: 12,
                                textAlign: 'center',
                                marginTop: 10,
                                marginRight:10,
                                marginLeft:60,
                                height:33,
                                width:100,
                                fontWeight: 'bold',
                                padding: 10,
                                borderRadius:10,
                                borderWidth:2, 
                                borderColor:'black'}}>{year}-{month}-{date}
 

                         </Text>

                          <Text style={{color: '#000',
                                backgroundColor: '#F7CD63',
                                fontSize: 13,
                                textAlign: 'center',
                                marginTop: 10,
                                marginRight:0,
                                marginLeft:10,
                                height:40,
                                width:150,
                                fontWeight: 'bold',
                                padding: 10,
                                borderRadius:10,
                                borderWidth:2, 
                                borderColor:'black'}}>Nombre instalador: 
                         
                         </Text>
                         <Text style={{color: '#000',
                                backgroundColor: '#F7CD63',
                                fontSize: 13,
                                textAlign: 'justify',
                                marginTop: 10,
                                marginRight:10,
                                marginLeft:10,
                                height:120,
                                width:150,
                                fontWeight: 'bold',
                                padding: 10,
                                borderRadius:10,
                                borderWidth:2, 
                                borderColor:'black'}}>Maestro Yoda, instalador con más de 10 años de experiencia, en continua lucha contra el Lado Oscuro... 
                         
                         </Text>
                         </View>


                         </View>
                      </Card>

                

                   <View style={{marginBottom: '30%', marginLeft:'10%',marginRight:'10%', marginTop:'10%'}}>
                   <Button title="   Instalador. Ha llegado al domicilio   " 
                           onPress={() =>  navigation.navigate('Escanear QR Instalador')}
                           icon={
                                  <Icon
                                    name="wrench"
                                    size={25}
                                    color="black"
                                  />
                                }


                         />
                   </View>


                   
             
 

         </View>   
      </ImageOverlay>
    

 


  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'column',
    
  },

       //header
    box1: {
      flexDirection:'row',
      marginTop: '0%',
      width: 300,
      height: 250,
      backgroundColor: 'orange',
      borderRadius: 5,
      shadowColor: 'rgba(255,255,0,0.5)',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity:0.5,
      borderWidth:2, 
      borderColor:'black'
    },
   



  fondo: {
    width: '100%'
    
    
  },

});