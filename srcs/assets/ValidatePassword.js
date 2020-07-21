let passWord=document.querySelector("#password");
let validPassword=document.querySelector("#validatepassword");
let submitPassword=document.querySelector("#submitpassword");


submitPassword.addEventListener("click", () =>{

    let passWordStr=passWord.value;
    let validPassWordStr=validPassword.value;

    if(passWordStr.length<6){
        alert("A senha deve conter mais que 6 caracteres");
    }

    else if( passWordStr.localeCompare(validPassWordStr)!=0 ){
        alert("Os dois campos devem ser iguais");
    }
    else {

        alert("Senha válida!");
    } 

});



