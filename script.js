// Select the navbar and menu button
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

// Toggle the navbar visibility on menu button click
menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times'); // Change the button icon
    navbar.classList.toggle('active'); // Toggle the active class on the navbar
}

// Remove the active class when scrolling
window.onscroll = () => {
    menuBtn.classList.remove('fa-times'); // Reset button icon
    navbar.classList.remove('active'); // Hide navbar
}

// Function to navigate to the services overview section
function scrollToServices() {
    const servicesSection = document.getElementById('services-overview'); // Ensure this ID exists in your HTML
    if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }
}

// Initializing Swiper for the Home Slider
var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});

// Function to open the modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block"; // Show the modal
    }
}

// Function to close the modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none"; // Hide the modal
    }
}

// Close modal when clicked outside of it
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            closeModal(modals[i].id); // Close the modal if clicked outside
        }
    }
}

// Function to update additional questions based on selected donation type
function updateDonationQuestions() {
    const donationType = document.getElementById('donation_type').value;
    const additionalQuestions = document.getElementById('additional-questions');
    
    // Show the additional questions section
    additionalQuestions.style.display = 'block';

    // Hide all specific question sections initially
    document.getElementById('clothing-questions').style.display = 'none';
    document.getElementById('food-questions').style.display = 'none';
    document.getElementById('materials-questions').style.display = 'none';

    // Show specific questions based on the selected donation type
    switch (donationType) {
        case 'clothing':
            document.getElementById('clothing-questions').style.display = 'block';
            break;
        case 'food':
            document.getElementById('food-questions').style.display = 'block';
            break;
        case 'materials':
            document.getElementById('materials-questions').style.display = 'block';
            break;
        case 'money':
            // If 'money' is selected, you can choose to show nothing or specific info
            additionalQuestions.style.display = 'none'; // Hide additional questions for money
            break;
        default:
            additionalQuestions.style.display = 'none'; // Hide if no valid type is selected
            break;
    }
}

// Optional: You can call this function on page load to ensure the form is in the correct state
document.addEventListener('DOMContentLoaded', function() {
    updateDonationQuestions(); // Initialize the form state
});