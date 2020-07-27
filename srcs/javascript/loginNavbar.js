let $ = document.querySelector.bind(document);

let buttonLogin = $("#button-login");
let email = $("#user-email");
let password = $("#user-password");

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
			window.open("loggedIndex.htm", "_self");
		}
	} else {
		window.open("Login.html", "_self");
	}
});
