{
    var BankAccount = /** @class */ (function () {
        function BankAccount(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        Object.defineProperty(BankAccount.prototype, "deposit", {
            // addDeposit(amount: number) {
            //   this._balance = this._balance + amount;
            // }
            //setter
            set: function (amount) {
                this._balance = this._balance + amount;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BankAccount.prototype, "balance", {
            // getBalance() {
            //   console.log(`Balance: ${this._balance}`);
            // }
            //getter
            get: function () {
                return this._balance;
            },
            enumerable: false,
            configurable: true
        });
        return BankAccount;
    }());
    var account = new BankAccount(123, "Yamin", 20);
    // account.balance = 0 // This will throw an error as private member are not accessible outside class
    // account.addDeposit(40);
    account.deposit = 40;
    // account.getBalance();
    var currentBalance = account.balance;
    console.log("Current Balance is: ".concat(currentBalance));
}
