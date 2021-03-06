const getMaxDigit = (number) =>
  Math.max(...Array.from(String(number)).map((item) => parseInt(item)));

const powNumber = (number, power) => {
  let result = number;

  for (let i = 1; i < power; i++) {
    result *= number;
  }

  return result;
};

const formatName = (name) =>
  (formatedName = name[0].toUpperCase() + name.substring(1).toLowerCase());

const countClearProfit = function (salary, ...taxes) {
  let totalTax = taxes.reduce((total, current) => total + current);
  const clearProfit = (salary / 100) * (100 - totalTax);

  return clearProfit;
};

const getRandomNumber = (firstNumber, lostNumber) => {
  const randomNumber =
    Math.floor(Math.random() * (lostNumber - firstNumber + 1)) + firstNumber;
  return randomNumber;
};

const countLetter = (letterSearch, string) => {
  let counter = 0;
  const splitedString = string.split("");

  for (let letter of splitedString) {
    if (letter.toLowerCase() === letterSearch.toLowerCase()) {
      counter++;
    }
  }

  return counter;
};

const convertCurrency = (currency) => {
  const buyDollarCost = 28.5;
  const sellDollarCost = 28.1;
  let result = "";

  if (currency.toUpperCase().includes("UAH")) {
    result = +currency.split("UAH")[0] / buyDollarCost;
  } else if (currency.toUpperCase().includes("$")) {
    result = +currency.split("$")[0] * sellDollarCost;
  }

  return result;
};

const getRandomPassword = (passwordNumber = 8) => {
  const numbers = "0123456789";
  let password = "";

  for (let i = 0; i < passwordNumber; i++) {
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  return password;
};

const deleteLetters = (deleteLetter, string) => {
  return string.replaceAll(deleteLetter, "");
};

const isPalyndrom = (string) => {
  const modyfiedString = string.split(" ").join("").toLowerCase();
  const reverseString = modyfiedString.split("").reverse().join("");
  return modyfiedString === reverseString;
};

const deleteDuplicateLetter = (string) => {
  const modyfiedString = string.toLowerCase().split("");
  let result = "";

  for (let letter of modyfiedString) {
    if (
      string.toLowerCase().indexOf(letter) ===
      string.toLowerCase().lastIndexOf(letter)
    ) {
      result += letter;
    }
  }

  return result;
};

console.log(`
?????????????? ???1: ${getMaxDigit(9538, 8)}
?????????????? ???2: ${powNumber(6, 3)}
?????????????? ???3: ${formatName("OsTaP")}
?????????????? ???4: ${countClearProfit(21000, 18, 1.5)}
?????????????? ???5: ${getRandomNumber(1, 10)}
?????????????? ???6: ${countLetter("??", "??????????????????")}
?????????????? ???7: ${convertCurrency("100$")}
?????????????? ???8: ${getRandomPassword()}
?????????????? ???9: ${deleteLetters("b", "bla-bla-car")}
?????????????? ???10: ${isPalyndrom("?? ???????? ????????????")}
?????????????? ???11: ${deleteDuplicateLetter(
  "Vodafone - ???????????? ?????????????????? ???????????????? ??????????????:-)"
)}
`);
