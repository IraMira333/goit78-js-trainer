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
function findLongestWord(string) {
 // Change code below this line
 const words = string.split(' ');
 console.log(words);
 let longestWord = words[0];

 for (let word of words) {
  if (longestWord.length < word.length) {
   longestWord = word;
  }
 }
 console.log('Найдовше слово: ', longestWord);
return longestWord;
 // Change code above this line
}
findLongestWord('The quick brown fox jumped over the lazy dog');
findLongestWord('Google do a roll');
findLongestWord('May the force be with you');
