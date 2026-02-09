{
  class BankAccount {
    private _balance: number;

    constructor(initialBalance: number) {
      this._balance = initialBalance;
    }

    deposit(amount: number): void {
      if (amount <= 0) {
        throw new Error("Deposit amount must be positive");
      }
      this._balance += amount;
    }

    withdraw(amount: number): void {
      if (amount > this._balance) {
        throw new Error("Insufficient balance");
      }
      this._balance -= amount;
    }

    getBalance(): number {
      return this._balance;
    }
  }

  const account = new BankAccount(1000);

  account.deposit(500);
  account.withdraw(300);
  console.log(account.getBalance()); // 1200
  // account.balance = 100000; // ❌ Error: 'balance' is private

  // ===================================================================================

  class User {
    private _age: number = 0;

    set age(value: number) {
      if (value < 0) {
        throw new Error("Age cannot be negative");
      }
      this._age = value;
    }

    get age(): number {
      return this._age;
    }
  }
  const user = new User();
  user.age = 25; // calls setter
  console.log(user.age); // calls getter
}
