// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passArray = [];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var specialChars = ["!@#$%^&*()-=_+~\|/?,<.>"];
var numeric = ["1234567890"];

function generatePassword() {
  getPassLength();
  getUpperCase();
  getLowerCase();
  getNumeric();
  getSpecialChars();
}

function getPassLength() {
  var inquiry = prompt ("Choose a password length");
}

function getUpperCase() {
  var inquiry = confirm ("Do you want Uppercase letters?");
}

function getLowerCase() {
  var inquiry = confirm ("Do you want Lowercase letters?");
}

function getNumeric() {
  var inquiry = confirm ("Do you want Numbers?");
}

function getSpecialChars() {
  var inquiry = confirm ("Do you want Special Characters?");
}
