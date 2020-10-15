import * as React from 'react';
import {Component, Fragment} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './src/homeScreen';  
import {Calculos} from './src/calculos';  
import {PantallaEspera} from './src/pantalla_espera';  
import {CitaConfirmada} from './src/cita_confirmada';  
import {IdentidadConfirmada} from './src/identidad_confirmada';  
import {VideoInfo} from './src/video_informativo';  
import {InfoResultInsta} from './src/info_result_instalacion.js';  
import {Instalacion} from './src/instalacion_en_proceso.js';  
import {Ratings} from './src/rating.js';  
import {Payment} from './src/pago';  
import {CompraConfirmada} from './src/compra_confirmada';  
import {QREscaneado} from './src/qr_escaneado';  
import {QRCodeOk} from './src/QR_OK.js'; 
import { Mapbox2 } from './src/mapbox'; 
import { Camara } from './src/camara2'; 
import { QRscan } from './src/qr_scan'; 
import { Chat } from './src/chat'; 
import { Main } from './src/main'; 
import { IngresarConsumo } from './src/ingresar_consumo2'; 
import {ConfirmaUbicacion } from './src/confirma_ubicacion'; 
import {MeInteresa } from './src/me_interesa'; 
import {PagoUnico } from './src/pago_unico'; 
import {Financiamiento } from './src/financiamiento'; 
import {SplashScreen } from './src/splash_screen'; 
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

console.disableYellowBox = true;

class MainScreen extends Component {

     
 
  render(){ 

  
  return (
    <Stack.Navigator
    
        screenOptions={{
        //headerLeft: null,
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: '#fff',
        
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        
        topBar: {
          
          hideBackButtonTitle: true,
          backButton: {
            showTitle:false
          }
        }
      }}>


      <Stack.Screen options={{headerShown: false}}  name="SplahScreen" component={SplashScreen}/>
      <Stack.Screen options={{headerShown: false}} name="Ingresar Consumo" component={IngresarConsumo}  />
      <Stack.Screen  name="Cálculos" component={Calculos} />
      <Stack.Screen  name="Confirma ubicación" component={ConfirmaUbicacion}  />
      <Stack.Screen  name="Implementación" component={MeInteresa}  />
      <Stack.Screen  name="Próxima visita" component={CitaConfirmada} />
      <Stack.Screen  name="Pago" component={Payment} />
      <Stack.Screen  name="Video Informativo" component={VideoInfo} />
      <Stack.Screen options={{headerShown: false}} name="Viabilidad Instalación" component={InfoResultInsta} />
      <Stack.Screen name="Instalación en proceso" component={Instalacion} />
      <Stack.Screen name="Rating" component={Ratings} />
      <Stack.Screen name="Escanear QR Instalador" component={IdentidadConfirmada}/>
      <Stack.Screen name="QR Escaneado" component={QREscaneado} />
      <Stack.Screen name="QR correcto" component={QRCodeOk} />
      <Stack.Screen name="Ubicación" component={Mapbox2} />
      <Stack.Screen name="Cámara" component={Camara}  />
      <Stack.Screen name="QR scan" component={QRscan}  />
      <Stack.Screen name="Chat" component={Chat}  />
      <Stack.Screen name="Nombre usuario" component={Main}  />
      <Stack.Screen name="Confirmar compra" component={CompraConfirmada}  />
      <Stack.Screen  name="Calculando" component={PantallaEspera}  />
      <Stack.Screen  name="Pago único" component={PagoUnico}  />
      <Stack.Screen  name="Financiamiento" component={Financiamiento}  />

    </Stack.Navigator>
  )};
}


export default function App()  {
  return (

   <Fragment>
 
      <NavigationContainer>
          <MainScreen />
      </NavigationContainer>

    
    </Fragment>

   
  );
}


