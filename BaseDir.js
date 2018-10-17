document.getElementById("input").onkeyup = function() {baseTextDir()};

function baseTextDir() {
let str= document.getElementById("input").value;
let x=document.getElementById("input");
console.log(str);
let chars = [];
RTLchars = new RegExp(
"^[\u0590-\u05fe\u0600-۾܀-ݎݐ-ݾހ-\u07be߀-\u07fe\u0800-\u083e\u0840-\u085e\u08a0-\u08fe\u0900-ॾ]|\ud802[\udf60-\udf7e]+$"
);
var regex=/^[0-9@!#$^%&*()+=-[]\';,./{}|":<>? ]+$/;
let index = 0
for (var i = 0; i <= index; i++) {
chars[i] = str.charAt(i);
if(/\s/.test(chars[i]) || regex.test(chars[i])) {
index++;
}
else if (RTLchars.test(chars[i])) {
console.log("helloooooo");
document.getElementById("input").dir="rtl";
//x.css("direction", "rtl");
}
else{
document.getElementById("input").dir="ltr";
}
}
}
