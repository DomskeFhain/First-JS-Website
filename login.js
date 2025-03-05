function onClickLogin(){
    const emailTI = document.getElementById("emailti").value;
    const password = document.getElementById("passwordti").value;
    console.log(emailTI, password);
    alert(
      `Der Bneutzer hat sich erflogreich mit ${emailTI} und ${password} angemeldet`
    );
}