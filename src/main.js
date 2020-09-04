import * as React from 'react';
import {
  StyleSheet,
  Text,
  
  TouchableOpacity,
  View,
} from 'react-native';
import Fire, {db} from '../fire';

import { TextInput } from 'react-native-paper';


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
   
    
      <View style={{backgroundColor: 'orange', height:'100%', flexDirection:'row'}}>
       
      <View style={{flexDirection:'column',  flex:10,  marginTop:'5%'}}>
        <TextInput
          style={styles.nameInput}
          label="Nombre de usuario"
          onChangeText={this.onChangeText}
          value={this.state.name}
          //mode='outlined'
          
        />

        </View>
        <View style={{flexDirection:'column', flex:5, marginTop:'5%'}}>
        <TouchableOpacity onPress={
          () => { this.onPress(); this.user()}
         }
        >
         <Text style={styles.buttonText}>Chat aquí</Text>
        </TouchableOpacity>
        </View>

        
      </View>
     
    );
  }
}


const offset = 24;

const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,
    margin: offset,
    width:'80%',
    paddingHorizontal: offset,
    backgroundColor: 'white',
    
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 2,
   
   
  },
  buttonText: {
    marginLeft: 10,
    marginTop:28,
    fontSize: 20,
    fontWeight:'bold',
    backgroundColor: '#DD650C',
    width:'80%',
    height:'22%',
    borderRadius: 10,
    textAlign:'center'
  },
});


