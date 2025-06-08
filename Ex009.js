// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

// Array de pares [chave, valor]
const pares = [
  ["nome", "João Silva"],
  ["idade", 28],
  ["cidade", "São Paulo"],
  ["profissao", "Desenvolvedor"],
  ["salario", 5500.00],
  ["ativo", true],
  ["departamento", "TI"]
];

// Objeto com pares key:value
const objeto = {
  produto: "Notebook",
  marca: "Dell",
  preco: 2499.90,
  categoria: "Eletrônicos",
  estoque: 15,
  disponivel: true,
  desconto: 0.1
};

function paresParaObjeto(array) {
    const obj = {}
    array.forEach(pair => {
        obj[pair[0]] = pair[1]
    })

    return obj
}

function objetoParaPares(objeto) {
    const array = []
    Object.keys(objeto).forEach(key => {
        array.push([key, objeto[key]])
    })

    return array
}

console.log(`----------Pares para Objeto----------`)
console.log(paresParaObjeto(pares))
console.log(` `)
console.log(`----------Objeto para Pares----------`)
console.log(objetoParaPares(objeto))
