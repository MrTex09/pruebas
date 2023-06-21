const express = require('express')

const morgan = require('morgan')
const app = express()
app.use(morgan('dev'))
app.get('/productos',(req,res) => {
    res.send('obteniendo productos')
})

    app.get('/pagina1',(req,res) => {
        res.sendFile('./views/index.ejs')
})
app.listen(30000)
console.log(`server on port ${30000} `)