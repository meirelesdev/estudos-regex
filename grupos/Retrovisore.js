const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

// retrovisor é surge quando usamos grupos.
// um retrovisor pode ser chamado apartir da sua order.
// no exemplo abaixo so temos um grupo logo sua referencia é \1
// se tivessemos mais de um seria \ seguido com o numero do grupo a ser referenciado.
// um retrovisor armazena a informação encontrada pelo padrão que esta dentro do grupo.
console.log(texto1.match(/<(\w+)>.*<\/\1>/g))

const texto2 = 'Lentamente é mente muito lenta.'

console.log(texto2.match(/(lenta)(mente).*\2.*\1/gi))
// usando o ?: seta o grupo para não armazenar a referencia.
// logo o \1 se refere ao grupo (mente) e não ao (?:lenta)
console.log(texto2.match(/(?:lenta)(mente).*\1/gi))

console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi))
// aqui exemplo de uso do retrovisor dentro da string
console.log(texto2.replace(/(lenta)(mente)/gi, '$1'))
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))

// tirando duvida sobre quantidade de retrovisores
const texto3 = 'abcdefghijkll'
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))