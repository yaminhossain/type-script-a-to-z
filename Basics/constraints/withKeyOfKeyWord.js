{
    var person = "bike";
    // The function will return the value of given key from the object
    //error: key can be any value. So, we need to explicitly declare the type. We can get help of generics
    var getPropertyValue = function (obj, key) {
        return obj[key];
    };
    var student1 = {
        name: "Yamin",
        age: 24,
        vehicle: "bike",
    };
    var student2 = {
        name: "Hossain",
        age: 24,
        address: "Dhaka",
    };
    var res = getPropertyValue(student1, "vehicle");
    console.log(res);
}
