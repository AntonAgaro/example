document.addEventListener('DOMContentLoaded', () => {
    //Выплывающее меню
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });   
    
    //Slider
    const slides = document.querySelectorAll('.reviews__slider-wrapper_client'),
          prev = document.querySelector('.reviews__slider-prev'),
          next = document.querySelector('.reviews__slider-next');
    let slideIndex = 1;
    
    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = "none");

        slides[slideIndex - 1].style.display = "block";
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });
    next.addEventListener('click', () => {
        plusSlides(1);
    });
          
});