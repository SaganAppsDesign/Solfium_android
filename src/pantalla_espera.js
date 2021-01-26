import * as React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../assets/fondo3.jpg'; 
import logo from '../assets/logo.png'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export var potenciaUbicacion



export class PantallaEspera extends React.Component {

  constructor(props){
    super(props)
    setTimeout(()=>{
      this.props.navigation.navigate('Cálculos')

    }, 2500

    )

  }


  
siguiente = () =>  {
    
    
      this.props.navigation.navigate('Cálculos')}
  


 render() {


  return (


    <ImageOverlay 
          source={fondo}
          height={hp('100%')}  
          overlayAlpha={0}                 
          > 
                              
          <View style={{alignItem:'center', justifyContent:'center', width:wp('100%'), height:hp('100%'), flex:1, flexDirection:'column'}}>  
                                                        
                          
                <View style={{alignItems: 'center', flexDirection:'column',flex:10, width:wp('100%'), height:hp('100%')}}>
                      
                    <View style={{marginTop: hp('25%'), alignItems: 'center', flex:2}}>
                          <Image
                              style={{width:wp('35%'), height:hp('20%'),marginTop: '0%'}}
                              source={require('../assets/loader.gif')}
                              />
                    </View>
              
                    <View style={{flex:1, alignItems: 'center'}}>
                        <Text style={{color: '#fff',
                            
                          
                            marginTop:hp('25%'),
                            height:hp('100%'),
                            width:wp('100%'),
                            fontWeight:'bold',
                            fontStyle:'italic',
                            fontSize: hp('3.5%'),
                            textAlign:'center'
                            
                            }}>

                           Calculando...

                        </Text>
                       
                    </View>
                 
       
    </View>
                
                 



                           

          </View>
          
          
          { /* LOGO*/}
  
          <View style={{alignItems:'center', justifyContent:'center',flex:1}}>  
          
          <Image 
            
            source={logo}
            style={{aspectRatio:4.5, height:hp('6%'), marginTop:hp('35%')}}
            
            >    
          </Image>  

         </View> 

       
  


    </ImageOverlay> 

  );
}



}


