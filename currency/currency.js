// script.js

function convertCurrency() {
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (isNaN(amount)) {
    alert('Please enter a valid amount.');
    return;
  }

  const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.74,
    KES: 113.50,
  }
  const convertedAmount = (amount * exchangeRates[toCurrency]) / exchangeRates[fromCurrency];

  document.getElementById('result').innerText = `${amount} ${fromCurrency} is ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
