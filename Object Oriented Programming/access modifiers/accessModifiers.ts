{
  //===========================Public Access modifier========================
  class MyClass {
    public publicProperty: string = "I am public";

    public publicMethod(): void {
      console.log("This is a public method.");
    }
  }
  const instance = new MyClass();
  console.log(instance.publicProperty); // Accessible
  instance.publicMethod(); // Accessible

  //===========================Private Access modifier========================

  //Example 01:
  class MyPrivateClass {
    private privateProperty: string = "I am private";

    private privateMethod(): void {
      console.log("This is a private method.");
    }

    public accessPrivateMembers(): void {
      console.log(this.privateProperty); // Accessible within the class
      this.privateMethod(); // Accessible within the class
    }
  }

  const privateInstance = new MyPrivateClass();
  // console.log(privateInstance.privateProperty); // Error: Property 'privateProperty' is private
  // instance.privateMethod(); // Error: Property 'privateMethod' is private
  privateInstance.accessPrivateMembers(); // Works

  //Example 02:
  class BankAccount {
    public readonly id: number;
    name: string;
    private _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    getBalance() {
      console.log(`Balance: ${this._balance}`);
    }
  }

  const account = new BankAccount(123, "Yamin", 20);
  // account.balance = 0 // This will throw an error as private member are not accessible outside class
  account.addDeposit(40);
  account.getBalance();

  //===========================Protected Access modifier========================

  class ParentClass {
    protected protectedProperty: string = "I am protected";

    protected protectedMethod(): void {
      console.log("This is a protected method.");
    }
  }

  class ChildClass extends ParentClass {
    public accessProtectedMembers(): void {
      console.log(this.protectedProperty); // Accessible in child class
      this.protectedMethod(); // Accessible in child class
    }
  }

  const parentInstance = new ParentClass();
  const childInstance = new ChildClass();

  // console.log(parentInstance.protectedProperty); // Error: Property 'protectedProperty' is protected
  // parentInstance.protectedMethod(); // Error: Property 'protectedMethod' is protected

  childInstance.accessProtectedMembers(); // Works

  //===========================read only========================

  class Config {
    public readonly API_KEY: string;
    constructor(key: string) {
      this.API_KEY = key;
    }
  }
  const config = new Config("mySecretKey");
  console.log(config.API_KEY);
  // config.API_KEY = "newKey"; // Error: Cannot assign to 'API_KEY' because it is a read-only property.
}
