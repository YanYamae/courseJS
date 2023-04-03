/* JS é considerado uma linguagem de tipagem fraca (flexivél) quando por exemplo uma variavel pode resceber 
inicialmente uma string e posteriormente um valor numérico e ser considerado normal pelo interpretador ("0 erros aqui sr.")
*/

let qualquer = 'legal'
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.1516
console.log(qualquer)
console.log(typeof qualquer)

// Evitar nomes genéricos e siglas
let valor = ''
let numero = 1