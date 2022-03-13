const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// * -> zero ou mais
const regex = /fogo*/gi
console.log('Ex 1:',texto.match(regex))
// O quantificados * retorna zero ocorrencia ou mais do item a usa esquerda.
console.log('Ex 2:',texto2.match(regex))