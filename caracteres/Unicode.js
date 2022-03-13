// no início...
// Um byte (8 bits) - 256 caracteres
// Símbolos, Pontuação, A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500+ caracteres
// +Símbolos, +Pontuação, A-Z, a-z, 0-9

// Unicode 
// Quantidade de Bytes Variável - Expansível
// Suporta mais de 1 Milhão caracteres
// Atualmente tem mais de 100.000 caracteres atribuidos
// TABELA UNICODE ESTA EM: https://unicode-table.com/pt

const texto = 'aʬc௵b'
// PARA BUSCAR CARACTERES ESPECIAIS DEVEMOS
// PASSAR O \u SEGUIDO PELO CODIGO UNICODE.
console.log(texto.match(/\u02AC|\u0BF5/g))