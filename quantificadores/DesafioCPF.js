const texto = `
CPF dos aprovados:
    - 600.567.890-12
    - 765.998.345-23
    - 450.157.345-21
    - 117.521.423-01
    `;
const regex = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/g; // solução 1
console.log(texto.match(regex));

const regex2 = /[\d]{3}\.[\d]{3}\.[\d]{3}-[\d]{2}/g; // solução 2
console.log(texto.match(regex2));

// solução professor
console.log("solução prof", texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g));
