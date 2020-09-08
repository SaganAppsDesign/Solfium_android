import * as React from 'react';
import {Component, Fragment} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './src/homeScreen';  
import {Calculos} from './src/calculos';  
import {ContactoInstalador} from './src/contacto_instalador';  
import {DatosInstalador} from './src/datos_qr_instalador';  
import {DatosInstalador2} from './src/datos_qr_instalador2';  
import {ViabilidadInstalacion1} from './src/viabilidadInstalacion1';  
import {ViabilidadInstalacion2} from './src/viabilidadInstalacion2';  
import {ViabilidadInstalacion3} from './src/viabilidadInstalacion3';  
import {VideoInfo} from './src/video_informativo';  
import {InfoResultInsta} from './src/info_result_instalacion.js';  
import {Instalacion} from './src/instalacion_en_proceso.js';  
import {Ratings} from './src/rating.js';  
import {Payment} from './src/pago';  
import {QREscaneado} from './src/qr_escaneado';  
import {QRCodeOk} from './src/QR_OK.js'; 
import { Mapbox2 } from './src/mapbox'; 
import { Camara } from './src/camara2'; 
import { QRscan } from './src/qr_scan'; 
import { Chat } from './src/chat'; 
import { Main } from './src/main'; 
import { IngresarConsumo } from './src/ingresar_consumo'; 
import {ConfirmaUbicacion } from './src/confirma_ubicacion'; 
import 'react-native-gesture-handler';

const Stack = createStackNavigator();


class MyStack extends Component {
 
 
  render(){ 

  return (
    <Stack.Navigator

        screenOptions={{
        headerStyle: {
          backgroundColor: '#2196F3',
        },
        headerTintColor: '#fff',
        
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>

      <Stack.Screen options={{headerShown: false}}  name="Solfium" component={HomeScreen} initialParams={{ Latitud:  0,  Longitud: 0,  URI: 0  }}/>
      <Stack.Screen name="Contacta con Solfium" component={ContactoInstalador} />
      <Stack.Screen name="Cálculos" component={Calculos} />
      <Stack.Screen options={{headerShown: false}} name="Ingresar Consumo" component={IngresarConsumo}  />
      <Stack.Screen options={{headerShown: false}} name="Confirma ubicación" component={ConfirmaUbicacion}  />
      <Stack.Screen name="Próxima visita" component={DatosInstalador} />
      <Stack.Screen name="Viabilidad total" component={ViabilidadInstalacion1} />
      <Stack.Screen name="Viabilidad a la baja" component={ViabilidadInstalacion2} />
      <Stack.Screen name="Viabilidad 0" component={ViabilidadInstalacion3} />
      <Stack.Screen name="Proceso de pago" component={Payment} />
      <Stack.Screen name="Video Informativo" component={VideoInfo} />
      <Stack.Screen name="Viabilidad Instalación" component={InfoResultInsta} />
      <Stack.Screen name="Instalación en proceso" component={Instalacion} />
      <Stack.Screen name="Rating" component={Ratings} />
      <Stack.Screen name="Escanear QR Instalador" component={DatosInstalador2} />
      <Stack.Screen name="QR Escaneado" component={QREscaneado} />
      <Stack.Screen name="QR correcto" component={QRCodeOk} />
      <Stack.Screen name="Ubicación" component={Mapbox2} />
      <Stack.Screen name="Cámara" component={Camara}  />
      <Stack.Screen name="QR scan" component={QRscan}  />
      <Stack.Screen name="Chat" component={Chat}  />
      <Stack.Screen name="Nombre usuario" component={Main}  />

    </Stack.Navigator>
  )};
}


export default function App()  {
  return (

   <Fragment>
 
      <NavigationContainer>
          <MyStack />
      </NavigationContainer>

    
    </Fragment>

   
  );
}


