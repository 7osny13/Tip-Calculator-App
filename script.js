const bill = document.getElementById("billInput");
const tips = document.querySelectorAll(".tip-choices p");
const customTip = document.getElementById("customTip");
const peopleNumber = document.getElementById("peopleInput");
const tipAmountPerPerson = document.getElementById("tipamountperson");
const totalAmountPerPerson = document.getElementById("totalamountperson");
const resetBtn = document.getElementById("resetbtn");

function handleTipSelection() {
  return new Promise((resolve) => {
    tips.forEach((tipChoice) => {
      tipChoice.addEventListener("click", (e) => {
        const text = e.target.textContent;
        const percentage = parseFloat(text.replace("%", "")); // Remove % and convert to number
        resolve(percentage);
      });
    });

    customTip.addEventListener("change", () => {
      const value = parseFloat(customTip.value);
      if (!isNaN(value) && value >= 0) {
        resolve(value);
      }
    });
  });
}


function getInputValue(inputElement) {
  return new Promise((resolve) => {
    inputElement.addEventListener("change", () => {
      const value = inputElement.value;
      if (value && !isNaN(value)) {
        resolve(parseFloat(value));
      }
    });
  });
}

const billPromise = getInputValue(bill);
const tipPromises = handleTipSelection();
const peoplePromise = getInputValue(peopleNumber);

let totalBill;
let tipAmount;
let total;
Promise.all([billPromise, tipPromises, peoplePromise])
  .then(([bill, tipPercentage, people]) => {
    if (people > 0) {
        totalBill = (bill * tipPercentage) / 100;
        tipAmount = totalBill / people;
        tipAmountPerPerson.textContent = tipAmount.toFixed(2);
        total = (bill + totalBill) / people;
        totalAmountPerPerson.textContent = total.toFixed(2);
    } 
  })
  .catch((error) => {
    console.log(error);
  });


  resetBtn.addEventListener('click' , () => {
    bill.value = 0;
    tips.textContent = 0;
    customTip.value =0;
    peopleNumber.value = 0;
    tipAmountPerPerson.textContent = 0;
    totalAmountPerPerson.textContent = 0;
  })