let direction="";

function chooseDir(dir){
  if(dir=="rtl"){
   direction="rtl";
    }
  else if(dir=="ltr")
   direction="ltr";
  else if(dir="contextual")
      direction="auto";
   
      isStatic();
  
}
function isStatic()
{
var elem = document.getElementsByTagName("p");
for (var i = 0; i < elem.length; i++) {
  str=elem[i].innerHTML;
  bidi=baseTextDir(direction,str);
  elem[i].dir=bidi;

}
}

function handleDynamic(id){
  if(direction=="rtl")
  document.getElementById(id).dir="rtl"
  else if(direction=="ltr")
  document.getElementById(id).dir="ltr"  
  else if(direction=="auto"){
  str=document.getElementById(id).value;
  bidi=baseTextDir(direction,str);
  document.getElementById(id).dir=bidi;
  }
}
function baseTextDir(dir,str){
  if(dir=="rtl")
  return"rtl"
  else if(dir=="ltr")
  return"ltr"
  else if(dir=="auto"){
    let chars = [];
    let index = 0;
  
  RTLchars = new RegExp(
    "[\\u061b\\u0621-\\u064a\\u066d-\\u066f\\u0671-\\u06d5"
    + "\\u06dd\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u070d\\u0710\\u0712-\\u072f"
    + "\\u074d-\\u07a5\\u07b1\\ufb50-\\ufd3d\\ufd50-\\ufdfc\\ufe70-\\ufefc]"
  );
  var regex=/^[0-9@!#\$\^%&*()+=\-\[\]\\\';,\.\/\{\}\|\":<>\? ]+$/;
 
  for (var i = 0; i <= index; i++) {
    chars[i] = str.charAt(i);
    if(/\s/.test(chars[i]) || regex.test(chars[i]))  {
        index++;
      }
    else if (RTLchars.test(chars[i])) {
      return "rtl"
     
    }
    else{
       return "ltr"
    
    }
  }
   
  }
}
