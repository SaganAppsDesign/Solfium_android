import { StyleSheet, View, Text} from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';


export function ContactoInstalador({ navigation }) {


	return (


	<View style={styles.container}>	


		<View>
		     <Text>Video chat</Text>
		</View>


      	<View style={{ marginBottom: '20%', marginLeft:'10%',marginRight:'10%', marginTop:'3%'}}>
     
          <Button 
            title="   Instalador. Concertada visita"
            onPress={() => navigation.navigate('Próxima visita')}
           
            icon={
                  <Icon
                    name="wrench"
                    size={25}
                    color="black"
                  />
                 }
            

          />
        </View>


   </View>	



   )
}

// Later on in your styles..
const styles = StyleSheet.create({
  

  container:{ 
  	flex: 1,
  	justifyContent: "center",
  	backgroundColor: '#000',
  	marginTop: "-5%"},

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  
    
    
    
  
});


