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
	checkEmailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!emailStr.match(checkEmailRegExp)) {
		messageEmail.textContent = "Please enter a valid email account";
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
		messageDisplay.classList.add("alert-color");
		messageDisplay.textContent =
			"Your password must be at least 8 characters long";
		passWord.focus();
	} else {
		messageDisplay.classList.remove("alert-color");
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
		messagePasswordCheck.classList.add("alert-color");
		messagePasswordCheck.textContent = "Passwords must be identical";
		passWord.focus();
	} else {
		messagePasswordCheck.classList.remove("alert-color");
		messagePasswordCheck.textContent = " Password checked ";
	}
	event.preventDefault();
	event.stopPropagation();
});
