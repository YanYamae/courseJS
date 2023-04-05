// template string é definido com crase (``) e tem um comportamento particular, exemplos:

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // funcao arrow
console.log(`Ei... ${up('cuidado!')}`)