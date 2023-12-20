import express from "express";
import {
  altaGasto,
  consultaGasto,
  consultaPorId,
  deleteGasto,
  upGastoPorId,
} from "../controller/gastos.controller.js";

const router = express.Router();

router.get("/", consultaGasto);
router.get("/:id", consultaPorId);
router.post("/", altaGasto);
router.delete("/:id", deleteGasto);
router.patch("/", upGastoPorId);

export default router;
