// back.js

// skip login page
if(window.location.pathname.includes("index.html")){
}else{

if(localStorage.getItem("login")!="true"){
window.location="index.html";
}

document.write(`
<div style="background:#333;padding:10px">
<button onclick="goBack()">⬅ Back</button>
</div>

<style>
button{
padding:6px 12px;
background:#2196F3;
color:white;
border:none;
cursor:pointer;
}
button:hover{
background:#0b7dda;
}
</style>
`);

function goBack(){
window.history.back();
}

}