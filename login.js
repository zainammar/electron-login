// login.js
const db = require('./database.js');

function login(){

let user = document.getElementById('username').value;
let pass = document.getElementById('password').value;

db.get(
"SELECT * FROM users WHERE username=? AND password=?",
[user, pass],
(err, row)=>{

if(err){
console.error(err);
document.getElementById('msg').innerText = "Database error!";
return;
}

if(row){

// SAVE LOGIN SESSION
localStorage.setItem("login","true");

// GO TO DASHBOARD
window.location = "dashboard.html";

}else{

document.getElementById('msg').innerText =
"Invalid username or password!";

}

});

}