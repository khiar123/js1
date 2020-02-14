var a = 0; // variable globale
let b = 0; // variable locale
const c = 0; // variable constante

if (a === "0") {

} else if (b === 0) {

} else {

}

switch (a) {
    case 1:
        console.log(false);
        break;
    case 2:
        traitement;
    case 3:
        traitement;
    case 4:
        traitement;
    default:
        traitement;
}

for (let i = 0; i < n; i++) {
    traitement
}

while (a < 10) {
    a++;
}

// do {
//     a++;
// } while (a > 10)

var d = [];
d.length // taille du tableau
d.push(2) // ajouter dans le tableau
d.splice(1, 1) // supprimer une case a partir de la case numero 1 
d.splice(1, 3) // supprimer troix cases a partir de la case numero 1 
d.splice(1, 1, 1) // remplacer la valeur de case numero 1 par 1

var object = {
    nom: "akoum",
    prenom: "mohamed",
    age: 24,
}
var tab = [];
tab.push(object);
console.log(object)
console.log(tab);
console.log(object.nom);
console.log(object.prenom);
console.log(object.age);