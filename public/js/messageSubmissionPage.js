const form = document.getElementById("form");
const title = document.getElementById("title");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault();
  }
});

function markInvalidInput(element, message) {
  const inputControl = element.parentElement;
  const errorElement = inputControl.querySelector(".errorMsg");

  inputControl.classList.add("error");
  inputControl.classList.remove("success");
  errorElement.innerText = message;

  element.scrollIntoView({ behavior: "smooth", block: "center" });
}

function markValidInput(element) {
  const inputControl = element.parentElement;
  const errorElement = inputControl.querySelector(".errorMsg");

  inputControl.classList.add("success");
  inputControl.classList.remove("error");
  errorElement.innerText = "";
}

function validateInputs() {
  const titleValue = title.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let isTitleValid = true;
  let isEmailValid = true;
  let isMessageValid = true;

  // Title Validation
  if (titleValue === "") {
    markInvalidInput(title, "Title must not be empty");
    isTitleValid = false;
  } else if (titleValue.length > 10) {
    markInvalidInput(title, "Title must not exceed 10 characters");
    isTitleValid = false;
  } else {
    markValidInput(title);
  }

  // Email Validation
  if (emailValue === "") {
    markInvalidInput(email, "Email must not be empty");
    isEmailValid = false;
  } else if (!emailRegex.test(emailValue)) {
    markInvalidInput(email, "Enter a valid email (e.g., test@example.com)");
    isEmailValid = false;
  } else {
    markValidInput(email);
  }

  // Message Validation
  if (messageValue === "") {
    markInvalidInput(message, "Message must not be empty");
    isMessageValid = false;
  } else if (messageValue.length > 100) {
    markInvalidInput(message, "Message must not exceed 100 characters");
    isMessageValid = false;
  } else {
    markValidInput(message);
  }

  return isTitleValid && isEmailValid && isMessageValid;
}

// Keyboard Shortcuts: Alt + h → /home, Alt + v → /view
document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();

  if (event.altKey) {
    event.preventDefault();

    switch (key) {
      case "h":
        window.location.replace("/home");
        break;
      case "v":
        window.location.replace("/view");
        break;
    }
  }
});
