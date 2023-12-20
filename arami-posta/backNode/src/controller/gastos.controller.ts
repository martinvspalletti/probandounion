import {
  getAll,
  insertarGasto,
  getById,
  deleteId,
  upGasto,
} from "../repositorio/gastos.repositorio";
import { Gasto } from "../models/gastos.model";

const altaGasto = (req: any, res: any) => {
  if (!req.body.detalle) {
    res.status(400).end("detalle requerido");
  } else {
    const gasto = new Gasto(req.body.detalle, req.body.importe);
    insertarGasto(gasto);
    res.status(200).end("guardado con exito");
  }
};

const consultaGasto = async (req: any, res: any) => {
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
const deleteGasto = async (req: any, res: any) => {
  const cant = await deleteId(req.params.id);
  if (cant === 0) {
    res.status(404).end("no se encontró el gasto");
  } else {
    res.end("borrado con exito");
  }
};
const upGastoPorId = async (req: any, res: any) => {
  const gasto = new Gasto(req.body.detalle, req.body.importe, req.body.id);
  const cant = await upGasto(gasto);
  if (cant === 0) {
    res.status(404).end("no se encontró el gasto");
  } else {
    res.end("modificado con exito");
  }
};

export { altaGasto, consultaGasto, consultaPorId, deleteGasto, upGastoPorId };
