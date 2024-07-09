// const country = 'Bangladesh';
// const age = 20;
// const isIndependent = true;
// const friends = ['sajib', 'mehedi', 'raju'];
// const phone = {brand: 'sumsung', price: '25000', ram: '8gb'}

// console.log(typeof(country));
// console.log(typeof(age));
// console.log(typeof(isIndependent));

// // not right to check array
// console.log(typeof(friends));

// // right way to check array
// console.log(Array.isArray(friends));

// console.log(typeof(phone));


// const num = [45, 13, 65, 45, 78, 94, 25, 19]


// // old system to check value in array
// if (num.indexOf(19) !== -1) {
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// // update system to check value in array
// console.log(num.includes(19));

// // for array only
// const num = [45, 13, 65, 45, 78, 94, 25, 19]
// const num2 = [46, 63, 88]
// const num3 = [465, 636, 808]
// console.log(num.concat(num2, num3));

const num = [45, 13, 65, 45, 78, 94, 25, 19];
const numSlice = num.slice(0, 5);
// console.log(numSlice);
// console.log(num);
// const numRemove = num.splice(0, 2);
const numRemoveAndAdd = num.splice(5, 2, 666, 444, 888, 999);
// console.log(numRemove);
console.log(num);



