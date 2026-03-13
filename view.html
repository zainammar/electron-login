const db = require('./database.js');

// Load data from SQLite
function loadData() {
    db.all("SELECT * FROM staff", (err, rows) => {
        if (err) {
            console.error(err);
            return;
        }
        let html = "";
        rows.forEach(row => {
            html += `
                <tr>
                    <td>${row.id}</td>
                    <td><input id="name${row.id}" value="${row.name}"></td>
                    <td><input id="email${row.id}" value="${row.email}"></td>
                    <td><input id="phone${row.id}" value="${row.phone}"></td>
                    <td>
                        <button onclick="update(${row.id})">Save</button>
                        <button onclick="remove(${row.id})">Delete</button>
                    </td>
                </tr>
            `;
        });
        document.getElementById("tabledata").innerHTML = html;
    });
}

// Update record
function update(id) {
    const name = document.getElementById(`name${id}`).value;
    const email = document.getElementById(`email${id}`).value;
    const phone = document.getElementById(`phone${id}`).value;

    db.run("UPDATE staff SET name=?, email=?, phone=? WHERE id=?",
        [name, email, phone, id],
        function(err){
            if (err) {
                console.error(err);
                alert("Update failed!");
                return;
            }
            alert("Record updated successfully!");
            loadData();
        }
    );
}

// Delete record
function remove(id) {
    if(!confirm("Are you sure you want to delete this record?")) return;

    db.run("DELETE FROM staff WHERE id=?", [id], function(err){
        if(err){
            console.error(err);
            alert("Delete failed!");
            return;
        }
        alert("Record deleted!");
        loadData();
    });
}

// Initial load
loadData();
