function soBoaNoticia(nota){
    if (nota>=7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.5)

function seForVerdadeEuFalo(valor){
    if (valor){ // executa somente no caso do valor ser verdadeiro
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() // undefined é falso
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})
