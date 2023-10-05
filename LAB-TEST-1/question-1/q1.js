/*
Question 1: ES6 Features
*/

const mixedArray = ["PIZZA", 10, true, 25, false,"Wings"]

//Create a script with a function named lowerCaseWords that takes a mixed array as input.
const lowerCaseWords = (inputArr) => {
    // return a promise that is resolved or rejected
    return new Promise((resolve, reject) => {
        if (!Array.isArray(inputArr)) {
            reject(new Error("Input is not an array"));
        }

        // filter the non-strings and lower case the remaining words
        const filteredAndLowerCase = inputArr.filter(item => typeof item === 'string').map(item => item.toLowerCase());
    
        if (filteredAndLowerCase.length === 0) {
            reject(new Error("No valid strings in the array"));
        }
    
        resolve(filteredAndLowerCase);
    }); 

}

// output: ['pizza', 'wings']
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
