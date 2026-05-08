const prompt =  require('prompt-sync')();

let nome = ["Ana", "Pedro", "Maria", "Ricardo","joão"];
let i = 0;
let encontrado = false;

do {
    if (nome[i] === "Ricardo"){
        console.log("Usuario encontrado")
        encontrados = true;
        break;
    }
    i++
}while (i < nome.length);
if (!encontrado){
    console.log("Não cadrastado");
}