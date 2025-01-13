function fibonacci(n) {
    let n1 = 0;
    let n2 = 1;

    if (n === n1 || n === n2) {
        return `${n} pertence à sequência de Fibonacci`;
    }

    let proxTermo = n1 + n2;

    while(proxTermo <= n) {
        if(proxTermo === n) {
            return `${n} pertence à sequência de Fibonacci`
        }

        n1 = n2;
        n2 = proxTermo;
        proxTermo = n1 + n2;
    }

    return `${n} não pertence à sequência de Fibonacci`
}

console.log(fibonacci(13))
console.log(fibonacci(4))