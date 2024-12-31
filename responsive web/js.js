// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) currentSlide = 0;
    if (index < 0) currentSlide = totalSlides - 1;
    
    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');
    
    // Show the current slide
    slides[currentSlide].style.display = 'block';
}

// Auto-slide function
function autoSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

// Initial display
showSlide(currentSlide);

// Change slide every 5 seconds
setInterval(autoSlide, 5000);

// Function to open the modal
function openModal(name, image, price, material, description) {
    // Set modal content dynamically
    document.getElementById('modal-name').innerText = name;
    document.getElementById('modal-image').src = image;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('modal-material').innerText = material;
    document.getElementById('modal-description').innerText = description;
    
    // Show the modal by removing the 'hidden' class
    document.getElementById('modal').classList.remove('hidden');
}

// Function to close the modal
function closeModal() {
    // Hide the modal by adding the 'hidden' class
    document.getElementById('modal').classList.add('hidden');
}


// Navbar sticky behavior (optional)
window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

