var tab = [];


function insert() {

    var name = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    //  console.log(name);
    var id = Math.floor((Math.random() * 100) + 1);
    var object = {
        id: id,
        name: name,
        prenom: prenom

    }


    localStorage.setItem("task", JSON.stringify(object)); // insert
    document.getElementById("aff").innerHTML = localStorage.getItem("task"); // affiche
    //console.log(name);
}