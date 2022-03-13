// FLAGS
// g - global
// i - ignora case

const teste = 'Carlos assinou o abaixo-assinado.'

console.log(teste.match(/C|ab/))
console.log(teste.match(/C|ab/i))
console.log(teste.match(/ab|c/gi))