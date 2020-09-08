import * as React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView, Animated, Keyboard, KeyboardAvoidingView,
  TouchableOpacity,
  View,
} from 'react-native';
import Fire, {db} from '../fire';
import fondo from '../assets/fondo2.jpg'; 

import { TextInput } from 'react-native-paper';
import ImageOverlay from "react-native-image-overlay";


var fecha =  new Date()

export class Main extends React.Component {
   
  state = {

    name: '',
    uid: ''

  }
 
  user = () =>  db.ref('Usuarios/' +  Fire.getUid()).update({
    name: this.state.name
  
    //fecha: fecha,
  
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
      height={"100%"}
      overlayAlpha={0}
        

      //resizeMode="stretch"
      //style={styles.fondo} 
      >
    
      <View style={{height:'100%', width:'50%'}}>

      <KeyboardAvoidingView  enabled keyboardVerticalOffset={100}>
    
       <ScrollView> 
       
        <View style={{marginTop:'40%'}}>
          <TextInput
            style={styles.nameInput}
            label="Nombre de usuario"
            onChangeText={this.onChangeText}
            value={this.state.name}
            //mode='outlined'
            
          />

        </View>

        <View style={{marginTop:'10%', marginLeft:'26%', height:'40%', width:'100%'}}>
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


const offset = 24;

const styles = StyleSheet.create({
 
  nameInput: {
    height: offset * 2,
    marginLeft: '5%',
    marginTop:'5%',
    marginBottom:'5%',
    width:'100%',
    paddingHorizontal: offset,
    backgroundColor: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 2,
   
   
  },
  buttonText: {
    marginLeft: '0%',
    marginTop:0,
    fontSize: 20,
    marginBottom:'10%',
    fontWeight:'bold',
    backgroundColor: '#DD650C',
    width:'55%',
    height:'45%',
    borderRadius: 10,
    textAlign:'center'
  },
});


