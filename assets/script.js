// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables
var inputs = [""]
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghiklmnopqrsttuvwxtz"
var numbers = "0123456789"
var specialchars = "!#$%&'()*+,-./:;<=>?@/][^_`{|}~"
var password = ""

// Add event listener to generate button; moved above write password to input function.
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

alert("Reload Page Between Passwords")

//prompt length
function generatePassword () {
  var passwordLength = prompt("Enter your desired number of characters (min 8, max 128):")
//check to make sure its 8-128 char and that user entered a number
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid Entry - enter a number between 8 and 128");
    return    
}

//confirm upper case
var uppercaseConfirm = confirm("Include uppercase letters?");
if (uppercaseConfirm === true) {
  for (var i = 0; i < uppercase.length; i++) {
    inputs.push(uppercase [i]);
  }
  console.log(inputs)
}

// confirm lower case
var lowercaseConfirm = confirm("Include lowercase letters?");
if (lowercaseConfirm === true) {
  for (var i = 0; i < lowercase.length; i++) {
    inputs.push(lowercase [i]);
  }
  console.log(inputs)
}

// confirm numbers 
var numbersConfirm = confirm("Include numbers?");
if (numbersConfirm === true) {
  for (var i = 0; i < numbers.length; i++) {
    inputs.push(numbers [i]);
  }
  console.log(inputs)
}

// confirm spec characters
var specialcharsConfirm = confirm("Include special characters?");
if (specialcharsConfirm === true) {
  for (var i = 0; i < specialchars.length; i++) {
    inputs.push(specialchars [i]);
  }
  console.log(inputs)
}

// confirm user selected at least one char type
if (uppercaseConfirm === false && lowercaseConfirm === false && numbersConfirm === false &&  specialcharsConfirm === false) {
  alert("Please choose at least 1 type of character.")
  return;
}

// make sure potential string pass length is an integer 

const confirmLength = parseInt(passwordLength)


// put together input array to display in previously blank password field created in var(s)

for (var i = 0; i < confirmLength; i++) {

  inputs[Math.floor(Math.random() * inputs.length)];

  password = password + inputs[Math.floor(Math.random() * inputs.length)];
}

return password;

}