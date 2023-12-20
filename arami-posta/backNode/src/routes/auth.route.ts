import express from "express";
import { consultaAuth } from "../controller/auth.controller";

const router = express.Router();

router.post("/", consultaAuth);

export default router;
