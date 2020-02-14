function insert(num) {
    document.form.textview.value = document.form.textview.value + num;


}

function equal() {
    var op = document.form.textview.value;
    document.form.textview.value = document.form.textview.value + "=" + eval(op);


}

function supp() {

    document.form.textview.value = "";

}

function clean() {
    var opp = document.form.textview.value;
    document.form.textview.value = opp.substring(0, opp.length - 1);


}

var tab = [];

function hist() {
    var opp = document.form.textview.value;
    tab.push(opp);
    document.getElementById('hist').innerHTML = "{" + tab + "}";

}