

$(document).ready(function () {



$('body').scrollspy({target:".navbar-nav",offset:50});

    // products

    $('#product-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed:1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })

    // testimonial 

    $('#testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed:1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
})



// sceen theem

const skinThemes = document.querySelector(".skin-themes");
const themesIcon = document.querySelector(".themes-icon i");

themesIcon.addEventListener('click',function(){
    skinThemes.classList.toggle('open');
})


const skinColor = document.querySelectorAll(".themes ul li");
const skinColorlink = document.querySelector(".skin-color-link");

function changeScenColor (name){
  skinColorlink.href = `css/skins/${name}.css `;

}
