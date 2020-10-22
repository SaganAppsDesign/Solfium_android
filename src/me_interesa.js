import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import logo from '../assets/logo.png'; 
import fondo4 from '../assets/fondo4.jpg';  
import instalador from '../assets/instalador.png';  
import pago from '../assets/pago.png';  
import visita from '../assets/visita.png';  
import 'react-native-gesture-handler';
import * as React from 'react';
import Fire, {db} from '../fire';
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import backBtn from '../assets/backBtn.png'; 


     
var screen

export class MeInteresa extends React.Component {

  state = {
 
    name:''
    
  }

render (){

  var name = this.state.name

  
  
  if (name){

     //var valor
            
     screen = 'Chat'     
         
    } else {

      screen = 'Nombre usuario'
    }

return (

         <ImageOverlay 

                  source={fondo4}
                  height={hp('110%')}
                  overlayAlpha={0}
                                   
                  >
                       
          <View style={{alignItem:'center', justifyContent:'center', width:wp('100%'), height:hp('100%'), flex:1, flexDirection:'column'}}>           
                   
          

                   <View  style={{alignItems:'center', flex:0.4, marginTop:hp('4%')}}>

                      <Text 
                          style={{textAlign:'center', fontSize:hp('2%'), width:wp('75%'), height: hp('5%'), fontWeight:'bold',
                                  color: 'brown', marginTop:hp('3%')}} 
                         >Comienza resolviendo tus dudas sin compromiso</Text>
                   </View>
           
                  { /* Botones*/}
                      <View  style={{alignItems:'center', flex:6,  justifyContent:'center', marginTop:hp('5%')}}>

                       <View  style={{alignItems:'center', flex:0.4,  justifyContent:'center'}}>
                            <TouchableOpacity 
                                                                                        
                                  onPress={() => this.props.navigation.navigate(screen, { name: this.state.name, valor:2 })}
                                    > 
                                                              
                                    <Image 
                              
                                    source={visita}
                                    style={{aspectRatio:2.5, height:hp('13%')}}
                                    
                                    >    
                                  </Image> 
          
                            </TouchableOpacity> 
                       </View>
                       <View  style={{opacity:0.5, alignItems:'center', flex:0.4,  justifyContent:'center'}}>
                          <TouchableOpacity 
                            disabled={true}> 
                                                   
                          <Image 
                          
                              source={instalador}
                              style={{aspectRatio:2.5, height:hp('13%')}}
                              
                              >               
                              </Image> 
                          
                          </TouchableOpacity> 
                       </View>
                      <View  style={{opacity:0.5, alignItems:'center', flex:0.3,  justifyContent:'center', marginBottom:hp('15%')}}>
                      <TouchableOpacity 

                            disabled={true} 
                                                                                  
                            onPress={() => this.props.navigation.navigate(screen)}
                              > 
                           
                             
                              <Image 
                                    source={pago}
                                    style={{aspectRatio:2.5, height:hp('13%')}}
                                    
                                    />

                       </TouchableOpacity>
                       </View>

                       </View>


                                 
    
          
          { /* LOGO*/}
  
          <View style={{alignItems:'center', width:wp('100%'), height:hp('100%'), flex:0.1}}>  
          
          <Image 
            
            source={logo}
            style={{aspectRatio:4.5,  height:hp('5%')}}
            
            >    
          </Image>  

         </View> 

          {/* header */}              
           {/*Botones*/}     
           <View style={{opacity: 1, alignItems:'center', flex:3,  justifyContent:'center', flexDirection:'row', marginBottom:hp('0%'),marginTop:hp('0%')}}>  
                         

                          <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                             <TouchableOpacity 
                                                                                          
                                onPress={() => this.props.navigation.navigate('Cálculos')}
                               > 
                                                     
                                <Image 
                                
                                source={backBtn}
                                style={{aspectRatio:1, height:hp('6%')}}
                                
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


  const ref = db.ref('/Usuarios/' +  Fire.getUid());

  this.listener = ref.on("value", snapshot => {

  this.setState({ name: snapshot.child("name").val() || '' }) 
                 

 
}
)

}


}





