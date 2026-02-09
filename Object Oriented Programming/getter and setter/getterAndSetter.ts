{
  class BankAccount {
    public readonly id: number;
    name: string;
    private _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    //setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // getBalance() {
    //   console.log(`Balance: ${this._balance}`);
    // }

    //getter
    get balance(): number {
      return this._balance;
    }
  }

  const account = new BankAccount(123, "Yamin", 20);
  // account._balance = 0 // This will throw an error as private member are not accessible outside class
  // account.addDeposit(40);
  account.deposit = 40;
  // account.getBalance();
  const currentBalance = account.balance;
  console.log(`Current Balance is: ${currentBalance}`);

  //============================================Example 02 ===============================================
  class User {
    private _age: number = 0;

    // Getter method (accessor)
    public get age(): number {
      return this._age; // Returns the private property's value
    }

    // Setter method (mutator)
    public set age(value: number) {
      // Validation logic
      if (value > 0 && value < 150) {
        this._age = value; // Sets the private property with the new value
      } else {
        console.error("Invalid age value");
      }
    }
  }

  const user = new User();

  // Access the setter like a property (triggers validation)
  user.age = 25;
  console.log(user.age); // Access the getter like a property (outputs: 25)

  user.age = -5; // Outputs: Invalid age value (value is not set)
  console.log(user.age); // Outputs: 25 (the previous valid value)
}
