let isLoggedIn = false;
let userName = "John";
let time = 24;
let isBirthday = false;

if (isLoggedIn == true && isBirthday == true) {
  if (time >= 5 && time < 13) {
    console.log("Good Morning, " + userName + " and have a great birthday!");
  } else if (time >= 13 && time < 19) {
    console.log("Good Afternoon, " + userName + " and have a great birthday!");
  } else {
    console.log("Good Evening, " + userName + " and have a great birthday!");
  }
} else if (isLoggedIn == true && isBirthday == false) {
  if (time >= 5 && time < 13) {
    console.log("Good Morning, " + userName + ".");
  } else if (time >= 13 && time < 19) {
    console.log("Good Afternoon, " + userName + ".");
  } else {
    console.log("Good Evening, " + userName + ".");
  }
} else if (time >= 5 && time < 13) {
  console.log("Good Morning");
} else if (time >= 13 && time < 19) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}
