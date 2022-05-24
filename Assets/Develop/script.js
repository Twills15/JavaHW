// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();

  var input = parseInt(prompt("Choose a length between 8 and 128"));

  if (input >= 8 && input <= 128) {
    // GOOD CODE GOES HERE
  } else {
    alert("Whoopsie");
  }

  return "";
}
// Added Prompts// 
var userWantsNums = window.confirm('Would you like numbers in the password?')
var userWantsSymbols = window.confirm('Would you like symbols in the password?')
var userWantslowerCase = window.confirm('Would you like lowercase letters in the password')
var userWantsupperCAse = window.conmfirm("Would you like uppercase letters in the password")
console.log(input)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);