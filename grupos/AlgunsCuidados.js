const texto = 'Pedrinho (filho de Pedro Silva) é doutor do ABCabc!'

//Exemplo provando que dentro de um conjunto o parenteses de um conjunto é visto como literal.
console.log(texto.match(/[(abc)]/gi)) // não tem grupo
console.log(texto.match(/([abc])/gi)) // é um grupo
console.log(texto.match(/(abc)+/gi))