function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    console.log(Math.floor(valor))
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) { // trabalha sobre verdadeiro e falso, executa  laços de repetição indeterminados
    opcao = getInteiroAleatorioEntre(-1, 10)
    
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')