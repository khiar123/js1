function valid() {
    /* var x = document.forms["mail"]["pass"];
     if (x == "") {
         alert("le champs est vide ");
         return false;*/

    var mail = document.getElementById(mail);
    var pass = document.getElementById(pass);
    if (mail == "") {

        alert("vide");
        return false;

    } else {

        return true;


    }
}