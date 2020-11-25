const { Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs')
//describiendo como sera el modelo del usuario
const userSchema = new Schema({
    username: String,
    email: String,
    password: String
})

//Crear metodo para cifrar la contraseña
//este metodo es asincrono recuerda usar el async y el await
userSchema.methods.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
    //hash convierte el script en caracteres diferentes
    //con esto se aplica el algoritmo para que sea segura la contraseña
}

userSchema.methods.validatePassword = function(password){
    return bcrypt.compare(password, this.password)
}
//creando en la bd
module.exports = model('User', userSchema)