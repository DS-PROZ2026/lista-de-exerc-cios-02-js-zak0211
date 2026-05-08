const prompt =  require('prompt-sync')();

const nomeVendedor = ["Ana","Ester","Manu","Emelyn","Andre"];
const totalVendas = [12000,800,15000,5000,11000];

const somaVendas = totalVendas.reduce((acc, valor) => acc + valor, 0);
const mediaVendas = somaVendas / totalVendas.length;
const metaMinima = mediaVendas * 0.7;

let vendedorDestaque = {nome: "", valor : 0};
let abaixoDameta = [];

for(let i = 0; i < nomeVendedor.length; i++){
    if (totalVendas[i] > vendedorDestaque.valor){
        vendedorDestaque = {nome: nomeVendedor[i], valor: totalVendas[i]};
    }
    if(totalVendas[i] < metaMinima) {
      abaixoDameta.push(nomeVendedor[i]);
    }
    }
    console.log(`media de vendas do grupo: R$ ${mediaVendas.toFixed(2)}`);
    console.log(`vendedor Destaque ${vendedorDestaque.nome} (R$ ${vendedorDestaque.valor})`);
    console.log(`Abaixo da meta: ${abaixoDameta.length > 0 ? abaixoDameta.join(", ") : "ninguem"}`);
