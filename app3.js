function getPersonalItems() {
  const getItem = JSON.parse(localStorage.getItem("inkey"));
  console.log(getItem);

  const {
    nationalValue,
    firstNameValue,
    lastNameValue,
    emailValue,
    // emailOneValue,
    countryCodeValue,
    telPhoneValue,
    zipCodeValue,
    dobValue,
  } = getItem;

  const personalName = document.getElementById("name-name");
  const personalLastName = document.getElementById("name1");
  const email = document.getElementById("emailt");
  // const emailOne = document.getElementById("email1");
  const countryCode = document.getElementById("country-code1");
  const telPhone = document.querySelector(".phone-number");
  const zipCode = document.getElementById("zip-code1");
  const dateOfBirth = document.getElementById("dob1");

  personalName.innerHTML = `${firstNameValue}`;
  personalLastName.innerHTML = `${lastNameValue}`;
  email.innerHTML = `${emailValue}`;
  // emailOne.innerHTML = `${emailOneValue}`;
  countryCode.innerHTML = `${countryCodeValue}`;
  telPhone.innerHTML = `${telPhoneValue}`;
  dateOfBirth.innerHTML = `${dobValue}`;
  zipCode.innerHTML = `${zipCodeValue}`;
}
getPersonalItems();

function getBillingDetails() {
  const billName = document.getElementById("first-name1");
  const billLastName = document.getElementById("last-name1");
  const resident = document.getElementById("resident1");
  const contact = document.getElementById("contact1");
  const postalCode = document.getElementById("postal-code1");
  const phoneNum = document.getElementById("number");
  const got = JSON.parse(localStorage.getItem("billkey"));
  console.log(got);
  const {
    firstNameValue,
    lastNameValue,
    contactValue,
    phoneNumValue,
    postValue,
    residentValue,
  } = got;
  billName.innerHTML = `${firstNameValue}`;
  billLastName.innerHTML = `${lastNameValue}`;
  contact.innerHTML = `${contactValue}`;
  resident.innerHTML = `${residentValue}`;
  postalCode.innerHTML = `${postValue}`;
  phoneNum.innerHTML = `${phoneNumValue}`;
}
getBillingDetails();

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  window.location.href = "./card.html";
});
