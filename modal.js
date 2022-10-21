function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelectorAll(".close");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const allLocation = document.querySelectorAll("#allLocation .checkbox-input");
const city = document.getElementById("allLocation");
const checkbox1 = document.getElementById("checkbox1");
const form = document.getElementById("form");
const confirm_modal = document.querySelector(".confirm-modal");
const confirmModal = document.getElementById("confirmModal");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

function checkFirstName() {
  const regFirstName = /^[a-zA-Z]+([- ])*[a-zA-Z]+$/;
  if (firstName.value.trim() == "" || !firstName.value.match(regFirstName)) {
    firstName.parentElement.setAttribute("data-error-visible", "true");
    firstName.style.border = "2px solid red";
    return false;
  }
  else {
    firstName.parentElement.setAttribute("data-error-visible", "false");
    firstName.style.border = "2px solid green";
    return true;
  }
}
function checkLastName() {
  const regLastName = /^[a-zA-Z]+([- ])*[a-zA-Z]+$/;
  if (lastName.value.trim() == "" || !lastName.value.match(regLastName)) {
    lastName.parentElement.setAttribute("data-error-visible", "true");
    lastName.style.border = "2px solid red";
    return false;
  }
  else {
    lastName.parentElement.setAttribute("data-error-visible", "false");
    lastName.style.border = "2px solid green";
    return true;
  }
}

function checkEmail() {
  const regEmailName = /^[a-zA-Z]+[@][a-z]+[.][a-z]{2,5}$/;
  if (email.value.trim() == "" || !email.value.match(regEmailName)) {
    email.parentElement.setAttribute("data-error-visible", "true");
    email.style.border = "2px solid red";
    return false;
  }
  else {
    email.parentElement.setAttribute("data-error-visible", "false");
    email.style.border = "2px solid green";
    return true;
  }
}

function checkBirthdate() {
  const regBirthdate = /^\d{4}[-](((0)[1-9])|((1)[0-2]))[-]([1-2][0-9]|(3)[0-1]|(0)[1-9])$/;
  if (birthdate.value.trim() == "" || !birthdate.value.match(regBirthdate)) {
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    birthdate.style.border = "2px solid red";
    return false;
  }
  else {
    birthdate.parentElement.setAttribute("data-error-visible", "false");
    birthdate.style.border = "2px solid green";
    return true;
  }
}

function checkQuantity() {
  const regQuantity = /^[0-9]{0,2}$/;
  if (quantity.value.trim() == "" || !quantity.value.match(regQuantity)) {
    quantity.parentElement.setAttribute("data-error-visible", "true");
    quantity.style.border = "2px solid red";
    return false;
  }
  else {
    quantity.parentElement.setAttribute("data-error-visible", "false");
    quantity.style.border = "2px solid green";
    return true;
  }
}

function checkCity() {
  city.setAttribute("data-error-visible", "true");
  for (let i = 0; i < allLocation.length; i++) {
    if (allLocation[i].checked) {
      city.setAttribute("data-error-visible", "false");
      return true;
    }
  }
  return false;
}

function checkCGU() {
  if (checkbox1.checked === false) {
    checkbox1.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    checkbox1.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

function validate() {
  if (checkFirstName() && checkLastName() && checkQuantity() && checkBirthdate() && checkEmail() && checkCity() && checkCGU()) {
    return true;
  }
  else {
    return false;
  }
}

function errorValidation() {
  checkFirstName();
  checkLastName();
  checkQuantity();
  checkBirthdate();
  checkEmail();
  checkCity();
  checkCGU();
}

firstName.addEventListener("change", checkFirstName);
lastName.addEventListener("change", checkLastName);
email.addEventListener("change", checkEmail);
birthdate.addEventListener("change", checkBirthdate);
quantity.addEventListener("change", checkQuantity);
city.addEventListener("change", checkCity);
checkbox1.addEventListener("change", checkCGU);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validate() === true) {
    confirm_modal.style.display = "block";
    modalbg.style.display = "none";
    form.reset();
  }
  else{
    errorValidation();
  }
})
confirmModal.addEventListener("click", function (e) {
  e.preventDefault();
  confirm_modal.style.display = "none";
})

