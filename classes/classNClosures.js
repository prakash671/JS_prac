class atmMachine {
  #balance = 2500;
  constructor(balance) {
    if (balance != undefined) {
      this.#balance += balance;
    }
  }

  deposit = function (amount) {
    this.#balance += amount;

    console.log(
      `Amount deposited ${amount} and the remaining balance is ${
        this.#balance
      }`
    );
  };

  withDraw = function (amount) {
    this.#balance -= amount;
    console.log(
      `the withdrawened ${amount} and the remaining balance is ${
        this.#balance
      }`
    );
  };

  remainingBalance = function () {
    console.log(`the reaming balance of your account is ${this.#balance}`);
  };

}

const icciAtm = new atmMachine();

icciAtm.remainingBalance();
icciAtm.withDraw(500);
icciAtm.deposit(100);

console.log(icciAtm.__proto);
console.log(atmMachine.prototype.remainingBalance);
