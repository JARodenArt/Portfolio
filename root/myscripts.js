/* Toggles adding and removing the "vertical" class to horizontal when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "horizontal") {
      x.className += " vertical";
    } else {
      x.className = "horizontal";
    }

  }
  
