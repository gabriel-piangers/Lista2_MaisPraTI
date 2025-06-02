// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

let runningDebounce = null

function debounce(fn, delay) {
  if (runningDebounce) {
    clearTimeout(runningDebounce)
  }

  runningDebounce = setTimeout(() => {
    fn.apply()
    runningDebounce = null
  }, delay)
}

const test = () => {
  console.log("Just a test...");
};

const greet = (name = '') => {
    console.log(`Hello, ${name}`)
}

debounce(() => greet('gabriel'), 100) //agenda greet

debounce(test, 200) //cancela greet e agenda test

setTimeout(() => {
    debounce(() => greet('Jorge'), 200) //agenda greet
}, 210)
