const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// + -> Uma ou mais
const regex = /fogo+/gi
console.log('Ex 1:',texto.match(regex))
// O quantificados + retorna uma ocorrencia ou mais do item a usa esquerda.
console.log('Ex 2:',texto2.match(regex))


const texto3 = 'Os números: 0123456789.'
// traz um a um 
console.log("Ex 3:", texto3.match(/[0-9]/g))
// Exemplo de que os quantificadores são gulosos, agrupa todos os resultados
console.log("Ex 4:", texto3.match(/[0-9]+/g))
// Alternativa ao exemplo anterio
console.log("Ex 5:", texto3.match(/\d/g))
console.log("Ex 6:", texto3.match(/\d+/g))