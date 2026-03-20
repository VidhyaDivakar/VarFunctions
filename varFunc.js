
//Task 1: Flexible String Manipulation with Functions
function formatFullName(firstName, lastName) {

    if (firstName === "" || lastName === "") {
        return "Invalid Name Input.";

    }
    let a = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    let b = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    let c = b + "," + a;

    return c;

}
console.log(formatFullName("Nancy", "Theoder"))


//Task 2: Mathematical Operations with Multiple Parameters
function calculateTotalCost(price, quantity, taxRate) {
    if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
        return "Invalid input";
    }
    let totalCost = (price * quantity) * (1 + taxRate);
    return totalCost;
}
console.log(calculateTotalCost(1000, 10, 0.08))


// Task 3: Functions with Conditional Logic

function checkEligibility(age, isEmployed) {

    if (age > 18 && isEmployed) {
        return "Eligible";
    }
    else if (age > 18 && !isEmployed) {
        return "Conditionally eligible";
    }
    else {
        return "Not eligible";
    }
}
console.log (checkEligibility(32, "isEmployed"));

//Task 4: Refactoring for Reusability (Refactoring Task 2)


function calculateTotalCost(price, quantity, taxRate, discount) {
    if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
        return "Invalid input";
    }
    let totalCost = price * quantity;
    if (discount !== undefined && !isNaN(discount)) {
        totalCost = totalCost - discount;
           }
    totalCost = totalCost * (1 + taxRate);

    return totalCost;
    
}
console.log(calculateTotalCost(1000, 10, 0.08, 200));

