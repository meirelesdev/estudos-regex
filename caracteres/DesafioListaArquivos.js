const texto = 'lista de arquivos mp3: jaxx.mp3,rock.mp3,podcast.mp3,blues.mp3'
console.log(texto.match(/\...3/g))// minha solução
console.log(texto.match(/\.mp3/g))// solução do professor

// no futuro
console.log(texto.match(/\w+\.mp3/g))