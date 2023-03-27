/** @format */

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

// const students = [
//     { name: 'Манго', score: 83, courses: ['математика', 'фізика'] },
//     { name: 'Полі', score: 59, courses: ['інформатика', 'математика'] },
//     { name: 'Аякс', score: 37, courses: ['фізика', 'біологія'] },
//     { name: 'Ківі', score: 94, courses: ['література', 'інформатика'] }
//    ];

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map((student) => student.name);

// console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

//! Ланцюжковий метод
// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

// //Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.
// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// // console.log(uniqueSortedCourses);

//!=================================================
//Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен
//елемент, значення якого - це парне число, додаючи до нього значення параметра value.

//Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала
//масив чисел numbers, а створювала, наповнювала і повертала новий масив з
//оновленими значеннями.

// function changeEven(numbers, value) {
//  // Change code below this line
//  let newArray = [];
//  numbers.forEach((element) => {
//   if (element % 2 === 0) {
//    element += value;
//   }
//   newArray.push(element);
//  });
//  console.log(newArray);
//  console.log(numbers);
//  return newArray;
//  // Change code above this line
// }
// changeEven([1, 2, 3, 4, 5], 10);
// changeEven([2, 8, 3, 7, 4, 6], 10);
// changeEven([17, 24, 68, 31, 42], 100);
// changeEven([44, 13, 81, 92, 36, 54], 100);

//!==============================================
//Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин
//назв планет. Обов'язково використовуй метод map().

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

//!===============================================
// Change code below this line
// const users = [
//  {
//   name: 'Moore Hensley',
//   email: 'moorehensley@indexia.com',
//   eyeColor: 'blue',
//   friends: ['Sharron Pace'],
//   isActive: false,
//   balance: 2811,
//   skills: ['ipsum', 'lorem'],
//   gender: 'male',
//   age: 37
//  },
//  {
//   name: 'Sharlene Bush',
//   email: 'sharlenebush@tubesys.com',
//   eyeColor: 'blue',
//   friends: ['Briana Decker', 'Sharron Pace'],
//   isActive: true,
//   balance: 3821,
//   skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//   gender: 'female',
//   age: 34
//  },
//  {
//   name: 'Ross Vazquez',
//   email: 'rossvazquez@xinware.com',
//   eyeColor: 'green',
//   friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   isActive: false,
//   balance: 3793,
//   skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//   gender: 'male',
//   age: 24
//  },
//  {
//   name: 'Elma Head',
//   email: 'elmahead@omatom.com',
//   eyeColor: 'green',
//   friends: ['Goldie Gentry', 'Aisha Tran'],
//   isActive: true,
//   balance: 2278,
//   skills: ['adipisicing', 'irure', 'velit'],
//   gender: 'female',
//   age: 21
//  },
//  {
//   name: 'Carey Barr',
//   email: 'careybarr@nurali.com',
//   eyeColor: 'blue',
//   friends: ['Jordan Sampson', 'Eddie Strong'],
//   isActive: true,
//   balance: 3951,
//   skills: ['ex', 'culpa', 'nostrud'],
//   gender: 'male',
//   age: 27
//  },
//  {
//   name: 'Blackburn Dotson',
//   email: 'blackburndotson@furnigeer.com',
//   eyeColor: 'brown',
//   friends: ['Jacklyn Lucas', 'Linda Chapman'],
//   isActive: false,
//   balance: 1498,
//   skills: ['non', 'amet', 'ipsum'],
//   gender: 'male',
//   age: 38
//  },
//  {
//   name: 'Sheree Anthony',
//   email: 'shereeanthony@kog.com',
//   eyeColor: 'brown',
//   friends: ['Goldie Gentry', 'Briana Decker'],
//   isActive: true,
//   balance: 2764,
//   skills: ['lorem', 'veniam', 'culpa'],
//   gender: 'female',
//   age: 39
//  }
// ];
// Якщо не потрібно в функції:
// const getUserNames = users.map((user) => user.name);
// console.log(getUserNames);

// const getUserNames = (users) => {
//  const userName = users.map((user) => user.name);
//  console.log(userName);
//  return userName;
// };
// // Change code above this line
// const getUserEmails = (users) => {
//  const userEmail = users.map((user) => user.email);
//  console.log(userEmail);
//  return userEmail;
// };
// getUserNames(users);
// getUserEmails(users)

//!====================================
//Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних чисел
//з масиву numbers, а в змінній oddNumbers - масив непарних.
//Обов'язково використовуй метод filter().

//const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

//!========================================
//Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг
//(властивість genres) з масиву books,
//а у змінній uniqueGenres - масив унікальних жанрів, без повторень.
// const books = [
//  {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['adventure', 'history']
//  },
//  {
//   title: 'Beside Still Waters',
//   author: 'Robert Sheckley',
//   genres: ['fiction', 'mysticism']
//  },
//  {
//   title: 'Redder Than Blood',
//   author: 'Tanith Lee',
//   genres: ['horror', 'mysticism', 'adventure']
//  }
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter(
//  (genres, index, array) => array.indexOf(genres) === index
// );
// console.log(uniqueGenres);

//!=========================================
//Використовуючи метод filter(), доповни код таким чином, щоб:

//У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating)
//більший за або дорівнює значенню змінної MIN_RATING.
//У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям
//(властивість author), яке збігається зі значенням у змінній AUTHOR.

// const books = [
//  {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   rating: 8.38
//  },
//  {
//   title: 'Beside Still Waters',
//   author: 'Robert Sheckley',
//   rating: 8.51
//  },
//  {
//   title: 'The Dream of a Ridiculous Man',
//   author: 'Fyodor Dostoevsky',
//   rating: 7.75
//  },
//  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);

//!=====================================
//Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона
//повертала масив користувачів, у яких колір очей (властивість eyeColor)
//збігається зі значенням параметра color.

// const getUsersWithEyeColor = (users, color) => {
//  const usersEyeColor = users.filter((user) => user.eyeColor === color);
//  console.log(usersEyeColor);
//  return usersEyeColor;
// };
// getUsersWithEyeColor(users, 'blue');
// getUsersWithEyeColor(users, 'green');
// getUsersWithEyeColor(users, 'brown');

//Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином,
//щоб вона повертала масив користувачів,
//вік яких (властивість age) потрапляє у проміжок від minAge до maxAge.
// const getUsersWithAge = (users, minAge, maxAge) => {
//  const usersAge = users.filter(
//   (user) => (user.age >= minAge) & (user.age <= maxAge)
//  );
//  console.log(usersAge);
//  return usersAge;
// };

//Доповни функцію getUsersWithFriend(users, friendName) таким чином,
//щоб вона повертала масив користувачів, у яких є один з ім'ям в параметрі
//friendName. Масив друзів користувача зберігається у властивості friends.
// const getUsersWithFriend = (users, friendName) => {
//  const userFriend = users.filter((user) => user.friends.includes(friendName));
//  console.table(userFriend);
//  return userFriend;
// };
// getUsersWithFriend(users, 'Briana Decker');
// getUsersWithFriend(users, 'Goldie Gentry');
// getUsersWithFriend(users, 'Adrian Cross');

//Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів
//всіх користувачів (властивість friends). У декількох користувачів можуть
//бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.
// const getFriends = (users) => {
//  const allFriends = users
//   .flatMap((user) => user.friends)
//   .filter((friend, index, array) => array.indexOf(friend) === index);
//  console.log(allFriends);
//  return allFriends;
// };
// getFriends(users);

//Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив
//активних користувачів, значення властивості isActive яких - true.
// const getActiveUsers = (users) => {
//  const activeUsers = users.filter((user) => user.isActive);
//  console.table(activeUsers);
//  return activeUsers;
// };
// getActiveUsers(users);

//Доповни функцію getInactiveUsers(users) таким чином, щоб вона повертала масив
//неактивних користувачів, значення властивості isActive яких - false.
// const getInactiveUsers = (users) => {
//  const activeUsers = users.filter((user) => user.isActive === false);
//  console.table(activeUsers);
//  return activeUsers;
// };
// getInactiveUsers(users);

//!===================================================
//Використовуючи метод find(), доповни код таким чином, щоб:

//У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title)
//збігається зі значенням змінної BOOK_TITLE.
//У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author)
//збігається зі значенням змінної AUTHOR.

// const books = [
//  {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   rating: 8.38
//  },
//  {
//   title: 'Beside Still Waters',
//   author: 'Robert Sheckley',
//   rating: 8.51
//  },
//  {
//   title: 'The Dream of a Ridiculous Man',
//   author: 'Fyodor Dostoevsky',
//   rating: 7.75
//  },
//  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 }
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

//!==============================================
//Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала
//об'єкт користувача, пошта якого (властивість email) збігається зі значенням
//параметра email.
const users = [
 {
  name: 'Moore Hensley',
  email: 'moorehensley@indexia.com',
  eyeColor: 'blue',
  friends: ['Sharron Pace'],
  isActive: false,
  balance: 2811,
  gender: 'male'
 },
 {
  name: 'Sharlene Bush',
  email: 'sharlenebush@tubesys.com',
  eyeColor: 'blue',
  friends: ['Briana Decker', 'Sharron Pace'],
  isActive: true,
  balance: 3821,
  gender: 'female'
 },
 {
  name: 'Ross Vazquez',
  email: 'rossvazquez@xinware.com',
  eyeColor: 'green',
  friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
  isActive: false,
  balance: 3793,
  gender: 'male'
 },
 {
  name: 'Elma Head',
  email: 'elmahead@omatom.com',
  eyeColor: 'green',
  friends: ['Goldie Gentry', 'Aisha Tran'],
  isActive: true,
  balance: 2278,
  gender: 'female'
 },
 {
  name: 'Carey Barr',
  email: 'careybarr@nurali.com',
  eyeColor: 'blue',
  friends: ['Jordan Sampson', 'Eddie Strong'],
  isActive: true,
  balance: 3951,
  gender: 'male'
 },
 {
  name: 'Blackburn Dotson',
  email: 'blackburndotson@furnigeer.com',
  eyeColor: 'brown',
  friends: ['Jacklyn Lucas', 'Linda Chapman'],
  isActive: false,
  balance: 1498,
  gender: 'male'
 },
 {
  name: 'Sheree Anthony',
  email: 'shereeanthony@kog.com',
  eyeColor: 'brown',
  friends: ['Goldie Gentry', 'Briana Decker'],
  isActive: true,
  balance: 2764,
  gender: 'female'
 }
];
// const getUserWithEmail = (users, email) => {
//  const userEmail = users.find((user) => user.email === email);
//  console.log(userEmail);
//  return userEmail;
// };
// getUserWithEmail(users, 'shereeanthony@kog.com');
// getUserWithEmail(users, 'elmahead@omatom.com');
// getUserWithEmail(users, 'blackburndotson@furnigeer.com');

//!===========================================================
//Використовуючи метод every(), доповни код таким чином, щоб:

//У змінній eachElementInFirstIsEven був результат перевірки всіх
//елементів масиву firstArray на парність.
//У змінній eachElementInFirstIsOdd був результат перевірки всіх
//елементів масиву firstArray на непарність.
//У змінній eachElementInSecondIsEven був результат перевірки всіх
//елементів масиву secondArray на парність.
//У змінній eachElementInSecondIsOdd був результат перевірки всіх
//елементів масиву secondArray на непарність.
//У змінній eachElementInThirdIsEven був результат перевірки всіх
//елементів масиву thirdArray на парність.
//У змінній eachElementInThirdIsOdd був результат перевірки всіх
//елементів масиву thirdArray на непарність.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((el) => el % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((el) => el % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((el) => el % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((el) => el % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((el) => el % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((el) => el % 2 !== 0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

//!============================================
//Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла,
//чи всі користувачі зараз активні (властивість isActive) і повертала true або false.

// const isEveryUserActive = (users) => {
//  const activeUsers = users.every((user) => user.isActive);
//  console.log(activeUsers);
//  return activeUsers;
// };
// isEveryUserActive(users);

//!=============================================
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(el => el % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(el => el % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(el => el % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(el => el % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(el => el % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(el => el % 2 !== 0);

//!================================================
// const isAnyUserActive = (users) => {
//  const activeUsers = users.some((user) => user.isActive);
//  console.log(activeUsers);
//  return activeUsers;
// };
// isAnyUserActive(users);

//!==================================================
//Ігровому сервісу необхідний функціонал підрахунку середнього часу,
//проведеного в іграх. Доповни код таким чином, щоб у змінній totalPlayTime
//вийшло загальний ігровий час з масиву playtimes.
// const players = {
//  mango: 1270,
//  poly: 468,
//  ajax: 710,
//  kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//  return previousValue + number;
// }, 0);
// console.log(totalPlayTime);
// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);

//!================================================
//Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для
//кожного гравця, і отримати загальну суму цих значень часу.
//Розрахувати час для кожного з гравців можна, розділивши його час
//(властивість playtime) на кількість ігор (властивість gamesPlayed).
// const players = [
//  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 }
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//     const totalTime = total + (player.playtime / player.gamesPlayed);
//     console.log(totalTime);
//  return totalTime;
// }, 0);

//!===================================================
//Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і
//повертала суму всіх коштів (властивість balance), які зберігають користувачі
//з масиву users.

// const calculateTotalBalance = (users) =>
//  users.reduce((total, { balance }) => {
//   const totalUser = total + balance;
//   console.log(totalUser);
//   return totalUser;
//  }, 0);

//  //!====Короткий запис===============
//  const calculateTotalBalance = (users) =>
//  users.reduce((total, { balance }) => total + balance, 0);

// calculateTotalBalance(users);

//!=======================================
//Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і
//повертала загальну кількість друзів (властивість friends) усіх користувачів
//з масиву users.
// const getTotalFriendCount = (users) =>
//  users.reduce((total, { friends }) => {
//   const totalFriends = total + friends.length;
//   console.log(totalFriends);
//   return totalFriends;
//  }, 0);

 const getTotalFriendCount = (users) =>
 users.reduce((total, { friends }) => total + friends.length, 0);

console.log(getTotalFriendCount(users));

//!=============================================
//Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву
//releaseDates, відсортована за зростанням, а у змінній alphabeticalAuthors -
//копія масиву імен авторів authors, відсортована за алфавітом.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//  'Tanith Lee',
//  'Bernard Cornwell',
//  'Robert Sheckley',
//  'Fyodor Dostoevsky'
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();
// console.log(releaseDates);
// console.log(authors);
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

//!===========================================
//Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву
//releaseDates, відсортована за зростанням, а у змінній descendingReleaseDates -
//копія, відсортована за спаданням.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

//!=============================================
// const authors = [
//  'Tanith Lee',
//  'Bernard Cornwell',
//  'Robert Sheckley',
//  'Fyodor Dostoevsky',
//  'Howard Lovecraft'
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort(
//  (a, b) => a.localeCompare(b),
//  []
// );

// const authorsInReversedOrder = [...authors].sort(
//  (a, b) => b.localeCompare(a),
//  []
// );

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

//!==================================================
//Доповни код таким чином, щоб:

//У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
//У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
//У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
//У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

// const books = [
//  {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   rating: 8.38
//  },
//  {
//   title: 'Beside Still Waters',
//   author: 'Robert Sheckley',
//   rating: 8.51
//  },
//  {
//   title: 'The Dream of a Ridiculous Man',
//   author: 'Fyodor Dostoevsky',
//   rating: 7.75
//  },
//  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 }
// ];
// Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) =>
//  a.author.localeCompare(b.author)
// );

// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//  b.author.localeCompare(a.author)
// );

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// console.table(sortedByAuthorName);
// console.table(sortedByReversedAuthorName);
// console.table(sortedByAscendingRating);
// console.table(sortedByDescentingRating);

//!=================================================
//Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала
//масив користувачів, відсортований за зростанням їх балансу (властивість balance).

// const sortByAscendingBalance = (users) => {
//  const userBalance = [...users].sort((a, b) => a.balance - b.balance);
//  return userBalance;
// };
// const sortByAscendingBalance = (users) =>
//  [...users].sort((a, b) => a.balance - b.balance);
// console.table(sortByAscendingBalance(users));

//Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона
//повертала масив користувачів, відсортований за спаданням кількості їхніх
//друзів (властивість friends).

// const sortByDescendingFriendCount = (users) => {
//  const userFriend = [...users].sort((a, b) => b.friends.length - a.friends.length);
//  return userFriend;
// };

// const sortByDescendingFriendCount = (users) =>
//  [...users].sort((a, b) => b.friends.length - a.friends.length);

// console.table(sortByDescendingFriendCount(users));

//Доповни функцію sortByName(users) таким чином, щоб вона повертала масив
//користувачів, відсортований за їх ім'ям (властивість name) в алфавітному порядку.

// const sortByName = (users) =>
//  [...users].sort((a, b) => a.name.localeCompare(b.name));
// console.table(sortByName(users));

//!====================================================
//Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в
//алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

// const books = [
//  {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   rating: 8.38
//  },
//  {
//   title: 'Beside Still Waters',
//   author: 'Robert Sheckley',
//   rating: 8.51
//  },
//  {
//   title: 'The Dream of a Ridiculous Man',
//   author: 'Fyodor Dostoevsky',
//   rating: 7.75
//  },
//  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//  {
//   title: 'The Dreams in the Witch House',
//   author: 'Howard Lovecraft',
//   rating: 8.67
//  }
// ];
// const MIN_BOOK_RATING = 8;
// Change code below this line

// const names = books
//  .filter((book) => book.rating > MIN_BOOK_RATING)
//  .map((book) => book.author)
//  .sort((a, b) => a.localeCompare(b));
// console.log(names);
// console.table(books);

//!==================================================
//Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона
//повертала масив імен користувачів, відсортований за зростанням кількості
//їхніх друзів (властивість friends).
// const getNamesSortedByFriendCount = (users) =>
//  [...users]
//   .sort((a, b) => a.friends.length - b.friends.length)
//   .map((user) => user.name);

// console.log(getNamesSortedByFriendCount(users));

//!=====================================================
//Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив
//унікальних імен друзів (властивість friends), відсортований за алфавітом.

// const getSortedFriends = (users) =>
//  users
//   .flatMap((user) => user.friends)
//   .filter((user, index, array) => array.indexOf(user) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(getSortedFriends(users));
// console.log(users);

//!======================================================
//Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона
//повертала загальний баланс користувачів (властивість balance),
//стать яких (властивість gender) збігається зі значенням параметра gender.
const getTotalBalanceByGender = (users, gender) =>
 users
  .filter((user) => user.gender === gender)
  .reduce((total, { balance }) => total + balance, 0);
console.table(getTotalBalanceByGender(users, 'male'));
