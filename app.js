const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');
        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }

            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;

            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });

}
navSlide();

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//image gallery modals (when image is clicked, the full sized image will appear)
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery-item .image img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        //dynamic change text and image 
        const originalSrc = preview.getAttribute('data-original');
        original.src = `./img/photography/${originalSrc}`;
        const altText = preview.alt;
        caption.textContent = altText;

    })
})

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
    }
})