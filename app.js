// const http = require('http')
// const fs = require('fs')

// http.createServer((req,res) => {
//    const read = fs.createReadStream('./static/index.html')
//    read.pipe(res)
// })
// Server.listen(3000)
// console.log('server on port ${3000}')
const express = require('express')

const app = express ()
//.get sirve que par cuando haya un a ruta  enviara con:
//res.send un mesaje 
//.sendfile un archivo ej un  html 
//las ruta as son esto ('/', esto es par<a la ruta emn el puerto 3000
// /dia y esta es la ruta "dia" esto aparceri<a en la url como localhost3000/dia
app.get('/', (req,res) => {
    res.sendFile('./static/index.html')
})
//si visitas la ruta dia muestras un mensaje que dice muy buen dia 
app.get('/dia', (req,res) => {
    res.send('muy buen dia ')
})
//si quiero quiro crear una ruta que sin inportar que ruta visite  siempre quieor que responda lo mismo 
app.use ((req,res) => {
    res.send (' no se encontro tu pagina ')
})
app.listen(3000)
console.log('server on port ${3000}')
