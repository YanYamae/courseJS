function teste1(num){
    if (num > 7) // sem chaves acaba associando somente a primeira sentença 
        console.log(num)
        console.log('Final')
    
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7);{ // ponto e virgula quebra o if, deixando o console.log de fora
        console.log(num)
    }
}

teste2(6)
teste2(8)