let num = 123456;
let digits = num.toString().split('');
let evenCount = 0;
let oddCount = 0;

for (let n of digits) {
    if (parseInt (n) % 2 ===0)
        evenCount++;

    else
    oddcount++;
}

console.log("Even digits:", evenCount);
console.log(" Odd digits:, oddCount");