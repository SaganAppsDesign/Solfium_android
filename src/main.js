import * as React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView, Animated, Keyboard, KeyboardAvoidingView,
  TouchableOpacity,
  View,
} from 'react-native';
import Fire, {db} from '../fire';
import fondo from '../assets/fondo5.jpg'; 

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
    Viabilidad:'',
    cita:'Cita sin acordar',
    fechaInstalacion:'',
    visita:'Sin estado'
 

    
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
    
      <View style={{height:'100%', width:'100%', alignItems:'center', flex:1}}>

      <KeyboardAvoidingView  enabled keyboardVerticalOffset={50}
      style={{height:'100%', width:'100%', flex:5}}>
    
       <ScrollView style={{marginTop:'0%', height:'100%', width:'100%'}}> 
       
              <View style={{marginTop:'30%', height:'100%', width:'100%', flex:1}}>
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
                <Text style={styles.buttonText}>Chat aquí</Text>
                </TouchableOpacity>

              </View>
          

         </ScrollView>
        </KeyboardAvoidingView>
      </View>

    
      </ImageOverlay>
    );
  }
}




const styles = StyleSheet.create({
 
  nameInput: {
    height: 70,
    marginLeft: '10%',
    marginTop:'5%',
    marginBottom:'5%',
    width:'80%',
    paddingHorizontal: '25%',
    backgroundColor: 'white',
    fontSize:20,
    fontWeight: 'bold',
    borderRadius: 2,
   
   
  },
  buttonText: {
    marginLeft: '10%',
    marginTop:'0%',
    fontSize: 20,
    marginBottom:'5%',
    fontWeight:'bold',
    backgroundColor: '#DD650C',
    width:'40%',
    height:'100%',
    borderRadius: 10,
    textAlign:'center',
    flex:1
  },
});


