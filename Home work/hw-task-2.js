// # 1

console.log(`a < b < c: ${10 < 13 < 15}`); 


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
let data = console.log(arr.sort());
data = console.log(arr.slice(5, 9));
console.log(data);

 


//  # 5

// let sideA = +prompt("Enter length of triangle's side-1.");
// let sideB = +prompt("Enter length of triangle's side-2.");
// let sideC = +prompt("Enter length of triangle's side-3.");

// let areaOfTriangle 

