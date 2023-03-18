/** @format */
// const userAnswer = prompt('Яка офіційна назва JavaScript?');
// userAnswer === 'ESMAScript'
//  ? alert('Правильно!')
//  : alert('Не знаєте? ESMAScript!');

//!============================================
// function getExtremeElements(array) {
//  // Change code below this line

//  //  const lastDelElement = array.length - 2;
//  array.splice(1, array.length - 2);

//  console.log(array);

//  return array;
//  // Change code above this line
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(['Earth', 'Mars', 'Venus']);
// getExtremeElements(['apple', 'peach', 'pear', 'banana']);

//!==============================================
// function splitMessage(message, delimiter) {
//     let words;
//     // Change code below this line
//   words = message.split(delimiter);
//     // Change code above this line
//     console.log(words)
//     return words;
//   }
//   splitMessage("Mango hurries to the train", " ");
//   splitMessage("Mango", "");
//   splitMessage("best_for_week", "_");

//!===============================================
// function slugify(title) {
//     // Change code below this line
//   const newtitle =
//     (title.toLowerCase().split(" ")).join("-");
//   console.log(newtitle);
//   return newtitle;
//     // Change code above this line
//   }
//   slugify("Arrays for begginers");
//   slugify("English for developer");
//   slugify("Ten secrets of JavaScript");
//   slugify("How to become a JUNIOR developer in TWO WEEKS");

//!==================================================
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// const array = firstArray.concat(secondArray);
//   let newArray;
//   if (array.length > maxLength) newArray = array.slice(0, maxLength);
//   else newArray = array;
// console.log(newArray);
//   return newArray;

//     // Change code above this line
//   }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

//!==============================================
// function calculateTotal(number) {
//  // Change code below this line
//  let total = 0;
//  for (let i = 0; i <= number; i += 1) {
//   total += i;
//  }

//  console.log(total);
//  return total;
//  // Change code above this line
// }
// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);
// calculateTotal();

//!==============================================
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

//!=============================================

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//   for (let  i = 0; i < order.length; i += 1) {
//     total += order[i]

//   }
//   console.log(total);
//     // Change code above this line
//     return total;

//   }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

//!=============================================
// function findLongestWord(string) {
//  // Change code below this line
//  const words = string.split(' ');
//  console.log(words);
//  let longestWord = words[];

//  for (let word of words) {
//   if (longestWord.length < word.length) {
//    longestWord = word;
//   }
//  }
//  console.log('Найдовше слово: ', longestWord);
// return longestWord;
//  // Change code above this line
// }
// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');

//!================================================
// function createArrayOfNumbers(min, max) {
//  const numbers = [];
//  // Change code below this line
// //  while (min < max) {
// //   min += 1;
// //   numbers.push(min);
// //  }
// for (let index = min; index <= max; index++) {
//     numbers.push(index);

// }
//  console.log(numbers);
//  // Change code above this line
//  return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

//!====================================================
// function filterArray(numbers, value) {
//     // Change code below this line
//    const newNumbers = [];
//  for (let number of numbers) {
//    if (number > value) {
//      newNumbers.push(number);
//    }
//  }
//    console.log(newNumbers);
//  return newNumbers;

//    // Change code above this line
//  }
//  filterArray([1, 2, 3, 4, 5], 3);
//  filterArray([1, 2, 3, 4, 5], 4);
//  filterArray([1, 2, 3, 4, 5], 5);
//  filterArray([12, 24, 8, 41, 76], 38);
//  filterArray([12, 24, 8, 41, 76], 20);

//!====================================================
// function checkFruit(fruit) {
//  const fruits = ['apple', 'plum', 'pear', 'orange'];
//  console.log(fruits.includes(fruit));
//  return fruits.includes(fruit); // Change this line
// }
// checkFruit('plum');
// checkFruit('mandarin');
// checkFruit('pear');
// checkFruit('Pear');
// checkFruit('apple');

// !==================================================
// function getCommonElements(array1, array2) {
//     // Change code below this line
//   const newArray = [];
//     for (let element of array1) {
//       if (array2.includes(element)) {
//         newArray.push(element);
//       }
//     }
//   console.log(`New box:`, newArray);
//   return newArray;
//    // Change code above this line
//   }
//   getCommonElements([1, 2, 3], [2, 4]);
//   getCommonElements([1, 2, 3], [2, 1, 17, 19]);
//   getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
//   getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
//   getCommonElements([1, 2, 3], [10, 20, 30]);

//!=====================================================
// function calculateTotalPrice(order) {
//  let total = 0;
//  // Change code below this line
//  for (let element of order) {
//   total += element;
//  }
//  console.log(`Total =`, total);
//  // Change code above this line
//  return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);

//!==========================================
// function filterArray(numbers, value) {
//  // Change code below this line
//  const filteredNumbers = [];

//  for (let number of numbers) {
//   if (number > value) {
//    filteredNumbers.push(number);
//   }
//  }
//  console.log(`Масив з чисел більших ніж ${value}:`, filteredNumbers);
//  return filteredNumbers;
//  // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

//!===========================================
// function getEvenNumbers(start, end) {
//  // Change code below this line
//  const twinNumber = [];
//  for (let i = start; i <= end; i += 1) {
//   if (i % 2 === 0) {
//    twinNumber.push(i);
//   }
//  }
//  console.log(`Масив з парних чисел:`, twinNumber);
//  return twinNumber;

//  // Change code above this line
// }
// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);

//!========================================
// function includes(array, value) {
//  // Change code below this line
//  for (let element of array) {
//   if (element === value) {
//    console.log(true);
//    return true;
//   }
//  }
//  console.log(false);
//  return false;
//  // Change code above this line
// }
// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter');
// includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus');
// includes(['apple', 'plum', 'pear', 'orange'], 'plum');
// includes(['apple', 'plum', 'pear', 'orange'], 'kiwi');

//!=======OBJECTS==============================
// const apartment = {
//  imgUrl: 'https://via.placeholder.com/640x480',
//  descr: 'Spacious apartment in the city center',
//  rating: 4,
//  price: 2153,
//  tags: ['premium', 'promoted', 'top'],
//  owner: {
//   name: 'Henry',
//   phone: '982-126-1588',
//   email: 'henry.carter@aptmail.com'
//  }
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

//!==============================================
// const apartment = {
//  imgUrl: 'https://via.placeholder.com/640x480',
//  descr: 'Spacious apartment in the city center',
//  rating: 4,
//  price: 2153,
//  tags: ['premium', 'promoted', 'top'],
//  owner: {
//   name: 'Henry',
//   phone: '982-126-1588',
//   email: 'henry.carter@aptmail.com'
//  }
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// console.log(apartment);

//!================================================
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };

//   // Change code below this line
//   apartment.area = 60;
//   apartment.rooms = 3;
//   apartment.location = {
//     country: "Jamaica",
//   city: "Kingston",};
//   console.log(apartment);

//!=================================
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };

//!=======================================
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Change code below this line

//   for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   console.log(`Ключі обєкта:`, keys);
//   console.log('Значення ключів обєкта:', values);

//!=====Перевірка на власну властивість=====
// const keys = [];
// const values = [];
// const advert = {
//  service: 'apt'
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//  // Change code below this line
//  if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//  }
//  // Change code above this line
// }

//!================================================
// Напиши функцію countProps(object), яка рахує і повертає кількість власних
//властивостей об'єкта в параметрі object. Використовуй змінну propCount для
//зберігання кількості властивостей об'єкта.

// function countProps(object) {
//  let propCount = 0;
//  // Change code below this line
//  for (const key in object) {
//   if (object.hasOwnProperty(key)) {
//    propCount += 1;
//   }
//  }
//  console.log(propCount);
//  // Change code above this line
//  return propCount;
// }
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

//!====================================================
//Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
//Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
//і додай в масив values всі значення його властивостей.

// const apartment = {
//  descr: 'Spacious apartment in the city center',
//  rating: 4,
//  price: 2153
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//  values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

//!===========================================
// function countProps(object) {
//  // Change code below this line
//  const propCount = Object.keys(object).length;

//  console.log(propCount);
//  return propCount;
//  // Change code above this line
// }
// countProps({});
// countProps({ name: 'Mango', age: 2 });
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

//!==============================================
//Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат,
//де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата.
//Функція повинна розрахувати загальну суму зарплат співробітників і повернути її.
//Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// function countTotalSalary(salaries) {
//  let totalSalary = 0;
//  // Change code below this line
//  const salariesArray = Object.values(salaries);
//  for (let salary of salariesArray) {
//   totalSalary += salary;
//  }
//  console.log(totalSalary);
//  // Change code above this line
//  return totalSalary;
// }
// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

//!==================================================
//Перебери масив об'єктів colors, використовуючи цикл for...of.
//Додай у масив hexColors значення властивостей hex,
//а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//  { hex: '#f44336', rgb: '244,67,54' },
//  { hex: '#2196f3', rgb: '33,150,243' },
//  { hex: '#4caf50', rgb: '76,175,80' },
//  { hex: '#ffeb3b', rgb: '255,235,59' }
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//  hexColors.push(color.hex);
//  rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

//!====================================================
//Напиши функцію getProductPrice(productName), яка приймає один параметр
//productName - назва продукту. Функція шукає об'єкт продукту з таким ім'ям
// (властивість name) в масиві products і повертає його ціну
//(властивість price). Якщо продукт з такою назвою не знайдений,
//функція повинна повертати null.

// const products = [
//  { name: 'Radar', price: 1300, quantity: 4 },
//  { name: 'Scanner', price: 2700, quantity: 3 },
//  { name: 'Droid', price: 400, quantity: 7 },
//  { name: 'Grip', price: 1200, quantity: 9 }
// ];

// function getProductPrice(productName) {
//  // Change code below this line
//  for (let product of products) {
//   console.log(product.name);
//   if (productName === product.name) {
//    console.log(`${product.name} коштує ${product.price}`);
//    return product.price;
//   }
//  }
//  console.log(`${productName} не знайдено`);
//  return null;
//  // Change code above this line
// }
// getProductPrice('Radar');
// getProductPrice('Grip');
// getProductPrice('Scanner');
// getProductPrice('Droid');
// getProductPrice('Engine');

//!===================================================
//Напиши функцію getAllPropValues(propName), яка приймає один параметр
//propName - ім'я (ключ) властивості. Функція повинна повернути масив
//всіх значень властивості з таким ім'ям з кожного об'єкта в масиві
//products. Якщо в об'єктах відсутні властивості з таким ім'ям,
//функція повинна повернути порожній масив.

const products = [
 { name: 'Radar', price: 1300, quantity: 4 },
 { name: 'Scanner', price: 2700, quantity: 3 },
 { name: 'Droid', price: 400, quantity: 7 },
 { name: 'Grip', price: 1200, quantity: 9 }
];

function getAllPropValues(propName) {
 // Change code below this line
 let newArray = [];
 for (let product of products) {
  console.log(Object.keys(product));
  console.log(Object.values(product));
  if (Object.keys(product).includes(propName)) {
    return console.log(`${propName} true`);
   //    newArray.push(Object.values(product));
  }
 }
 
 return console.log(`${propName} false`);
 // Change code above this line
}
getAllPropValues('name');
// getAllPropValues('quantity');
// getAllPropValues('price');
getAllPropValues('category');
