// Task #2
alert('Kozhakin');
// Task #3
let customColor = "blue";
let globalColor = "sky";
console.log(customColor + " " + globalColor);


globalColor = customColor
globalColor = "gray";
console.log(customColor + " " + globalColor);




// Task #4
let unknownData;
const objOfVaules = {
    nameData: "Text",
    numberData: 44,
    comparisonData: 44 <= 49,
    comparisonNumber: 44 >= 50,
    unknownData,
    emptyData: null,

}
console.log(objOfVaules);


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






