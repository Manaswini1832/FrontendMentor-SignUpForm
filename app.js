const emptyRegex = /^$/;

const btn = document.getElementsByClassName("inForm-button")[0];
const fname = document.getElementsByClassName("fname")[0];
const lname = document.getElementsByClassName("lname")[0];
const email = document.getElementsByClassName("email")[0];
const password = document.getElementsByClassName("input-password")[0];

const fnameError = document.getElementsByClassName("no-fname")[0];
const lnameError = document.getElementsByClassName("no-lname")[0];
const emailRegexError = document.getElementsByClassName("email-regex-error")[0];
const passwordError = document.getElementsByClassName("no-password")[0];

btn.addEventListener("click", () => {
  //Validation of user entered inputs using regex
  validateEmail();
  checkEmptyFname();
  checkEmptyLname();
  checkEmptyPword();
});

function checkEmptyFname() {
  if (emptyRegex.test(fname.value)) {
    fnameError.classList.remove("none-display");
    fname.classList.add("error-bg");
    fname.classList.add("red-border");
  } else {
    fnameError.classList.add("none-display");
    fname.classList.remove("error-bg");
    fname.classList.remove("red-border");
  }
}

function checkEmptyLname() {
  if (emptyRegex.test(lname.value)) {
    lnameError.classList.remove("none-display");
    lname.classList.add("error-bg");
    lname.classList.add("red-border");
  } else {
    lnameError.classList.add("none-display");
    lname.classList.remove("error-bg");
    lname.classList.remove("red-border");
  }
}

function validateEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    emailRegexError.classList.add("none-display");
    email.classList.remove("error-bg");
    email.classList.remove("red-border");
  } else {
    emailRegexError.classList.remove("none-display");
    email.classList.add("error-bg");
    email.classList.add("red-border");
  }
}

function checkEmptyPword() {
  if (emptyRegex.test(password.value)) {
    passwordError.classList.remove("none-display");
    password.classList.add("error-bg");
    password.classList.add("red-border");
  } else {
    passwordError.classList.add("none-display");
    password.classList.remove("error-bg");
    password.classList.add("red-border");
  }
}
