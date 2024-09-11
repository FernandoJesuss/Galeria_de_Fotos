//Menu Hanburger

document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('nav-menu').classList.toggle('active');
});

//cards abaixo do video destaque

new Swiper('.card-wrapper', {

    loop: true,
    spaceBetween: 30,

    // pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },

        0: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        },

    }

});

//Galeria de Fotos Noticias

function openModal(title, description, imageUrl, link) {
    document.getElementById('modal-image').src = imageUrl;
    document.getElementById('modal-link').href = link;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

// Fecha o modal ao clicar fora dele

window.onclick = function (event) {
    if (event.target == document.getElementById('myModal')) {
        closeModal();
    }
}

// Modal galerry-photo Campo

const modal = document.getElementById("myModalPhoto");
const modalImg = document.getElementById("modalImagePhoto");
const captionText = document.getElementById("captionPhoto");
const additionalText = document.getElementById("additionalText");
const thumbnails = document.querySelectorAll(".thumbnail");
const span = document.getElementsByClassName("close-photo")[0];

thumbnails.forEach(thumbnail => {
    thumbnail.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        additionalText.innerHTML = this.getAttribute("data-text");
    }
});

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//Galeria de videos footer

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;

function showSlide(index) {
    const carouselInner = document.getElementById('carouselInner');
    currentIndex = (index + totalSlides) % totalSlides;
    carouselInner.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Passar automaticamente a cada 3 segundos
// setInterval(nextSlide, 3000);


//botão ao topo

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
