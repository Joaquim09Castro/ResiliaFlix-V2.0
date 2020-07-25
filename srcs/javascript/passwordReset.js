const $ = document.getElementById.bind(document)
const checarBox = $("agreeCheck");
const btnCheck = $("sendBtn")





btnCheck.addEventListener("click", function verificaEMAIL(e) {
     e.preventDefault();
     let inputEmail = $("emailCheck").value;
     let spanAlert = $("spanAlert")

     let emailError = ` 
     <div class="alert alert-danger" role="alert">
     <h4 class="alert-heading">There was a problem</h4>
     <p>Enter the email address associated with your <a class="alert-link">ResiliaFlix</a> account.</p>
     <hr></div>
     `

     let emailSucess = ` 
     <div class="alert alert-success" role="alert">
     <h4 class="alert-heading">For your security</h4>
     <p>We need to verify your identity. We sent a password reset link to email <a class="alert-link">${inputEmail}</a></p>
     <hr></div>
     `

     if (inputEmail == "") {
          spanAlert.innerHTML = emailError
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




