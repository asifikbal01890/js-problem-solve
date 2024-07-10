/* 
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200. First 100 tickets price will be 100 ticket. 
rest tickets will be 90 taka per piece
    first 100 ---->100tk
    rest ----> 90tk
3. if you purchase more than 200 tickets
    first 100 ---> 100tk
    101-200 ---> 90tk
    200+ ----> 70tk
*/


function calculate(ticketQunatity) {
    const first100 = 100;
    const secound100 = 90;
    const third100 = 70;
    if (ticketQunatity <= 100) {
        const ticketPrice = ticketQunatity * first100;
        return ticketPrice;
    }
    else if (ticketQunatity <= 200) {
        const first100Price = 100 * first100;
        const moreThen100 = ticketQunatity - 100; 
        const secound100Price = moreThen100* secound100;
        const totalPrice = first100Price + secound100Price;
        return totalPrice;
    }
    else {
        const first100Price = 100 * first100;
        const secound100Price = 100 * secound100;
        const moreThen200 = ticketQunatity - 200; 
        const third100Price = moreThen200 * third100;
        const totalPrice = first100Price + secound100Price + third100Price ;
        return totalPrice;
    }
    
}
const totalCost = calculate(302);
console.log(totalCost);