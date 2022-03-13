const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
// não define um range
console.log(texto.match(/a-c/g)) 

// Trás os colchetes pois os intervalos usam a ordem da tabela UNICODE
// e os colchetes estão presentes no intervalo entre letras minusculas e maiusculas
console.log(texto.match(/[A-z]/g))

// Os intervalos tem que respeirar a ordem da tabela UNICODE
// A linha abaixo gera uma exceção pois as regex seguem a order da table UNICODE e ela contém as maiusculas primeiro. 
// console.log(texto.match(/[a-Z]/g))  // erro
// O mesmo vale para os numeros
// console.log(texto.match(/[4-1]/g))  // erro

