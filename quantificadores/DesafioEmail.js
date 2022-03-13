const texto = `Os e-mails dos convidados são:
- fulano@cod3r.com.br
- xico@gmail.com
- daniel@daniel.com.br
- danielmeireles73@gmail.com
- daniel_meireles@gmail.com
- daniel.meireles@gmail.com
`

const regex = /[a-zA-Z0-9_\.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/g
console.log('Solução prof 1:', texto.match(regex))

const regex2 = /[\w]+@\w+\.\w{2,4}/g
console.log('Solução prof 2:', texto.match(regex2))

const regex3 = /[\w.]+@\w+\.\w{2,4}/g
console.log('Solução prof 3:', texto.match(regex3))

const regex4 = /[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g
console.log('Solução prof 4:', texto.match(regex4))


// no futuro
console.log('No futuro',texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g))
