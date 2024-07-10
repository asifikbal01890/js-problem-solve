// array of Object
const phones = [
    {brand: 'sumsung', ram: 8, rom: 128, camera: 102, price: 35000, color: 'black'},
    {brand: 'oppo', ram: 6, rom: 256, camera: 60, price: 30000, color: 'white'},
    {brand: 'redmi', ram: 8, rom: 64, camera: 65, price: 20000, color: 'silver'},
    {brand: 'sumsung', ram: 12, rom: 1024, camera: 200, price: 95000, color: 'black'},
    {brand: 'htc', ram: 8, rom: 556, camera: 70, price: 48000, color: 'green'},
    {brand: 'symphoney', ram: 4, rom: 32, camera: 48, price: 15000, color: 'blue'},
    {brand: 'walton', ram: 8, rom: 128, camera: 32, price: 60000, color: 'gray'},
    {brand: 'iphone', ram: 12, rom: 16, camera: 20, price: 22000, color: 'black'},
    {brand: 'xiomi', ram: 8, rom: 64, camera: 90, price: 66000, color: 'white'},
    {brand: 'realme', ram: 6, rom: 128, camera: 40, price: 40000, color: 'silver'}
]


//     let priceOfArray = [];
// for (let i = 0; i < phones.length; i++) {
//     const object = phones[i];
//     const phonePrice = object.price;
//     priceOfArray.push(phonePrice); 
// }
// const cheapestPrice = Math.min(...priceOfArray);
// console.log(cheapestPrice);


const firstObject = phones[0];

let cheapestPrice = firstObject.price;
for (let i = 0; i < phones.length; i++) {
        const object = phones[i];
        const phonePrice = object.price;
        if (cheapestPrice > phonePrice) {
            cheapestPrice = phonePrice
        }
    }
console.log(cheapestPrice);



// const num = [45, 12, 15, 16, 19]
// console.log(num[2]);

// const a = {brand: 'sumsung', ram: 8, rom: 128, camera: 102, price: 35000, color: 'black'}
// console.log(a.price);
