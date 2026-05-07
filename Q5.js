const prompt =  require('prompt-sync')();

const modelos = ["Duster", "Creta", "Nivus", "Pulse", "Compass"];
const precos = [110000, 135000, 128000, 105000, 180000];

let orcamento = 130000;

let encontrouopcao = false;
console.log(`Com um orçamento de R$ ${orcamento.toLocaleString()} temos: `);

for (let i = 0; i < modelos.length; i++){
    if(orcamento >= precos [i]){
        console.log(`${modelos[i]} R$ ${precos[i].toLocaleString()}`);
    }
}
if (!encontrouopcao){
    console.log("Que tal olhar a nossa seçao de seminovos?")
}