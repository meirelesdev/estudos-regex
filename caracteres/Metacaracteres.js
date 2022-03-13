// Exemplos: . ? * + - ^ $ | [ ] { } ( ) \ :

//          Metacaracteres - Prepresentantes
// Metacaractere    Nome                    Significado
// .               Ponto               Um caractere qualquer
// []              Conjunto            Conjunto de caracteres permitidos
// [^]             Conjunto Negado     Conjunto de caracteres proibidos

//          Metacaracteres - Quantificadores
// Metacaractere    Nome                    Significado
// ?               Opcional            Zero ou um
// *               Asterisco           Zero ou mais
// +                Mais                Um ou mais
// {n, m}           Chaves             De n até m

//          Metacaracteres - Âncoras
// Metacaractere    Nome                    Significado
// ^               Circunflexo         Início de linha
// $               Cifrão              Fim de linha
// \b              Mais                Início ou fim de palavra


//          Outros Metacaracteres
// Metacaractere    Nome                    Significado
// \               Escape         Uso de metacaracteres como literal
// |               Ou             Operação de Ou           
// ()              Grupo          Define um Grupo
// \1...\9         Retrovisor     Resgata grupos ja definidos

// Usando Metacaracteres como literal
const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./g
console.log(texto.split(regexPonto))

const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.match(regexSimbolos)) // pegando os simbolos
console.log(texto.split(regexSimbolos)) // pegando o conteudo


