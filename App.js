import * as React from 'react';
import {Fragment} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Calculos} from './src/calculos';  
import {PantallaEspera} from './src/pantalla_espera';  
import {CitaConfirmada} from './src/cita_confirmada';  
import {IdentidadConfirmada} from './src/identidad_confirmada';  
import {VideoInfo} from './src/video_informativo';  
import {InfoResultInsta} from './src/info_result_instalacion.js';  
import {InfoResultInsta2} from './src/info_result_instalacion_comparativa.js'; 
import {Instalacion} from './src/instalacion_en_proceso.js';  
import {Ratings} from './src/rating.js';  
import {Payment} from './src/pago';  
import {CompraConfirmada} from './src/compra_confirmada';  
import {CompraConfirmadaFinan} from './src/compra_confirmada_finan';  
import {QREscaneado} from './src/qr_escaneado';  
import {QRCodeOk} from './src/QR_OK.js'; 
import { Mapbox2 } from './src/mapbox'; 
import { QRscan } from './src/qr_scan'; 
import { Chat } from './src/chat'; 
import { IntroducirNombre } from './src/introducir_nombre'; 
import { IngresarConsumo } from './src/ingresar_consumo2'; 
import {ConfirmaUbicacion } from './src/confirma_ubicacion'; 
import {MeInteresa } from './src/me_interesa'; 
import {PagoUnico } from './src/pago_unico'; 
import {Financiamiento } from './src/financiamiento'; 
import {SplashScreen } from './src/splash_screen'; 
import 'react-native-gesture-handler';

const Stack = createStackNavigator();


console.disableYellowBox = true;

   

export class MainScreen extends React.Component {

 
 
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
      <Stack.Screen  options={{headerShown: false}} name="Cálculos" component={Calculos} />
      <Stack.Screen  options={{headerShown: false}} name="Confirma ubicación" component={ConfirmaUbicacion}  />
      <Stack.Screen  options={{headerShown: false}} name="Implementación" component={MeInteresa}  />
      <Stack.Screen  options={{headerShown: false}} name="Próxima visita" component={CitaConfirmada} />
      <Stack.Screen  options={{headerShown: false}} name="Pago" component={Payment} />
      <Stack.Screen options={{headerShown: false}} name="Video Informativo" component={VideoInfo} />
      <Stack.Screen options={{headerShown: false}} name="Viabilidad Instalación" component={InfoResultInsta} />    
      <Stack.Screen options={{headerShown: false}} name="Viabilidad Instalación Comparativa" component={InfoResultInsta2} />
      <Stack.Screen options={{headerShown: false}} name="Instalación en proceso" component={Instalacion} />
      <Stack.Screen options={{headerShown: false}}  name="Rating" component={Ratings} />
      <Stack.Screen options={{headerShown: false}} name="Escanear QR Instalador" component={IdentidadConfirmada}/>
      <Stack.Screen options={{headerShown: false}} name="QR Escaneado" component={QREscaneado} />
      <Stack.Screen options={{headerShown: false}} name="QR correcto" component={QRCodeOk} />
      <Stack.Screen  options={{headerShown: false}} name="Ubicación" component={Mapbox2} />
      <Stack.Screen  options={{headerShown: false}} name="QR scan" component={QRscan}  />
      <Stack.Screen  options={{headerShown: false}} name="Chat" component={Chat}  />
      <Stack.Screen  options={{headerShown: false}} name="Nombre usuario" component={IntroducirNombre}  />
      <Stack.Screen  options={{headerShown: false}} name="Confirmar compra" component={CompraConfirmada}  />
      <Stack.Screen  options={{headerShown: false}} name="Calculando" component={PantallaEspera}  />
      <Stack.Screen  options={{headerShown: false}} name="Pago único" component={PagoUnico}  />
      <Stack.Screen  options={{headerShown: false}} name="Financiamiento" component={Financiamiento}  />
      <Stack.Screen  options={{headerShown: false}} name="Compra Finan" component={CompraConfirmadaFinan}  />

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


