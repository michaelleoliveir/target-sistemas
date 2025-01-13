function percentual(array) {
    const faturamentoTotal = array.reduce((acc, num) => acc + num.valor, 0);

    const percentuais = array.map((item) => ({
        estado: item.estado,
        percentual: ((item.valor / faturamentoTotal) * 100).toFixed(2)
    }));

    return {
        faturamentoTotal,
        percentuais
    }
};

const faturamentoPorEstado = [
    { estado: "SP", valor: 67836.43 },
    { estado: "RJ", valor: 36678.66 },
    { estado: "MG", valor: 29229.88 },
    { estado: "ES", valor: 27165.48 },
    { estado: "Outros", valor: 19849.53 },
];

const resultado = percentual(faturamentoPorEstado);

console.log("Percentual por estado:");
resultado.percentuais.forEach(({ estado, percentual }) => {
    console.log(`${estado}: ${percentual}`)
})