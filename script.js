// Display current time in milliseconds
const timeElement = document.getElementById("time");

function updateTime() {
  timeElement.textContent = Date.now();
}

// Initialize once and optionally update every second
updateTime();
setInterval(updateTime, 1000);

// FOR CONTACT
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const success = document.getElementById("success");

  const errors = {
    name: document.getElementById("error-name"),
    email: document.getElementById("error-email"),
    subject: document.getElementById("error-subject"),
    message: document.getElementById("error-message")
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    Object.values(errors).forEach(el => (el.textContent = ""));
    success.hidden = true;

    if (name.value.trim() === "") {
      errors.name.textContent = "Full name is required.";
      valid = false;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value)) {
      errors.email.textContent = "Please enter a valid email address.";
      valid = false;
    }

    if (subject.value.trim() === "") {
      errors.subject.textContent = "Subject is required.";
      valid = false;
    }

    if (message.value.trim().length < 10) {
      errors.message.textContent = "Message must be at least 10 characters.";
      valid = false;
    }

    if (valid) {
      form.reset();
      success.hidden = false;
    }
  });
});
