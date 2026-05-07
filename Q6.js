const prompt =  require('prompt-sync')();

const produtos = ["monitor", "mouse" ,"teclado", "cabo HDMI"];
const quantidade = [10,2,8,3];

console.log("Produtos com estoque critico: ");

for(let i = 0; i < produtos.length; i++){
    if (quantidade[i] < 5){
    console.log(produtos[i])
}
}