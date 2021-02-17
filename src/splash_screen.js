import * as React from 'react';
import {View, Image} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../assets/fondo2.jpg'; 
import logo from '../assets/logo_blanco.png'; 

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var test

export class SplashScreen extends React.Component {

  constructor(props){
    super(props)
    
    test = 1

    if (test==1){
      setTimeout(()=>{
    
        this.props.navigation.replace('Ingresar Consumo')
  
      }, 2000
  
      )


    } else {
      setTimeout(()=>{
    

        this.props.navigation.replace('Próxima visita')
  
      }, 2000
  
      )


    }

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
                                                        
                          
                <View style={{alignItems: 'center', flexDirection:'column',flex:9, width:wp('100%'), height:hp('100%')}}>


                
                { /* LOGO*/}
  
                <View style={{alignItems:'center', justifyContent:'center',flex:1}}>  
                
                <Image 
                  
                  source={logo}
                  style={{aspectRatio:4.5, width:wp('100%'), height:hp('7%'), marginTop:hp('50%')}}
                  
                  >    
                </Image>  
      
               </View> 
                      
                    <View style={{marginTop: hp('30%'), alignItems: 'center', flex:2}}>
                          <Image
                              style={{aspectRatio:1, width:wp('30%'), height:hp('12%'),marginTop: '0%'}}
                              source={require('../assets/loader.gif')}
                              />
                    </View>
              
       
         </View>
       
       </View>


    </ImageOverlay> 

  );
}


}




