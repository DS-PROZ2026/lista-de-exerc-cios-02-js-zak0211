const prompt =  require('prompt-sync')();

const estoque = [
    {produto: "Camiseta", quantidade: 15},
    {produto: "calça", quantidade: 10},
    {produto: "meia", quantidade: 50},

];
let totalItens = 0;

for(let i = 0;i <estoque.length; i++){
    totalItens += estoque[i].quantidade;
}
console.log("O total de itens em estoque é:", totalItens);