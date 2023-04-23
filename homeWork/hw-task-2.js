// # 1
let a = 1;
let b = 2;
let c = 3;
if (a < b && b < c) {

    
}



// # 2

let x = 1;
let y = 2;

let res1 = "" + x + y;

console.log(res1);

let res2 = x < y;
res2 += "" + 2;
console.log(`${res2}, ${typeof (res2)}`);


let res3 = y > x;
console.log(res3);

let res4 = x + y;
res4 *= "a"; 

console.log(res4, `${typeof (res4)}`);


//  # 3

let isAdult = +prompt("Have you reached the age of adult?");

if (isAdult >= 18) {
    alert("You have already reached the age of adult!");

}
else if (isAdult < 18) {
    alert("You are too young!")
}



//  # 4

let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];

let arrCopy = [...arr];
console.log(arrCopy);

let newArr = arrCopy.sort((a, b) => a - b);
console.log(newArr);

let data = newArr.find((el) => el == 5);
console.log(data);

console.log(newArr.indexOf(5)); //5
console.log(newArr.lastIndexOf(5)); //8

let newArray = newArr.slice(5, 9);
console.log(newArray);

arr = arr.filter((el) => el != 5);

console.log(arr);


 

//  # 5

 let sideA = +prompt("Enter length of triangle's side-1.");
 let sideB = +prompt("Enter length of triangle's side-2.");
 let sideC = +prompt("Enter length of triangle's side-3.");

const perimetrOfTriagle = (sideA + sideB + sideC) / 2;
const areaOfTriangle = Math.sqrt(perimetrOfTriagle * (perimetrOfTriagle - sideA) * (perimetrOfTriagle - sideB) * (perimetrOfTriagle - sideC));
console.log("Area of triangle:", +parseInt(areaOfTriangle));

if (sideA ^ 2 + sideB ^ 2 == sideC ^ 2) {
    console.log("Triangle is right!");
}
else {
    console.log("Incorrect data!");
}




// 6

let now = new Date();
let currentTime = now.getHours();

if (currentTime >= 23 && currentTime < 5) {
    console.log("Доброї ночі");
}
else if (currentTime >= 5 && currentTime <= 11) {
    console.log("Доброго ранку");
}
else if (currentTime > 11 && currentTime < 17) {
    console.log("Доброго дня");
}
else if (currentTime >= 17 && currentTime < 23) {
    console.log("Доброго вечора, ми з Украни");
}

// Period of the day by switch method

switch (true) {
    case (currentTime >= 23 && currentTime < 5):
        console.log("Доброї ночі");
        break;
    case (currentTime >= 5 && currentTime <= 11):
        console.log("Доброго ранку");
        break;
    case (currentTime > 11 && currentTime < 17):
        console.log("Доброго дня");
        break;
    case (currentTime >= 17 && currentTime < 23):
        console.log("Доброго вечора, ми з Украни");
        break;

}
    



