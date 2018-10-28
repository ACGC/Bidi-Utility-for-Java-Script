function isArabic(id,str) {
    let chars = [];
    let index = 0;
    let strong_ar = false;
  RTLchars = new RegExp(
    "^[\u0590-\u05fe\u0600-۾܀-ݎݐ-ݾހ-\u07be߀-\u07fe\u0800-\u083e\u0840-\u085e\u08a0-\u08fe\u0900-ॾ]|\ud802[\udf60-\udf7e]+$"
  );
  var regex=/^[0-9@!#\$\^%&*()+=\-\[\]\\\';,\.\/\{\}\|\":<>\? ]+$/;
 
  for (var i = 0; i <= index; i++) {
    chars[i] = str.charAt(i);
    if(/\s/.test(chars[i]) || regex.test(chars[i]))  {
        index++;
      }
    else if (RTLchars.test(chars[i])) {
      bidiContextual(id,"rtl")
    }
    else{
      bidiContextual(id,"ltr")
    }
  }

}
function baseTextDir(id,chooseDir,con_direction){
    if(chooseDir=="rtl")
    document.getElementById(id).dir="rtl";
    else if(chooseDir=="ltr")
    document.getElementById(id).dir="ltr";
    else if(chooseDir="contextual"){
      document.getElementById("input").onkeyup = function() {isArabic(id,document.getElementById("input").value)};
    }
}    
function bidiContextual(id,con_direction){
  if(con_direction=="rtl")
    document.getElementById(id).dir="rtl";
    else if(con_direction=="ltr")
    document.getElementById(id).dir="ltr";
  }
