//middleware 
const express = require ('express');
//se lee
//voy a requierir motgan que se guarde en una constante que se llama morgan 
const morgan = require ('morgan')
const app = express();
// app.use((req,res,next) => {
//     console.log('route: ${req.url} Metodo: ${req.method}')
//     next()
// })
//con morgan
app.use(morgan())
app.get('/profile', (req,res) => {
    res.send('profile page' )
})
app.all('/about', (req,res) => {
    res.send('about page' )
})
app.listen(10000);
console.log('sever on port 10000')