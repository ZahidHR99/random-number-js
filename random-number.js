function randomNumber(){
    const output = Math.random() * 10;
    return Math.floor(output);
}

const number = 100;
const result = randomNumber(number);
console.log(result)