
var lettersCapital = ['q','w','e','r','t','y','u','i','o','p','l','k','j','h','g','f','d','s','a','z','x','c','v','b','n','m']
var letterslower= ['Q','W','E','R','T','Y','U','I','O','P','L','K','J','H','G','F','D','S','A','Z','X','C','V','B','N','M']

//to string var specialchar=[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]

// Assignment Code

var userChoice = window.prompt("enter Y to include CAPITAL LETTERS, enter N for no CAPITAL LETTERS");
var userChoice = window.prompt("enter Y to include lowercase letters, enter N for no lower case lettesr");
var userChoice = window.prompt("enter Y to include Special Characters, enter N for no special characters");

userChoice = userChoice.toUpperCase();


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
