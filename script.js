// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function getRandomCharacter(characters) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

function generatePassword() {
  console.log('action works');

  var length = parseInt(prompt("How many characters would you like your password to have? It must be between 9-128"));

  while (length <= 8 || length >= 128 || isNaN(length)) {
    alert("Password length must be a number between 9-128");
    length = parseInt(prompt("How many characters would you like your password to have?"));
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  while (!(includeLowercase || includeUppercase || includeNumeric || includeSpecialChars)) {
    alert("At least one character type should be selected.");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecialChars = confirm("Include special characters?");
  }

  var availableChars = "";
  var password = '';

  if (includeLowercase) {
    availableChars += lowercaseChars;
    password += getRandomCharacter(lowercaseChars);
  }

  if (includeUppercase) {
    availableChars += uppercaseChars;
    password += getRandomCharacter(uppercaseChars);
  }

  if (includeNumeric) {
    availableChars += numericChars;
    password += getRandomCharacter(numericChars);
  }

  if (includeSpecialChars) {
    availableChars += specialChars;
    password += getRandomCharacter(specialChars);
  }

  for (var i = password.length; i < length; i++) {
    password += getRandomCharacter(availableChars);
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert("Your password is: " + password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
