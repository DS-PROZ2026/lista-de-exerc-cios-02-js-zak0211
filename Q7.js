const prompt =  require('prompt-sync')();

const frota = [
    {modelo: "volvo", Km: 8500, ultimaRevisaoMeses: 3},
     {modelo: "Scania", Km: 12000, ultimaRevisaoMeses: 2},
      {modelo: "Mercedes", Km: 5000, ultimaRevisaoMeses: 8},
       {modelo: "Iveco", Km: 9500, ultimaRevisaoMeses: 4},
        {modelo: "DAF", Km: 15000, ultimaRevisaoMeses: 10}
];
const frotaManutencao = frota.filter(veiculo => {
    return veiculo.Km > 10000 || veiculo.ultimaRevisaoMeses > 6;
});
console.log(`Veiculos identificados: ${frotaManutencao.length}`)
console.log("modelos:", frotaManutencao.map(v => v.modelo).join(", "));