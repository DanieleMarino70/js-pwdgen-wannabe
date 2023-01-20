let userName = prompt("Come ti chiami?");

// Debug
//console.log(userName);
//console.log(typeof userName);


let userSurname = prompt("Qual è il tuo cognome?");

// Debug
//console.log(userSurname);
//console.log(typeof userSurname);


let favoriteColor = prompt("Qual è il tuo colore preferito?");

// Debug
//console.log(favoriteColor);
//console.log(typeof favoriteColor);


// MODO1
//let user = userName + userSurname + favoriteColor + "23"; oppure

// MODO2
//cosi dovremo mettere i dollari attaccati perché cosi come da traccia
//non diamo lo spazio ai caratteri.
let user = (`${userName}${userSurname}${favoriteColor}23`);

// Debug
//console.log(user);
//console.log(typeof user);

document.getElementById("user").innerHTML = user;