import * as React from 'react';
import { GiftedChat, Bubble, Send, MessageText } from 'react-native-gifted-chat';
import Fire from '../fire';
import { StyleSheet, Text, View, Image, TouchableOpacity, LogBox, Button, ActivityIndicator, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconButton } from 'react-native-paper';
import {db} from '../fire';
import visita from '../assets/visita.png';  
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



var name, cita


data = () => db.ref('/Usuarios/' +  Fire.getUid()).on('value', (snapshot) => {
  
  name =  snapshot.child("name").val()
  cita = snapshot.child("cita").val()
   

});




export class Chat extends React.Component {


state = {

    messages: [],
    name:'',
    cita:''
    
};


  render() {
   data()

   var cita = this.state.cita
   var bool, opacity
   
   if (cita == 'Cita sin acordar'){
          
         bool=true
         opacity=0.2
   } else {

        bool=false
        opacity=1
   }


   
    return (
     
     
    <View style={styles.container}>	
        <GiftedChat
          messages={this.state.messages}
          onSend={(message) => Fire.sendMessage(message)}
         // renderBubble = {this.renderBubble.bind(this) }
          renderSend={renderSend}
          renderBubble={renderBubble}
          renderLoading={renderLoading}
          showUserAvatar
          alwaysShowSend
          renderUsernameOnMessage  = {true}
          showAvatarForEveryMessage = {true}
          scrollToBottom
          placeholder={"Chatea aquí " + name}
          user={{
            _id: Fire.getUid(),
            name: name
           
        }}
      />

    

      <View  style={{opacity:opacity, alignItems:'center', justifyContent:'center'}}>
      <TouchableOpacity 

            disabled={bool} 
                                                                  
            onPress={() => this.props.navigation.navigate('Próxima visita')}
              > 
           
             
              <Image 
                    source={visita}
                    style={{width:wp('60%'), height:hp('16%')}}
                    
                    />

       </TouchableOpacity>
       </View>



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





function renderSend(props) {
  return (
    <Send {...props}>
      <View style={styles.sendingContainer}>
        <IconButton icon='send-circle' size={32} color='orange' />
      </View>
    </Send>
  );
}


function renderBubble(props) {
  return (
    // Step 3: return the component
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          // Here is the color change
          backgroundColor: '#F7BFA0'
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