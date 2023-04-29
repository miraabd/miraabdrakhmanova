// Get all the image elements
const images = document.querySelectorAll(".gallery img");

// Get the modal window and its contents
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");


// Add a click event listener to each image
images.forEach((image) => {
    image.addEventListener("click", () => {
      // Set the source of the modal image to the clicked image's source
      modalImage.src = image.src;
      // Show the modal window
      modal.style.display = "block";
    });
  });
  
  // Add a click event listener to the close button
  closeModal.addEventListener("click", () => {
    // Hide the modal window
    modal.style.display = "none";
  });
  