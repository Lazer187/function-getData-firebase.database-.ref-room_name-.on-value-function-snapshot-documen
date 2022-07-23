// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBtr1UWx1k190IcpMrAvd5A33HhJcQDObc",
    authDomain: "kwitter-m.firebaseapp.com",
    databaseURL: "https://kwitter-m-default-rtdb.firebaseio.com",
    projectId: "kwitter-m",
    storageBucket: "kwitter-m.appspot.com",
    messagingSenderId: "813603274759",
    appId: "1:813603274759:web:97b10b77e802ab71582aa2"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
console.log("Room Name-"+ Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function addRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}