// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\', // this looks like it could be an issue, being 2 chars in one element
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//declare and initialise variables to store user password options
var useLower = false;
var useUpper = false;
var useSpecial = false;
var useNumeric = false;
var pwdLength = "";

// Function to prompt user for password options
function getPasswordOptions() {
  pwdLength = prompt("Please choose a password length between 10 & 64 characters....");
  if (pwdLength < 10 || pwdLength > 64) {
    alert("Invalid password length. Please choose a number between 10 and 64.");
    return "Please try again";
  }
  useSpecial = confirm("Would you like to use special characters ?");
  useLower = confirm("Would you like to use lowercase characters ?");
  useUpper = confirm("Would you like to use uppercase characters ?");
  useNumeric = confirm("Would you like to use numeric characters ?", 'no', 'yes');
 }

// Function for getting a random element from an array
function getRandom(arr) {
  let maxElement = arr.length;
  let randElement = Math.floor(Math.random() * maxElement);
  return arr[randElement];
}

// Function to generate password with user input
function generatePassword() {
  if (getPasswordOptions() === "Please try again") { return "Please try again"; }
  let pwdBuild = '';
  while (pwdBuild.length < pwdLength) {
    if (useSpecial) { pwdBuild += getRandom(specialCharacters); }
    if (useUpper) { pwdBuild += getRandom(upperCasedCharacters); }
    if (useLower) { pwdBuild += getRandom(lowerCasedCharacters); }
    if (useNumeric) { pwdBuild += getRandom(numericCharacters); }
  }
  return pwdBuild;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // ensure the final password is the correct length :-)
  password = password.slice(0, pwdLength);
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

