function saving() {

    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var mail = document.getElementById("mail").value;
    var mobile = document.getElementById("mobile").value;
    var adresse = document.getElementById("adresse").value;
    var id = Math.floor((Math.random() * 1000) + 1);
    var loc = JSON.parse(localStorage.getItem("user")) || [];
    var object = {
        id: id,
        prenom: prenom,
        password: pass1,
        nom: nom,
        email: mail,
        mobile: mobile,
        adresse: adresse

    }
    loc.push(object);


    if (pass() == true) {

        localStorage.setItem("user", JSON.stringify(loc));


    } else {
        alert("mots de passe erroné");

    }






}






function pass() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var user = localStorage.getItem("user");

    if ((pass1) == (pass2)) {

        return true;

    } else {

        return false;
    }

}


function validate() {
    var pass = document.getElementById("pass").value;
    var mail = document.getElementById("mail").value;
    var user = JSON.parse(localStorage.getItem("user"));
    if ((pass == user.password) && (mail == user.email)) {
        alert("bien");


    } else {
        alert("erreur dans la mots de passe");

    }
    console.log("bonjour");

    function vali() {
        console.log("bonjour");
        //  var mail = document.getElementById("mail").value;
        // var pass = document.getElementById("pass").value;
        //  var loc = JSON.parse(localStorage.getItem("user")) || [];

        // for (let i = 0; i < loc.length; i++) {
        // console.log(loc[i]);
        //}
        //   if ((loc[i].password == pass) && (loc[i].mail == mail)) {
        //    alert("exist");

        //  } else {
        //  alert("introuvable");


        // } 



    }
}