const mongoose = require('mongoose');

const VentasOnlineSchema = mongoose.Schema({
    nombre:{
        type:String
    },
    apellidos:{
        type:String
    },
    empresa:{
        type:String
    },
    pais:{
        type:String
    },
    localidad:{
        type:String
    },
    provincia:{
        type:String
    },
    calle1:{
        type:String
    },
    calle2:{
        type:String
    },
    postal_code:{
        type:String
    },
    notas:{
        type:String
    },
    productos:{
        type:Array  
    },
    pago:{
        type:Object
    },
    envio:{
        type:Number
    },
    correo:{
        type:String
    },
    telefono:{
        type:String
    },
    status:{
        type:String,
        default:'Pendiente'
    },
    creacion:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('VentasOnline',VentasOnlineSchema);