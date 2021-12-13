const mongoose = require('mongoose');

const ProductosSchema = mongoose.Schema({
    img:{
        type:String,
        default:null
    },
    imagenes:{
        type:Array
    },
    nombre:{
        type:String
    },
    sku:{
        type:String
    },
    precio:{
        type:Number
    },
    precioVenta:{
        type:Number
    },
    descripcionProducto:{
        type:String
    },
    almacenes:{
        type:Array
    },
    peso:{
        type:Number
    },
    largo:{
        type:Number,
    },
    ancho:{
        type:Number
    },
    alto:{
        type:Number
    },
    colores:{
        type:Array,
        default:[]
    },
    categoria:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Categoria'
    },
})

module.exports = mongoose.model('Productos',ProductosSchema);