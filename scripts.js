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
  const userPassword = prompt("Enter the password:");

  // Debugging: Log the entered password
  console.log("User entered password:", userPassword);

  if (userPassword === correctPassword) {
    document.querySelector(".album-container").style.display = "flex";
    document.getElementById("password-prompt").style.display = "none";
  } else {
    alert("Incorrect password! Redirecting...");
    window.location.reload(); // Redirect to another page on incorrect password
  }
}

// Call password function when the page loads
window.onload = function () {
  document.querySelector(".album-container").style.display = "none";
  document.getElementById("password-prompt").style.display = "block";
  checkPassword();
};
