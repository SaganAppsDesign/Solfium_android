import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';



const { width } = Dimensions.get('window');

export function QRscan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({data }) => {
    setScanned(true);
    
    alert(`La web escaneada es ${data}`);

  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        
      }}>

          
     <Text>BarCOde Scanner</Text>

       

      {scanned && <Button title={'Escanear de nuevo'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const opacity = 'rgba(0, 0, 0, 0.6)';
const styles = StyleSheet.create({
    container: {
      flex: 2,
      
      flexDirection: 'column',
    
    },
    
    layerTop: {
        flex: 3,
        backgroundColor: opacity,
        width:width
      },
      layerCenter: {
        flex: 3,
        flexDirection: 'row'
      },
      layerLeft: {
        flex: 2,
        backgroundColor: opacity
      },
      focused: {
        flex: 10
      },
      layerRight: {
        flex: 2,
        backgroundColor: opacity
      },
      layerBottom: {
        flex: 2,
        backgroundColor: opacity
      }
  });