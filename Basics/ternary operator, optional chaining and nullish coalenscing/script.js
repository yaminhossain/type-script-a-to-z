var _a, _b;
{
    //ternary operator
    var age = 18;
    var isAdult = age >= 18 ? "adult" : "not adult";
    //nullish coalescing operator
    // const isAuthenticated: null | undefined | string = "OK";
    var isAuthenticated = null;
    var result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    console.log(result); // prints Guest
    var test = "";
    var result2 = test ? "Guest" : test;
    console.log(result2); // prints empty string
    var user = {
        name: "Yamin Hossain",
        address: {
            city: "Dhaka",
            road: "Salimullah Road",
            presentAddress: "Mugda",
        },
    };
    var permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "Permanent Address Not Found";
    console.log(permanentAddress);
}
