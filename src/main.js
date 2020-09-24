import * as React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView, Animated, Keyboard, KeyboardAvoidingView,
  TouchableOpacity,
  View, Image
} from 'react-native';
import Fire, {db} from '../fire';
import fondo from '../assets/fondo5.jpg'; 
import logo from '../assets/logo.png'; 
import { TextInput } from 'react-native-paper';
import ImageOverlay from "react-native-image-overlay";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export class Main extends React.Component {
   
  state = {

    name: '',
    uid: ''

  }
 
  user = () =>  db.ref('Usuarios/' +  Fire.getUid()).update({
    
    name: this.state.name,
    

    
    })

  

  onChangeText = name => this.setState({ name });
  
  onPress = () =>

      this.props.navigation.navigate('Chat', { 
        
        name: this.state.name
       
    }
      
    )


     
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
                  
      <View style={{ marginTop:hp('0%'),alignItems:'center', marginBottom:'0%', flex:4, height:hp('3%')}}> 
      
          <View style={{width:hp('50%'), borderRadius:10, marginTop:hp('5%'), backgroundColor: 'orange', alignItems:'center', marginBottom:'0%', flex:2, height:hp('2%'), justifyContent:'center'}}> 
              <Text style={{color: 'white',
                
                fontSize: hp('3%'),
                marginHorizontal: wp('9%'),
                marginTop:hp('0%'),
                fontWeight: 'bold',
                padding: hp('1%'),
                textAlign: 'center',
                borderRadius:10}} h1>Contacte por chat con el personal de evaluación. Sólo tiene que introducir un nombre de usuario.</Text>
           </View>

    
            <View style={{height:hp('100%'), width:hp('100%'), alignItems:'center', flex:5}}>

                          
                      <TextInput
                        style={styles.nameInput}
                        label="Usuario"
                        onChangeText={this.onChangeText}
                        value={this.state.name}
                        //mode='outlined'
                        theme={{ colors: { primary: 'orange',underlineColor:'transparent'}}}
                        

                        
                      />
                    

                      <TouchableOpacity onPress={
                        () => { this.onPress(); this.user()}
                      }
                      >
                      <Text style={styles.buttonText}>Siguiente</Text>
                      </TouchableOpacity>

              </View>
          

              </View>

              { /* LOGO*/}

                  <View style={{alignItems:'center', justifyContent:'center', flex:1}}>  
                  
                  <Image 
                    
                    source={logo}
                    style={{aspectRatio:4.5, height:hp('5%'), marginBottom:hp('3.5%')}}
                    
                    >    
                  </Image>  

                  </View> 

              </View>
      </ImageOverlay>
    )
  }
}




const styles = StyleSheet.create({
 
  nameInput: {
    height: 70,
    marginLeft: hp('5%'),
    marginTop:hp('5%'),
    marginBottom:hp('5%'),
    width:wp('80%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: 'white',
    fontSize:hp('2%'),
    fontWeight: 'bold',
    borderRadius: 2,
   
   
  },
  buttonText: {
    marginLeft: hp('40%'),
    marginTop:hp('0%'),
    fontSize: hp('2%'),
    marginBottom:hp('0%'),
    fontWeight:'bold',
    backgroundColor: '#DD650C',
    width:wp('20%'),
    height:hp('3%'),
    borderRadius: 10,
    textAlign:'center'
    
  },
});


