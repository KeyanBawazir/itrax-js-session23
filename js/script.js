var users = [];
var counter ;
var userName;
document.getElementById('userName').focus();

document.getElementById('add').onclick = function() {
    userName = document.getElementById('userName').value;
    users.push(userName);
    counter = users.length;
    document.getElementById('userName').value = "" ;
    document.getElementById('userName').focus();

    document.getElementById('userCount').innerText = "Number of items : " + counter;
    console.log(users);
    console.log(counter);
}

