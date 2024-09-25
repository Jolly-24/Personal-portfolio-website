var viewDetails = document.querySelectorAll(".details");
var info = document.querySelectorAll(".proj-info");
var closeButtons = document.querySelectorAll(".close-info"); // Select all close buttons

// Loop through each "details" button
for (var i = 0; i < viewDetails.length; i++) {
  (function(index) {
    viewDetails[index].addEventListener("click", function() {
      // Hide all other info boxes first
      info.forEach(function(detail) {
        detail.style.left = '-500px';
      });
      // Show the clicked info box
      info[index].style.left = '0';
    });
  })(i);
}

// Loop through each close button and add event listeners
closeButtons.forEach(function(button, index) {
  button.addEventListener("click", function() {
    // Hide the corresponding info box
    info[index].style.left = '-555px';
  });
});
