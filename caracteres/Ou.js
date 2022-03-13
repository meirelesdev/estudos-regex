const texto = 'Você precisa responder sim, não ou não sei!'

console.log(texto.match(/sim|não|sei/g))
console.log(texto.match(/sim|não sei|não/g)) // alternativa (ou)
console.log(texto.match(/sim|n.o sei|n.o/g)) // alternativa (ou)