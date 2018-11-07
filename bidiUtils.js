function baseTextDir(dir,str,defaultdDir){
  if(dir=="rtl")
  return"rtl"
  else if(dir=="ltr")
  return"ltr"
  else if(dir=="auto"){
    let chars = '';
  RTLchars = new RegExp(
    "[\\u061b\\u0621-\\u064a\\u066d-\\u066f\\u0671-\\u06d5"
    + "\\u06dd\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u070d\\u0710\\u0712-\\u072f"
    + "\\u074d-\\u07a5\\u07b1\\ufb50-\\ufd3d\\ufd50-\\ufdfc\\ufe70-\\ufefc]"
  );

  LTRchars = new RegExp("[a-zA-Z]");
 
  for (var i = 0; i <= str.length; i++) {
    chars = str.charAt(i);

   if (RTLchars.test(chars)) {
      return "rtl"
     
    }
    else if(LTRchars.test(chars)){
       return "ltr"
    
    }
  }
  return defaultDir || "ltr";
 }
}
