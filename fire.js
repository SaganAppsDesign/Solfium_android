import firebase from 'firebase'; 


const firebaseConfig = {
  apiKey: 'AIzaSyCmFh0zidLXHhW9x2o-xVVLMEtNjVueP6g',
  authDomain: 'solfium.firebaseapp.com',
  databaseURL: 'https://solfium.firebaseio.com/',
  projectId: 'solfium',
  storageBucket: 'solfium.appspot.com',
  messagingSenderId: '967493547951',

};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();


//console.log("codigo_instalador2",codigo_instalador2)
//console.log("instalador import from main",instalador)
  


export class Fire {

  uid = ''
  messagesRef = null


  
 
  constructor ()  {
    
    //Nuevo código
    const ref = db.ref('Instaladores/');
 
    this.listener = ref.on("value",  (snapshot) =>{
                        
          snapshot.forEach((child)=>{
        
            key = child.key
                           
        
        })
       
          
      })

      
    
      
    if (!firebase.apps.length) {
      firebase.initializeApp(config);

      
    }

      firebase.auth().onAuthStateChanged((user) => {

          if (user){
            this.setUid(user.uid)
                       
          } else {

            firebase.auth().signInAnonymously().catch((error) => {

              alert(error.message)
            }
            )

          }

      }
           
      )

      
   
  }

  setUid(value){
      this.uid = value;
  }

  getUid(){
    return this.uid;
  }

  loadMessages(callback){

    
    //Nuevo código
/*
    const ref2 = db.ref('Usuarios/');
// Retrieve new posts as they are added to our database
  ref2.on("child_added", function(snapshot, prevChildKey) {
  codigo_instalador3 = snapshot.val();
  codigo_instalador2 = codigo_instalador3.codigo_instalador
  console.log("codigo_instalador2 dentro ref load messages: " + codigo_instalador3.codigo_instalador);
 
   });

     console.log("codigo_instalador2 fuera ref load messages: " + codigo_instalador2);
     console.log("instalador fire dentro load", instalador)
    //this.messagesRef = firebase.database().ref('/Chat/' + this.uid + '-Instalador1');


*/

    const ref = db.ref('/Usuarios/' +  this.uid);

    this.listener = ref.on("value", snapshot => {
  
      codigo = snapshot.child("codigo_instalador").val()
                   
     
  }
  )


    this.messagesRef = firebase.database().ref('/Chat/' + this.uid + "-" + codigo);
    this.messagesRef.off();

    const onReceive = (data) => {
      
      const message = data.val()
      
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
          avatar:message.user.avatar
                  
            
        },

      })
      
    }

    this.messagesRef.limitToLast(20).on('child_added', onReceive)
    
  }

  sendMessage(message){
      for (let i=0; i < message.length; i++){
          this.messagesRef.push({
            text: message[i].text,
            user: message[i].user,
            createdAt: firebase.database.ServerValue.TIMESTAMP
            
            
          })
      }
      
  }

  closeChat(){
    if (this.messagesRef){

      this.messagesRef.off()
    }
  }



}



export default new Fire()


