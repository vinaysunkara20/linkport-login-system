let x = document.getElementById("loginform")
let y = document.getElementById("username")
let t = document.getElementById("password")
let z = document.getElementById("errorMessage")

x.addEventListener("submit", function(){
    event.preventDefault(); 

      let enteredUsername = y.value.trim();
      let enteredPassword = t.value.trim()

      if(enteredUsername === "divya_xo" && enteredPassword === "divya2024"){

        alert("Login success")

          window.location.href = "index2.html";

        
      }else if(enteredUsername === "vinay_01" && enteredPassword === "vinay123"){

        alert("Login success")

          window.location.href = "index2.html";
        
      }else if(enteredUsername === "teja" && enteredPassword === "teja321"){

        alert("Login success")

          window.location.href = "index2.html";

          
      }else if(enteredUsername === "revanth_007" && enteredPassword === "rev@456" ){

        alert("Login success")

          window.location.href = "index2.html";

          
      }else if(enteredUsername === "prasad_rx" && enteredPassword === "pras789"){

        alert("Login success")

          window.location.href = "index2.html";

          
      }else if(enteredUsername === "ashish_a1" && enteredPassword === "ash@007"){

        alert("Login success")

        window.location.href = "index2.html";
      }else{

        alert("Wrong username or Wrong Password")
      }
        


})
