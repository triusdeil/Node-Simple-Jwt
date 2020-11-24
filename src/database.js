const mongoose = require('mongoose')
//conexion con la base de datos
mongoose.connect('mongodb://localhost/simplejwt', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('database is connected'))