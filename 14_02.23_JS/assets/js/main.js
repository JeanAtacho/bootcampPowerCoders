//FUNCIONES:

/*
p = document.querySelector('.resultado')

function sumar(num1, num2) {
    if (num1 === undefined){
        num1 = 0
    }
    if (num2 === undefined){
        num2 = 0
    }
    return num1 + num2
}

const r = sumar(2, 3)
p.innerHTML = `El resultado es: ${r}
*/

/*
p = document.querySelector('.resultado')

function sumar(num1, num2) {
    if (num1 === undefined) return 'Argumento 1 no fue entregado'
    if (num1 === undefined) return 'Argumento 2 no fue entregado'
    if (typeof num1 === 'number') return 'Argumento 1 no valido'
}

const r = sumar(2, 3)
p.innerHTML = `El resultado es: ${r}`
*/

p = document.querySelector('.resultado')

function sumar(num1, num2) {
    if (num1 === undefined) return 'Argumento 1 no fue entregado'
    if (num1 === undefined) return 'Argumento 2 no fue entregado'
    if (typeof num1 === 'number') return 'Argumento 1 no valido'

    return num1 + num2
}

const restar = (num1, num2) => {
    return num1 - num2
}

const r = sumar(8, 6)
const resta = restar(10, 5)

p.innerHTML = `El resultado de la suma es: ${r} y de la resta es: ${resta}`
