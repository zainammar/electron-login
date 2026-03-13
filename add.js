const db = require('./database.js');

function save(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;

db.run(
"INSERT INTO staff(name,email,phone) VALUES(?,?,?)",
[name,email,phone],
function(err){

if(err){
console.log(err);
document.getElementById("msg").innerText="Error saving data";
return;
}

document.getElementById("msg").innerText="Data Saved Successfully";

}
);

}