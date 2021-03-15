// create arrays for password variables

let caseArray = [];
let lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
let numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];

// password generate function
function generatePassword() {

  let passwordString = "";

  // Add in options for user
  let useLowerCase = confirm("Do you want to include lowercase characters?");
  let useUpperCase = confirm("Do you want to include uppercase characters?");
  let useNumeric = confirm("Do you want to include numeric characters?");
  let useSpecial = confirm("Do you want to include special characters?");

  // protection against an all no selection 
  while (useLowerCase == false && useUpperCase == false && useNumeric == false && useSpecial == false) {
    alert("Please select one type of character");
    useLowerCase = confirm("Do you want to include lowercase characters?");
    useUpperCase = confirm("Do you want to include uppercase characters?");
    useNumeric = confirm("Do you want to include numeric characters?");
    useSpecial = confirm("Do you want to include special characters?");
  }

  // loop for password size length

  let passwordLength = parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
  while (passwordLength < 8 || passwordLength > 128 || typeof (passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
    alert("Please choose a number that is more than 8 and less than 128 characters");
    passwordLength = parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
  }


  // Adds seletion to array
  if (useLowerCase == true) {
    caseArray.push(lowerCaseChar);

  }
  if (useUpperCase == true) {
    caseArray.push(upperCaseChar)

  }
  if (useNumeric == true) {
    caseArray.push(numericChar)

  }
  if (useSpecial == true) {
    caseArray.push(specialChar)
  }

  // Loop for character selection

  for (let i = 0; i < passwordLength; i++) {

    let randomCharArrayNum;
    let selectedCharArray;
    let randomCharNum;
    let randomChar;

    // Using the power of math, select random entries

    randomCharArrayNum = parseInt(Math.floor(Math.random() * caseArray.length));

    //variable that stores selected array from case array
    selectedCharArray = caseArray[randomCharArrayNum];


    randomCharNum = Math.floor(Math.random() * selectedCharArray.length);


    randomChar = selectedCharArray[randomCharNum];


    passwordString += randomChar;

  }

  passwordEntry.textContent = passwordString;
}

// When the password is created it is add to field

let generateButton = document.getElementById("generate");
let passwordEntry = document.getElementById("passwordEntry");
generateButton.onclick = generatePassword;