//Spread Operator
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//On array
var bros1 = ["Yamin", "Anik", "Udoy"];
var bros2 = __spreadArray(["Rupom", "Avik", "Raza"], bros1, true);
console.log(bros2);
bros2.push.apply(bros2, bros1);
// bros2.push(bros1) // Typescript will throw an error. JavaScript will throw that error on run time not before that. TypeScript is throwing that error before run time
//On objects
var teachers1 = {
    dsa: "Yamin",
    ml: "Rupom",
    security: "Udoy",
};
var teachers2 = {
    dbms: "Anik",
    ai: "Avik",
    architecture: "Hridoy",
};
var teachers = __assign(__assign({}, teachers1), teachers2);
console.log(teachers);
//Rest operator
var greetFriends = function () {
    var friends = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        friends[_i] = arguments[_i];
    }
    friends.forEach(function (friend) { return console.log("Hi ".concat(friend)); });
};
greetFriends("Yamin", "Anik", "Rupom", "Uody");
