const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

// Para definir um quantificador usa {}
console.log("Ex 1:", texto.match(/\d{1,}/g))
console.log("Ex 2:", texto.match(/\d{1,2}/g))
console.log("Ex 3:", texto.match(/[0-9]{2}/g))
console.log("Ex 4:", texto.match(/\d{1,}/g))

// o \w não traz letras com acento.
console.log("Ex 5:", texto.match(/\w{7}/g))
// complementando para trazer o acento, e a palavra apostando completa
console.log("Ex 6:", texto.match(/[\wõ]{7,}/g))


// no futuro... TRABALHANDO COM BORDAS
console.log(texto.match(/\b\d{1,2}\b/g))
console.log(texto.match(/\b[\wõ]{7}\b/g))