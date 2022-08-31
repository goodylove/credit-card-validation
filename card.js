let inputNum1 = document.querySelector(".number1");
let inputNum2 = document.querySelector(".number2");
let inputNum3 = document.querySelector(".number3");
let inputNum4 = document.querySelector(".number4 ");
let numDisplay1 = document.querySelector(".numdisplay1");
let numDisplay2 = document.querySelector(".numdisplay2");
let numDisplay3 = document.querySelector(".numdisplay3");
let numDisplay4 = document.querySelector(".numdisplay4");
let cardImage = document.querySelector(".master-img");
let cardNameInput = document.querySelector(".name-card");
let frontCardHolder = document.querySelector(".card-name");
let cvvHolder = document.querySelector(".three-digit");
let cvvInput = document.querySelector(".cvv-input");
let front = document.querySelector(".front");
let back = document.querySelector(".back");
let allInput = document.querySelectorAll(".all-input");
let cardExpYear = document.querySelector("#card-expiration-year");
let cardExpMonth = document.querySelector("#card-expiration-month");
let month = document.querySelector(".mon");
let year = document.querySelector(".year");

let cardNumber = [];
let confirmNum;
let cardInput = document.querySelectorAll(".ccnum");
let isValidCard;

function validateCredit_card(value) {
  // accepts only DOMStringList, dashes or spaces;

  if (/[^0-9-\s]+/.test(value)) return false;
  // the luhn algorithm
  var nCheck = 0,
    nDigit = 0,
    bEven = false;
  value = value.replace(/\D/g, "");

  for (let n = value.length - 1; n >= 0; n--) {
    var cDigit = value.charAt(n),
      nDigit = parseInt(cDigit, 10);
    if (bEven) {
      if ((nDigit *= 2) > 9) {
        nDigit -= 9;
        // console.log(nDigit);
      }
    }
    nCheck += nDigit;
    bEven = !bEven;
  }
  return nCheck % 10 == 0;
}

function isMyCardNumValid() {
  let input1 = inputNum1.value;
  let input2 = inputNum2.value;
  let input3 = inputNum3.value;
  let input4 = inputNum4.value;
  if (
    input1.length >= 4 &&
    input2.length >= 4 &&
    input3.length >= 4 &&
    input4.length >= 4
  ) {
    cardInput.forEach((input) => {
      cardNumber.push(input.value);
    });
    confirmNum = cardNumber.join("");
    console.log(confirmNum);
  }
  if (confirmNum) {
    isValidCard = validateCredit_card(confirmNum);
    console.log(isValidCard);
  }
  cardNumber = [];
}

function showNumber(inputNum1, displayNum) {
  let num1;
  inputNum1.addEventListener("keyup", (e) => {
    try {
      showCardType();

      let value = e.target.value;
      num1 = value.toUpperCase();
      displayNum.textContent = num1;
      if (e.target.textLength === 4) {
        e.target.nextElementSibling.focus();
      }

      if (e.target.textLength <= 0) {
        e.target.previousElementSibling.focus();
      }
    } catch (error) {
      console.log(error);
    }
    isMyCardNumValid();

    if (isValidCard === false) {
      cardInput.forEach((input) => {
        input.style.border = "red 2px solid";
      });
    } else removeBorderStyleForInputs();
  });
}
showNumber(inputNum1, numDisplay1);
showNumber(inputNum2, numDisplay2);
showNumber(inputNum3, numDisplay3);
showNumber(inputNum4, numDisplay4);

function removeBorderStyleForInputs() {
  if (isValidCard) {
    cardInput.forEach((input) => {
      input.style.border = "none";
    });
  }
}

function isActivated(inputNum1, displayNum) {
  let num1;
  inputNum1.addEventListener("keyup", (e) => {
    try {
      showCardType();

      let value = e.target.value;
      num1 = value.toUpperCase();
      displayNum.textContent = num1;
    } catch (error) {
      console.log(error);
    }
  });
}

isActivated(cardNameInput, frontCardHolder);
isActivated(cvvInput, cvvHolder);
function cardDateMonth(cardExpYear, d) {
  let num;

  cardExpYear.addEventListener("change", () => {
    num = cardExpYear.value;
    d.textContent = num;
  });
}
cardDateMonth(cardExpYear, year);
cardDateMonth(cardExpMonth, month);

function showCardType() {
  let firstNumber = inputNum1.value;
  firstNumber = firstNumber.charAt(0);

  switch (firstNumber) {
    case "5":
      cardImage.src = "./img/mastercard.png";
      break;

    case "4":
      cardImage.src = "./img/visa.png";
      break;
    case "3":
      cardImage.src = "./img/verve.png";
      break;
    // case "":
    //   cardImage.src = "./img/mastercard.png";
    //   break;
    default:
      cardImage.src = "./img/mastercard.png";
      break;
  }
}
function showFrontCard() {
  front.style.transform = "rotateY(0deg)";
  back.style.transform = "rotateY(180deg)";
}
function showBackCard(params) {
  front.style.transform = "rotateY(180deg)";
  back.style.transform = "rotateY(0deg)";
}
cvvInput.addEventListener("focusin", showBackCard);
cvvInput.addEventListener("focusout", showFrontCard);

const sumbitButton = document.querySelector(".submit");

sumbitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (validateCredit_card(confirmNum) === false) {
    alert("invalid CARD number");
  } else {
    const foundAnEmptyInput = [...allInput].find((input) => {
      return input.value === "";
    });

    if (foundAnEmptyInput) {
      alert("fill the box");
    } else window.location.href = "./succes.html";
  }
  allInput.forEach((input) => {
    input.value = "";
  });
  cardExpYear.value = "";
  cardExpMonth.value = "";
  month.value = "";
  year.value = "";
  frontCardHolder.value = "";
  numDisplay1.value = "";
  numDisplay2.value = "";
  numDisplay3.value = "";
  numDisplay4.value = "";
});
