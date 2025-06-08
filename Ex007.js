// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

const produtos = [ //Pedi pro chatGPT fazer o array (:
  { nome: "Notebook Dell Inspiron", preco: 2499.90 },
  { nome: "Smartphone Samsung Galaxy", preco: 1299.00 },
  { nome: "Fone de Ouvido Bluetooth JBL", preco: 189.99 },
  { nome: "Mouse Gamer Logitech", preco: 159.90 },
  { nome: "Teclado Mecânico RGB", preco: 299.00 },
  { nome: "Monitor LED 24 polegadas", preco: 699.90 },
  { nome: "Cadeira Gamer", preco: 899.00 },
  { nome: "SSD 1TB Kingston", preco: 349.90 },
  { nome: "Webcam Full HD Logitech", preco: 249.00 },
  { nome: "Carregador Portátil 10000mAh", preco: 79.90 }
];

function getProductName(products) {
    const sortedProducts = products.sort((a, b) => a.preco - b.preco)
    const productsNames = sortedProducts.map(product => product.nome)
    return productsNames
}

console.log(getProductName(produtos))