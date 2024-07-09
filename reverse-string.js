// const mySelf = 'I am a developer';
// const selfOfArray = mySelf.split('') 

// var number = selfOfArray.length-1;
// let newArray = [];
// while (number <= selfOfArray.length && number >= 0) {
//     const characters = selfOfArray[number];
//     newArray.push(characters)
//     number--;
// }

// const newString = newArray.join('')
// console.log(newString);



// const mySelf = 'I am a developer';
// const selfOfArray = mySelf.split(' ')

// let newArray = []
// for (let i = selfOfArray.length - 1; i <= selfOfArray.length && i >= 0; i--) {
//     const characters = selfOfArray[i];
//     newArray.push(characters)

// }
// const newString = newArray.join(' ')




function reverseCharacters(any) {
    const selfOfArray = any.split('')

    let newArray = []
    for (let i = selfOfArray.length - 1; i <= selfOfArray.length && i >= 0; i--) {
        const characters = selfOfArray[i];
        newArray.push(characters)

    }
    const newString = newArray.join('');
    return newString;
}

const a = 'tmi bondhu kal pakhi ami jno ki';
const revers = reverseCharacters(a);
console.log(revers);