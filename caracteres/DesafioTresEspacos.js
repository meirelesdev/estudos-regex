const texto = 'a   b'
console.log(texto.match(/a\s\s\sb/))// minha solução

console.log(texto.match(/a   b/))// solução do professor 1
console.log(texto.match(/a   b/))// solução do professor 2

// no futuro
console.log(texto.match(/a\s+b/))
console.log(texto.match(/a {3}b/))
console.log(texto.match(/a\s{3}b/))
