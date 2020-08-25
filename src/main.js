import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {db} from '../fire';
import firebase from 'firebase'; 


//const user = firebase.auth().currentUser;

export class Main extends React.Component {

  
  state = {

    name: '',

  }

 
 
    
  
  user = () =>  db.ref('/Usuario').push({name: this.state.name});
    
  onChangeText = name => this.setState({ name });
  
  onPress = () =>

      this.props.navigation.navigate('Chat', { 
        
        name: this.state.name
        
           
    }
      
    )


     
  render() {

    

    const { navigate } = this.props.navigation;  

    return (
      <View>
        <Text style={styles.title}>Introduce tu nombre de usuario:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="Gandalf El Gris"
          onChangeText={this.onChangeText}
          value={this.state.name}
          
        />
        <TouchableOpacity onPress={
          () => { this.onPress() ; this.user()}
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
    borderColor: '#111111',
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
});


