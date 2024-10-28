
function hello() {
   return('Hola Mundo');
}

console.log(hello());

const result = hello()
console.log(result);



/* Devolvemos objeto en javaScript */
function obejeto() {
    return {name: 'ryan', lastName: 'Conner'}
}

console.log(obejeto());


/* Retornamo otra funcion */
function funcion() {
    return function funcionDos() {
        return 'Funcion que retorna hola mundo'        
    }
}

console.log(funcion()());

/* Funcion con parametros */
function Hola(params) {
    return 'Hola '  + params    
}

console.log(Hola('Luis'))

/* Dos parametros */
function add(x, y) {
    return x + y    
}

console.log(add(2, 4));

/* Objetos */
const user = {
    name: 'ryan',
    lastName: 'perez',
    age: 30,
    address: {
        country: 'Colombia',
        city: 'Bogotá',
        street: 'Main street 123'
    },
    friends: ['Brandon', 'Elena'],
    active: true,
    sendMail(){
        return 'sending email....'
    }
}

console.log(user.address.city);
console.log(user.friends);
console.log(user.active);
/* cuanod la funcion no se le pasa los parametros tiende
a devolver el codigo de ella */
console.log(user.sendMail());

/* shorthand property names */
const name = 'Laptop'
const price = 3000

const newProduct ={
    name,
    price
}

console.log(newProduct);

/* Para que sirve javaScript en el navegador (Manipular el DOM) */
/* Crar productos */
const title = document.createElement('h1')
const boton = document.createElement('button')

/* Aca se le añade texto al elemento creado */
title.innerText = 'Hola mundo'
boton.innerText = 'Click'

/* Envent Handlers manejadores de eventos */
boton.addEventListener('click', function() {
    //console.log('Evento click');
    title.innerText = 'Texto actualizado con JS'
    alert('Se Hizo un click')
})

/* Aca los añadimos al DOM */
document.body.appendChild(title)
document.body.appendChild(boton)

/* Devolver obejos javaScript */
const userDos = {
    name: 'Joe',
    age: 30
}

function printInfo(user) {
    return `<h2> Hola ${user.name} </h2>`   
}

// Creo el nodo Html
const info = document.createElement('h2')
info.innerHTML = printInfo(userDos)
console.log(info);

// Añade el nodo al body
document.body.appendChild(info)


// Funciones anonimas
function start(){
    return'Starting'
}

const button = document.createElement('button')
button.innerText = 'Click'
button.addEventListener('click', function() {
    alert('Clicked')
})
document.body.append(button)


// Arrow function - funciones flecha
function add(x, y){
    return x + y
}

// const add = () => {
//     return x + y
// }

// const add = (x, y) =>( x + y)

// Funciones anonimas
const showText = () => 'Hola mundo'
console.log(showText);

// String Literals
const background = 'red'
const color = 'white'
const isAuthorized = false;

const resultado = `Estos son estilos ${background} ${color}`
console.log(resultado);
button.style = `background: ${isAuthorized ? 'blue' : 'red'}; color: ${color}`

// Metodos especiales - Array Methods
const names = ['Luis', 'Fernando', 'Troncoso']
names.forEach(function(name) {
    console.log(name);
})

// Map crea u nnuevo array
const filtros = names.map(function(name){
    return `Hola ${name}`
})

// Find - Filtrar eelementos bajo condiciones
const newNames = names.find(function(name){
    if(name === 'Luis') return name
})

// Filter - Filtra los elementos del nuevo array creando uno nuevo
const newFilter = names.filter(function(name){
    if(name !== 'Luis') return name
})

console.log(newFilter);

const namesDos = ['Luis', 'Fernando', 'Troncoso']
const newNamesDos = ['Marcos', 'Mario', 'Jhon']
console.log(namesDos.concat(namesDos));

// Spread operator
console.log([...namesDos, newNamesDos]);
console.log([...namesDos, ...newNamesDos]);

const usuario = {
    names: 'Ryan',
    lastName: 'Ray'
}

const address = {
    street: 'Main street 123',
    city: 'Bogota'
}

// Se crea un nuevo Objeto
const userInfo = {
    ...usuario,
    ...address
}

console.log(userInfo);

// Node modulos - Funciones que se exportan
// export function name(params) {
    
// }

// Fetch - Asyn Await
const ul = document.createElement('ul')

// Devuelve una promesa
let data = fetch('https://jsonplaceholder.typicode.com/posts')  
    .then(function(response){    
       return response.json()
    }).then(function (data) {    
        console.log(data);   
        data.forEach(function (post) {
            const li = document.createElement('li')
            li.innerHTML = post.title
            ul.appendChild(li)
        }) 
        document.body.append(ul)
      })

/* Ahora lo hacemos con funciones asincronas */
const div = document.createElement('div')
const ulDos = document.createElement('ul')

async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    data.forEach(function (post) {
        const li = document.createElement('li')
        li.innerHTML = post.title
        ulDos.appendChild(li)
        div.appendChild(ulDos)
    })
    document.body.append(div)
    
}

loadData()
console.log(data);





