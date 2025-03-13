// Question 1: Create an array named fruits that contains at least 5 fruit names. Print the array to the console.
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Guava"];
// console.log(fruits);

// Question 2: Given an array of numbers [5, 10, 15, 20], access and print the second element of the array.
// let arr = [5, 10, 15, 20];
// console.log(arr[1]);

// Question 3: Create an array of 7 different numbers and use the .length property to print the number of elements in the array.
// let arr = [11, 22, 33, 44, 55, 66, 77];
// console.log(arr.length);

// Question 4: Add the number 25 to the end of the array [10, 20, 30]. Then print the updated array.
// let arr = [10, 20, 30];
// arr.push(25);
// console.log(arr);

// Question 5: Remove the first element from the array [1, 2, 3, 4] using the .shift() method, then print the updated array.
// let arr = [1, 2, 3, 4];
// arr.shift();
// console.log(arr);

// Question 6: Create an array numbers = [1, 2, 3]. Add the number 4 to the end of the array using .push(), then remove the last number using .pop(). Print the array after each operation.
// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr + "/" + "add 4 end");
// arr.pop();
// console.log(arr + "/" + "remove last");

// Question 7: Write a program that checks if a number exists in the array [5, 10, 15, 20]. If the number is found, print "Number found!" to the console.
// let arr = [5, 10, 15, 20];
// function checknumber(num) {
//   if (arr.includes(num)) {
//     console.log("Number is found");
//   } else {
//     console.log("Number is not found");
//   }
// }
// checknumber(12); //not found
// checknumber(20); //found

// Question 8: Create an array of 5 numbers. Use a for loop to iterate through the array and print each element to the console.
// let arr = [11, 22, 33, 44, 55];
// for (i = 0; i < 5; i++) {
//   console.log(arr[i]);
// }

// Question 9: Given an array of numbers [2, 4, 6], use the .map() method to create a new array where each number is doubled. Print the new array.
// let arr = [2, 4, 6];
// let map1 = arr.map((x) => x * 2);
// console.log(map1);

// Question 10: Given an array of numbers [1, 2, 3, 4, 5, 6], use the .filter() method to create a new array that contains only even numbers. Print the new array.
// let arr = [1, 2, 3, 4, 5, 6];
// const evenNumbers = arr.filter((num) => num % 2 == 0);
// console.log(evenNumbers);

// Question 11: Write a program that uses .reduce() to find the sum of all numbers in the array [1, 2, 3, 4, 5] and prints the result.
// const numbers = [1, 2, 3, 4, 5];
// const product = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(product);

// Question 12: Given an array of strings ["apple", "banana", "cherry"], check if the string "banana" is present in the array using .includes(). Print the result.
// let arr = ["apple", "banana", "cherry"];
// console.log(arr.includes("banana")); //true
// console.log(arr.includes("orange")); //false

// Question 13: Create an array of numbers [3, 1, 4, 2, 5]. Sort the array in ascending order using the .sort() method and print the result.
// let arr = [3, 1, 4, 2, 5];
// console.log(arr.sort()); //[1,2,3,4,5,6]

// Question 14: Given two arrays [1, 2, 3] and [4, 5, 6], concatenate them into one array and print the result.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// Question 15: Use array destructuring to extract the first and second elements from the array [10, 20, 30, 40] into variables a and b, then print them.
// let arr1 = [10, 20, 30, 40];
// let [a, b, , d] = arr1;
// console.log(a, b, d); // 10
// console.log(b); // 20
