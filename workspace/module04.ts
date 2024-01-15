//it below code should have two functions,:calculateInterestOnlyLoanPayment and calculateConventionalLoanPayment
interface Loan{
    principal: number;
    interestRate: number;//interest rate is 14% which is 14
}
interface ConventionalLoan extends Loan{
    months: number;
}
function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    //Calculates the monthly payments of an interest only loan
    let interest = loanTerms.interestRate /1200;
    let payment: number;
    payment = loanTerms.principal * interest ;
    return  'The interest only loan payment is ' + payment.toFixed(2);
}
//let test if the function works as we intended for it to work
//NB you must pass the parameter of the function as an object of loan
let interestOnlyPayment = calculateInterestOnlyLoanPayment({principal: 30000,interestRate:5});
console.log(interestOnlyPayment);
function calculateConventionalLoanPayment(loanTerms:ConventionalLoan){
    //calculates the monthly payment of a conventioanl loan
    let  interest: number =loanTerms.interestRate/1200;
    let payment: number =loanTerms.principal*interest/(1-(Math.pow(1/(1+interest),loanTerms.months)));
    return `The conventional loan payment is ` + payment.toFixed(2);
}
let conventionalPayment = calculateConventionalLoanPayment({principal:30000,interestRate:5,months:180});
console.log(conventionalPayment);
const identity = `{"name":"Alice", "age": 30, "city": "Nairobi"}`;
console.log(JSON.parse(identity))