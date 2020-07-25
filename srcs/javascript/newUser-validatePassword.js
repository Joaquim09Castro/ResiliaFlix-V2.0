let passWord = document.querySelector("#password");
let validPassWord = document.querySelector("#validatepassword");

validPassWord.addEventListener("focusout", () => {
    let passWordStr = passWord.value;
    let validPassWordStr = validPassWord.value;

    if (passWordStr.length < 6) {
        alert("Your password must be at least 6 characters");
    } else if (passWordStr.localeCompare(validPassWordStr) != 0) {
        alert("Passwords must be identical, please re-enter the new password ");
    } else {
        alert(" Valid Password!");
    }
});
