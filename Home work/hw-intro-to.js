// Task #2
console.log('Kozhakin');
// Task #3
let customColor = "red";
let globalColor = "green";
console.log(customColor, globalColor);

customColor = "green";
globalColor = "red";
console.log(customColor, globalColor);


// Task #4
let nameData = "Text";
let numberData = 44;
let comparisonData = 44 <= 49;
let comparisonNumber = 44 >= 50;
let unknownData;
let emptyData = null;
console.log(nameData);
console.log(numberData);
console.log(comparisonData);
console.log(comparisonNumber);
console.log(unknownData);
console.log(emptyData);



//  Task #5
let isAdult = confirm("Have you reached the age of 18 ?");
console.log(isAdult);

// Tasks #6
const myName = "Ruslan";
const myLastName = "Kozhakin" != 0;
const studyGroup = "JS fundamentals";
const myDateBirth = 1995;
const meritalStatus = "merried"; 
let getNull = null;
let getString;

console.log(`Date: ${myDateBirth}, type: ${typeof (myDateBirth)}`);
console.log(`Surname: ${myLastName}, type: ${typeof (myLastName)}`);
console.log(`Name: ${myName}, type: ${typeof (myName)}`);
console.log(`Group name: ${studyGroup}`);
console.log(`Merital Status: ${meritalStatus}`);
console.log(`Get empty: ${getNull}`);
console.log(`Catch string: ${getString}`);



// Task #7
let userLogin = prompt("Enter your Login:");
let userEmail = prompt("Enter your Email:");
let userPassword = prompt("Enter your Password");
alert("Dear user, your login is: " + userLogin + "," + " your Email is: " + userEmail + "," + " your Password is " + userPassword);


// Task 8
let secondsInMinute = 60;
let minutesInHour = 60;
let secondsInHour = secondsInMinute * minutesInHour;
let hoursInADay = 24;
let secondsInADay = secondsInHour * hoursInADay;
let daysInAMonth = 30;
let secondsInAMonth = secondsInADay * daysInAMonth;
alert("Seconds in a Hour: " + secondsInHour + " " + "Seconds in a Day: " + secondsInADay + " " + "Seconds in a Month: " + secondsInAMonth);






