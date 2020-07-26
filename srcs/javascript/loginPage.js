let $ = document.querySelector.bind(document);

let buttonLogin = $("#button-login");
let email = $("#user-mail");
let password = $("#user-password");

let msgEmail = $("#message-email");
let msgPassword = $("#message-password");

function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

buttonLogin.addEventListener("click", (event) => {
	event.preventDefault();
	if (validateEmail(email.value) && password.value.length > 7) {
		if (
			email.value == "usuario@resiliaflix.com" &&
			password.value == "passwordusuario"
		) {
			window.open("/loggedIndex.htm", "_self");
		} else if (
			email.value == "usuario@resiliaflix.com" &&
			password.value !== "passwordusuario"
		) {
			msgEmail.textContent = "";
			msgPassword.textContent = `Wrong password. Try again or click "Forgot your password?" to reset it`;
		} else {
			msgPassword.textContent = "";
			msgEmail.textContent = "Couldn't find your account :/";
			password.value = "";
			email.focus();
		}
	} else {
		if (!validateEmail(email.value)) {
			msgPassword.textContent = "";
			msgEmail.textContent = "Please, enter a valid email";
			password.value = "";
			email.focus();
		} else if (password.value.length < 8) {
			msgEmail.textContent = "";
			msgPassword.textContent =
				"Your password must be at least 8 characaters long";
			password.focus();
		}
	}
});
