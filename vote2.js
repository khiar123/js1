ch1 = "kaissaid";
ch2 = "nabilkaroui";
ch3 = "abir mousa";

let nb = 0;
let nb1 = 0;
let nb2 = 0;

document.getElementById("btn1").addEventListener("click", function() {
    nb++;

    localStorage.setItem(ch1, nb);
});
document.getElementById("btn2").addEventListener("click", function() {
    nb1++;

    localStorage.setItem(ch2, nb1);
});
document.getElementById("btn3").addEventListener("click", function() {
    nb2++;

    localStorage.setItem(ch3, nb2);
});

function loadi() {
    document.getElementById("aff1").innerText = localStorage.getItem(ch1, nb);
    document.getElementById("aff2").innerText = localStorage.getItem(ch2, nb1);
    document.getElementById("aff3").innerText = localStorage.getItem(ch3, nb2);
}