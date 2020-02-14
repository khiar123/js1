let chaine = "abc#de#f#ghi#jklmn#op#";
let masque = /^#/g;
//document.getElementById('cherche').InnerHTML = chaine.match(masque);
let cherche = document.getElementById(cherche);
//cherche.innerHTML = chaine.search(masque);
console.log(chaine.search(masque));