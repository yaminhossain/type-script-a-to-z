//destructuring
//destructuring এর সময় কখন ও type declare করতে পারব নাহ কারন aliasing করা লাগে। Normal JavaScript এর মত।
//Object Destructuring
var user = {
    id: 123,
    name: {
        firsName: "Yamin",
        middleName: "Hossain",
        lastName: "Omi",
    },
    contactNo: "01642300000",
    address: "Dhaka",
};
var id = user.id, phoneNumber = user.contactNo, midName = user.name.middleName;
//array destructuring
var myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
var besFriend = myFriends[2], rest = myFriends.slice(3); //rest variable will take rest values
console.log(rest);
