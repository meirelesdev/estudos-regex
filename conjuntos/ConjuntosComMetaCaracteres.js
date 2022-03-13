const texto = '.$+*?-'

// Dentro de um conjunto os metacaracteres não precisam ser escapados.
// NÃO TODOS
console.log(texto.match(/[+.?*$]/g))
// A expressão abaixo pega um caracter dentro do conjunto
// mais um caracter qualquer devido ao ponto ser o coringa.
console.log(texto.match(/[+.?*$]./g))
console.log(texto.match(/[.]/g))
// Buscando com intevalos
// OBS: o intervalo não tem a ver com a string de comparação e sim com a ORDER DA tabela UNICODE.
console.log(texto.match(/[$-?]/g))

// NÃO é um intervalo (range)...
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

// pode precisar de escape dentro do conjunto: - [ ] ^
