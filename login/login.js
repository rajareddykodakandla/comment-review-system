function login(){
    event.preventDefault();
    document.getElementById("msg").innerHTML = "";
    var email = getValue('email');
    var password = getValue('password');
    if (email == '' || password == '') {
        return document.getElementById("msg").append("Enter valid input");
    }
    var users = JSON.parse(localStorage.getItem('users'));
    
    for(var i=0; i < users.length; i++){
        if(users[i].email == email && users[i].password == password){
            localStorage.setItem("currentUser", users[i].username);
            return location.href = "../dashboard/dashboard.html"
            //return document.getElementById("msg").innerHTML = "<h1>Login successful</h1>"
        }
    }
    return document.getElementById("msg").innerHTML = "<h1>Invalid credentials</h1>"
}

function getValue(id) {
    return document.getElementById(id).value;
}
