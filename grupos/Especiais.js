const texto = 'João é calmo, mas no transito fica nervoso.'

console.log("Pega todas as palavras",texto.match(/[\wÀ-ú]+/gi))

// GRUPOS ESPECIAIS
// Posítive lookahead
console.log("Pega as palavras que tem , na frente.",texto.match(/[\wÀ-ú]+(?=,)/gi))
console.log("Pega as palavras que tem . na frente.",texto.match(/[\wÀ-ú]+(?=\.)/gi))
console.log("Pega as palavras que tem , seguido da palavra mas em sua frente.",texto.match(/[\wÀ-ú]+(?=, mas)/gi))

// Negative lookahead
// tras todas as palavras que não tem virgula em sua frente (aqui temos o problema das bordas).
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))
// tras todas as palavras que não tem virgula em sua frente incluindo o é.
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))