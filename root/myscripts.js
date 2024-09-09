/* Toggles adding and removing the "vertical" class to horizontal when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "horizontal") {
      x.className += " vertical";
    } else {
      x.className = "horizontal";
    }

  }


/* SLIDESHOW */
  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active2", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active2";
}

/* FORM */
  const form = document.getElementById('form');
  const result = document.getElementById('result');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait..."
  
      fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
              body: json
          })
          .then(async (response) => {
              let json = await response.json();
              if (response.status == 200) {
                  result.innerHTML = "Form submitted successfully";
              } else {
                  console.log(response);
                  result.innerHTML = json.message;
              }
          })
          .catch(error => {
              console.log(error);
              result.innerHTML = "Something went wrong!";
          })
          .then(function() {
              form.reset();
              setTimeout(() => {
                  result.style.display = "none";
              }, 3000);
          });
  });
