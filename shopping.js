const products = [
    { name: 'shoes', color: 'gray', size: 41, price: 40, quantity: 4 },
    { name: 't-shirt', color: 'black', size: 'L', price: 19, quantity: 5 },
    { name: 'short-pant', color: 'gray', size: 'L', price: 16, quantity: 6 },
    { name: 'air-birds', color: 'white', price: 180, quantity: 3 },
    { name: 'shirt', color: 'white', size: 'L', price: 60, quantity: 5 },
]


// let totalPrice = 0;
// for (let i = 0; i < products.length; i++) {
//     const object = products[i];
//     const objectPrice = object.price;
//     const objectQuantity = object.quantity;
//     const objectTotalPrice = objectPrice * objectQuantity;
//     totalPrice = totalPrice + objectTotalPrice;
// }

// console.log(totalPrice);


function totalCost(arrayOfObject) {
    let totalPrice = 0;
    for (let i = 0; i < arrayOfObject.length; i++) {
        const object = arrayOfObject[i];
        const objectPrice = object.price;
        const objectQuantity = object.quantity;
        const objectTotalPrice = objectPrice * objectQuantity;
        totalPrice = totalPrice + objectTotalPrice;
    }
    return totalPrice;
}

const total = totalCost(products)
console.log(total);