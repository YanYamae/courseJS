const escola = "Cod3r"

console.log(escola.charAt(4)) // retorna o carectere 
console.log(escola.charCodeAt(3)) // valor na tabela ask
console.log(escola.indexOf('3')) // procura o char dentro da palavra e retorna a posição

console.log(escola.substring(1)) // começa a ler a partir do 1° char
console.log(escola.substring(0, 3)) // inicia no char 0 e pega 3 letras

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola '+ escola + "!")
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) // cria um array e divide os objetos de acordo com a virgula nesse caso