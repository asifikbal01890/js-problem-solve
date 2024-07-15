function canPay(array, number) {
    if (array.length === 0) {
        return "Please don't use empty array"
    }
    else {
        let totalTaka = 0;
        for (let i = 0; i < array.length; i++) {
            const taka = array[i];
            totalTaka = taka + totalTaka;
        }
        if (totalTaka === number || totalTaka > number) {
            return true
        }
        else {
            return false
        }
    }
}

const peramitter = canPay([1, 2, 5], 10)
console.log(peramitter);