function faturamento(arrayFaturamento) {
    const diasValidos = arrayFaturamento.filter((num) => num.valor > 0)
    
    const maiorValor = Math.max(...diasValidos.map((num) => num.valor));
    const menorValor = Math.min(...diasValidos.map((num) => num.valor));

    const somaValores = diasValidos.reduce((acc, num) => acc + num.valor, 0);
    const media = (somaValores / diasValidos.length);

    const maiorMedia = diasValidos.filter((num) => num.valor > media).length;

    return {
        maiorValor,
        menorValor,
        maiorMedia
    }
}

const faturamentoMensal = [
    { dia: 1, valor: 200 },
    { dia: 2, valor: 300 },
    { dia: 3, valor: 0 },
    { dia: 4, valor: 150 },
    { dia: 5, valor: 500 },
    { dia: 6, valor: 0 },
    { dia: 7, valor: 0 }, 
    { dia: 8, valor: 400 },
    { dia: 9, valor: 0 },
    { dia: 10, valor: 100 },
    { dia: 11, valor: 0 },
    { dia: 12, valor: 700 },
    { dia: 13, valor: 0 },
    { dia: 14, valor: 0 },
    { dia: 15, valor: 350 },
    { dia: 16, valor: 0 },
    { dia: 17, valor: 600 },
    { dia: 18, valor: 450 },
    { dia: 19, valor: 0 },
    { dia: 20, valor: 0 },
    { dia: 21, valor: 0 },
    { dia: 22, valor: 150 },
    { dia: 23, valor: 500 },
    { dia: 24, valor: 0 },
    { dia: 25, valor: 700 },
    { dia: 26, valor: 800 },
    { dia: 27, valor: 0 },
    { dia: 28, valor: 100 },
    { dia: 29, valor: 0 },
    { dia: 30, valor: 0 }
];

const resultado = faturamento(faturamentoMensal);

console.log("Maior faturamento mensal: ", resultado.maiorValor);
console.log("Menor faturamento mensal: ", resultado.menorValor);
console.log("Dias com faturamento acima da média: ", resultado.maiorMedia)