// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&*+-.=?";
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
var userWantsupperCAse = window.confirm("Would you like uppercase letters in the password")


//Made num list
var NumList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var SymList = ["<", ">", ".", "/", "?", "'", "[", "{", "]", "}", "|", "=", "+", "-", "_", ")", "(", "*", "&", "^", "%", "$", "#", "@", "!", "~", "`",]
var LowerCaselist = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCaselist = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var ListChoices = []

//prompt list choices
if (userWantsNums === true) {
  ListChoices.push(NumList)
}
if (userWantsSymbols === true) {
  ListChoices.push(SymList)
}
if (userWantslowerCase === true) {
  ListChoices.push(LowerCaselist)
}
if (userWantsupperCAse === true) {
  ListChoices.push(UpperCaselist)
}
console.log(ListChoices)






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);