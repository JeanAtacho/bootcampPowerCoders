/*
const name = prompt('Escribe tu nombre')
const age = prompt('Escribe tu edad')
//console.log('Hola ' + name)

// (``) = los backticks o comillas inversas permiten interpolar y permiten colocar las variables sin (+). A CONTINUACION SE ENUNCIAN LAS DOS FORMAS DE HACER DICHA DECLARACION.

console.log('Hola ' + name + ', de ' + age + ' años de edad.')

console.log(`Hola ${name}, de ${age} años de edad.`)

NOMENCLATURAS: 
- snakecase: hola_mundo o 
- Camelcase: holaMundo.
*/


/*
const numeroUno = prompt('Dime el primer numero')
const numeroDos = prompt('Dime el segundo numero')

const numeroUnoConvertido = Number(numeroUno)
const numeroDosConvertido = Number(numeroDos)

console.log(numeroUnoConvertido, numeroDosConvertido)

//console.log(typeof numeroUno, numeroUno, typeof numeroDos, numeroDos)

//console.log(typeof numeroUnoConvertido, numeroUnoConvertido)
//console.log(numeroUnoConvertido + numeroConvertidoDos)
*/

/*
const numeroUno = prompt('Dime el primer numero')
const numeroDos = prompt('Dime el segundo numero')

//const numeroUnoConvertido = Number(numeroUno)
//const numeroDosConvertido = Number(numeroDos)
//const numeroUnoConvertido = parseInt(numeroUno)
//const numeroDosConvertido = parseInt(numeroDos)
//const numeroUnoConvertido = parseFloat(numeroUno)
//const numeroDosConvertido = parseFloat(numeroDos)

console.log(numeroUnoConvertido + numeroDosConvertido)
*/

/*
const numeroUno = Number(prompt('Dime el primer numero'))
const numeroDos = prompt('Dime el segundo numero')

const numeroUnoConvertido = Number(numeroUno)
const numeroDosConvertido = Number(numeroDos)

console.log(numeroUnoConvertido + numeroDosConvertido)
*/

/*
const numeroUno = Number(prompt('Dime el primer numero'))
const numeroDos = Number(prompt('Dime el segundo numero'))

const numeroUno = Number(numeroUno)
const numeroDos = Number(numeroDos)

console.log(numeroUno + numeroDos)
*/

/*
const name = prompt('Dime tu nombre')
const age = prompt('Dime tu edad')
const text = `Hola ${name}, estas seguro/a que tienes ${age} anos de edad?`

document.write(text)
*/

/*
const p = document.querySelector('p')

const name = prompt('Dime tu nombre')
const age = prompt('Dime tu edad')
const text = `Hola ${name},\n estas seguro/a que tienes ${age} anos de edad?`

p.innerHTML = text
*/

/*
const p = document.querySelector('p')

const name = prompt('Dime tu nombre')
const age = prompt('Dime tu edad')
const text = `Hola ${name},\n estas seguro/a que tienes ${age} anos de edad?`

const a = "I don't know" o 'She said: "I don\t know'
const b = ''
const c = ``

console.log(text)
*/

/*
const p = document.querySelector('p')
const name = prompt('Dime tu nombre')
p.innerHTML = `El nombre tiene: ${name.length} caracteres`
*/

/*
const p = document.querySelector('p')
const name = prompt('Dime tu nombre')
const long = name.length
const text = `El nombre tiene: ${long} caracteres`
//p.innerHTML = text.toUpperCase()
p.innerHTML = text.toLowerCase()
*/



/*
const p = document.querySelector('p')

// const num = Math.round(6.5)                  // redondeado clasico.
// const num = Math.ceil(6.2)                   // Redondeado hacia arriba.
//const num = Math.floor(6.9)                   // Redondeado hacia abajo.
//const num = Math.abs(-10)                     // Absoluto
//const num = Math.max(10, 20, 30)              // Entrega el numero mas alto.
//const num = Math.min(10, 20, 30)              // Entrega el numero mas bajo.
//const num = Math.round(Math.random() * 10)

//p.innerHTML = `El numero redondeado es: ${num}`
//p.innerHTML = `El numero es: ${num}`
*/


/*
const p = document.querySelector('p')
const age = Number(prompt('Dime tu edad'))

p.innerHTML = `El numero es invalido: ${isNaN(age)}`
p.innerHTML += `. El numero es un entero: ${Number.isInteger(age)}`
*/

/*
const date = Date.now()
console.log(date)

const now = new Date()
console.log(now)

const timestamp = now.getTime()
console.log(timestamp)

const current_date = new Date(timestamp)
console.log(current_date)

console.log(now.getFullYear())
console.log(now.getMilliseconds())
*/


// A CONTINUACION, EL NOMBRE ES SENSIBLE A LAS MAYUSCULAS, ES DECIR, SE DEBE COLOCAR Juan y no juan
/*
const p = document.querySelector('p')
const nombre = prompt('Escribe tu nombre')

//console.log(1 == '1')

if (nombre === 'Juan') {
    p.innerHTML = 'Hola juan, te estabamos esperando! 🥳🎉'
} else {
    p.innerHTML = `Hola ${nombre}, sientate como en tu casa`
}
*/


//SI DESEO QUE SEA INSENSITIVO A LAS MAYUSCULAS, LO DECLARAMOS CON .toLowerCase()

const p = document.querySelector('p')
const nombre = prompt('Escribe tu nombre')


if (nombre.toLowerCase() === 'Juan'.toLowerCase()){ 

} else if (nombre.toLowerCase().trim() === 'Pedro'.toLowerCase()) {
    p.innerHTML = `Hola ${nombre}, hace tiempo que no te veiamos! 🥳🎉`

} else {
    p.innerHTML = `Hola ${nombre}, sientate como en tu casa!`
}


console.log(1 == '1')       // Compara valores
console.log(1 === '1')      // Compara valores y tipos de valores
console.log(1 != '1')       // Si es distinto
console.log(1 !== '1')      // Si es distinto en valor y tipos de valores

console.log(1 > 1)          // Si es mayor
console.log(1 < 1)          // Si es menor
console.log(1 >= 1)         // Si es mayor o igual que
console.log(1 <= 1)         // Si es menor o igual que

console.log(a == 1 && b == 2)       // Si 1 es true 'y' 2 es true (Se deben cumplir ambas condiciones para que todo sea verdadero, una vez que evalua una condicion falsa, deja de evaluar el resto)
console.log(a == 1 || b == 2)       // Si 1 es true "o" 2 es true (con que una condicion sea verdadera es todo verdadero, encuentra una condicion verdadera y deja de evaluar)

