const express = require('express')
const app = express()

//con esta linea de codigo el puede lee los archivos json
app.use(express.json())
//enviar datos de un formulario html
app.use(express.urlencoded({extended: false}))

module.exports = app;