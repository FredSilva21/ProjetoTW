let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Muda de imagem a cada 5s
}

function animateContacts(){
  document.getElementById("contactAnimation").style.display = "block";
  document.getElementById("contactAnimation").style.animation = "showContacts 2s ease-in-out";
  setTimeout(function(){document.getElementById("contactAnimation").style.display = "none"}, 5000);
}