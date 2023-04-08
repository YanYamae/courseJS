//{ testei colocar dentro de um bloco e puxar os valores ja extraidos porem dentro do bloco, n fora


const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // extrai os valores setados do objeto para fora do contexto
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // setando identificadores novos para chamar os atributos
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // chamando atributos que não existem, atribuindo a uma delas um valor para n retornar undefined
console.log(sobrenome, bemHumorada)

const { endereco:{ logradouro, numero, cep } } = pessoa 
console.log(logradouro, numero, cep)

/*
const { conta: {ag,  num} } = pessoa // o caminho (conta) deve existir se não gera um erro
console.log(ag, num)
*/

//}console.log(nome,idade)