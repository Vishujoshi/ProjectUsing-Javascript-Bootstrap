const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

// Add event listener
closedFace.addEventListener('click', () => {
  if (openFace.classList.contains('open')) {
    openFace.classList.add('active');
    closedFace.classList.remove('active');
    document.querySelector("h1").innerHTML = "***!BOOO!***";
  }
});

openFace.addEventListener('click', () => {
  if (closedFace.classList.contains('closed')) {
    closedFace.classList.add('active');
    openFace.classList.remove('active');
    document.querySelector("h1").innerHTML = "***PEEKA***";
  }
});
document.querySelector("h1")