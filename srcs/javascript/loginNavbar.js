let $ = document.querySelector.bind(document);

let buttonLogin = $("#button-login");
let email = $("#userEmail");
let password = $("#userPassword");

function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

buttonLogin.addEventListener("click", (event) => {
	if (validateEmail(email.value) && password.value.length > 5) {
		console.log(validateEmail(email.value));
		window.open("https://www.globo.com", "_self");
	}
});
