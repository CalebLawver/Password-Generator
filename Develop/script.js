// Assignment Code
var generateBtn = document.querySelector("#generate");

var passInfo = {
  lower: "qwertyuiopasdfghjklzxcvbnm",
  upper: "QWERTYUIOPASDFGHJKLZXCVBNM",
  num: "1234567890",
  spec: "!@#$^&%*()+=-[]{}|:<>?,.'",
};

var confirmInputs = {
  qLower: false,
  qUpper: false,
  qNum: false,
  qSpecial: false,
};

function passGen() {
  var confirmLength = "";

  while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
    confirmLength = prompt("Please choose your password length. As little as 8 characters or as many as 128 characters.");
  }

  while (confirmLength) {
    if (confirm("Do  you want your password to include lowercase letters?") == true) {
      confirmInputs.qLower = true
    }
    
    if (confirm("Do you want your password to include uppercase letters?") == true) {
      confirmInputs.qUpper = true
    }

    if (confirm("Do you want your password to include numbers?") == true) {
      confirmInputs.qNum = true
    }

    if (confirm("Do you want your password to include special characters?") == true) {
      confirmInputs.qSpecial = true
    }

    if (!confirmInputs.qLower && !confirmInputs.qUpper && !confirmInputs.qNum && !confirmInputs.qSpecial) {
      alert("At least one type of character must be selected.");
    }
    else {
      return confirmLength;
    }
  }
}

function generatePassword() {
  // This is setting up what will be used to generate the password.
  length = passGen();
  var charPool = "";
  var createdPass = "";

  if (confirmInputs.qLower == true) {
    charPool += passInfo.lower
  }

  if (confirmInputs.qUpper == true) {
    charPool += passInfo.upper
  }  

  if (confirmInputs.qNum == true) {
    charPool += passInfo.num
  }

  if (confirmInputs.qSpecial == true) {
    charPool += passInfo.spec
  }

  for (var i = 0; i < length; i++) {
    createdPass += charPool[Math.floor(Math.random() * charPool.length)];
  }
  return createdPass;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);