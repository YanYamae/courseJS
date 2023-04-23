const imprimirResultado = function(nota){
    if (nota >= 7) {
       console.log('Aprovado!') 
    }else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Uepa!') // cuidado com as tipagens

// const entre = function(numero){ // isso é uma function as an expression, pode ser criada sem um nome, mas ainda sim é associada a uma variavel

// }

// function entre2(){ // isso é uma function as a statement e pode ser chamada antes mesmo de ser criada (sem preocupações com o hoisting)

// }