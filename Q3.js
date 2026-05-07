const prompt =  require('prompt-sync')();

const itemcaminho = ["faca", "garrafa", "ração", "lanterna", "pilha", "mouse"];
let mochila = [];
const limite = 4;
console.log("inicio da jornada: mochila vazia");

itemcaminho.forEach((item, index) => {
    console.log(`\n ${index + 1} item encontrado ${item}`);

if (mochila.length < limite){
    mochila.push(item);
    console.log(`${item} adicionado automaticamente`);
}else {
    let decisao = prompt (`mochila cheia! você encontrou ${item}. \n\nitens atuais ${mochila.join(",")}\n\deseja descartar algum item para pegar o novo?(digite o nome do item ou 'cancelar')`);
    let itemindex = mochila.indexOf(decisao);

    if (itemindex !== -1){
        let descartado = mochila.splice(itemindex, 1, item);
    }else {
        console.log(`você ignorou ${item}`);
    }
}});
console.log(`inventario atual: [${mochila.join (",")}]`);
console.log ("conteúdo final da mochila", mochila)