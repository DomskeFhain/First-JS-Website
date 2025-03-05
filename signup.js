function userSignUp() {
    const userEmailTi = document.getElementById("emailTI").value;
    const userPasswordTi = document.getElementById("passwordTI").value;
    const userRepeatPasswordTi = document.getElementById("repeatPasswordTI").value;
    const userFirstName = document.getElementById("firstName").value;
    const userFamilyName = document.getElementById("familyName").value;

    if (!userEmailTi || !userPasswordTi || !userRepeatPasswordTi || !userFirstName || !userFamilyName) {
        alert("Bitte fülle alle Felder aus!");
        return;
    }

    if (userEmailTi.length < 3) {
        alert("Die E-Mail muss mindestens 3 Zeichen lang sein!");
        return;
    }

    if (userPasswordTi !== userRepeatPasswordTi) {
        alert("Die Passwörter stimmen nicht überein!");
        return;
    }

    alert(`User wurde erfolgreich erstellt!
    Email: ${userEmailTi}
    Passwort: ${userPasswordTi}
    Vorname: ${userFirstName}
    Nachname: ${userFamilyName}`);
}
