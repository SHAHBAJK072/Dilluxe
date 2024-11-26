function openLightbox() {
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function showImage(src) {
    document.getElementById("lightbox-image").src = src;
}




var swiper = new Swiper(".slider", {
    slidesPerView: 3    ,
    spaceBetween: 24,
    loop: true,

    
    
    pagination: {
    el: ".fdots",
    clickable: true,
    },
    navigation: {
    nextEl: ".next",
    prevEl: ".prev",
    },
    breakpoints: {
       360: {
            slidesPerView: 1, // 2 testimonials
            spaceBetween: 30, // Space between slides
          },
        // Screen width 992px to 1199px ke liye
        992: {
          slidesPerView: 2, // 2 testimonials
          spaceBetween: 30, // Space between slides
        },
        1200: {
          slidesPerView: 3, // Default wapas aa jayega for larger screens
          spaceBetween: 24,
        }
      }
    
})


  