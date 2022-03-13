const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

//  A termo guloso significa que o quantificador ira agrupar o maximo de item que ele encontrar
// quantificadores SÃO gulosos (greedy)...
console.log("Ex 1:",texto.match(/<div>.+<\/div>/g))
console.log("Ex 2:",texto.match(/<div>.*<\/div>/g))
console.log("Ex 3:",texto.match(/<div>.*\/div>/g))

// Usando a ? fazemos com que ele encontre tudo mas separe os padrões encontrados.
// quantificadores NÃO gulosos (lazy)...
console.log("Ex 4:",texto.match(/<div>.+?<\/div>/g))
console.log("Ex 5:",texto.match(/<div>.*?<\/div>/g))
console.log("Ex 5:",texto.match(/<div>.{0,100}?<\/div>/g))

