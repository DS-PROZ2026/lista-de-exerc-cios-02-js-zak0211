const prompt = require ('prompt-sync')();
const listaproibida = ["jarvis", "convidado", "HP" ];

const listaautorizado = [];

for (let i = 0; i < 3; i++){
    let nome = prompt (`Digite o nome do convidado:`);
    
    if (listaproibida.indexOf(nome)!=-1){
        console.log(`ALERTA: Segurança adicionada para o visitante ${nome}`);
    }else{
        listaautorizado.push(nome);
        console.log(`${nome} entrada autorizada`);
    }
}
console.log("visitantes no predio",listaautorizado)
