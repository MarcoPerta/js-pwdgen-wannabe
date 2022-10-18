// let username = prompt (`Please enter your name`)
// console.log(username)

// let usersurname = prompt (`Please enter your surname`)
// console.log(usersurname)

// let favoritecolor = prompt (`Please enter your favorite color`)
// console.log(favoritecolor)

// let number = prompt (`Please enter your number`)
// console.log(number)

// document.getElementById("h2Password").innerHTML ="Your safest password is " + username+usersurname+favoritecolor+number;

let username = document.getElementById('txt_name_username');
console.log(username)

let usersurname = document.getElementById('txt_name_usersurname');
console.log(usersurname)

let favouritecolor = document.getElementById('txt_name_favouritecolor');
console.log(favouritecolor)

let number = document.getElementById('txt_name_number');
console.log(number)

document.getElementById("h2Password").innerHTML ="Your safest password is " + username+usersurname+favoritecolor+number;