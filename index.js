const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// First create varables for the targeted elements you want to change this case P1 and p2
let password1 = document.getElementById("key1")
let password2 = document.getElementById("key2")

// this is the onclick function which to simplfy we can change the element output and change it with our random password function
function genPass(){
   password1.textContent = randomPassword()
   password2.textContent = randomPassword()
  
}
// For this fucntion we are storing a string which runs a for loop of 15 characters.
// Its calling random strings from the array list 15 times
function randomPassword(){
    let randomPassword = " "
    for(let i = 0; i < 15 ; i++ ){
        randomPassword += characters[genChar()]

    }
    return randomPassword
}
// TO simply math.floor Etc we turn it into a fucntion that is used in the 
// randompassowrd function. A function with a fucntion. It chooses random characters from the array 
// is used 15 times before the call is over

function genChar(){
    return Math.floor(Math.random()*characters.length)
}

