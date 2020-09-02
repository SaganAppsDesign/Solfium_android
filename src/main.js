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
   
    
      <View style={{backgroundColor: 'grey', height:'100%'}}>
        
        <TextInput
          style={styles.nameInput}
          label="Nombre de usuario"
          onChangeText={this.onChangeText}
          value={this.state.name}
          //mode='outlined'
          
        />
        <TouchableOpacity onPress={
          () => { this.onPress(); this.user()}
         }
        >
         <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>

        
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
    paddingHorizontal: offset,
    backgroundColor: 'white',
    
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 2,
   
   
  },
  buttonText: {
    marginLeft: offset,
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'white',
    margin:'5%',
    alignItems: 'center',
    textAlign:'center'
  },
});


