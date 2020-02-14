function inserted() {
    var post = document.getElementById("pos").value;
    var tache = document.getElementById("tac").value;
    console.log(post);
    var id = Math.floor((Math.random() * 100) + 1);
    var object2 = {
        id: id,
        poste: post,
        tache: tache

    }
    localStorage.setItem("task", JSON.stringify(object2));
    document.getElementById("aff").innerHTML = localStorage.getItem("task");

}