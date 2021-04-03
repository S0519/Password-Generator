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

function generatePassword(){
  var passwordLength = 0;
// the password is between 8 and 128 characters; I chose false to get inside the while loop, if any of the var are true so the questions do not going to be asked.
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(prompt('how long is your password (Must be between 8 and 128)', ""));
  }

  var lowercase = false;
  var uppercase = false;
  var numeric = false;
  var specialCharacters = false;

  while (!lowercase && !uppercase && !numeric && !specialCharacters) {
    lowercase = confirm("Do you want to include lowercase letters?");
    uppercase = confirm("Do you want to include uppercase letters?");
    numeric = confirm("Do you want to include numbers?");
    specialCharacters = confirm("Do you want to include special characters?");
  }

  // using the answer of the top and creating the possibilities of all the password characters.
  var possibilities = '';
  
  if (lowercase) {
    possibilities = possibilities + 'abcdefghijklmnopqrstuvwxyz';
  }
  if (uppercase) {
    possibilities = possibilities + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (numeric) {
    possibilities = possibilities + '0123456789';
  }
  if (specialCharacters) {
    possibilities = possibilities + '!@#$%^&*()_+-=';
  }

  //math.floor gives the lowest full number
  //math.random gives any number based to the criteria
  //charat allow to find the character whatever the number is
  var password = "";

  for(var i = 0; i < passwordLength; i++) {
    password = password + possibilities.charAt(Math.floor(Math.random() * Math.floor(possibilities.length - 1)));
  }
  
  //The return fonction go backs to the line fonction (line 6)
  return password;
}




