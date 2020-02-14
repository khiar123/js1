function valid() {

    // var email = document.forms["formul"]["mail"].value;
    // console.log("hello");
    // if (email == "") {
    //   alert("Name must be filled out");
    //  return false;



    var email = document.getElementById("mail").value;
    var passw = document.getElementById("pass").value;
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if ((email == "") && (passw == "")) {
        console.log('email:');
        console.log('password:' + passw);
        alert("les champs sont vide");

    }

    // var email = document.forms["formul"]["mail"].value;
    // console.log('email1' + email);
    else if (email == "") {
        console.log('email:' + email);
        window.alert(" champs vide");
        return (false);
    } else if (re.test(email) == true) {

        console.log("true");
        return (true);

    } else if (re.test(email) == false) {
        console.log("false");
        alert("invalid mail !");
        return (false);

    }

}

function validepass() {
    var passw = document.getElementById("pass").value;
    var reg = /^[A-Za-z]+$/;
    var reg1 = /^[0-9a-zA-Z]+$/;
    var reg3 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;
    if (passw == "") {
        console.log("password is empty");
        alert("password est vide");

        return (false);
    } else if (reg.test(passw) == true) {
        console.log("faible");
        alert("password est faible");
        return (true);

    } else if (reg1.test(passw)) {
        alert("password moyen");
        return (true);

    } else if (reg3.test(passw)) {
        alert("good password");
        return true;



    }
}


/*  if (passw == "") {
        console.log("password" + passw);
        alert("password vide!");
        //  window.alert("password est vide!");

    }
}
/* else if (reg1.test(passw) == true) {
        console.log("pass invalide");
        alert("mots de passe est faible");
        return (true);
    } // else if (reg2.test(passw)) {
    //  alert("mots de passe est moyen");


    //  }// else {
    // alert("mot de passe est fort");



    //  }
    // }





}

/* else {
        console.log("hi");
        //var email = document.getElementById("mail").value;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // return re.test(String(email).toLowerCase());
        if (re.test.toString(email)) {
            return (true);
        }
        alert("You have entered an invalid email address!");
        return (false);

    }
}*/