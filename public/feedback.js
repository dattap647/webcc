const firebaseConfig = {

  apiKey: "AIzaSyBVpZvyxr5kqMVJZCe8rzeewpluOJ4z2bM",

  authDomain: "feedback-30db4.firebaseapp.com",

  databaseURL: "https://feedback-30db4-default-rtdb.firebaseio.com",

  projectId: "feedback-30db4",

  storageBucket: "feedback-30db4.appspot.com",

  messagingSenderId: "415707913091",

  appId: "1:415707913091:web:46f00eaaf669374cb874b6"

};

//initi
firebase.initializeApp(firebaseConfig);


  //reference message collection
 
  const messagesRef = firebase.database().ref('messages');

//listen to form submit
document.getElementById('FeedbackForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    //get values
    var name = getInputVal('firstname');
    var surname = getInputVal('lastname');
    var message = getInputVal('subjects');

    console.log(name, surname, message);

saveMessage(name, surname, message);

document.getElementById('FeedbackForm').reset()
}



//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, surname, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        surname: surname,
        message: message
    });
}