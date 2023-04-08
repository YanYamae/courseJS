// Os pontos servem como ponte de acesso aos membros de um corpo função/objeto

console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome // this permite que isso seja visivel fora desse contexto
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira') // instancia um novo objeto obedecendo os parametros da função Obj e atribuindo o valor cadeira
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3) // se não usar o .nome puxa tudo o que tem dentro da func
obj3.exec()