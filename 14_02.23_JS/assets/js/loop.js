const ul = document.querySelector('.ids')
const numeros = [94,33,74,27,49,34,72,102]
let ids = ''

// Inicializa la variable index con un 0
// Condicion para mantenerse iterando

for (let index = 0; index < numeros.length; index += 1) {
    console.log(numeros[index])
    ids += '<li>' + numeros[index] + '</li>'
}

ul.innerHTML = ids



/*
var a = 0
a = a + 1       // a = 1
a +- 1          // a = 2
*/