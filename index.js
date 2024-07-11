  var customerName = 'bob';
  function returnCustomerName() {
  return customerName;
 }
 // 2) Fix the Scope
 function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
 }

 // 3) Fix the Scope
 var bestCustomer;

 function setBestCustomer() {
  bestCustomer = 'not bob';
 }

 // 4) Fix the Scope
 function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
 }

 // 5) Fix the Scope
 const leastFavoriteCustomer = 'not bob';
 function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else';
 }
