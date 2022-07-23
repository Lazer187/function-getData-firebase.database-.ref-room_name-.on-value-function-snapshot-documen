// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyButBd6yTEcXmss7JsjvN5HfHBOviKo59Q",
  authDomain: "dtxy8g.firebaseapp.com",
  databaseURL: "https://dtxy8g-default-rtdb.firebaseio.com",
  projectId: "dtxy8g",
  storageBucket: "dtxy8g.appspot.com",
  messagingSenderId: "127368851306",
  appId: "1:127368851306:web:fcab3a47025247c1d73f13"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter.html";
}



