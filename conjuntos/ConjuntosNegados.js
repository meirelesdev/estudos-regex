const texto = '1,2,3,a.b c!d?e[f'

// O ^ dentro de um conjunto significa negar o conjunto
console.log("Ex 1: ",texto.match(/[^0-9]/g))
console.log("Ex 2: ",texto.match(/[^\d]/g))
console.log("Ex 3: ",texto.match(/\D/g)) // os três exemplos acima fazem a mesma coisa, traz tudo que não é número.

// \d traz os números, quando negamos não traz.
// Então neste conjunto todos os itens estão sendo negados.
console.log("Ex 4: ",texto.match(/[^\d!\?\[\s,\.]/g))

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

// Nesta Regex temos dois intervalos, [!-/] e [:-@\s] e senguindo a ordem da tabela ASC
// Os caracteres apresentados na variavel texto2 encontrance dentro destes intervalos
// Logo só como esta sendo negado sobra apenas os numeros da variavel.
console.log("Ex: 5",texto2.match(/[^!-/:-@\s]/g))