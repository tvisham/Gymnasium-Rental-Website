// JavaScript to toggle mobile menu
const hamburgerButton = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});


const buyTicketBtn = document.getElementById('buyTicketBtn');
const ticketPopup = document.getElementById('ticketPopup');
const closePopupBtn = document.getElementById('closePopupBtn');
const ticketForm = document.getElementById('ticketForm');

// Open the popup when "Buy Tickets" button is clicked
buyTicketBtn.addEventListener('click', function() {
    console.log("Buy Tickets button clicked!");
    ticketPopup.style.display = 'flex';
});

// Close the popup when the close button (×) is clicked
closePopupBtn.addEventListener('click', function() {
    ticketPopup.style.display = 'none';
});

// Close the popup when clicking outside the popup
window.addEventListener('click', function(event) {
    if (event.target === ticketPopup) {
        ticketPopup.style.display = 'none';
    }
});

// Handle form submission
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
