
const loader = document.querySelector('.loader-row');
const main = document.querySelector('.main');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => main.style.opacity = 1, 50);
    }, 3000);
}

init();


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
