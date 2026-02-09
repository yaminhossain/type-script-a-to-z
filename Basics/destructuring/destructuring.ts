//destructuring

//destructuring এর সময় কখন ও type declare করতে পারব নাহ কারন type declaration এর syntax টি aliasing এর কাজে লাগে। Normal JavaScript এর মত।
//Object Destructuring
const user = {
  id: 123,
  name: {
    firsName: "Yamin",
    middleName: "Hossain",
    lastName: "Omi",
  },
  contactNo: "01642300000",
  address: "Dhaka",
};

const {
  id,
  contactNo: phoneNumber, // alias as phoneNumber
  name: { middleName: midName }, //alias as midName
} = user;

//array destructuring

const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
const [, , besFriend, ...rest] = myFriends; //rest variable will take rest values

console.log(rest);
