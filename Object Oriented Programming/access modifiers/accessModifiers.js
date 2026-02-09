var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    //===========================Public Access modifier========================
    var MyClass = /** @class */ (function () {
        function MyClass() {
            this.publicProperty = "I am public";
        }
        MyClass.prototype.publicMethod = function () {
            console.log("This is a public method.");
        };
        return MyClass;
    }());
    var instance = new MyClass();
    console.log(instance.publicProperty); // Accessible
    instance.publicMethod(); // Accessible
    //===========================Private Access modifier========================
    //Example 01:
    var MyPrivateClass = /** @class */ (function () {
        function MyPrivateClass() {
            this.privateProperty = "I am private";
        }
        MyPrivateClass.prototype.privateMethod = function () {
            console.log("This is a private method.");
        };
        MyPrivateClass.prototype.accessPrivateMembers = function () {
            console.log(this.privateProperty); // Accessible within the class
            this.privateMethod(); // Accessible within the class
        };
        return MyPrivateClass;
    }());
    var privateInstance = new MyPrivateClass();
    // console.log(privateInstance.privateProperty); // Error: Property 'privateProperty' is private
    // instance.privateMethod(); // Error: Property 'privateMethod' is private
    privateInstance.accessPrivateMembers(); // Works
    //Example 02:
    var BankAccount = /** @class */ (function () {
        function BankAccount(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        BankAccount.prototype.addDeposit = function (amount) {
            this._balance = this._balance + amount;
        };
        BankAccount.prototype.getBalance = function () {
            console.log("Balance: ".concat(this._balance));
        };
        return BankAccount;
    }());
    var account = new BankAccount(123, "Yamin", 20);
    // account.balance = 0 // This will throw an error as private member are not accessible outside class
    account.addDeposit(40);
    account.getBalance();
    //===========================Protected Access modifier========================
    var ParentClass = /** @class */ (function () {
        function ParentClass() {
            this.protectedProperty = "I am protected";
        }
        ParentClass.prototype.protectedMethod = function () {
            console.log("This is a protected method.");
        };
        return ParentClass;
    }());
    var ChildClass = /** @class */ (function (_super) {
        __extends(ChildClass, _super);
        function ChildClass() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ChildClass.prototype.accessProtectedMembers = function () {
            console.log(this.protectedProperty); // Accessible in child class
            this.protectedMethod(); // Accessible in child class
        };
        return ChildClass;
    }(ParentClass));
    var parentInstance = new ParentClass();
    var childInstance = new ChildClass();
    // console.log(parentInstance.protectedProperty); // Error: Property 'protectedProperty' is protected
    // parentInstance.protectedMethod(); // Error: Property 'protectedMethod' is protected
    childInstance.accessProtectedMembers(); // Works
    //===========================read only========================
    var Config = /** @class */ (function () {
        function Config(key) {
            this.API_KEY = key;
        }
        return Config;
    }());
    var config = new Config("mySecretKey");
    console.log(config.API_KEY);
    // config.API_KEY = "newKey"; // Error: Cannot assign to 'API_KEY' because it is a read-only property.
}
