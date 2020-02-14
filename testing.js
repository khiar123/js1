function mailvalid() {

    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$;
    if (reg.test(formul.mail.value)) {
        return (true);
    }
    alert("You have entered an invalid email address!");
    return (false);
}