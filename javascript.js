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

// const products = [
//  { name: 'Radar', price: 1300, quantity: 4 },
//  { name: 'Scanner', price: 2700, quantity: 3 },
//  { name: 'Droid', price: 400, quantity: 7 },
//  { name: 'Grip', price: 1200, quantity: 9 }
// ];

// function getAllPropValues(propName) {
//  // Change code below this line

//  let newArray = [];
//  for (let product of products) {
//   let oneProduct = Object.keys(product);
//   if (oneProduct.includes(propName)) {
//    newArray.push(product[propName]);
//   }
//  }
//  console.log(newArray);
//  return newArray;
//  // Change code above this line
// }
// getAllPropValues('name');
// getAllPropValues('quantity');
// getAllPropValues('price');
// getAllPropValues('category');

//!=======================================
//Напиши функцію calculateTotalPrice(productName),
//яка приймає один параметр productName - назва товару.
//Функція повинна повернути загальну вартість (ціна * кількість) товару
//з таким ім'ям з масиву products.

// const products = [
//  { name: 'Radar', price: 1300, quantity: 4 },
//  { name: 'Scanner', price: 2700, quantity: 3 },
//  { name: 'Droid', price: 400, quantity: 7 },
//  { name: 'Grip', price: 1200, quantity: 9 }
// ];

// function calculateTotalPrice(productName) {
//  // Change code below this line
//  let sumOfProduct = 0;
//  for (let product of products) {

//   if (product.name === productName) {
//     sumOfProduct = product.price * product.quantity;
//    console.log(`Загальна вартість ${productName} =`, sumOfProduct) ;

//    return sumOfProduct;
//   }
//  }
//  console.log(`Товар ${productName} не знайдено на складі`);
//  return sumOfProduct;
//  // Change code above this line
// }
// calculateTotalPrice('Blaster');
// calculateTotalPrice('Radar');
// calculateTotalPrice('Droid');
// calculateTotalPrice('Grip');
// calculateTotalPrice('Scanner');

//!=========================================
//У змінній scores зберігається масив результатів тестування.
//Використовуючи розподіл і методи Math.max() і Math.min(),
//доповни код таким чином, щоб у змінній bestScore був найвищий бал,
//а у worstScore - найнижчий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore, worstScore);

//!============================================
//У змінних firstGroupScores, secondGroupScores і thirdGroupScores
//зберігаються результати тестування окремих груп.
//Використовуючи розподіл, доповни код таким чином, щоб:

//У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
//У змінній bestScore був найвищий загальний бал.
//У змінній worstScore був найнижчий загальний бал.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(bestScore, worstScore);

//!============================================
//Напиши функцію makeTask(data) яка приймає один параметр data -
//об'єкт з наступними властивостями.

//text - текст завдання.
//category - категорія завдання.
//priority - пріоритет завдання.
//Функція повинна створити і повернути новий об'єкт завдання,
//не змінюючи напряму параметр data. У новому об'єкті повинна бути
//властивість completed, значення якої зберігається в однойменній локальній змінній.

//В параметрі data гарантовано буде тільки властивість text,
//а інші дві, category і priority, можуть бути відсутніми. Тоді,
//в новому об'єкті завдання, у властивостях category і priority повинні бути
//значення за замовчуванням, що зберігаються в однойменних локальних змінних.

// function makeTask(data) {
//  const completed = false;
//  const category = 'General';
//  const priority = 'Normal';
//  // Change code below this line
//  const newData = { category, priority, completed, ...data };

//  console.log(newData);
//  return newData;
//  // Change code above this line
// }
// makeTask({});
// makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' });
// makeTask({ category: 'Finance', text: 'Take interest' });
// makeTask({ priority: 'Low', text: 'Choose shampoo' });
// makeTask({ text: 'Buy bread' });

//!=============================================
//Використовуючи операцію rest, доповни код функції add() таким чином,
//щоб вона приймала будь-яку кількість аргументів, рахувала і повертала їх суму.

// function add(...args) {
//  let total = 0;
//  for (let arg of args) {
//   total += arg;
//  }
//  console.log(total);
//  return total;
//  // Change code above this line
// }
// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36);

//!=============================================
//Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції
//addOverNum() таким чином, щоб вона рахувала суму тільки тих аргументів, які
//більші за задане число. Це число повинно бути першим параметром функції.

// function addOverNum(firstNumber, ...args) {
//  let total = 0;

//  for (const arg of args) {
//   if (arg > firstNumber) {
//    total += arg;
//   }
//  }
//  console.log(total);
//  return total;
//  // Change code above this line
// }
// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);

//!=================================================
//Функція findMatches() приймає довільну кількість аргументів. Першим аргументом
//завжди буде масив чисел, а решта аргументів будуть просто числами.

//Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому
//будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

//Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна
//повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.

// function findMatches(firstElement, ...args) {
//  const matches = []; // Don't change this line

//  for (const item of firstElement) {
//     if (args.includes(item)) {
//         matches.push(item);
//     }
//  }
//  console.log(matches);
//  // Change code above this line
//  return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);

//!======================================================
//Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву
//книги з oldName на newName у властивості books. Використовуй indexOf() для того,
//щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.

// const bookShelf = {
//  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//  updateBook(oldName, newName) {
//   // Change code below this line
//   const position = this.books.indexOf(oldName);
//   console.log(position);
//   this.books.splice(position, 1, newName);
//   console.log(this.books);
// return this.books;
//   // Change code above this line
//  }
// };
// bookShelf.updateBook('Haze', 'Dungeon chronicles');
// bookShelf.updateBook('The last kingdom', 'Dune');

//!======================================================
//Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали
// не з масивом рядків, а з масивом об'єктів.

//getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.

//addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості
//potions, але тільки, якщо такого зілля ще немає в інвентарі.
//В іншому випадку повертається рядок.

//removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName
// з масиву у властивості potions.

//updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля
// з назвою oldName на newName в масиві potions.
// const atTheOldToad = {
//  potions: [
//   { name: 'Speed potion', price: 460 },
//   { name: 'Dragon breath', price: 780 },
//   { name: 'Stone skin', price: 520 }
//  ],
// Change code below this line
//  getPotions() {
//   console.log(this.potions);
//   return this.potions;
//  },

//  addPotion(newPotion) {
//   console.log(newPotion.name);
//   for (const { name } of this.potions) {
//    if (name === newPotion.name) {
//     console.log(
//      `Error! Potion ${newPotion.name} is already in your inventory!`,
//      this.potions
//     );
//     return `Error! Potion ${newPotion.name} is already in your inventory!`;
//    }
//   }
//   console.log(this.potions);
//   return this.potions.push(newPotion);
//  },

//  removePotion(potionName) {
//   for (const item of this.potions) {
//    if (item.name === potionName) {
//     console.log(potionName);
//     const potionIndex = this.potions.indexOf(item);
//     console.log(potionIndex);
//     console.log(`Новий список зіль:`, this.potions);
//     return this.potions.splice(potionIndex, 1);
//    }
//   }

//   console.log(`Potion ${potionName} is not in inventory!`);
//   return `Potion ${potionName} is not in inventory!`;
//  },

//  updatePotionName(oldName, newName) {
//   for (const item of this.potions) {
//    if (item.name === oldName) {
//     console.log(oldName);
//     item.name = newName;
//     console.log(this.potions);
//     return this.potions;
//    }
//   }

//   console.log(`Potion ${oldName} is not in inventory!`);
//   return `Potion ${oldName} is not in inventory!`;
//  }
// Change code above this line
// };
// atTheOldToad.getPotions();
// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });

// atTheOldToad.removePotion('Dragon breath');
// atTheOldToad.removePotion('Speed potion');
// atTheOldToad.removePotion('Red blood');
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');

//!==========================================
//* МОДУЛЬ 4

// const isRecipientAvailable = Math.random() > 0.5;
// console.log(isRecipientAvailable);

//==========================================
// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//     console.log(`Індекс ${index}, значення ${number}`);
//   });

// //Стрілочну колбек-функцію також можна оголошувати окремо і передавати на неї посилання.
//   const logMessage = (number, index) => {
//     console.log(`Індекс ${index}, значення ${number}`);
//   };

//   numbers.forEach(logMessage);

//!========================================
// Імперативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); // [4, 5]

// Декларативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]

//!=========================================
//Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу
//order таким чином, щоб він приймав другим і третім параметром
//два колбеки onSuccess і onError.

//Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName,
//метод order повинен повертати результат виклику колбека onError,
//передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы>
//in the assortment."
//Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName,
//метод order повинен повертати результат виклику колбека onSuccess,
//передаючи йому аргументом назву замовленої піци.

// const pizzaPalace = {
//  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//  order(pizzaName, onSuccess, onError) {
//   if (this.pizzas.includes(pizzaName)) {
//    return onSuccess(pizzaName);
//   }
//   return onError(pizzaName);
//  }
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//  return `Error! There is no pizza with a name ${error} in the assortment.`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

//!=======================================================
//Функція calculateTotalPrice(orderedItems) приймає один параметр
//orderedItems - масив чисел, і розраховує загальну суму його елементів,
//яка зберігається у змінній totalPrice і повертається як результат роботи функції.

//Виконай рефакторинг функції таким чином, щоб замість циклу for,
//вона використовувала метод forEach.
// function calculateTotalPrice(orderedItems) {
//  let totalPrice = 0;
//  // Change code below this line
//  orderedItems.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
//   totalPrice += number;
//  });

//  console.log(totalPrice);
//  // Change code above this line
//  return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

//!========================================================
//Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий
//масив, в якому будуть тільки ті елементи оригінального масиву,
//які більші за значення параметра value.

//Виконай рефакторинг функції таким чином, щоб замість циклу for,
//вона використовувала метод forEach.

// function filterArray(numbers, value) {
//  const filteredNumbers = [];
//  // Change code below this line
//  numbers.forEach((element) => {
//     console.log(`Елемент масиву:`, element);
//   if (element > value) {
//    filteredNumbers.push(element);
//   }
//  });

//  console.log(`New array:`, filteredNumbers);
//  // Change code above this line
//  return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

//!====================================================
//Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної
//довжини в параметри firstArray і secondArray, і повертає
//новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.

//Виконай рефакторинг функції таким чином, щоб замість циклу for,
//вона використовувала метод forEach.
// function getCommonElements(firstArray, secondArray) {
//  const commonElements = [];
//  // Change code below this line
//  firstArray.forEach((element) => {
//   if (secondArray.includes(element)) {
//    commonElements.push(element);
//   }
//  });
//  console.log(`New array:`, commonElements);

//  return commonElements;
//  // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4])
// getCommonElements([1, 2, 3], [2, 1, 17, 19])
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
// getCommonElements([1, 2, 3], [10, 20, 30])

//!=======================================================
// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']

//!=========================================================
// const students = [
//  { name: 'Банго', score: 83 },
//  { name: 'Полі', score: 59 },
//  { name: 'Аякс', score: 37 },
//  { name: 'Ківі', score: 94 }
// ];
// const stuDents = [
//  { name: 'Банго', score: 83 },
//  { name: 'Полі', score: 59 },
//  { name: 'Аякс', score: 37 },
//  { name: 'Ківі', score: 94 }
// ];
// const studenTs = [
//  { name: 'Банго', score: 83 },
//  { name: 'Полі', score: 59 },
//  { name: 'Аякс', score: 37 },
//  { name: 'Ківі', score: 94 }
// ];

// const inAscendingScoreOrder = students.sort(
//  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = stuDents.sort(
//  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = studenTs.sort((firstStudent, secondStudent) =>
//  firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAscendingScoreOrder);
// console.log(inDescendingScoreOrder);
// console.log(inAlphabeticalOrder);

//!=============================================
//Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест.
//З цією метою ми відсортуємо копію масиву методом sort(), після чого методом
//map() створимо масив значень властивості name з відсортованого масиву.

const students = [
 { name: 'Манго', score: 83, courses: ['математика', 'фізика'] },
 { name: 'Полі', score: 59, courses: ['інформатика', 'математика'] },
 { name: 'Аякс', score: 37, courses: ['фізика', 'біологія'] },
 { name: 'Ківі', score: 94, courses: ['література', 'інформатика'] }
];

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map((student) => student.name);

// console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

//! Ланцюжковий метод
const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map(student => student.name);

console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

//Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.
const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses);
