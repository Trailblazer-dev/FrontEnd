function calculateInterestOnlyLoanPayment(loanTerms) {
    //Calculates the monthly payments of an interest only loan
    var interest = loanTerms.interestRate / 1200;
    var payment;
    payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
//let test if the function works as we intended for it to work
//NB you must pass the parameter of the function as an object of loan
var interestOnlyPayment = calculateInterestOnlyLoanPayment({ principal: 30000, interestRate: 5 });
console.log(interestOnlyPayment);
function calculateConventionalLoanPayment(loanTerms) {
    //calculates the monthly payment of a conventioanl loan
    var interest = loanTerms.interestRate / 1200;
    var payment = loanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return "The conventional loan payment is " + payment.toFixed(2);
}
var conventionalPayment = calculateConventionalLoanPayment({ principal: 30000, interestRate: 5, months: 180 });
console.log(conventionalPayment);
var identity = "{\"name\":\"Alice\", \"age\": 30, \"city\": \"Nairobi\"}";
console.log(JSON.parse(identity));
