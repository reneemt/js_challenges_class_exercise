function challenge1(checkbox) {
  // Get the email div element
  const emailDiv = document.getElementById("emailDiv");
  
  // Show or hide the email field based on checkbox state
  if (checkbox.checked) {
    emailDiv.style.display = "block";
  } else {
    emailDiv.style.display = "none";
  }
}

window.onload = function() {
  if (document.getElementById("emailDiv")) {
    document.getElementById("emailDiv").style.display = "none";
  }
  
  const sameAddressCheckbox = document.getElementById("sameAddress");
  if (sameAddressCheckbox) {
    sameAddressCheckbox.addEventListener("click", function() {
      const billingAddress = document.getElementById("bill");
      const homeAddress = document.getElementById("home");
      
      if (this.checked) {
        homeAddress.value = billingAddress.value;
        // Disable home address field
        homeAddress.disabled = true;
      } else {
        // Enable home address field
        homeAddress.disabled = false;
      }
    });
  }
  
  // For Challenge 5: Add event listeners to thumbnail images
  const thumbnails = document.getElementsByClassName("thumbnail");
  if (thumbnails.length > 0) {
    const display = document.getElementById("display");
    
    for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener("mouseover", function() {
        display.innerHTML = "<img src='" + this.src + "' alt='" + this.alt + "'><p>" + this.alt + "</p>";
      });
      
      thumbnails[i].addEventListener("focus", function() {
        display.innerHTML = "<img src='" + this.src + "' alt='" + this.alt + "'><p>" + this.alt + "</p>";
      });
      
      thumbnails[i].addEventListener("mouseout", function() {
        display.innerHTML = "Hover over an image below to display the image and the alt text.";
      });
      
      thumbnails[i].addEventListener("blur", function() {
        display.innerHTML = "Hover over an image below to display the image and the alt text.";
      });
    }
  }
};

// Challenge 3: Validate that both radio button groups have a selection
function challenge3() {
  // Get all checked radio buttons for standing
  const standingChecked = document.querySelector('input[name="standing"]:checked');
  
  const gradDateChecked = document.querySelector('input[name="gradDate"]:checked');

  if (!standingChecked || !gradDateChecked) {
    alert("Please select both your current class standing and anticipated graduation date.");
    return false; // Prevent form submission
  }
  
  return true; // Allow form submission
}
 