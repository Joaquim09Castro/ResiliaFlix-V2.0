let zipCode = document.querySelector("#zipcode");
let submitAdress = document.querySelector("#submitadress");
let zipCodeCheck = document.querySelector("#zipcodecheck");



  submitAdress.addEventListener("click", () => {

    let zipUrl = zipCode.value.replace("-", "");
    if (zipUrl.length != 8) {        
    zipCodeCheck.textContent = "Plese insert a valid Zipcode";
    zipCode.focus();
    } else {
        zipCodeCheck.textContent = "";
        let urlZip = `https://viacep.com.br/ws/${zipUrl}/json/`;

        ControllerCep.getAdress(urlZip);
    }});