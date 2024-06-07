/* Toggles adding and removing the "vertical" class to horizontal when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "horizontal") {
      x.className += " vertical";
    } else {
      x.className = "horizontal";
    }

  }


function sendMail(){
  let params = {
    from_name : document.getElementById("from_name").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
  }

  emailjs.send("service_pc36k5i","template_bfyie4a", params).then(function (res){
    alert("Success! " + res.status);
  })
}

const form =
document.getElementById("myform");
form.addEventListener("submit", sendMail);
  
