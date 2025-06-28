addEventListener("DOMContentLoaded", (event) => {


// Get Elements
    const formInfo = document.getElementById("contact-form");
    const submitBtn = document.getElementById('submit-btn');

// Listen For The Form Submit
    formInfo.addEventListener("submit", function (event) {
        event.preventDefault();
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;

        fetch("/contact", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: name,
        email: email,
        message: message,
    }),
})
.then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
})
.then(data => {
    console.log(data);
    const statusMessage = document.getElementById("status-message");
    statusMessage.textContent = data.message;
    statusMessage.style.color = "green";
    formInfo.reset();
})
.catch(error => {
    console.error("Error:", error);
    const statusMessage = document.getElementById("status-message");
    statusMessage.textContent = "Something went wrong!";
    statusMessage.style.color = "red";
        });
    });
});