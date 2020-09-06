// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var alphaLower = "abcdefghijklmnopqrstuvwxyz";
  var alphaUpper = alphaLower.toUpperCase();
  var numeric = "0123456789";
  var specChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";   // Space character excluded
  // Add available characters into array
  var allChar = [alphaLower, alphaUpper, numeric, specChar];
  console.log("All Characters: ", allChar);

  // Ask user for desired number of characters in password, validate the input
  var validInput = false;
  while (!validInput) {
    var passwordLength = prompt("What length of password do you require? \n(8 character minimum, 128 character maximum");
    if (passwordLength !== null && parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
      validInput = true;
    }
  }
  console.log("Password length: ", passwordLength);

  // Password options stored as array, all set true initially
  // lowercase, uppercase, numeric, special
  var options = [true, true, true, true];
  // Ask user for password character criteria, store in array for future use
  options[0] = confirm("Include lowercase characters in the password?");
  options[1] = confirm("Include uppercase characters in the password?");
  options[2] = confirm("Include numeric characters in the password?");
  options[3] = confirm("Include special characters in the password?");
  console.log("Password criteria: (lowercase, uppercase, numeric, special)", options);

  // Generate combined array of charcters from user selection
  var selectedChar = "";
  for (var i = 0; i < options.length; i++) {
    if (options[i]) {
      selectedChar += allChar[i];
    }
  }
  console.log("Selected character list: ", selectedChar);

  // Generate password
  var generatedPassword = "";
  for (var j = 0; j < passwordLength; j++) {
    generatedPassword += selectedChar[getRandom(selectedChar.length)];
  }
  console.log("Generated Password: ", generatedPassword, "Password Length: ", generatedPassword.length);
  return generatedPassword;

}

// Function to generate a random number between 0 and 'upperLimit' - 'upperLimit' exclusive
function getRandom(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Just a test - delete me
for (var x = 0; x < 10; x++) {
  console.log(getRandom(6));
}
