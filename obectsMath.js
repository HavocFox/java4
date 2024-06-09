// -------------------------
// -------------------------
// -------------------------

// EXPLORING OBJECTS AND MATH IN JAVASCRIPT
class Account {
    constructor(accNum, balance, owner){
        this.accNum = accNum;
        this.balance = balance;
        this.owner = owner;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`You deposited: $${amount}. Your new balance: $${this.balance}`);
        } else {
            console.log("Please enter a positive amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New Balance: $${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            console.log("Please enter a positive amount.");
        }
    }

    calculateInterest(rate, years) {        // Not entirely sure about the formula here.
        if (rate > 0 && years > 0) {
            const interest = this.balance * Math.pow((1 + rate / 100), years) - this.balance;
            console.log(`Interest after ${years} years at a rate of ${rate}%: $${interest.toFixed(2)}`);
            return interest;
        } else {
            console.log("Please enter a positive rate/years.");
            return 0;
        }
    }
}

// Creating an account
let myAccount = new Account('123456789', 1000, 'Danny Gonzalez');

// Depositing funds
myAccount.deposit(500);

// Withdrawing funds
myAccount.withdraw(200);

// Calculating compound interest
myAccount.calculateInterest(5, 2);
