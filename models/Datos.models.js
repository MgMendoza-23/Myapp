import mongoose from "mongoose";

const datosSchema=mongoose.Schema(
    {
        nombre:String,
        direccion:String,
        correo:String,
        estado:String,
        telefono:Number
    }
);

const Datos=mongoose.model('datos',datosSchema);
export default Datos;