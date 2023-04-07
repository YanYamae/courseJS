var numero = 1
{
    var numero = 2 // é sobreeescrito pois constinua sendo escopo global
    console.log('dentro =', numero)
}
console.log('fora =', numero)