let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec => {

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top => offset && top <offset + height)
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header .navbar a[href*='+id+']').classList.add('active');

    })

    })
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
    },
    loop: false, // Tắt chế độ loop
    // Hoặc thay đổi giá trị của slidesPerView và slidesPerGroup
    slidesPerView: 1, // Số slide hiển thị mỗi lần cuộn
    slidesPerGroup: 1, // Số slide được cuộn mỗi lần
});





var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false
  },
  loop: true,
  slidesPerView: 3, // Show 3 slides per view by default
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
          slidesPerView: 2,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  }
});


function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
    clearInterval(intervalId); // Clear the interval after the fade-out animation
}

function fadeOut() {
    intervalId = setInterval(loader, 3000); // Store the interval ID
}

window.onload = fadeOut;

// function loader() {
//     let loaderContainer = document.querySelector('.loader-container');
//     let loaderImage = document.querySelector('.loader-container img');

//     // Show loader image for a few seconds
//     loaderContainer.style.display = 'flex';
//     loaderImage.style.opacity = '1';

//     // Hide loader after a delay
//     setTimeout(function() {
//         loaderContainer.classList.add('fade-out');
//         loaderImage.style.opacity = '0';
//     }, 2000); // Adjust delay time as needed

//     clearInterval(intervalId); // Clear the interval after the fade-out animation
// }
