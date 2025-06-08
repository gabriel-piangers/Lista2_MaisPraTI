// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [ //Array feito por IA
  { cliente: "João Silva", total: 1250.00 },
  { cliente: "Maria Santos", total: 890.50 },
  { cliente: "Pedro Oliveira", total: 2100.75 },
  { cliente: "Ana Costa", total: 675.30 },
  { cliente: "Carlos Ferreira", total: 1480.20 },
  { cliente: "Lucia Mendes", total: 950.00 },
  { cliente: "João Silva", total: 320.80 },
  { cliente: "Maria Santos", total: 1200.00 },
  { cliente: "Roberto Lima", total: 780.40 },
  { cliente: "Ana Costa", total: 1350.60 },
  { cliente: "Pedro Oliveira", total: 540.25 },
  { cliente: "Fernanda Rocha", total: 2250.90 },
  { cliente: "Carlos Ferreira", total: 860.15 },
  { cliente: "João Silva", total: 1100.00 },
  { cliente: "Lucia Mendes", total: 475.80 },
  { cliente: "Roberto Lima", total: 1620.35 }
];

function getTotalPerClient(vendas) {
    const totalPerClient = vendas.reduce((accumulator, venda) => {
        return accumulator.set(venda.cliente, (accumulator.get(venda.cliente) || 0) + venda.total)
    }, new Map()) 
    return totalPerClient
}

console.log(getTotalPerClient(vendas))