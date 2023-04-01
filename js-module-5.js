/** @format */

// function showThis() {
//  console.log('this in showThis: ', this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // this in showThis: Window

// const user = {
//  username: 'Mango'
// };

// // Записуємо посилання на функцію у властивість об'єкта
// // Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;
// user.age = 20;
// console.log('user :>> ', user);

// // Викликаємо функцію в контексті об'єкта
// // this буде вказувати на поточний об'єкт, в контексті
// // якого здійснюється виклик, а не на глобальний об'єкт.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

//!===================================================
// const customer = {
//  username: 'Mango',
//  balance: 24000,
//  discount: 0.1,
//  orders: ['Burger', 'Pizza', 'Salad'],
//  // Change code below this line
//  getBalance() {
//   return this.balance;
//  },
//  getDiscount() {
//   return this.discount;
//  },
//  setDiscount(value) {
//   this.discount = value;
//  },
//  getOrders() {
//   return this.orders;
//  },
//  addOrder(cost, order) {
//   this.balance -= cost - cost * this.discount;
//   this.orders.push(order);
//  }
//  // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

//!==============================================
// const historyService = {
//  orders: [
//   { email: 'jacob@hotmail.com', dish: 'Burrito' },
//   { email: 'solomon@topmail.net', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'solomon@topmail.net', dish: 'Apple pie' },
//   { email: 'jacob@hotmail.com', dish: 'Taco' }
//  ],
//  // Change code below this line
//  getOrdersLog() {
//   return this.orders
//    .map((order) => `email: ${order.email} dish: ${order.dish}`)
//    .join(' - ');
//  },
//  getEmails() {
//   const emails = this.orders.map((order) => order.email);
//   const uniqueEmails = new Set(emails);
//   return [...uniqueEmails];
//  },
//  getOrdersByEmail(email) {
//   return this.orders.filter((order) => order.email === email);
//  }
//  // Change code above this line
// };

//!============================================
//Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// const parent = {
//  name: 'Stacey',
//  surname: 'Moore',
//  age: 54,
//  heritage: 'Irish'
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = 'Jason';
// child.age = 27;

// console.log(parent.hasOwnProperty('surname'));
// console.log(parent.hasOwnProperty("heritage"));
// console.log(parent);
// console.log(child);
// console.log(child.heritage);

//!=============================================
//Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був
//прототипом для parent, а той, своєю чергою, був прототипом для child.

// const ancestor = {
//  name: 'Paul',
//  age: 83,
//  surname: 'Dawson',
//  heritage: 'Irish'
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Change code above this line
// console.log(child.heritage);
// console.log(parent.heritage);
// console.log(child.hasOwnProperty('heritage'));

//!=================================================
// class Car {
//  // Change code below this line
//  constructor(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//  }

//  // Change code above this line
// }
// const audi = new Car('Audi', 'Q3', 36000);
// const bmw = new Car('BMW', 'X5', 58900);
// const nissan = new Car('Nissan', 'Murano', 31700);

// console.log(Car);
// console.log(audi);
// console.log(bmw);
// console.log(nissan);

//!=====Деструктуризація в сигнатурі конструктора====
// class Car {
//  // Change code below this line
//  constructor({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//  }
//  // Change code above this line
// }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
// console.log(new Car({ brand: "BMW", model: "X5", price: 58900 }));
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));

//!===================================================
//Додай класу Car два методи.

//getPrice() - повертає значення властивості price з об'єкта,
//який буде його викликати.
//changePrice(newPrice) - оновлює значення властивості price в об'єкта,
//який буде його викликати на newPrice.

// class Car {
//  constructor({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//  }
//  // Change code below this line
//  getPrice() {
//   return this.price;
//  }
//  changePrice(newPrice) {
//   return (this.price = newPrice);
//  }

//  // Change code above this line
// }

//!===============================================
//Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. Клас очікує тільки один аргумент - початковий масив товарів, який записується у властивість items об'єкта, що створюється.

//Оголоси наступні методи класу:

//getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
//addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта, який викликає цей метод.
//removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта, який викликає цей метод.
//Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class Storage {
//  constructor(items) {
//   this.items = items;
//  }
//  getItems() {
//   return this.items;
//  }
//  addItem(newItem) {
//   this.items.push(newItem);
//  }
//  removeItem(itemToRemove) {
//   if (this.items.includes(itemToRemove)) {
//    const index = this.items.indexOf(itemToRemove);
//    return this.items.splice(index, 1);
//   }
//  }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//!=========================
//Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок, який записується у властивість value об'єкта, що створюється.

//Оголоси наступні методи класу:

//getValue() - повертає поточне значення властивості value.
//padEnd(str) - отримує параметр str (рядок) і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
//padStart(str) - отримує параметр str (рядок) і додає його на початок значення властивості value об'єкта, який викликає цей метод.
//padBoth(str) - отримує параметр str (рядок) і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.

// class StringBuilder {
//  constructor(initialValue) {
//   this.value = initialValue;
//  }
//  getValue() {
//   return this.value;
//  }
//  padEnd(str) {
//   this.value = this.value += str;
//  }
//  padStart(str) {
//   this.value = str += this.value;
//  }
//  padBoth(str) {
//   this.value = str += this.value += str;
//  }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

//!==================================

// class Car {
//  // Change code below this line
//  #brand;
//  constructor({ brand, model, price } = {}) {
//   this.#brand = brand;
//   this.model = model;
//   this.price = price;
//  }
//  getBrand() {
//   return this.#brand;
//  }
//  changeBrand(newBrand) {
//   this.#brand = newBrand;
//  }
//  // Change code above this line
// }

// const car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// const car2 = new Car({ brand: 'bmw', model: 'X5', price: 58900 });
// const car3 = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });
// console.log(car1);
// console.log(car2);
// console.log(car3);
// console.dir(Car);
// car3.changeBrand('Honda');
// console.log(car3);

//!======================================
// class Storage {
//  // Change code below this line
//  #items;
//  constructor(items) {
//   this.#items = items;
//  }

//  getItems() {
//   return this.#items;
//  }

//  addItem(newItem) {
//   this.#items.push(newItem);
//  }

//  removeItem(itemToRemove) {
//   this.#items = this.#items.filter((item) => item !== itemToRemove);
//  }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

//!==========================================
// class StringBuilder {
//  // Change code below this line
//  #value;
//  constructor(initialValue) {
//   this.#value = initialValue;
//  }

//  getValue() {
//   return this.#value;
//  }

//  padEnd(str) {
//   this.#value += str;
//  }

//  padStart(str) {
//   this.#value = str + this.#value;
//  }

//  padBoth(str) {
//   this.padStart(str);
//   this.padEnd(str);
//  }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

//!======================================
// class Car {
//  // Change code below this line
//  #brand;
//  #model;
//  #price;

//  constructor({ brand, model, price }) {
//   this.#brand = brand;
//   this.#model = model;
//   this.#price = price;
//  }

//  get brand() {
//   return this.#brand;
//  }

//  set brand(newBrand) {
//   this.#brand = newBrand;
//  }

//  get model() {
//   return this.#model;
//  }

//  set model(newModel) {
//   this.#model = newModel;
//  }

//  get price() {
//   return this.#price;
//  }

//  set price(newPrice) {
//   this.#price = newPrice;
//  }
//  // Change code above this line
// }

//!==============================
// class Car {
//  // Change code below this line
//  #price;
//  static MAX_PRICE = 50000;
//  constructor({ price }) {
//   this.#price = price;
//  }

//  get price() {
//   return this.#price;
//  }

//  set price(newPrice) {
//   if (newPrice <= Car.MAX_PRICE) {
//    this.#price = newPrice;
//   }
//  }
//  // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//!========================================
// class Car {
//  static #MAX_PRICE = 50000;
//  // Change code below this line
//  static checkPrice(price) {
//   if (price <= this.#MAX_PRICE) {
//    return `Success! Price is within acceptable limits`;
//   }
//   return `Error! Price exceeds the maximum`;
//  }
//  // Change code above this line
//  constructor({ price }) {
//   this.price = price;
//  }
// }

// const audi = new Car({ price: 36000 });
// console.log('🚀 ~ file: js-module-5.js:446 ~ audi:', audi);
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//!=========================================
// class User {
//  constructor(email) {
//   this.email = email;
//  }

//  get email() {
//   return this.email;
//  }

//  set email(newEmail) {
//   this.email = newEmail;
//  }
// }
// // Change code below this line

// class Admin extends User {
//  static AccessLevel = {
//   BASIC: 'basic',
//   SUPERUSER: 'superuser'
//  };
// }
// Admin.AccessLevel.BASIC;
// console.log("🚀 ~ file: js-module-5.js:475 ~ Admin.AccessLevel.BASIC:", Admin.AccessLevel.BASIC)
// Admin.AccessLevel.SUPERUSER;
// console.log("🚀 ~ file: js-module-5.js:477 ~ Admin.AccessLevel.SUPERUSER:", Admin.AccessLevel.SUPERUSER)

//!====================================
// class User {
//  email;

//  constructor(email) {
//   this.email = email;
//  }

//  get email() {
//   return this.email;
//  }

//  set email(newEmail) {
//   this.email = newEmail;
//  }
// }

// class Admin extends User {
//  // Change code below this line
//  constructor({ email, accessLevel }) {
//   super(email);
//   this.accessLevel = accessLevel;
//  }
//  static AccessLevel = {
//   BASIC: 'basic',
//   SUPERUSER: 'superuser'
//  };

//  // Change code above this line
// }

// const mango = new Admin({
//  email: 'mango@mail.com',
//  accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

//!===========================================
class User {
 email;

 constructor(email) {
  this.email = email;
 }

 get email() {
  return this.email;
 }

 set email(newEmail) {
  this.email = newEmail;
 }
}
class Admin extends User {
 // Change code below this line
 blacklistedEmails = [];
 static AccessLevel = {
  BASIC: 'basic',
  SUPERUSER: 'superuser'
 };

 constructor({ email, accessLevel }) {
  super(email);
  this.accessLevel = accessLevel;
 }

 blacklist(email) {
  this.blacklistedEmails.push(email);
 }
 isBlacklisted(email) {
  return this.blacklistedEmails.includes(email);
 }
 // Change code above this line
}

const mango = new Admin({
 email: 'mango@mail.com',
 accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist('poly@mail.com');
mango.blacklist('doly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true
