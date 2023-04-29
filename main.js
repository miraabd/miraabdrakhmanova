const infoBtn = document.getElementById('info-btn');
const infoWindow = document.getElementById('info-window');
const closeButton = document.querySelector(".close-button");


infoBtn.addEventListener('click', function() {
  if (infoWindow.style.display === 'block') {
    infoWindow.style.display = 'none';
  } else {
    infoWindow.style.display = 'block';
    infoWindow.animate([
      { transform: 'scale(0.8)', opacity: 0 },
      { transform: 'scale(1)', opacity: 1 }
    ], {
      duration: 500,
      easing: 'ease-out'
    });
  }
});

closeButton.addEventListener("click", function() {
    infoWindow.style.display = "none";
  });

