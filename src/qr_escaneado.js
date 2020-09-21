import * as React from 'react';
import { StyleSheet, View, Image, Button} from 'react-native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';





export function QREscaneado({ navigation }) {
 
    return (



    <View style={{ flex: 1, marginTop:0}}>
             
                         
                    <View >      

                    <Image
                    style={{width:'70%', height:'75%', marginTop:'20%', marginRight:'1%', marginLeft:'15%', marginBottom:'0%'}}
                    source={require('../assets/foto_escaneo.jpg')}
                    />


                    </View>
                  

                     <View style={{marginBottom: '5%', marginLeft:'10%',marginRight:'10%', marginTop:'0%'}}>

                      <Button 
                      
                      title="  QR ESCANEADO" 
                      color='orange'   
                      onPress={() =>  navigation.navigate('QR correcto')} 
                      icon={    <Icon
                                    name="thumbs-up"
                                    size={25}
                                    color="black"
                                  />
                                }/>
                     
                      </View>

       

                                      

               
    </View>



  );
}



