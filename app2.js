const billName = document.getElementById("first-name");
const billLastName = document.getElementById("last-name");
const resident = document.getElementById("resident");
const contact = document.getElementById("contact");
const postalCode = document.getElementById("postal-code");
const phoneNum = document.getElementById("phone-number");
const billBtn = document.getElementById("btn1");

billBtn.addEventListener("click", (e) => {
  storeItems2();
});
function storeItems2() {
  const storeContent = {
    firstNameValue: billName.value,
    lastNameValue: billLastName.value,
    contactValue: contact.value,
    residentValue: resident.value,
    postValue: postalCode.value,
    phoneNumValue: phoneNum.value,
  };
  localStorage.setItem("billkey", JSON.stringify(storeContent));
}
// equality;
// asyn js (how js works)
// error handling
// ES6syntax = spread operator ,destruct
// arraymethod
