import express from "express";
import {
  altaUsuario,
  consultaUsuario,
  consultaPorId,
  deleteUsuario,
  upUsuarioPorId,
} from "../controller/usuarios.controller.js";

const router = express.Router();

router.get("/", consultaUsuario);
router.get("/:id", consultaPorId);
router.post("/", altaUsuario);
router.delete("/:id", deleteUsuario);
router.patch("/", upUsuarioPorId);

export default router;
