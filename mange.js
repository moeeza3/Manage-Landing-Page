/* var a;
function  my(){
     if(a==1)
     {
       document.getElementById("menu").style.display="none";
      return a=0;
     }
     else{
       document.getElementById("menu").style.display="flex";
       return a=1;
     }
} */

function openMe() {
  var x = document.getElementById("menu");
  if (x.className === "menuNav") {
    x.className += " responsive";
  } else {
    x.className = "menuNav";
  }
}
function iconAction(y) {
  y.classList.toggle("change");
}