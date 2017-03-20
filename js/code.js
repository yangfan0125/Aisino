var code ; //在全局 定义验证码      
function createCode(){       
code = "";      
var codeLength = 4;//验证码的长度      
var checkCode = document.getElementById("checkCode");      
checkCode.value = "";      
var selectChar = new Array(1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');      
var tip=document.getElementById("tip"); 
var tip2=document.getElementById("tip2"); 
var input1 = document.getElementById("input1");      
for(var i=0;i<codeLength;i++) {      
   var charIndex = Math.floor(Math.random()*60);      
  code +=selectChar[charIndex];      
}      
if(code.length != codeLength){      
  createCode();      
}      
checkCode.value = code;      
}      
      
function input1function(){
   input1.value="";
  tip.style.display="none";
  tip2.style.display="none";
 

}  
function tipfunction(){
  tip.style.display="none";
  tip2.style.display="none";
}    
function validate () {      
var inputCode = document.getElementById("input1").value.toUpperCase();      
var codeToUp=code.toUpperCase();  
if(inputCode.length <=0) {      
  tip2.style.display="block";   
  return false;      
}      
else if(inputCode != codeToUp ){      
         
   createCode();     
   tip.style.display="block";  
   return false;      
}      
else { 
  location.href='index.html'          
  return true;      
}      
      
}   
 