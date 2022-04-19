// JavaScript source code

let n = new Set;
var alf = ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"]
var exp = "проверка на содержание[ошиboк]/";
function simbl(str) {
    switch (str) {
        case "[" || "]": return 1;
        case " ": return 2;
        case ":": return 3;
        case "/": return 4;
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
            if (ch == alb[j])
                arr = arr + ch;
        }
    }
    cicle = simbl(str[i]);
    return arr;
}
while (cicle != 4) {
    console.log(slovo(exp, alf));
}


