const prompt =  require('prompt-sync')();

let temperatura = [];
let soma = 0;
for (i = 0; i < 7; i++){
    let temp = parseFloat(prompt(`Digite a tempeatura do dia ${i + 1}: `));
    temperatura.push(temp);
}
let maxima = temperatura[0];
let minima = temperatura[0];

for(let i = 0; i < temperatura.length; i++){
    soma += temperatura[i];

    if(temperatura[i] > maxima){
        maxima = temperatura[i]
    }
    if(temperatura[i] < minima){
        minima = temperatura[i]
    }
}
let media = soma / temperatura.length;
console.log(`media da semana: ${media.toFixed(1)}`);
console.log(`temperatura maxima: ${maxima}`);
console.log(`temperatura minima: ${minima}`);
