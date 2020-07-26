const $ = document.getElementById.bind(document)
const checarBox = $("agreeCheck");
const btnCheck = $("sendBtn")





btnCheck.addEventListener("click", function verificaEMAIL(e) {
     e.preventDefault();
     let er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
     let inputEmail = $("emailCheck").value;
     let spanAlert = $("spanAlert")

     let emailError = ` 
     <small id ="emailAlert"> Enter the email address associated with your <strong>ResiliaFlix</strong> account. </small>
     `

     let emailSucess = ` 
     <div class="alert alert-success" role="alert">
     <h4 class="alert-heading">For your security</h4>
     <p>We need to verify your identity. We sent a password reset link to email <a class="alert-link">${inputEmail}</a></p>
     <hr></div>
     `

     if (inputEmail == "") {
          emailAlert.innerHTML = emailError
     }
     else {
          spanAlert.innerHTML = emailSucess
     }
});


// HABILITA CHECKBOX
function Checa(CheckBox) {

    

     if (CheckBox.checked) {
          $("sendBtn").disabled = false;
     } else {
          $("sendBtn").disabled = true;
     }
}



