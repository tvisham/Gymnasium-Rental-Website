// Carousel functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function changeImage(direction) {
    // Update the current index based on the direction
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalImages; // Move forward and loop back to the first image
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Move backward and loop to the last image
    }

    // Select the carousel and apply a translateX to shift the images
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`; // Adjust the translation to show the next image
}

// Event listeners for the carousel navigation buttons
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

prevButton.addEventListener('click', () => changeImage('prev')); // Trigger prev function
nextButton.addEventListener('click', () => changeImage('next')); // Trigger next function

// JavaScript to toggle mobile menu
const hamburgerButton = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Events 
const buyTicketBtn = document.getElementById('buyTicketBtn');
const ticketPopup = document.getElementById('ticketPopup');
const closePopupBtn = document.getElementById('closePopupBtn');
const ticketForm = document.getElementById('ticketForm');

buyTicketBtn.addEventListener('click', function() {
    ticketPopup.style.display = 'flex';
});

closePopupBtn.addEventListener('click', function() {
    ticketPopup.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === ticketPopup) {
        ticketPopup.style.display = 'none';
    }
});

ticketForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const ticketCount = document.getElementById('ticketCount').value;
    
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Tickets: ${ticketCount}`);
    
    alert(`Ticket(s) for ${name} purchased successfully!`);
    
    ticketPopup.style.display = 'none';
});

// Contact Form
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting to the server

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventDate = document.getElementById('event-date').value;
    const message = document.getElementById('message').value;

    // Display an alert with the form information
    alert(`Thank you, ${name}! Your event booking request has been received.\n\nDetails:\nEmail: ${email}\nEvent Date: ${eventDate}\nMessage: ${message}`);

    contactForm.reset();
});


