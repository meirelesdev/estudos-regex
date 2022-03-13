const texto = '1,2,3,4,5,6,a.b c!b?e[f'

// Pega todas as letras
console.log(texto.match(/[a-z]/g))

// Pega todas as letras de b ate d
console.log(texto.match(/[b-d]/g))

// Pega o intervalo de numeros de 2 ate 4
console.log(texto.match(/[2-4]/g))

// Misturando internalos de letras e numeros
// OBS: por estar usando a flag i a minha definição de maiuscula não faz diferença.
console.log(texto.match(/[A-Z1-3]/gi))

// Ex2: Como minha string so tem letras de a até f vai pegar todas as letras.
console.log(texto.match(/[A-F1-3]/gi))