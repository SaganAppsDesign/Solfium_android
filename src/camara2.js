import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, LogBox, Button } from 'react-native';
//import { RNCamera } from 'react-native-camera';
import PropTypes from 'prop-types'



var uri,text, text2, text3, text4, text5, text6

export const Constants = {
    ...RNCamera.Constants
  }

export class Camara extends PureComponent {

  camera=null;
 
  constructor(props) {
    super(props);
    this.state = {
            path: null,
            cameraType: Constants.Type.back,
            flashMode: Constants.FlashMode.off,
            recognizedText:null,
            text:''
    };
    
  }


  componentDidMount(){

    this.setState({
 // If enabledOCR is true, then set the cameraType to back only
      cameraType: this.props.enableOCR ? Constants.Type.back : this.props.cameraType,
      flashMode: this.props.flashMode,
      recognizedText:null,
     

    })

  }


  render() {

    uri = this.state.path;
    text = this.state.text;
    text2 = JSON.stringify(text);
    //text3 = text2.slice(1,-1);
     
    //text4 = JSON.parse(text3);
    //text5 = text4.blockCoordinates.resultText
    //textotal = text2.blockCoordinates.resultText

    console.log('TEXTO OCR55555: ', text2)

    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={this.state.cameraType}
          flashMode={this.state.flashMode}
          ratio={this.props.ratio}
          captureAudio={false}
          autoFocus={this.props.autoFocus}
          whiteBalance={this.props.whiteBalance}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
           // console.log(barcodes);
          }}
          onTextRecognized={this.props.enableOCR ? (data) => this.onTextRecognized(data):undefined}
        />
    
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> Haz foto </Text>
          </TouchableOpacity>
        </View>

        {/* <View style={{ marginTop: '0%',marginBottom: '0%', backgroundColor:'white', height:'100%',  flex: 12}}>
     
                <Text style={{ fontSize:13, fontWeight:'bold', width:'100%',  height: '100%',
                color: 'black', marginTop: "6%",  marginLeft: "0%", marginRight: "0%",  backgroundColor:"white", padding:8, textAlign:'center'
                }}>Texto OCR: {text2}</Text> 
           
              </View> */}

        <View style={{ marginTop: '0%',marginBottom: '0%', backgroundColor:'black'}}>
     
        <Button 
              title="Enviar foto"
              onPress={() => this.props.navigation.navigate('Solfium', {

                    URI: {uri}
                   
              })}
              
              
                     />
        </View>

      </View>
    );
  }



  takePicture = async () => {
    if (this.camera) {
      const options = { 
          quality: this.props.quality, 
          width: this.props.imageWidth, 
          base64: true,
          fixOrientation: true,
          pauseAfterCapture: true,
           };
      const data = await this.camera.takePictureAsync(options);
      this.setState({ path: data.uri });
      //console.log(data.uri);
      // for on-device (Supports Android and iOS)
      deviceTextRecognition = await RNMlKit.deviceTextRecognition(data.uri); 

      console.log('data.uri', data.uri);
     
      
      this.setState({text: deviceTextRecognition});
      console.log('typeof Text Recognition On-Device', deviceTextRecognition);


      //cloudTextRecognition = await RNMlKit.cloudTextRecognition(data.uri);
      //console.log('Text Recognition Cloud', cloudTextRecognition);
      
      this.props.onCapture && this.props.onCapture(data.base64, this.state.recognizedText)

      
    }
  };

    onTextRecognized(data) {
        if(this.props.enabledOCR) {
        console.log('onTextRecognized: ', data);
        if(data && data.textBlocks && data.textBlocks.length > 0) {
            this.setState({recognizedText: data})
        }
        }
    }

}

var deviceTextRecognition, cloudTextRecognition
console.log('cloudTextRecognition', cloudTextRecognition);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

//AppRegistry.registerComponent('App', () => ExampleApp);

Camara.propTypes = {

    cameraType: PropTypes.any,
    flashMode: PropTypes.any,
    autoFocus: PropTypes.any,
    whiteBalance: PropTypes.any,
    ratio: PropTypes.string,
    quality: PropTypes.number,
    imageWidth: PropTypes.number,
    onCapture:PropTypes.func,
    enableOCR:PropTypes.bool,
    onClose: PropTypes.func,
  
  }
  
  Camara.defaultProps = {
    cameraType: Constants.Type.back,
    flashMode: Constants.FlashMode.off,
    autoFocus: Constants.AutoFocus.on,
    whiteBalance: Constants.WhiteBalance.auto,
    ratio: '4:3',
    quality: 0.5,
    imageWidth: 768,
    onCapture:null,
    enableOCR:false,
    onClose: null,
  
    
  }