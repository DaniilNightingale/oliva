// JavaScript source code
//XNJ
//fgh
var digit = {
    exec: function (str, pos) {
        var chr = str.charAt(pos);
        return { res: chr, end: pos + 1 };
    }
};
console.log(digit.exec("abcde", 0));
let n = new set();
var alf = ["à", "á", "â", "ã", "ä", "å"]
function slovo(str,alb) {
    let ch;
    let arr = new String;
    for (let i = 0; i < str.length - 1; i++) {
        ch = str[i];
        for (let j = 0; j < alb.length - 1; j++) {
            if (ch == alf[j])
                arr = arr + ch;
            }
    }
    return arr;
}
