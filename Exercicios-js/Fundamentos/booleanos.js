let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo, !isAtivo) // só para retornar booleano mesmo, n tem sentido 1 ser true or false

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // valida se o resultado é resolvivel

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' ')) // retorna true caso um dos casos seja verdadeiro

let nome = 'Lucas'
console.log(nome || 'Desconhecido')
let nome2 = ''
console.log(nome2 || 'Desconhecido')

