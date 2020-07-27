let passWord = document.querySelector("#password");
let validPassWord = document.querySelector("#validatepassword");
let messageDisplay = document.querySelector("#messagepassword");
let messagePasswordCheck = document.querySelector("#messagepasswordcheck");
let idNumber = document.querySelector("#identification");
let messageIdNumber = document.querySelector("#messagerg");
let email = document.querySelector("#email");
let messageEmail = document.querySelector("#messagemail");
let passWordStr = "";
let validPassWordStr = "";
let idNumberStr = "";
let emailStr = "";

idNumber.addEventListener("focusout", (event) => {
  idNumberStr = idNumber.value;
  let checkIdRegExp = new RegExp();
  checkIdRegExp = /^(\d{1,2})(\d{3})(\d{3})([\dX])/;
  if (!idNumberStr.match(checkIdRegExp)) {
    messageIdNumber.textContent = "Please enter a valid RG";
    idNumber.focus();
  } else {
    messageIdNumber.textContent = "";
  }

  event.preventDefault();
  event.stopPropagation();
});

email.addEventListener("focusout", (event) => {
  emailStr = email.value;
  let checkEmailRegExp = new RegExp();
  checkEmailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailStr.match(checkEmailRegExp)) {
    messageEmail.textContent = "Please enter a valid mail acount";
    email.focus();
  } else {
    messageEmail.textContent = "";
  }

  event.preventDefault();
  event.stopPropagation();
});

passWord.addEventListener("focusout", (event) => {
  passWordStr = passWord.value;
  if (passWordStr.length < 8) {
    messageDisplay.textContent = "Your password must be at least 8 characters";
    passWord.focus();
  } else {
    messageDisplay.textContent = "Valid Password";
    setTimeout(() => {
      messageDisplay.textContent = "";
    }, 3000);
  }

  event.preventDefault();
  event.stopPropagation();
});

validPassWord.addEventListener("focusout", (event) => {
  validPassWordStr = validPassWord.value;

  if (passWordStr.localeCompare(validPassWordStr) != 0) {
    messagePasswordCheck.textContent =
      "Passwords must be identical, please re-enter the new password";
    passWord.focus();
  } else {
    messagePasswordCheck.textContent = " Password checked ";
  }
  event.preventDefault();
  event.stopPropagation();
});
