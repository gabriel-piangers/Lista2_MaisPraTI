// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

const prompt = require('prompt-sync')()

const str = prompt('Insira uma frase:')

const words = str.split(' ')
const seenWords = new Set()
let output = []

words.forEach(word => {
    
    if (!seenWords.has(word.toLowerCase())) {
        seenWords.add(word.toLowerCase())
        output.push(word)
    }
})

console.log(output)
