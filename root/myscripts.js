/* Toggles adding and removing the "vertical" class to horizontal when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "horizontal") {
      x.className += " vertical";
    } else {
      x.className = "horizontal";
    }

  }


  const constraints = {
    name: {
      presence: { allowEmpty: false }
    },
    email: {
      presence: { allowEmpty: false },
      email: true
    },
    message: {
      presence: { allowEmpty: false }
    }
  };

  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(event) {
    const formValues = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      message: form.elements.message.value
    };

    const errors = validate(formValues, constraints);
    if (errors) {
      event.preventDefault();
      const errorMessage = Object.values(errors)
        .map(function(fieldValues) {
          return fieldValues.join(', ');
        })
        .join("\n");

      alert(errorMessage);
    }
  }, false);
  
