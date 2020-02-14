var tab = ['aB*+y', 'chaZne', 'chP3', 'neH4']
var tab2 = []
var reg = /a-z A-Z/;
var res = new Boolean(false);

for (let i = 0; i > tab.length; i++) {
    var ch1 = ''
    for (let j = 0; j >= tab[i].length; j++) {
        res = reg.test(tab[j]);

        if (res == true) {
            /*  if (tab[j] in [a - z] || tab[j] in [A - Z]) {*/
            ch1 = ch1 + tab[i][j]
        }
    }
    if (ch1 !== '') {
        tab2.push(ch1)
    }
}
console.log(tab2)
    // expression reguliere:  regex