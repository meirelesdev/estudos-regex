// \n QUEBRA DE LINHA
// \t TAB
// \s ESPAÇO
const texto = 'Bom\ndia'
const textoComt = 'Bom\tdia'

console.log(texto.match(/./gi)) // não resolve \n
console.log(textoComt.match(/./gi)) // resolve \t

// \n o ponto não resolve
// dotall - algumas linguagens tem um flag /exp/s, mas JS não!

console.log(texto.match(/.../gi)) // Significa: me de 3 caracteres em sequencia
console.log(textoComt.match(/..../gi)) // Significa: me de 4 caracteres em sequencia

