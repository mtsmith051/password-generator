// Assignment Code
var generateBtn = document.querySelector("#generate"); 

// Variables that will be used in newPassword
var uCaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specChars = ['!', '@', '#', '$', '%', '^', '&', '*']
var numChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}   

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generates the password based on parameters given 
function generatePassword() {

  // Sets parameters for password length
  var passwordLength = prompt("Choose a password length between 8 and 128?");
  
  if (!passwordLength) return "No Password";

  passwordLength = parseInt(passwordLength);
  
  console.log(typeof passwordLength, passwordLength);
  
  if (!passwordLength) {
    console.log("Stop")
    alert("Please enter a valid number.")
    return generatePassword();
  }
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.")
    return generatePassword();
  }

  // Sets parameters for characters included
  var allCharacters = []

  // Parameters for including numbers
  var includeNumbers = confirm("Include Numbers?")

  if (includeNumbers) {
    allCharacters = allCharacters.concat(numChars);
  }

  console.log(numChars)

  // Parameters for including special characters
  var includeSpecialCharacters = confirm ("Include Special Characters?")
  
  if (includeSpecialCharacters) {
    allCharacters = allCharacters.concat(specChars);
  }

  console.log(specChars)

  // Parameters for including uppercase letters
  var includeUpperCaseLetters = confirm ("Include Uppercase Letters?")

  if (includeUpperCaseLetters) {
    allCharacters = allCharacters.concat(uCaseChars);
  }

  console.log(uCaseChars)

  // Parameters for including lowercase letters
  var includeLowerCaseLetters = confirm ("Include Lowercase Letters?")

  if (includeLowerCaseLetters) {
    allCharacters = allCharacters.concat(lCaseChars);
  }

  console.log(lCaseChars)

  console.log(allCharacters);

  var newPassword = ""

  // Sets parameters for randomizing characters for generated password
  for (i = 0; i < passwordLength; i++) {
    var rndNum = Math.floor(Math.random() * (allCharacters.length))
    var newChar = allCharacters[rndNum]
    newPassword = newPassword.concat(newChar);
  }

  // Provides randomly generated password when activating 'generate password' button
  return newPassword
}


