const express = require ('express');

const app = express();

app.get('/', (req,res) => {
    res.send('hola mundo')
});
app.get('/user', (req,res) => {
    res.send('hola usario que desae hacer ?')
});
//// app.get('/pagina', (req,res) => {
// //    res.sendfile('./static/index.html')
//// });
//.get para enviar datos 
//.post para recivirlos
app.use(express.text())
app.get('/usar', (req,res) => {
    //sirve para ver lo que envio el cliente
    console.log_(req,body)
    res.send('nuevo usario creado')
})
app.listen(9000);
console.log('sever on port 9000')

