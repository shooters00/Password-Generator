// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define an array and string to store the resulting password
var passArray = [];
var passString = "";

//Define min/max length for password
const min = 8;
const max = 128;

//Define upper case list and put in array
const charList = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
const chars = charList.split(" ");

//Convert upper case list to lower and put in array
const charsLower = [];
for (var i = 0; i < chars.length; i++) {
    charsLower.push(chars[i].toLowerCase());
}

//Define nums and put in array
const numList = "0 1 2 3 4 5 6 7 8 9";
const nums = numList.split(" ");

//Define special characters and put in array.  Took out using a " and \. <- Can we fix?
const specialList = " ! # $ % & ' ( ) * + , - . / : ; < = > ? @ [ ] ^ _ ` { | } ~ \" \\"  
const specials = specialList.split(" ");

passProperties = {
  chars,
  charsLower,
  nums,
  specials
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
  wantLowers = window.confirm ("Do you want lowercase characters in your password? (i.e. - " + charsLower);
  wantUppers = window.confirm ("Do you want uppercase characters in your password? (i.e. - " + chars);
  wantNums = window.confirm ("Do you want numeric characters in your password?(i.e. - " + nums);
  wantSpecials = window.confirm ("Do you want special characters in your password?(i.e. - " + specials);

  //Ensure at least one type of character was selected
  if (!wantLowers && !wantUppers && !wantNums && !wantSpecials) {
    alert("You did not choose any character types.  A password cannot be generated.  Try again.");
    collectInput();
  }

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
  //Determine which questions were true and form a bank of character options to choose from randomly
  if (inputObject.wantLowers) {
    //start populating a temporary array
    tempArray = tempArray.concat(passProperties.charsLower);
  }
  if (inputObject.wantUppers) {
    tempArray = tempArray.concat(passProperties.chars);
  }
  if (inputObject.wantNums) {
    tempArray = tempArray.concat(passProperties.nums);
  }
  if (inputObject.wantSpecials) {
    tempArray = tempArray.concat(passProperties.specials);
  }
  console.log("Potential characters to choose from: ")
  console.log(tempArray);

  passArray = [];
  passString = "";
  //Need to pick a random number use math random and math floor against the length of characters and grab that array item
    for (var i=0; i < whatCharLength; i++) {
      passArray.push(tempArray[Math.floor(Math.random() * tempArray.length)]);
    }

  //Do I need to return an array or just a string?
  console.log(passArray);
  passString = JSON.stringify(passArray);
  console.log("Resulting password generated: ")
  console.log(passString);
  return passString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Execute the collection of input and send the input to the console
collectInput();
console.log("Input received from the user: ")
console.log(inputObject);
writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


