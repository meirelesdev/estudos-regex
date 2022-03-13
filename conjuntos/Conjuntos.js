// Para definir uma classe (ou conjunto) de caracteres usamos []

const texto = '1,2,3,4,5,6,a.b c!d?e[f'

// regex para encontrar os numeros pares até 8, presentes no texto
const regexPares = /[02468]/g
console.log(texto.match(regexPares))

const texto2 = 'João não vai passear na moto.'
// encontra o n com a letra a apos tendo ou não o tio
const regexComESemAcento = /n[aã]/g
console.log(texto2.match(regexComESemAcento))

// encontra o n com a letra a apos tendo ou não o tio e mais um caracter
const regexComESemAcento2 = /n[aã]./g
console.log(texto2.match(regexComESemAcento2))