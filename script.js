// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define an array and string to store the resulting password
//var passArray = [];
var passString = "";
var inputObject = {};

//Define min/max length for password
const min = 8;
const max = 128;

const chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums2 = "0123456789";
const specials2 = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~\"\\";
var whatCharLength = "";  

var charsLower2 = [];
for (var i = 0; i < chars2.length; i++) {
    charsLower2 = charsLower2 + (chars2[i].toLowerCase());
}

passProperties = {
  chars2,
  charsLower2,
  nums2,
  specials2
}

//Collect Input from User & return an object with all input.  Rerun the function if validation criteria is not met.
function collectInput() {
  //Password length
  whatCharLength = prompt ("Enter a password length between " + min + " - " + max + " characters");
  while (whatCharLength < min || whatCharLength > max) {
    alert("Invalid length chosen.  Please enter a password length between " + min + " - " + max + " characters");
    whatCharLength = prompt ("Enter a password length between " + min + " - " + max + " characters");
  }
  //Types of characters wanted
    wantLowers = window.confirm ("Do you want lowercase characters in your password? (i.e. - " + charsLower2 + ")");
    wantUppers = window.confirm ("Do you want uppercase characters in your password? (i.e. - " + chars2 + ")");
    wantNums = window.confirm ("Do you want numeric characters in your password?(i.e. - " + nums2 + ")");
    wantSpecials = window.confirm ("Do you want special characters in your password?(i.e. - " + specials2 + ")");
  while (!wantLowers && !wantUppers && !wantNums && !wantSpecials) {
    wantLowers = window.confirm ("Do you want lowercase characters in your password? (i.e. - " + charsLower2 + ")");
    wantUppers = window.confirm ("Do you want uppercase characters in your password? (i.e. - " + chars2 + ")");
    wantNums = window.confirm ("Do you want numeric characters in your password?(i.e. - " + nums2);
    wantSpecials = window.confirm ("Do you want special characters in your password?(i.e. - " + specials2 + ")");
    alert("You did not choose any character types.  A password cannot be generated.  Try again.");
  }

  inputObject = {};
  //Return an object containing all responses
  return inputObject = {
    whatCharLength,
    wantLowers,
    wantUppers,
    wantNums,
    wantSpecials
  }
}

//Generate the password
function generatePassword() {
  let tempArray = [];
  tempString = "";
  //Determine which questions were true and form a bank of character options to choose from randomly
  if (inputObject.wantLowers) {
    //start populating a temporary array
    tempString = tempString.concat(passProperties.charsLower2);
  }
  if (inputObject.wantUppers) {
    tempString = tempString.concat(passProperties.chars2);
  }
  if (inputObject.wantNums) {
    tempString = tempString.concat(passProperties.nums2);
  }
  if (inputObject.wantSpecials) {
    tempString = tempString.concat(passProperties.specials2);
  }
  console.log("Potential characters to choose from: ");
  console.log(tempString);

  passArray = [];
  passString = "";
  //Need to pick a random number use math random and math floor against the length of characters and grab that array item
    for (var i=0; i < whatCharLength; i++) {
      passString = passString + tempString[Math.floor(Math.random() * tempString.length)];
    }

  //Do I need to return an array or just a string?
  //console.log(passString);
  //passString = JSON.stringify(passArray);
  console.log("Resulting password generated: ")
  console.log(passString);
  return passString;
}

// Write password to the #password input
function writePassword() {
  collectInput();
  console.log("Input received from the user: ")
  console.log(inputObject);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
