import * as React from 'react';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import Fire from '../fire';
import { StyleSheet, View, Image, TouchableOpacity, Button, ActivityIndicator} from 'react-native';
import { IconButton } from 'react-native-paper';
import {db} from '../fire';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import backBtn from '../assets/backBtn.png';



var name, cita, uid, name2, title, screen



data = () => db.ref('/Usuarios/' +  Fire.getUid()).on('value', (snapshot) => {
  
  name =  snapshot.child("name").val()
  cita = snapshot.child("cita").val()
   

});

//Nuevo código
data2 = () => db.ref('/Instaladores/instalador1').on('value', (snapshot) => {
  
  name2 =  snapshot.child("name").val()
  uid = snapshot.child("uid").val()
   
 
});




export class Chat extends React.Component {





state = {

    messages: [],
    name:'',
    cita:'',
    name2: ''
    
};


  render() {

    const { valor } = this.props.route.params;
  

    //valor = JSON.stringi∫fy(navigation.getParam('valor', ''))
    //const {valor } = route.params;
    //console.log("valorCitacondfirmada", valor)
 //Recibir valores de screens relacionadas con Chat∫
    
    switch (valor) {
      case 0:
        title = "Volver atrás"
        screen = "Próxima visita"
        break;
      case 1:
        title = "Volver atrás"
        screen = "Escanear QR Instalador"
        break;
      case 2:
        title = "Revise su cita"
        screen = "Próxima visita"
        break;
      case 3:
        title = "Volver atrás"
        screen = "Viabilidad Instalación"
        break;
      case 4:
        title = "Volver atrás"
        screen = "Pago"
        break;
      case 5:
        title = "Volver atrás"
        screen = "Pago único"
        break;
      case 6:
        title = "Volver atrás"
        screen = "Financiamiento"
        break;
      case 7:
        title = "Volver atrás"
        screen = "Confirmar compra"
        break;
      case 8:
        title = "Volver atrás"
        screen = "Rating"
        break;


      default:
        text = "No value found";
    }

   data()
   data2()

   var cita = this.state.cita
   var bool, opacity
   
   if (cita == ''){
          
         bool=true
         opacity=0.2
   } else {

        bool=false
        opacity=1
   }


   
    return (
     
     
    <View style={styles.container}>	
  
            <View style={{flex:7}}>
            <GiftedChat
              messages={this.state.messages}
              onSend={(message) => Fire.sendMessage(message)}
            // renderBubble = {this.renderBubble.bind(this) }
              //renderSend={renderSend}
              renderBubble={renderBubble}
              renderLoading={renderLoading}
              showUserAvatar
              alwaysShowSend
              renderUsernameOnMessage  = {true}
              showAvatarForEveryMessage = {true}
              scrollToBottom
              isTyping={true}
              placeholder={"Chatea aquí " + name}
              user={{
                _id: "Instalador1",
                name: name,
                avatar: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png'
              
            }}
          />
       </View>
        <View style={{borderRadius:10, backgroundColor:'orange',  opacity:opacity, marginBottom:hp('2%'),marginTop:hp('3%'), marginLeft:wp('20%'), marginRight:wp('20%'), flex:0.5}}>
        
        <Button disabled={bool}
                title={title} 
                onPress={() => this.props.navigation.navigate(screen)}
                color='white'/>
                        
        </View>


    {/* header */}              
    {/*Botones*/}     
    <View style={{opacity: 1, alignItems:'center', flex:1.5,  justifyContent:'center', flexDirection:'row', marginBottom:hp('0%'),marginTop:hp('0%')}}>  
                         

                         <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                            <TouchableOpacity 
                                                                                         
                               onPress={() => this.props.navigation.navigate('Implementación')}
                              > 
                              <Image 
                               
                               source={backBtn}
                               style={{aspectRatio:1, height:hp('6%')}}
                               
                               >    
                               </Image>

       
                                             
                           </TouchableOpacity> 
       
                        </View>

                        <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                            <TouchableOpacity 
                                                                                         
                               onPress={() => this.props.navigation.navigate('Ingresar Consumo')}
                              > 
                                                    
                               <Image 
                               
                               source={home}
                               style={{aspectRatio:1, height:hp('6%')}}
                               
                               >    
                               </Image> 
       
                                             
                           </TouchableOpacity> 
       
                        </View>
       
                       <View  style={{alignItems:'center', flex:1,  justifyContent:'center',  opacity:0.5}}>
                           <TouchableOpacity 
                                                                                        
                           //onPress={() => user()}
                             > 
                                                   
                              <Image 
                              
                              source={usuario}
                              style={{aspectRatio:1, height:hp('6%')}}
                              
                              >    
                              </Image> 
       
                                            
                          </TouchableOpacity> 
       
                         </View>
       
       
       
                         <View  style={{alignItems:'center', flex:1,  justifyContent:'center',  opacity:0.5}}>
                         
                         <TouchableOpacity 
                                                                                        
                           //onPress={() => settings()}
                             > 
                                                   
                              <Image 
                              
                              source={setting}
                              style={{aspectRatio:1, height:hp('6%')}}
                              
                              >    
                              </Image> 
       
                                            
                          </TouchableOpacity> 
       
                         </View>
       
                              
       
                       </View>
                     
                     
                     {/* FIN header */}  



      </View>

    
)

}

componentDidMount() {


  
      const ref = db.ref('/Usuarios/' +  Fire.getUid());

      this.listener = ref.on("value", snapshot => {

      this.setState({cita: snapshot.child("cita").val() || '' })    

  
    }
    )

 
    Fire.loadMessages((message) => {
        
        this.setState(previousState => {

          return {

            messages: GiftedChat.append(previousState.messages, message)
            
          }

        })
      
    }
  
        
    )


}


componentWillUnmount() {
  Fire.closeChat();
}


}

// Later on in your styles..
const styles = StyleSheet.create({
  

  container:{ 
  	flex: 1,
  	justifyContent: "center",
  	backgroundColor: '#fff',
    marginTop: "0%"},
    
   sendingContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }

  
    
    
  
});





function renderBubble(props) {
  return (
    // Step 3: return the component
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          // Here is the color change
          backgroundColor: '#F7BFA9'
        },
        right: {
          // Here is the color change
          backgroundColor: 'red'
        }
      }}
      textStyle={{
        left: {
          color: '#000'
        },
        right: {
          color: '#000'
        }
      }}
    />
  );
}

function renderLoading() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color='#6646ee' />
    </View>
  );
}