{
    var Counter_1 = /** @class */ (function () {
        function Counter() {
        }
        Counter.prototype.increment = function () {
            Counter.count = Counter.count + 1;
            return Counter.count;
        };
        Counter.prototype.decrement = function () {
            Counter.count = Counter.count - 1;
            return Counter.count;
        };
        Counter.count = 0;
        return Counter;
    }());
    var instance1 = new Counter_1();
    var instance2 = new Counter_1();
    console.log("Count: ".concat(instance1.increment())); //Count = 1
    console.log("Count: ".concat(instance1.increment())); //Count = 2
    console.log("Count: ".concat(instance2.increment())); //Count = 3
    console.log("Count: ".concat(instance2.decrement())); //Count = 2
}
