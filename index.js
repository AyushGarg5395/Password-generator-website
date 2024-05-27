let showPasswordEl = document.getElementById("show-password-el")
let showPasswordE2 = document.getElementById("show-password1-el")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/" ]

/******function to generate a random password **************/
function generatePassword() {
    length = 15
    let password = ""

    for(i = 0; i < length; i++) {
         let char = Math.floor(Math.random() * characters.length )
         password += characters[char]
    }
    return password
}

function displayPassword1() {
    showPasswordEl.textContent = generatePassword()
}

function displayPassword2() {  
    showPasswordE2.textContent = generatePassword()
}

function clickButton() {
    displayPassword1()
    displayPassword2()
}