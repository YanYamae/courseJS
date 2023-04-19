function trataErroELancar(erro){ // caso de erro la em baixo essa função sera chamada
    // throw new Error('...')]
    // throw 10
    // throw true
    // throw 'mensagem'
    throw { // lançar
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
       console.log(obj.name.toUpperCase() + '!!!') 
    } catch (e){ // pegar, reconhecer
        trataErroELancar(e)
    } finally { // caso de certo, sem erros
        console.log('final')
    }
    
}
const obj = {nome: 'Roberto'} // mudar nome para name 
imprimirNomeGritado(obj)