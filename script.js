
let Phillip =document.querySelector(".Phillip");
let Naveen=document.querySelector(".Naveen");
let LiShang=document.querySelector(".Shang");
let Flynn=document.querySelector(".Flynn");
let tryAgain=document.querySelector(".tryAgain");
let results=document.querySelector(".result");

let button = document.querySelector("button");
//Write a click handler
button.onclick=function(){
let HS = document.querySelector(".Question1").value;
let ExIn = document.querySelector(".Question2").value;
let Clr = document.querySelector(".Question3").value;
  

  if((HS >= 3 && HS<=5) && (ExIn ==="Introvert" ||       ExIn==="introvert") && (Clr === "Red" || Clr==="red")){
    results.style.display="block";
    results.innerHTML = "You chose the number" + " " +HS+ ", you are an" + " " + ExIn + " " + "and you like  the color"+ " " + Clr+ "." + " " + "Which means your prince charming is PRINCE PHILLIP";
    Phillip.style.display="block";
      Naveen.style.display="none";
      LiShang.style.display="none";
      Flynn.style.display="none";
      tryAgain.style.display="none";
  } 
     
    else if((HS >= 3 && HS<=5) &&
            (ExIn === "Extrovert" || ExIn==="extrovert") && (Clr === "Blue" || Clr === "blue")){
      results.style.display="block";
      results.innerHTML =  "You chose the number" + " " +HS+ "! You are an" + " " + ExIn + " " + "and you like  the color"+ " " + Clr+ "." + " " + "Which means your prince charming is PRINCE NAVEEN";
      Naveen.style.display="block";
      Phillip.style.display="none";
      LiShang.style.display="none";
      Flynn.style.display="none";
      tryAgain.style.display="none";
    }
    else if((HS>=0 && HS<=2) &&
     (ExIn === "Extrovert" || ExIn === "extrovert") &&
            (Clr === "Red" || Clr ==="red")){
       results.style.display="block";
      results.innerHTML =  "You chose the number" + " " +HS+ "! You are an" + " " + ExIn + " " + "and you like  the color"+ " " + Clr+ "." + " " + "Which means your prince charming is Prince LI SHANG";
     LiShang.style.display="block";
     Naveen.style.display="none";
     Phillip.style.display="none";
     Flynn.style.display="none";
     tryAgain.style.display="none";
    }
    
    else if((HS>=0 && HS<=2) &&
      (ExIn === "Introvert" || ExIn==="introvert") &&
            (Clr === "Blue" || Clr==="blue")){
        results.style.display="block";
      results.innerHTML =  "You chose the number" + " " +HS+ "! You are an" + " " + ExIn + " " + "and you like  the color"+ " " + Clr+ "." + " " + "Which means your prince charming is FLYNN RIDER";
     Flynn.style.display="block";
     Naveen.style.display="none";
     Phillip.style.display="none";
     LiShang.style.display="none";
     tryAgain.style.display="none";
}
    else{
    results.style.display="block";
    results.innerHTML = "TRY AGAIN - do not match our possible answers";
    tryAgain.style.display="block";
     Naveen.style.display="none";
     Phillip.style.display="none";
     LiShang.style.display="none";
     Flynn.style.display="none";
     
  }  
};