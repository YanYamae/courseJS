const valores = [ 7.7 , 8.9 , 6.3 , 9.2 ]
console.log(valores[0], valores[3])
console.log(valores[4])

valores [10] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // aceita tudo, mas misturar não é uma boa pratica 
console.log(valores)

console.log(valores.pop()) // tira o ultimo valor do array
delete valores[0]
console.log(valores)

console.log(typeof valores)
