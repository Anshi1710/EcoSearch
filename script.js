document.getElementById("waitlist-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;

    // Using Formspree for email submission
    fetch("https://formspree.io/f/xldjggke", {  // Replace with your actual Formspree ID
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email })
    })
    .then(response => {
        if (response.ok) {
            alert("You've been added to the waitlist!");
            document.getElementById("waitlist-form").reset();
        } else {
            alert("Error joining the waitlist. Try again.");
        }
    });
});
