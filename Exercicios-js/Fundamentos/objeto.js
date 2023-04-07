const prod1 = {} // definindo um objeto
prod1/* objeto */.nome /* a chave */ = 'Celular Ultra Mega' /* e valor atribuido */
prod1.preco = 4998.90 // pode se declarar a chave e valor assim mesmo
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)
console.log(prod1.preco)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    // obj:{
    //     blabla: 1,
    //     obj:{
    //         blabla: 2
    //     }
    // }
}

console.log(prod2)