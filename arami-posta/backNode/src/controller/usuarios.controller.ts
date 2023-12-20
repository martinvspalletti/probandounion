import {
  getAll,
  insertarUsuario,
  getById,
  deleteId,
  upUsuario,
} from "../repositorio/usuarios.repositorio";
import { Gasto } from "../models/gastos.model";

const altaUsuario = (req: any, res: any) => {
  if (!req.body.detalle) {
    res.status(400).end("detalle requerido");
  } else {
    const gasto = new Gasto(req.body.detalle, req.body.importe);
    insertarUsuario(gasto);
    res.status(200).end("guardado con exito");
  }
};

const consultaUsuario = async (req: any, res: any) => {
  const gastos = await getAll();
  res.json(gastos);
};

const consultaPorId = async (req: any, res: any) => {
  const gasto = await getById(req.params.id);
  if (gasto) {
    res.json(gasto);
  } else {
    res.status(404).end("usuario no encontrado");
  }
};
const deleteUsuario = async (req: any, res: any) => {
  const cant = await deleteId(req.params.id);
  if (cant === 0) {
    res.status(404).end("no se encontró el gasto");
  } else {
    res.end("borrado con exito");
  }
};
const upUsuarioPorId = async (req: any, res: any) => {
  const gasto = new Gasto(req.body.detalle, req.body.importe, req.body.id);
  const cant = await upUsuario(gasto);
  if (cant === 0) {
    res.status(404).end("no se encontró el gasto");
  } else {
    res.end("modificado con exito");
  }
};

export {
  deleteUsuario,
  consultaUsuario,
  consultaPorId,
  altaUsuario,
  upUsuarioPorId,
};
