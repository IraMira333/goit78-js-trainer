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
//    const users = [
//     {
//      name: 'Moore Hensley',
//      email: 'moorehensley@indexia.com',
//      eyeColor: 'blue',
//      friends: ['Sharron Pace'],
//      isActive: false,
//      balance: 2811,
//      skills: ['ipsum', 'lorem'],
//      gender: 'male',
//      age: 37
//     },
//     {
//      name: 'Sharlene Bush',
//      email: 'sharlenebush@tubesys.com',
//      eyeColor: 'blue',
//      friends: ['Briana Decker', 'Sharron Pace'],
//      isActive: true,
//      balance: 3821,
//      skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//      gender: 'female',
//      age: 34
//     },
//     {
//      name: 'Ross Vazquez',
//      email: 'rossvazquez@xinware.com',
//      eyeColor: 'green',
//      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//      isActive: false,
//      balance: 3793,
//      skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//      gender: 'male',
//      age: 24
//     },
//     {
//      name: 'Elma Head',
//      email: 'elmahead@omatom.com',
//      eyeColor: 'green',
//      friends: ['Goldie Gentry', 'Aisha Tran'],
//      isActive: true,
//      balance: 2278,
//      skills: ['adipisicing', 'irure', 'velit'],
//      gender: 'female',
//      age: 21
//     },
//     {
//      name: 'Carey Barr',
//      email: 'careybarr@nurali.com',
//      eyeColor: 'blue',
//      friends: ['Jordan Sampson', 'Eddie Strong'],
//      isActive: true,
//      balance: 3951,
//      skills: ['ex', 'culpa', 'nostrud'],
//      gender: 'male',
//      age: 27
//     },
//     {
//      name: 'Blackburn Dotson',
//      email: 'blackburndotson@furnigeer.com',
//      eyeColor: 'brown',
//      friends: ['Jacklyn Lucas', 'Linda Chapman'],
//      isActive: false,
//      balance: 1498,
//      skills: ['non', 'amet', 'ipsum'],
//      gender: 'male',
//      age: 38
//     },
//     {
//      name: 'Sheree Anthony',
//      email: 'shereeanthony@kog.com',
//      eyeColor: 'brown',
//      friends: ['Goldie Gentry', 'Briana Decker'],
//      isActive: true,
//      balance: 2764,
//      skills: ['lorem', 'veniam', 'culpa'],
//      gender: 'female',
//      age: 39
//     }
//    ];
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
