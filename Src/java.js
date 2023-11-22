var F = 1
console.log(F)

let b = 'isael'
console.log(b)

const c = true
console.log(c)

let d 
console.log(d)

let e = null
console.log(e)

const fruits = ['apple', 'banana','orange']
console.log(fruits)

const numbers = [10, 20, 30]
console.log(numbers)

let a = 1

var J = 2

const Z = 'permanece o valor'

//reatribuindo valores

a ='oi'
b ='nada'

// tipos de dados 

let string = 'dado'
console.log(typeof(string))
let number = 10
console.log(typeof(number))
let added = null
console.log(typeof(added))
let x
console.log(typeof(x))
const address = { cep: 4935090, logadouro: 'rua benedito' , uf: 'sp' }
console.log(typeof(address))
const motos = ['XR' , 'XT 660' , 'CB 500']
console.log(typeof(motos))
const numberes = [1, 2, 3]
console.log(typeof(numberes))
const objs = [{ cep: 4935090, logadouro: 'rua benedito' , uf: 'sp' }, { cep: 4935090, logadouro: 'rua benedito' ,uf: 'sp' }]
console.log(objs)

//metodos de string

const fullName = 'isso e um test'
console.log(fullName.indexOf('v'), 'isso e tudo')
console.log(fullName.slice(6, 10))
console.log(fullName.length)

const arrayName = fullName.split('')
console.log(arrayName)

const firstName = arrayName[0]
console.log(firstName)

console.log(firstName.toLocaleUpperCase())
console.log(firstName.toUpperCase())

// metodo de array

const list = ['a','b','c','d','e']
console.log(list.length)

console.log(list[2])

list[5] = 'f'

console.log(list)

list.push('g')
console.log(list)

console.log(list[list.length -2])
list.pop()

console.log(list)

list.shift()
console.log(list)

list.unshift('a')
console.log(list)

