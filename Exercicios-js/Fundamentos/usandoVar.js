{
    {
        {
            var sera = 'Será?' // ou é definida em escopo global
        }
    }
}
console.log(sera)

function teste(){
    var local = 123 // ou localmente dentro de uma function
    console.log(local)
}
teste()
// console.log(local) não vivivel