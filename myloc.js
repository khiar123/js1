function enreg() {

    var name = document.getElementById("name").value;
    var prenom = document.getElementById("vorname").value;



    var id = Math.floor((Math.random() * 100) + 1);
    var object = {
        id: id,
        name: name,
        prenom: prenom
    }


    //   s.push(object);

    /*  localStorage.setItem("ta", JSON.stringify(s));*/

    var exist = localStorage.getItem("task");
    exist = exist ? exist.split(",") : [];

    exist.push("object");
    localStorage.setItem("task", JSON.stringify(exist));


}




// // console.log(name);
// //  var id = Math.floor((Math.random() * 100) + 1);
// /////  var object = {
// //   id: id,
// //  name: name,
// //  prenom: prenom




//     localStorage.setItem("tas", JSON.stringify(object));
//     var entry = [];
//     entry.push(tas);
//     console.log(entry);
//     localStorage.setItem("entry", JSON.stringify(entry));

//     // insert
//     //document.getElementById("affiche").innerHTML = localStorage.getItem("task");
//     // window.location.replace("file:///C:/Users/Hatem/Desktop/jstravail/affiche.html");