//Form
var elForm = document.querySelector('.moneygram__form')
var elInput = document.querySelector('.moneygram__form__input')
var elSelectFrom = document.querySelector('.moneygram__select__from');
var elSelectTO = document.querySelector('.moneygram__select__to');
var elResultBox = document.querySelector('.moneygram__converter__result');

var USD_To_UZS = 10650;
var EUR_To_UZS = 12000;
var RUB_To_UZS = 146;


elForm.addEventListener('submit', function (evt) {
   evt.preventDefault();
   
   var userInput = Number(elInput.value.trim());
   var userSelectFrom = elSelectFrom.value;
   var userSelectTo = elSelectTO.value;
   
   if (userSelectFrom === 'usd') {
      userInput = (userInput * USD_To_UZS).toFixed(2);
   } else if (userSelectFrom === 'euro') {
      userInput = (userInput * EUR_To_UZS).toFixed(2);
   } else if (userSelectFrom === 'rub') {
      userInput = (userInput * RUB_To_UZS).toFixed(2);
   } else if (userSelectFrom === 'uzs') {
      userInput;
   }
   
   
   if (userSelectTo == 'usd') {
      if (userInput >= USD_To_UZS) {
         userInput = (userInput / USD_To_UZS).toFixed(2) + ' USD';
      } else {
         userInput = (userInput / USD_To_UZS).toFixed(2) + ' SENT';
      }     
   }else if (userSelectTo == 'euro') {
      if (userInput >= EUR_To_UZS) {
         userInput = (userInput / EUR_To_UZS).toFixed(2) + ' EURO';
      } else {
         userInput = (userInput / EUR_To_UZS).toFixed(2) + ' SENT';
      }
   } else if (userSelectTo == 'rub') {
      if (userInput >= RUB_To_UZS) {
         userInput = (userInput / RUB_To_UZS).toFixed(2) + ' RUB';
      } else {
         userInput = (userInput / RUB_To_UZS).toFixed(2) + ' KAPEKA';
      }
   }else if (userSelectTo == 'uzs') {
      userInput = userInput + ' UZS';
   }
   elResultBox.textContent = userInput;
})
