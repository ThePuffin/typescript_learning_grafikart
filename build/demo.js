var a;
a = "0";
var b = 456;
// b = "truc";   // impossible
function isPair(nombre) {
    return nombre % 2 === 0;
}
console.log(isPair(b));
function salut(t) {
    //function salut(t: string[]) {
    var out = [];
    for (var _i = 0, t_1 = t; _i < t_1.length; _i++) {
        var item = t_1[_i];
        out.push("Salut " + item);
    }
    return out;
}
salut(["aze", "aze", "aze", "aze" /*, 55*/]);
//return use callback
function isPaired(nombres, callback) {
    return nombres % 2 === 0;
}
isPaired(2, function (reste) {
    console.log(reste);
});
//use parameter optionnal
function isPaird(nombres, options) {
    return nombres % 2 === 0;
}
isPaird(2, { a: 2 });
// multi type
function isPaire(nombress) {
    if (typeof nombress !== "number") {
        nombress = parseInt(nombress, 10);
    }
    return nombress % 2 === 0; //force to use number for return
}
isPaire(2);
