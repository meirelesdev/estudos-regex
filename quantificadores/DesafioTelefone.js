const texto = `
Lista telefônica:
    - (11) 98756-1212
    -98765-4321 ...
    - (85) 99988-7766
    - (21)3261-8899
`

const regex = /\([0-9]{2}\)\s[\d+]{5}-[0-9+]{4}/g
console.log(texto.match(regex)) // solução não concluida

// solução professor
console.log('Solução prof:',
texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))