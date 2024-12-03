import express from "express";
import employesRoutes from "./employe.routes.js";

const router = express.Router();

router.use('/employes',employesRoutes);

export default router;