document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "your_server_script_to_handle_form_submission.php"); // Replace with your server-side script
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
            if (xhr.status === 200) {
                alert("Message sent successfully!");
                contactForm.reset();
            } else {
                alert("Failed to send message. Please try again later.");
            }
        };
        xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
    });
});

let currentTestimonyIndex = 0;
const testimonies = document.querySelectorAll(".testimony");
const displayDurations = [3000, 5000, 5000, 7000]; // Display durations for testimonies
let displayDurationIndex = 0;

function showNextTestimony() {
    // Hide all testimonies
    testimonies.forEach((testimony) => {
        testimony.style.display = "none";
    });

    // Show the next testimony
    testimonies[currentTestimonyIndex].style.display = "block";

    // Move to the next testimony or loop back to the beginning
    currentTestimonyIndex = (currentTestimonyIndex + 1) % testimonies.length;

    // Update display duration index
    displayDurationIndex = (displayDurationIndex + 1) % displayDurations.length;

    setTimeout(showNextTestimony, displayDurations[displayDurationIndex]);
}

// Start the show
showNextTestimony();
