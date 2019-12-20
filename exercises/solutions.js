// 1. Create a function, `makeAccount`, that takes a number parameter representing a starting balance and returns an object with three methods - `checkBalance`, `add`, `subtract`. `checkBalance` should return the current balance. `add` should take a number parameter and add it to the current balance. `add` should return `<<number>> added`. `subtract` should take a number parameter and subtract it from the current balance. `subtract` should return `<<number>> subtracted`.

function makeAccount(startingBalance) {
  let total = startingBalance;
  return {
    add: function(addMoney){
      total += addMoney;
      return `${addMoney} added`
    }, 
    subtract: function(subtractMoney) {
      total -= subtractMoney;
      return `${subtractMoney} subtracted`
    },
    checkBalance: function() {
      return total;
    }
  }
}

// 2. Use the pseudo-classical object creation pattern to create a `SavingsAccount` constructor. `SavingsAccount` instances should be initialized with a `name` and a  `balance` of `0`. They should also have three methods:
//     * `showBalance`, which returns the current balance of the account converted to a string with a currency symbol.
//     * `depositFunds` which takes a number parameter, adds it to the current balance, and then returns `$<<number>> deposited`. If `depositFunds` is called with an argument that is _not_ a positive number, it should return `"Please include a deposit amount that is greater than 0"`.
//     * `withdrawFunds`, which takes a number argument, subtracts it from the current balance, and returns $`<<number>> withdrawn`. If `withdrawFunds` is called with number that is _greater_ than the current balance, it should return `"Insufficient Funds"`.

function SavingsAccount(name) {
  this.name = name;
  this.balance = 0;
}

SavingsAccount.prototype.showBalance = function() {
  return`$${this.balance}`
}

SavingsAccount.prototype.depositFunds = function(deposit) {
  if(!(deposit > 0)){
    return 'Please include a deposit amount that is greater than 0'
  } else {
    this.balance += deposit;
    return `${deposit} Deposited`
  }
}

SavingsAccount.prototype.withdrawFunds = function(withdraw) {
  if(withdraw > this.balance){
    return 'Insufficient Funds'
  } else {
    this.balance -= withdraw;
    return `${withdraw} withdrawn`
  }
}

// 3. Use the pseudo-classical object creation pattern to create a `Phone` constructor. `Phone` instances should be initialized with a `phoneNumber`. `Phone` objects should also have a `contacts` property, initialized with a value of an empty array. `Phone`s should have the following methods available to them:

//     * `addContact`, which takes a `contact` object as a parameter and adds this object to the `contacts` property. The `contact` objects should consist of two properties, a `name` and a `phoneNumber`. `addContact` should return `<<contact name>> added.` However, if `addContact` is called with a `contact` that does not have a `name` or `phoneNumber` property, the method should simply return `Invalid`. Additionally, all phone numbers **must be ten digits**. Calling `addContact` with a `phoneNumber` that is not a ten digit string should return `Invalid`. 
//     * `removeContact`, which takes a string (`name`) as a parameter and removes the object with the matching `name` from the `contacts` array. If `removeContact` is called with a `name` that is not in `contacts`, the method should return `"Contact not found"`. Otherwise, it should return `<<contact name>> removed.` 
//     * `call`, which takes a string argument which could represent a `name` OR a `phoneNumber`. If the `name` or `phoneNumber` is found in contacts, it should return, `"Calling <<contact name>>..."`. If it is not found it should return, `"Calling <<phone number>>"`if the parameter passed is a 10 digit string. Otherwise, it should return, `"Invalid"`


function Phone(phoneNumber) {
  this.phoneNumber = phoneNumber;
  this.contacts = [];
}

Phone.prototype.addContact = function(contact) {
  let contactName = contact.name;
  let contactPhonenumber = contact.phoneNumber;
  if((contactName === undefined || contactPhonenumber === undefined || contactPhonenumber.length !== 10)){
    return 'Invalid'
  } else{
    this.contacts.push(contact)
    return `${contactName} added`;
  }
}

Phone.prototype.removeContact = function(name) {
      if (!this.contacts.includes(name)) return `${name} not found.`;

      this.contacts.splice(this.contacts.indexOf(name), 1);
      return `${name} successfully removed.`
  
}

































module.exports = {
  // makeAccount,
  // SavingsAccount
  // Phone
  // AppleiPhone
  // Person
  // Student
  // GraduateStudent
  // Professor
  // Doctor
};
