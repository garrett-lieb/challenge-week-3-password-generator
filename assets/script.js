// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables
var input = [""]
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghiklmnopqrsttuvwxtz"
var numbers = "0123456789"
var special = "*&^%$#@!?><{}"
var password = ""

// Add event listener to generate button; moved above write password to input function.
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var passwordLength = prompt("Enter desired number of characters (8-128):")

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid entry - Please enter a number between 8 and 128");
    return
}