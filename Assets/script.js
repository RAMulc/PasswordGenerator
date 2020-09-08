// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variable for password length
var passwordLength = 0;

// Combined string of characters for password generation
var selectedChars = "";


function getPasswordLength() {
  // Ask user for desired number of characters in password, validate the input
  while (true) {
    passwordLength = prompt("What length of password do you require? \n8 character minimum, 128 character maximum");
    //Abort if null
    if (passwordLength == null) {
      return false;
    }
    //Check for valid password length, exit function if valid
    if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
      return true;
    }
  }
}

function getPasswordCharSet(allCharacters) {
  // Password options stored as array, all set true initially
  // lowercase, uppercase, numeric, special
  var options = [true, true, true, true];
  if (allCharacters.length !== options.length) {
    return false;
  }
  // Ask user for password character criteria, store in array for future use, check at least one character set is selected
  var isValid = false;
  while (!isValid) {
    options[0] = confirm("Include lowercase characters in the password?");
    options[1] = confirm("Include uppercase characters in the password?");
    options[2] = confirm("Include numeric characters in the password?");
    options[3] = confirm("Include special characters in the password?");
    if (options.indexOf(true) !== -1) {
      console.log("Password criteria: (lowercase, uppercase, numeric, special)", options);
      isValid = true;
    }
    else {
      alert("Please select at least one character set!");
    }
  }
  // Generate combined string of charcters from user selection
  for (var i = 0; i < options.length; i++) {
    if (options[i]) {
      selectedChars += allCharacters[i];
    }
  }
  return true;
}

function generatePassword() {
  var alphaLower = "abcdefghijklmnopqrstuvwxyz";
  var alphaUpper = alphaLower.toUpperCase();
  var numeric = "0123456789";
  var specChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";   // Space character excluded
  // Add available characters into array
  var allChar = [alphaLower, alphaUpper, numeric, specChar];
  console.log("All Characters: ", allChar);

  if (getPasswordLength() && getPasswordCharSet(allChar)) {
    console.log("getPasswordLength: ", passwordLength);
    console.log("Selected character list: ", selectedChars);

    // Generate password
    var generatedPassword = "";
    for (var j = 0; j < passwordLength; j++) {
      generatedPassword += selectedChars[getRandom(selectedChars.length)];
    }
    console.log("Generated Password: ", generatedPassword, "Password Length: ", generatedPassword.length);
    return generatedPassword;
  }
  //User has aborted, end gracefully
  alert("Something went wrong.")
  return "";

}

// Function to generate a random number between 0 and 'upperLimit' - 'upperLimit' exclusive
function getRandom(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password !== ""){
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

