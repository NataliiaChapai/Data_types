// #1
function extractCurrencyValue(param) {
    const maxLength = 16;
    let newValue = param.split(' ').splice(0, 1).join('');
    if (newValue.length >= maxLength) {
        newValue = BigInt(newValue);
    } else {
        newValue = Number(newValue);
    }

    return newValue;

}

console.log(extractCurrencyValue('120 USD')); // 120
console.log(extractCurrencyValue('1283948234720742 EUR')); // 1283948234720742n


// #2

let object = {
    name: 'Ann',
    age: 16,
    hobbies: undefined,
    degree: null,
    isChild: false,
    isTeen: true,
    isAdult: false
}

function clearObject(obj) { 
    for (let i in obj) {
        if (obj[i] === null || obj[i] === undefined || obj[i] === false || obj[i] === 0) {
            delete obj[i];
        }
    } 
 return obj;
}

console.log(clearObject(object)); // { name: 'Ann', age: 16, isTeen: true }


// #3

function getUnique(param) {
    return Symbol(param);
} 

console.log(getUnique('Test')) // Symbol('Test')


// #4

function countBetweenTwoDays(startDate, endDate) {
    const ms = 1000;
    const s = 60;
    const m = 60;
    const h = 24;
    const d = 7;
    const y = 12;
    const firstDate = new Date(startDate);
    const secondDate = new Date(endDate);
    const msBetween = secondDate - firstDate;
    const days = Math.ceil(msBetween / (ms * s * m * h));
    const weeks = Math.floor(msBetween / (ms * s * m * h * d));
    let months = secondDate.getMonth() - firstDate.getMonth()
        + y * (secondDate.getFullYear() - firstDate.getFullYear());
    
    if (secondDate.getDate() < firstDate.getDate()) {
        months = months - 1;
    }
    
    return `The difference between dates is: ${days} day(-s), ${weeks} week(-s), ${months} month(-s)`;
}

console.log(countBetweenTwoDays('03/22/22', '05/25/22')); // The difference between dates is: 64 day(-s), 9 week(-s), 2 month(-s)


// #5

function filterArray(arr) {
    return arr.filter((item, index, array) => array.indexOf(item) === index);

}

// console.log(filterArray([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


function filterArrayWithSet(arr) {
    return [...new Set(arr)];
}

// console.log(filterArrayWithSet([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]