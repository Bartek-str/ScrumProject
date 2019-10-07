document.addEventListener('DOMContentLoaded', function () {
   var arrowLeft = document.getElementById('arrowLeft');
   console.log(arrowLeft);
   var arrowRight = document.getElementById('arrowRight');
   console.log(arrowRight);
   var slides = document.querySelectorAll('.carousel .slide');
   console.log(slides);
   var idSlide = 0;

   slides[idSlide].style.display = 'block';


   arrowLeft.addEventListener('click', prevP);
   arrowRight.addEventListener('click', nextP);

   function prevP(event) {
       slides[idSlide].style.display = 'none';
       idSlide--;
       if (idSlide < 0) {
           idSlide = slides.length - 1;
           slides[idSlide].style.display = 'block';
       }
       slides[idSlide].style.display = 'block';
   }

   function nextP(event) {
       slides[idSlide].style.display = 'none';
       idSlide++;
       if (idSlide >= slides.length) {
           idSlide = 0;
           slides[idSlide].style.display = 'block';
       }
       else slides[idSlide].style.display = 'block';
   }
});