import routerx from "express-promise-router";
import DatosR from "../routes/Datos.routes.js";
import  AuthRoutes from './Auth.js'

const router = routerx();

router.use("/datos",DatosR);
router.use('/auth', AuthRoutes);
export default router;