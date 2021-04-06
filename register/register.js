if (localStorage.getItem("users") == null) {
    localStorage.setItem("users", JSON.stringify([]));
}

function registerUser() {
     event.preventDefault();
    document.getElementById("msg").innerHTML = "";
    //var table = document.getElementById('table');
    var username = valueById('username').trim();
    var email = valueById('email').trim();
    var password = valueById('password').trim();

    if(username == '' || email == '' || password == ''){
        return document.getElementById("msg").append("Enter valid input");
    }
    var user = {
        username: username,
        email: email,
        password: password
    }

    var allUsers = JSON.parse(localStorage.getItem('users'));

    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].username == username) {
            return document.getElementById("msg").append("Username'"+ username +"' already exists");
        }
        if (allUsers[i].email == email){
            return document.getElementById("msg").append("Email '"+ email +"' already exists");
        }
    }
    allUsers.push(user);
    localStorage.setItem("users", JSON.stringify(allUsers));

    localStorage.setItem("currentUser", username);
    location.href = "../dashboard/dashboard.html"

    // var keys = Object.keys(allUsers[0]);
    // //console.log(keys);

    // var tableheader = "";
    // for(var j=0; j<keys.length; j++){
    //     tableheader += "<th>"+keys[j]+"</th>"
    //     //console.log(keys[j]);
    // }
    // tableheader = "<tr>" + tableheader + "</tr>"
    // console.log(tableheader);

    // var table_tr = ""
    // for(var k=0; k<allUsers.length; k++){
    //     var row = allUsers[k];
    //     //console.log(row);
    //     var table_td = ""
    //     for(var x=0; x<keys.length; x++){
    //         table_td += "<td>"+ row[keys[x]] +"</td>";
    //     }
    //     table_tr += "<tr>"+ table_td +"</tr>";
    // }
    // var finaltable = tableheader + table_tr;
    // table.innerHTML = finaltable;
}

function valueById(id) {
    return document.getElementById(id).value;
}