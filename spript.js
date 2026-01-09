function scrollToForm() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("message").innerText =
        "Rahmat! Tez orada siz bilan bog‘lanamiz.";
});
