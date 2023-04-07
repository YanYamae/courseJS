var numero = 1
{
    let numero = 2 // let obedece o escopo de blocos não deixando ser global
    console.log('dentro =', numero)
}
console.log('fora =', numero)