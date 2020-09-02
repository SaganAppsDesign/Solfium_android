import { StyleSheet, View} from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation';




export class VideoInfo extends React.Component {

 

  render() {
	return (

 

  <View style={styles.container}>	
  
   <View style={{marginTop:'5%', marginBottom:'5%', marginLeft:'0%', marginRight:'0%',  width:'90%', height:'90%', flex:1}}>	

    <VideoPlayer 
    
    source={require ('../assets/video.mp4')} 
    style={styles.backgroundVideo}
    shouldPlay
    navigator={this.props.navigator}
    onBack={() => this.props.navigation.navigate('Solfium')}
    //toggleResizeModeOnFullscreen 
    />
    
    
    {/* 
    < Video
    source={require ('../assets/video.mp4')}
    shouldPlay
    useNativeControls 
    
    style={styles.backgroundVideo} 
    /> */}
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
    top: '0%',
    left: '0%',
    bottom: '0%',
    right: '0%',
    width:'100%'
   
  },
  
    
    
    
  
});


