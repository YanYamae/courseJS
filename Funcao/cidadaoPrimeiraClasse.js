// Função em JS é First-Class Object (Citizens)
// Higer-order dunction

// Criar de forma literal
function fun1() { }

// Armazenar em uma variavel
const fun2 = function() { }

// Armazenar em um array
const array = [function(a,b) { return a + b }, /*fun1, fun2*/ ]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const obj = { }
obj.falar = function() { return 'Opa' }
console.log(obj.falar())

// Passar função como parametro
// function fun(frase) { 
//     console.log(frase) 
// }
function run(fun) {
    fun()/*('Executando')*/
}
run(function() { console.log('Executando...') }) // fun (parametro) recebe essa function e dentro de eun se transforma em function

// Um função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4) // invocando a função passando ja os valores para a segunda função dentro da primeira
// ou
const cincoMais = soma(2, 3)
cincoMais(4)
