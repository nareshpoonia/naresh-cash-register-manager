var billAmount = parseInt(document.querySelector("#bill-amount").value);

var cashGiven = parseInt(document.querySelector("#cash-given").value);

var button = document.querySelector(".button");
var errorMessage = document.querySelector(".error-message");
var denominations = [2000, 500, 100, 20, 10, 5, 1];
// Query Selector All returns an array of all the element with notes-count classes
var numberOfNotes = document.querySelectorAll(".notes-count");

button.addEventListener("click", function () {
  if (billAmount > 0) {
    // Setting display to none when there is no error

    errorMessage.style.display = "none";
    if (cashGiven >= billAmount) {
      // Setting display to none when there is no error
      errorMessage.style.display = "none";
      // storing amount to return in a variable.
      var amountToReturn = cashGiven - billAmount;
      //   A for loop to loop over every denomination
      for (let i = 0; i < denominations.length; i++) {
        // Amount to be returned is divided by all the denominations and intergral part is stored as a variable
        var balance = Math.trunc(amountToReturn / denominations[i]);
        // Amount to Return is set equal to remainder of Amount to Return divided by all the denominations
        amountToReturn = amountToReturn % denominations[i];
        // The Denomination which gave the first interger in balance gets updated here
        numberOfNotes[i].innerText = balance;
        console.log(balance);
      }
    } else {
      errorMessage.innerHTML = "Error: Cash given is less than the bill Amount";
      errorMessage.style.display = "block";
    }
  } else {
    errorMessage.innerHTML = "Error : Bill Amount is less than zero";
    errorMessage.style.display = "block";
    console.log(billAmount);
  }
});
