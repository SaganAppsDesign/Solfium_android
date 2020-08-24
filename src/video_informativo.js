import { StyleSheet, View} from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';




export class VideoInfo extends React.Component {

 

  render() {
	return (

 

  <View style={styles.container}>	
  

    < Video
    source={require ('../assets/video.mp4')}
    shouldPlay
    useNativeControls 
    style={styles.backgroundVideo} 
    
    
    />


    <View style={{ marginTop: '90%'}}>
  
      <Button 
        title="   Pantalla inicial"
        onPress={() => navigation.navigate('Solfium')}
        style={styles.button}
        icon={
              <Icon
                name="arrow-circle-left"
                size={30}
                color="black"
              />
              }
        

      />
    </View>


   </View>	



   )}
}

// Later on in your styles..
const styles = StyleSheet.create({
  

  container:{ 
  	flex: 1,
  	justifyContent: "center",
  	backgroundColor: '#000',
    marginTop: "0%",
    alignItems:'center'},

  backgroundVideo: {
    position: 'absolute',
    top: '8%',
    left: '0%',
    bottom: '0%',
    right: '0%'
   
  },
  
    
    
    
  
});


