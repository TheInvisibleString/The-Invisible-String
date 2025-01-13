// Function to toggle event descriptions
function toggleDescription(id) {
  const description = document.getElementById(`event-${id}`);
  if (description) {
    description.style.display =
      description.style.display === "none" ? "block" : "none";
  }
}

// Lightbox functionality
function openLightbox(imageSrc) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (lightbox && lightboxImg) {
    lightbox.style.display = "flex"; // Use 'flex' to align center
    lightboxImg.src = imageSrc;
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.style.display = "none";
  }
}

// Password protection function
function checkPassword() {
  const correctPassword = "17"; // Set your password here
  let userPassword = prompt("Enter the password:");

  // Debugging: Log the entered password
  console.log("User entered password:", userPassword);

  if (userPassword === correctPassword) {
    document.querySelector(".album-container").style.display = "flex";
    document.getElementById("password-prompt").style.display = "none";
  } else {
    alert("Incorrect password! Please try again.");
    checkPassword(); // Ask for password again without reloading
  }
}

// Call password function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Hide the album container initially
  document.querySelector(".album-container").style.display = "none";
  document.getElementById("password-prompt").style.display = "block";

  // Immediately check password once the DOM is ready
  checkPassword();
});
