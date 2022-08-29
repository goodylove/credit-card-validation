const personalName = document.getElementById("name");
const personalLastName = document.getElementById("l-name");
const email = document.getElementById("email");
const emailOne = document.getElementById("email1");
const national = document.getElementById("select-country");

const countryCode = document.getElementById("country-code");
const telPhone = document.getElementById("tel");
const zipCode = document.getElementById("zip");
const dateOfBirth = document.getElementById("dob");
const personalBtn = document.getElementById("btn");
const allInput = document.querySelectorAll("input");

const pattern = {
  name: /^[a-z]{3,9}$/i,
  "l-name": /^[a-z]{3,19}$/i,
  tel: /^[0-9]{11}$/i,
  "country-code": /^\+[0-9]{1,3}$/i,
  zip: /^[0-9]{5,7}$/i,
};

let errors = {};
// console.log(errors);

allInput.forEach((input) => {
  input.addEventListener("keyup", () => {
    if (input.getAttribute("type") === "email") {
      validateEmail();
      validateConfirmEmail();
    } else removeBorderStyleForEmailInputs();

    if (!(input.getAttribute("type") === "email")) validateInput(input);
  });
});

function validateInput(input) {
  const regex = pattern[input.id];
  const isValid = regex.test(input.value);

  if (isValid) {
    input.style.border = "1px solid green";
    Reflect.deleteProperty(errors, input.id);
  } else {
    input.style.border = "2px solid red";
    errors[input.id] = true;
  }

  console.log(errors);
}

personalBtn.addEventListener("click", (e) => {
  storeItems();
});

function storeItems() {
  const storeCon = {
    nationalValue: national.value,
    firstNameValue: personalName.value,
    lastNameValue: personalLastName.value,
    emailValue: email.value,
    emailOneValue: emailOne.value,
    countryCodeValue: countryCode.value,
    telPhoneValue: telPhone.value,
    zipCodeValue: zipCode.value,
    dobValue: dateOfBirth.value,
  };
  localStorage.setItem("inkey", JSON.stringify(storeCon));
}
const emailIsValid = (email) => {
  const reg = /^([\w_]{6,20})@([a-z]{1,6})\.([a-z]{1,4})$/i;
  return reg.test(email);
};
function errorSmS(email, message) {
  const inputControl = email.parentElement;

  const errorDisplay = inputControl.querySelector("#error");
  errorDisplay.innerHTML = message;
}

function successSmS(email) {
  const inputControl = email.parentElement;
  const errorDisplay = inputControl.querySelector("#error");
  errorDisplay.innerHTML = "";
}

const validateEmail = () => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    email.style.border = "2px solid red";
    errors.email = true;
    errorSmS(email, "email is reguired");
  } else if (!emailIsValid(emailValue)) {
    errors.email = true;
    email.style.border = "2px solid red";
    errorSmS(email, "valid email is required");
  } else {
    Reflect.deleteProperty(errors, "email");
    email.style.border = "2px solid green";
    successSmS(email);
  }
};

function validateConfirmEmail() {
  console.log("ConfirmE");

  const emailValue = email.value.trim();
  const confirmEmailValue = emailOne.value.trim();
  const error1 = document.querySelector("#error1");
  if (emailValue !== confirmEmailValue) {
    error1.textContent = "didnt match";
    emailOne.style.border = "2px solid red";
    errors.email1 = true;
  } else if (emailValue === confirmEmailValue) {
    error1.textContent = "";
    emailOne.style.border = "2px solid green";
    Reflect.deleteProperty(errors, "email1");
  }
}

function removeBorderStyleForEmailInputs() {
  allInput.forEach((input) => {
    if (input.getAttribute("type") === "email") input.style.border = "none";
  });
}

document.querySelector(".btn-wrapper a").addEventListener("click", (e) => {
  e.preventDefault();
  isEmptyInput();
  //   allInput.forEach((input)=>{
  // if(input.value === ""){

  // }
  //   })

  // if (Reflect.ownKeys(errors).length == 0)
  //   window.location.href = "./index2.html";
  // else alert("Fix all errors");
});

function isEmptyInput() {
  allInput.forEach((input) => {
    if (input.value === "") {
      window.location.href = "";
      input.style.border = "1px solid red";
      errors[input.id] = true;
    } else if (Reflect.ownKeys(errors).length == 0)
      window.location.href = "./index2.html";
    else alert("fix all errors");
  });
}
