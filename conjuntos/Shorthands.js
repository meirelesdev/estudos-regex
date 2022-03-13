
const texto = `1,2,3,4,5,6,a.b c!b?e\r\f    -
f_g`

// atalho para pegar todos os digitos.
// conjunto [0-9]
console.log(texto.match(/\d/g))

// Não numeros 
// conjunto [^0-9]
console.log(texto.match(/\D/g))

// pegar tudo que esta no conjunto [a-zA-Z0-9_]
console.log(texto.match(/\w/g))

// não caracteres no conjunto[^a-zA-Z0-9_]
console.log(texto.match(/\W/g))

// \s pega o conjunto [ \t\n\r\f]
console.log(texto.match(/\s/g))

// \S Não espaços ex conjunto: [^ \t\n\r\f]
console.log(texto.match(/\S/g))

// \b \ B = bordas de palavras VIDE CAPITULO de Bordas
