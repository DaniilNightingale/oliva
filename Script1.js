// JavaScript source code

let n = new Map;
var buf = new Array;
var alf = ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я", "/", ".", ",", "_"];
var chisla = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var exp =
    "[скорости]  первая скорость= 50м/с  вторая скорость= 123.34км/ч [напряжения]   первое= 7в второе= 450в+";
function simbl(str) {
    switch (str) {
        case "[" || "]": return 1;
        case "=": return 2;
        case ":": return 3;
        case "+": return 4;
        case " ": return 5;
        default: return 0;
    }
}
var cicle = 0;
function slovo(str, alb) {
    let ch;
    let stop;
    let arr = new String;
    for (var i = 0; i < str.length; i++) {
        if (simbl(str[i]) != 0) { exp = str.substr(i + 1, str.length); break; }
        ch = str[i];
        for (let j = 0; j < alb.length; j++) {
            if (ch == alb[j] || ch == " " || ch == chisla[j])
                arr = arr + ch;
        }
    }
    cicle = simbl(str[i]);
    return arr;
}
var s = 0;
var prov;
while (cicle != 4) {
    prov = slovo(exp, alf);
    console.log(prov);
    if (prov != '') {
        buf[s] = prov;
        s++;
    }
}
console.log("___________");
for (const am of buf) {
    console.log(am);
}