const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) {
        break // break atua em cima de laços (for, while e switch), logo o que sera interrompido sera o for nesse caso
    }
    console.log(`${x} = ${nums[x]}`) // indica o indice = numero(valor) daquele indice
}

for (let y in nums) {
    if (y == 5) {
        continue // interompe a execução quando tem a condição do if e continua executando a próxima
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) { // rotulação, não recomendado porem mt interessante
    for (b in nums) {
        if (a == 2 && b == 3) break externo // permite aplicar o break em um laço específico
        console.log(`Par = ${a}, ${b}`)
    }
}