function insert(num) {
    document.form.textview.value = document.form.textview.value + num;



}

function equal() {

    var view = document.form.textview.value;

    document.form.textview.value = document.form.textview.value + "  =  " + eval(view);


}

function clean() {
    document.form.textview.value = "";



}

function back() {
    var view = document.form.textview.value;

    document.form.textview.value = view.substring(0, view.length - 1);



}
var tab = [];

function hystor() {
    var view = document.form.textview.value;

    tab.push(view);
    document.getElementById('his').innerHTML = (tab);

}