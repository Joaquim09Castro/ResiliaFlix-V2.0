let zipCode=document.querySelector("#zipcode");
let submitAdress=document.querySelector("#submitadress");

submitAdress.addEventListener( "click",()=> {

    let zipUrl=zipCode.value.replace("-","");
    let urlZip=`https://viacep.com.br/ws/${zipUrl}/json/`;

    ControllerCep.getAdress(urlZip);

});