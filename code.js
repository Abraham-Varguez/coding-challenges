//Friday ES6 in class coding assignment.  Please copy and paste your code into the text-box.


//1 Convert the following function into an arrow function named "arrowMyFunction".
// const myFunction = function (num1, num2) {
//     return num1 + num2;
// };
//Arrow Function 
const arrowMyFunction = (num1, num2) => {
    return num1 + num2
}

console.log(arrowMyFunction(9, 10))
//2 Convert the following function into a one-lined arrow function without a return statement (the return is implicit) . Name the function arrowAdd100
// const add100 = function (money) {
//     return money + 100;
// };

const add100 = money => money + 100;

console.log(add100(3000))

//3 Create an arrow function that takes TWO arguments, 
// a string and a single letter. 
//  The function will count the number of times the 
// specified letter occurs in the string.


let countLetters = (phrase, letter) => {
    let count = 0;
    for (let i = 0; i <= phrase.length; i++) {
        if (phrase.charAt(i) == letter) {
            count += 1
        }

    }
    return count;
}

//phrase is the sentence
// letter is how many letters of a specific one is in the sentence

console.log(countLetters('Jodi, Jordon and Justin are the Goats', 'J'))





