function sendEmail() {
    const email = document.getElementById("email").textContent;

    window.location.href = "mailto:" + email;
}

function callPhone() {
    const phone = document.getElementById("phone").textContent;

    window.location.href = "tel:" + phone.replace(/\s/g, "");
}
