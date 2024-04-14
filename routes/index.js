import routerx from "express-promise-router";
import DatosR from "../routes/Datos.routes.js";

const router = routerx();

router.use("/datos",DatosR);

export default router;