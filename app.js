const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");

const app=express();

//rutas
const AuthRoutes=require('./routes/Auth');
//middlewares para el funciomamiento
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors());

//uploads
app.use(express.static('uploads'));

//configurar las rutas
app.use("/apii", AuthRoutes);
module.exports=app;