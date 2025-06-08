// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.


//fibonacci recursivo O(2^n)
function fib(n) {
    if (n === 0) return 0
    if (n === 1) return 1

    return fib(n-1) + fib(n-2)
}

function memoize(fn) {
    const cache = new Map() //cria o cache

    return function(...args) { //returna uma função
        const key = JSON.stringify(args) //transforma os args em string, para poder utiliza-los como chaves
        if (cache.has(key)) return cache.get(key) // Se tivermos o valor armazenado no cache retorna o valor

        //Se não:
        const value = fn.apply(this, args) //Chamamos a função com o argumento passado (o this não é nescessário neste caso, mas é boa pratica) 
        // (pular para a linha 30)
        cache.set(key, value) //armazena o valor retornado pela função no cache 
        return value //retorna o valor resultante
    }
}

//fibnacci com memoize O(n)
const fastFib = memoize((n) => {
    if (n===0) return 0
    if (n===1) return 1

    return fastFib(n-1)/*Ir para a linha 18 */ + fastFib(n-2) /*Ir para a linha 18 */
})

console.log(fastFib(40))
console.log(fib(40))
