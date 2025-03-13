// ----- JavaScript Tutorial in YouTube Tutorial -----

// 1. Sum of two number
// let a = 10;
// let b = 10;
// sum = a + b;
// console.log(sum);

// 2. Sum of two string
// let str1 = "Hello";
// let str2 = "World";
// console.log(str1.concat(str2));

// 3. find remainder
// let a = 2;
// let b = 43;
// sum = a % b;
// console.log(sum);

// 4. Check value even or odd
// function checkEvenOdd() {
//   if (i % 2 === 0) {
//     console.log(i + " is even.");
//   } else {
//     console.log(i + " is odd.");
//   }
// }

// checkEvenOdd(4); // Output: 4 is even.
// checkEvenOdd(7); // Output: 7 is odd.

// 5. check age
// function checkAgeCategory(age) {
//   let category;
//   switch (true) {
//     case age >= 0 && age <= 18:
//       category = "Child";
//       break;
//     case age >= 18 && age <= 60:
//       category = "Young";
//       break;
//     case age >= 60:
//       category = "Senior";
//       break;
//     default:
//       category = "Invalid age";
//   }
//   console.log(`The person is a ${category}.`);
// }

// checkAgeCategory(17); // The person is a Child.
// checkAgeCategory(25); // The person is a Young.
// checkAgeCategory(70); // The person is a Senior.
// checkAgeCategory(-5); // The person is a Invalid age.

// 6. find max value from three value
// let a = 50;
// let b = 10;
// let c = 30;

// let max = Math.max(a, b, c);
// console.log(max); // 10

// 7. print 1 to 10
// function number() {
//   for (let i = 0; i <= 10; i++) {
//     // let a = i;
//     console.log(i);
//   }
//   //   return a;
// }
// // console.log(number());
// number();

// 8. Sum of 1 to 10
// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

// 9. Sum of odd even
// ---- odd ---
// let sum = 0;
// for (let i = 1; i <= 10; i += 2) {
//   sum += i;
// }
// console.log(sum); //1+3+5+7+9=25

// ---- even ----
// let sum = 0;
// for (let i = 0; i <= 10; i += 2) {
//   sum += i;
// }
// console.log(sum); //2+4+6+8+10=30

// 10. print 1 to 10 , divsible by
// function check_divisible(n) {
//   if (n % 3 == 0) {
//     console.log(n + " is divisible...");
//   } else {
//     console.log(n + " is not divisible...");
//   }
// }

// check_divisible(9);
// check_divisible(2);

// ----- Pattern Loop -----

// ---------
//*
//* *
//* * *
//* * * *
//* * * * *
// for (let i = 1; i <= 5; i++) {
//   let starPattern = "";
//   for (let j = 1; j <= i; j++) {
//     starPattern += " *";
//   }
//   console.log(starPattern);
// }

// -------------
//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5
// for (let i = 1; i <= 5; i++) {
//   let num = "";
//   for (let j = 1; j <= i; j++) {
//     num += j;
//   }
//   console.log(num);
// }

// {
//   let age = 20;
// }
// age = 32;
// console.log(age);

// age = 54;
// let a = 5;
// let b = 2;
// // console.log(a + b);
// console.log(a--);

// --------------------- Starting JavaScript -------------------
// Arithmetic Operator
// let a = 5;
// a++; //6
// ++a; //6
// a--; //4
// --a; //4
// console.log(a);
// ------------------
// Assingment Operator
// let a = 5;
// let b = 4;
// // a+=1; //6
// // a-=1; //4
// // a*=b; // 20
// // a/=b; // 1.25
// // a%=b; //1
// // a**=b; // 625
// console.log(a);
// ------------------

// Comparison Operator
// let a = 5;
// let b= 2;

// console.log(a==b); //boolean value return karse true ya false
// console.log(a!=b); //
// string-> number equally check kare
// console.log(a===b); //=== datatype and value check
// console.log(a!==b); //true
// ------------------

//Logical Opetator
// && -> condtition 1 and condition 2 both are true , so ans true
// let a = 6;
// let b = 5;

// let cond1 = a>b;
// let cond2 = a===4;

// console.log(cond1); //true
// console.log(cond2); //false
// console.log(!(6<4)); //ture
// console.log(!(6<7)); //false

// cond1   cond2   result(&&)   result(||)  result(!)not
// true    true    true         true
// true    false   false        true
// false   true    false        true
// false   false   false        false

// (!) not = koi bhi expression true to false / false to true
// ------------------

// Conditional Statement
// let age = 2;
// if(age>18){
//     console.log("you can vote");
// }
// else{
//     console.log("you can not vote");
// }

// let mode = "dark";
// let color;
// if(mode === "dark"){
//     color = "black";
// }
// if(mode === "light"){
//     color = "white";
// }
// console.log(color);

// let num = 9;
// if(num%2===0){
//     console.log("is even");
// }
// else{
//     console.log("is not even");
// }
// ------------------

// Ternary Operator
// condtion?true output:false output
// syntax-> a?b:c
// let age = 25; //adult
// // let age = 2; //not adult
// let result = age>=18?"adult":"not adult";
// console.log(result);

// let fullName = prompt("Hello!");
// console.log(fullName);

// let x = prompt("enter a number : ");
// if(x%5===0){
//     console.log("is divisible");
// }
// else{
//     console.log("is not divisible");
// }
// -------------

//loops in js
// let sum = 0;
// for(let i=1;i<=5;i++)
// {
//     sum +=i;
// }
// console.log(sum);

// while loop
// let i =1;
// while(i<=5){
//     console.log("i = ",i);
//     i++
// }

// do-while loop
// let i =1
// do{
//     console.log("Hello!");
//     i++;
// }while(i<=5);

// for-of loop (string and array uper loop lagava help kare)
// for(let val of strVar){
//     //do some work
// }

// let str="Hello!"
// let size = 0;
// for(let i of str){ //iterator -> character
//     console.log(i);
//     size++;
// }
// console.log("size : ",size);

// for-in loop (obejct use)  (for in loop always key the return)
// for(let key in objVar){
//     //do some work
// }

// let student = {
//     name:"Rahul kumar",
//     age:20,
//     cgpa:7.5,
//     isPass:true
// };

// for(let i in student){
// console.log("key=", i, "value=",student[i])
// console.log(i);
// console.log(student[i]);
// }

// Practice Que1 1 to 100
// for(let i=0;i<=100;i++)
// {
//     // if(i%2===0) //even
//     if(i%2!==0) //odd
//     {
//         console.log(i);
//     }
// }

// Practice Que2
// let gameNum = 25;
// let useNum = prompt("Guess the game number : ");

// while(userNum != GameNum){
//     useNum = prompt("You entered wrong number. Guess again :");
// }
// console.log("Congratulations , yoou entered the right number");
// -------------

// String -> String is a sequence of characters used to represent text
// let str = "Hello";
// let str1 = "HelloWorld ";

//  let str = "HelloWorld!";
//  console.log(str[0]);

//  let obj = {
//      item:"pen",
//      price:10,
//  };

//  let output = `the cost of ${obj.item} is ${obj.price} rupees`;
//  console.log(output);
//  console.log(`the cost of`,obj.item,`is`,obj.price,`rupees`);

// console.log("Hello \nWorld!"); // \n means next line
// console.log("Hello \tWorld!"); //\t space

// let str = "Hello\tWorld!";
// console.log(str.length); //12
// ->escape character ki length single character ki Tarah count hoti he (ex: \t - 1).<-

// string methods (method means kuch bhi kam karvana)
// str.toUpperCase()
// let str = "helloworld";
// console.log(str.toUpperCase());

// str.toLowerCase()
// let str = "Helloworld";
// console.log(str.toLowerCase());

// str.trim() // removes whitespaces
// let str =  "          Hello World!            ";
// console.log(str.trim());

// str.slice(start,end?) //returns part of string (ending value return non inclusive)
// let str = "0123456789";
// console.log(str.slice()); //full string print
// console.log(str.slice(1,4)); //123
// console.log(str.slice(2,6)); //2345

// str1.concat(str2) //joins str2 with str1
// let str1 = "Hello";
// let str2 = "World";
// let str3 = "!";
// console.log(str1.concat(str2));
// console.log(str1+str2+str3);
// console.log(str1+str2+str3+"How are you?");

// str.replace(searchVal,newVal)
// let str = "I love javascript";
// let result = str.replace("love","enjoy");
// console.log(result)

// str.chatAt(index)
// let str = "helloworld";
// let str1 = "Hello,World,!";
// console.log(str.charAt(4));
// console.log(str1.charAt(8));

// Excercise 1
//   let fullName = prompt("enter the fullName : ");
//   let userName = "@" + fullName + fullName.length;
//   console.log(userName);

// Array = collection of items
// In arary no key
// property - some value / method - some work
// length is a property.
// array is a special type of object in javascript.
// linear means single line

// let arr = [10,20,30,40,50];
// console.log(arr);
// console.log(arr.length);
// console.log(typeof arr); //object

// let marks= [97,82,64,76,36];
// console.log(marks[4]); //36

// marks[2] = 100;
// console.log(marks); //100

// ------- Looping over an Array ------
// loop -> iterable(means aese item hote js ki under aeni uper loop laga sakte he) (string,object,arrays)

// for loop in  array
// let fruits = ["apple","orange","banana","watermelon","kiwi","guava"];
// for(let i = 0 ; i<fruits.length ; i++){
//     console.log(fruits[i]); // full array print
//     // console.log(fruits[i]);
// }

//  for of loop
// for(let el of fruits)
// {
//     console.log(el.toUpperCase());
// }

// Practice Que
// let marks = [85,97,44,37,76,60];
// let sum = 0;

// for(let val of marks){
//     sum = sum + val;
// }
// console.log("sum of marks: ",sum);
// let avg = sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);

// Practice Que
// let items = [250,645,300,900,50];
// let idx = 0;

//  for(let i = 0;i<items.length;i++){
//     let offer = items[i]/10;
//     items[i] = items[i] - offer;
//  }
//  console.log(items); //[ 225, 580.5, 270, 810, 45 ]

// ----- Array Methods -----
// push() -> add to end
// pop() -> delete from end &return
// toString() -> converts array to string
// Concat() -> joins multiple arrays &returns result
// unshift() -> add to start
// shift() -> delete from start & return
// Slice() -> returns a piece of the array [slice(startIndex , endIndex)]   {slice method original array not change}
// Splice() -> change original arrat(add,remove,replace) [splice(startIndex , deleteCount , newEl1..)]

// Practice Que
// let companies = ["Bloomberg","Micrisoft","Uber","Google","IBM","Netflix"];
// console.log(companies.shift());
// console.log(companies);

// console.log(companies.splice(2,1,"Ola"));
// console.log(companies);

// console.log(companies.push("Amazon"));
// console.log(companies);

// ---------- Function ----------
// -> Block of code that performs a specific task , can be invoked whenever needed. (invoked mean call kar sakte he)

// functio ndefinition
// function functionName(){
//     //do some work
// }

// function functionName(param1 , param2,....){
//     //do some work
// }

// function Call:
// functionName();

// function myFunction(){
//     console.log("Hello World!");
// }
// myFunction();

// reduduncy -> items repeat

// function myFunction(msg){
//     // parameter -> input
//     console.log(msg);
// }
// myFunction("Hello!"); //argument

// function -> 2 numbers  , sum
// function sum(x,y){
//     console.log(x+y);
// }
// sum(10,20);

// function sum(x,y){
//     s = x+y;
//     return s;
// }
// console.log(sum(5,3));

// Notes -> jo hamare fucntion ke parameter hote he,they are like local variable of function and block scope hota he (function ke block tak jinda rete hain).

// ----- Arrow Function
// -> Compact way of writitng a function
// -> Modern JavaScript arrow function introduce.

// const functionName = (param1,param2,...)=>{
//     //do some work
// }

// -----------
// const sum = (a,b)=>{
//     return a+b;
// }
// -----------

// let arowsum = (a,b) => {
//     return a+b;
// }
// console.log(arowsum(2,2));

// const printHello = () => {
//     console.log("Hello!");
// }
// printHello();

// const printHello = () => console.log("Hello!"); //this method is also right.

// Practice Que
// Que. Create a function using the "function" keyword that take a String as an argument & returns the number of vowels in the string.
//  function countVowels(str){
//      let count  = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char ==="o" || char === "u"){
//             count ++;
//         }
//     }
//         return count;
//  }
//  console.log(countVowels("hello"));
//  console.log(countVowels("javascript"));

// In Arrow Function
// const countVowels = (str) => {
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char ==="o" || char === "u"){
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("hello"));
// console.log(countVowels("javascript"));
// console.log(countVowels("Cricket"));

// ----- ForEach Loop
// arr.forEach(callBackFunction)
// CallbacFunction : Here , it is a function to execute for each element in the array
// A callback is a function passed as an argument to another function.
// forEach actually one type of method.
// ------------
// arr.forach((val)=>{
//     console.log(val);
// })
// ------------

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val) {    // val is the parameter representing each element
//   console.log(val);  // Now the function can access the current element
// });

// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val) => {
//   console.log(val);
// }); //arrow function

// forEach callback function three parameter hote he we use optional hote he (ek value store hai)(dusra index position)(the array itself)

// let nums = [1,2,3,4,5];
// nums.forEach((num) => {
//     console.log(num*num);
// });

// let nums = [1,2,3,4,5];
// let calcSquare = (num) => {
//     console.log(num*num);
// };
// nums.forEach(calcSquare);   //another method Valid

// Que - We are given array of marks of students. FIlter out of the marks of students that scored 90+.
// let marks = [87,54,90,80,99,34,54];
// let toppers = marks.filter((val)=>{
//     return val>90;
// });
// console.log(toppers);

// Que - Take a number n as input from user.Create an array of number from 1 to n
// let n = prompt("enter the number : ");
// let arr = [];
// for(i=1;i<=n;i++){
//     arr[i-1] = i;
// }
// console.log(arr);

// Que - Use the reduce method to calculate sum of all numbers in the array.
// let sum = arr.reduce((prev , curr)=>{
//     return prev+curr;
// })
// console.log("sum of all number : ",sum);

// Que - Use the reduce method to calculate prodcut of all numbers in the array.
// let factorial = arr.reduce((prev , curr)=>{
//     return prev*curr;
// })
// console.log("factorial of all number : ",factorial);

// the 3 musketeers of web dev
//     html       css     js
// (structure)  (style) (logic)

// ------------------x-------------------------x----------------------x------------------x--------------

// 1. `.push()` - add element from end
// 2. `.pop()` - remove element from end
// 3. `.shift()` - remove first element
// 4. `.unshift()` - add first element
// 5. `.concat()` - concat to array
// 6. `.map()` - new array create kare juna array to aem j re
// 7. `.filter()` - creates a new array with all elements that pass a test provided by a function.
// 8. `.reduce()` -  apply a function on each element of an array to reduce it to a single value (badha element uper function apply kare and single value return kare).
// 9. `.forEach()` - It's commonly used for iteration and performing actions on each array element.
// 10. `.find()` - return the first element in an array that satisfies a given condition
// 11. `.includes()` - checks true or false
// 12. `.indexOf()` - find the first index of a specified element in an array.
// 13. `.slice()` - deep copy both array change and shallow copy only one change (slice piece ma convert kare)
// 14. `.splice()` -  method in JavaScript is used to add or remove elements from an array at a specific index.
// -----------
// length - length show
// ------
// toString - convert to string
// let arr = ["a", "b", "c", "d"];
// console.log(arr.toString());
// -------
// at() - array index return = at(index)
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.at()); //bydefault 1
// console.log(arr.at(3)); //4
// -------------
// join() - all array elements to string
// let arr = [1, 2, 3];
// console.log(arr.join("="));
// -------------
// pop() - remove last element
// let arr = ["apple", "banana", "guava", "pineapple"];
// arr.pop();
// arr.pop();
// console.log(arr);
// -----------
// push() - add last element
// syntax - push() / push(element1) / push(element1, element2) / push(element1, element2, /* …, */ elementN)
// let arr = ["apple", "banana", "guava", "pineapple"];
// arr.push();
// arr.push("lichi", "mango", "orange");
// console.log(arr);
// ---------------
// shift() - remove first element - shift()
// let arr = ["apple", "banana", "guava", "pineapple"];
// arr.shift();
// arr.shift();
// console.log(arr);
// --------------
// unshift() - add first element - unshift() / unshift(element1) / unshift(element1, element2) / unshift(element1, element2, /* …, */ elementN)
// let arr = ["apple", "banana", "guava", "pineapple"];
// arr.unshift("orange");
// console.log(arr);
// ---------------
// concat() - concatenation
// let arr = [1, 2, 3, 4, 5];
// let arr1 = [6, 7, 8, 9, 10];
// console.log(arr.concat(arr1));
// ------------
// flat() - new array create , sub array
// const myArr = [1, [2, [3, [4, [5]]]]];
// console.log(myArr.flat());
// ---------
// splice() - method adds new items to an array. = splice(start) / splice(start, deleteCount) / splice(start, deleteCount, item1) / splice(start, deleteCount, item1, item2) / splice(start, deleteCount, item1, item2, /* …, */ itemN)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.splice()); // []
// console.log(arr.splice(2)); //[3,4,5,6,7,8,9,10]
// console.log(arr.splice(1, 4)); //[2,3,4,5]
// console.log(arr.splice(1, 6, 100, 200)); //[2,3,4,5]
// console.log(arr);
// -------------
// slice() - method slices out a piece of an array. = slice() / slice(start) / slice(start, end)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.slice()); //[1, 2, 3, 4, 5,6, 7, 8, 9, 10]
// console.log(arr.slice(2)); //[3, 4, 5,6, 7, 8, 9, 10]
// console.log(arr.slice(2, 4)); //[3,4]
// console.log(arr);
// -------------------------------
// copywithin() -
// myArray.copyWithin(target);
// myArray.copyWithin(target, start);
// myArray.copyWithin(target, start, end);

// let arr = ["Banana", "Orange", "Apple", "Mango"];
// console.log(arr.copyWithin(2, 0)); //[ 'Banana', 'Orange', 'Banana', 'Orange' ]

// --------------
// indexOf() - searches an array for an element value and returns its position. = indexOf(searchElement)
// indexOf(searchElement, fromIndex)
// const beasts = ["ant", "bison", "camel", "duck", "bison"];
// console.log(beasts.indexOf()); //-1
// console.log(beasts.indexOf("camel")); //2
// console.log(beasts.indexOf("duck",1)); //3
// --------------
// lastIndexOf() - Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
// lastIndexOf(searchElement)
// lastIndexOf(searchElement, fromIndex)
// const beasts = ["ant", "bison", "camel", "duck", "bison"];

// console.log(beasts.lastIndexOf()); //-1
// console.log(beasts.lastIndexOf("ant")); // 0
// console.log(beasts.lastIndexOf("camel")); // 2
// console.log(beasts);
// --------------
// includes() -  check if an element is present in an array
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(6)); //false
// console.log(arr.includes(5)); //true
// --------------
// find() - The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find((element) => element > 44);
// console.log(found);
// --------------
// findIndex() - The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// findIndex(callbackFn)
// findIndex(callbackFn, thisArg)

// const array1 = [5, 12, 8, 130, 44];
// const isLargeNumber = (element) => element > 13;
// console.log(array1.findIndex(isLargeNumber));
// --------------
// findLast() - The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.
// findLast(callbackFn)
// findLast(callbackFn, thisArg)

// const array1 = [5, 12, 50, 130, 44];
// const found = array1.findLast((element) => element > 45);
// console.log(found); //130
// --------------
// findLastIndex() - The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// findLastIndex(callbackFn)
// findLastIndex(callbackFn, thisArg)

// const array1 = [5, 12, 50, 130, 44];
// const isLargeNumber = (element) => element > 45;
// console.log(array1.findLastIndex(isLargeNumber));
// --------------

// -----------x------------- STRING ------------x-----------------
// --------------------------------------------------------------------
// 1.toUpperCase() - upper case
// 2.toLowerCase() - lower case
// 3.trim()  - white space remover kare
// 4.charAt() - returns the character at a specified index (position) in a string
// 5.charCodeAt() - method returns the unicode of the character at a given position in a string
// 6.indexOf() - index check kare
// 7.includes()
// 8.startsWith()
// 9.endsWith()
// 10.search()
// 11.match()
// 12.substring()
// 13.slice() - start and end point
// 14.split() - split a string into an array of substrings (split(separator, limit);)
// 15.replace()  - particular one word ne thay
// 16.replaceAll() - all word replace
// 17.padStart() - Pads the current string with another string (on the left) until it reaches the specified length.
// 18.padEnd() - padding is applied from the end of this string
// 19.concat() - two string concate
// 20.repeat()  - repeat kariya kare
// 21.localeCompare() -
// 22.toString() - convert into string
// --------------------------------------------------------------------
// 1. `.push()` - add element from end
// 2. `.pop()` - remove element from end
// 3. `.shift()` - remove first element
// 4. `.unshift()` - add first element
// 5. `.concat()` - concat to array
// 6. `.map()` - new array create kare juna array to aem j re
// 7. `.filter()` - creates a new array with all elements that pass a test provided by a function.
// 8. `.reduce()` -  apply a function on each element of an array to reduce it to a single value.
// 9.every() - every jya sudhi badhi condition true na kari de tya sudhi true na ape.
// 9.some() - ek value bhi true hoy to true return kare.
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0); // 0 is the initialValue

// console.log(sum); // Output: 15
// ----
// 9. `.forEach()` - It's commonly used for iteration and performing actions on each array element.
// 10. `.find()` - return the first element in an array that satisfies a given condition
// 11. `.includes()` - checks true or false
// 12. `.indexOf()` - find the first index of a specified element in an array.
// 13. `.slice()` - deep copy both array change and shallow copy only one change (slice piece ma convert kare)
// 14. `.splice()` -  method in JavaScript is used to add or remove elements from an array at a specific index.
// --------------------------------------------------------------------

// function removeDuplicates(nums) {
//   let i = 0; // Pointer for the unique position
//   for (let j = 1; j < nums.length; j++) {
//     if (nums[j] !== nums[i]) {
//       i++; // Move the unique pointer
//       nums[i] = nums[j]; // Place the unique element at position i
//     }
//   }
//   return i + 1; // Return the number of unique elements
// }
// console.log(removeDuplicates());

// function removeDuplicates(nums) {
//   let i = 0;
//   while (i < nums.length) {
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i, 1); // Remove duplicate
//     } else {
//       i++; // Move to the next element
//     }
//   }
//   return nums.length; // Return the length of the unique elements
// }
// removeDuplicates();

// setInterval(function () {
//   console.log("Hello JavaScript");
// }, 2000);

// Filter Numbers Greater Than 10
// const numbers = [2, 15, 8, 23, 7, 12];

// const result = numbers.filter((item) => {
//   if (item > 10) {
//     return item;
//   }
// });
// console.log(result);

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = num.filter((checkNum) => {
//   if (checkNum % 2 !== 0) {
//     return checkNum;
//   }
// });
// console.log(result);

// const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
// const result = names.filter((x) => {
//   return x.length < 5;
// });
// console.log(result);

// const arr = [1, 2, 3, 4, 5];
// const output = arr.map(function binary(x) {
//   return x.toString(2);
// });
// console.log(output);

// const numbers = [1, -2, 3, -4, 5, -6, 7];
// const positiveNumbers = numbers.filter((num) => num >= 0);
// console.log(positiveNumbers);
