let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // num1 vira 2 e compara com num2 antes dele ser decrementado, essa é a diferença entre pre e pos fixado
console.log(num1 === num2)