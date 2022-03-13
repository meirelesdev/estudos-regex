const texto = 'supermercado hipermercado minimercado mercado'

console.log(texto.match(/(super|hiper|mini)?mercado/g))
// exemplo com grupos aninhados
console.log(texto.match(/((hi|su)per|mini)?mercado/g))