let passWord=document.querySelector("#password");
let validPassWord=document.querySelector("#validatepassword");

validPassWord.addEventListener("focusout", () =>{
   
    let passWordStr=passWord.value;
    let validPassWordStr=validPassWord.value;

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





