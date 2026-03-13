const db = require('./database.js');

db.all("SELECT * FROM staff", (err,rows)=>{

let html = "";

rows.forEach(row => {

html += `
<tr>
<td>${row.id}</td>
<td>${row.name}</td>
<td>${row.email}</td>
<td>${row.phone}</td>
</tr>
`;

});

document.getElementById("tabledata").innerHTML = html;

});