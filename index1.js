let m = document.getElementById("forgotform")
let r = document.getElementById("email")
let q = document.getElementById("message")

m.addEventListener("submit",function(){
 event.preventDefault(); 

  let enteredemail = r.value.trim()


  if(enteredemail === "vinaysunkara20@gmail.com"){
     q.textContent = "Reset link sent to your email.";

  }else{
    q.textContent = "Email not found.";
  }

})
