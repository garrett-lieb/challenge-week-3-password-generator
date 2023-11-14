// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables
var inputs = [""]
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghiklmnopqrsttuvwxtz"
var numbers = "0123456789"
var specialchars = "*&^%$#@!?><{}"
var password = ""

// Add event listener to generate button; moved above write password to input function.
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//check length
function generatePassword () {
  var passwordLength = prompt("Enter desired number of characters (8-128):")

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
if (uppercaseConfirm === false && numberConfirm === false && lowercaseConfirm === false && specialcharsConfirm === false) {
  alert("Please choose at least 1 type of character.")
  return;
}

var password = "";

// make sure potential string pass length is an integer 

const confirmLength = parseInt(passwordLength)

// put together inputs to display in previously blank password field created in var(s)

for (var i = 0; i < confirmLength; i++) {

  inputs[Math.floor(Math.random() * inputs.length)];

  password = password + inputs[Math.floor(Math.random() * inputs.length)];
}

return password;

}