var firebaseConfig = {
      apiKey: "AIzaSyAJNYa5lhA7pMSmOAo1G5Ej8LF8ggvQHIk",
      authDomain: "kwitter-d195c.firebaseapp.com",
      databaseURL: "https://kwitter-d195c-default-rtdb.firebaseio.com",
      projectId: "kwitter-d195c",
      storageBucket: "kwitter-d195c.appspot.com",
      messagingSenderId: "144276130636",
      appId: "1:144276130636:web:ee8c47d928b2ed94101de9",
      measurementId: "G-WXV6JGHT5G"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
