const numbers = [-3, 5, 7, -89, 0, 8, -6, -74]

let negetiveNumbers = [];
let positiveNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number < 0) {
        negetiveNumbers.push(number)
    }
    if (number >= 0) {
        positiveNumbers.push(number)
    }
    
}
console.log(negetiveNumbers);
console.log(positiveNumbers);