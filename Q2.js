const prompt =  require('prompt-sync')();
let atletas = [];

for(let i = 0; i < 5; i++) {

    let nome = prompt (`Digite nome do ${i + 1}° atleta: `);
    atletas.push(nome);
}
console.log ("RESULTADO");
for(let i = 0; i < atletas.length; i++){
    if (i === 0){
        console.log(`${atletas[i]} ganhou a medalha de ouro`);
    }else if (i === 1){
        console.log(`${atletas [i]} ganhou a medalha de prata`);
    }else if (i === 2){
        console.log(`${atletas[i]} ganhou a medalha de bronze`);
    }else {
        console.log(`Participante ${atletas[i]} recebeu medalha de honra`);
    }
}