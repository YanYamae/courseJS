function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    console.log(Math.floor(valor))
    return Math.floor(valor)
}

let opcao = -1

do{ // executa obrigatoriamente antes da tomada de decisão do while
    opcao = getInteiroAleatorioEntre(-1, 10)
    
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1) // trabalha sobre verdadeiro e falso, executa  laços de repetição indeterminados

console.log('Até a próxima!')