import mysql, { ResultSetHeader, RowDataPacket } from "mysql2";
import { Gasto } from "../models/gastos.model";

const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "martinspalletti33+",
  database: "arami",
  port: 3306,
});

const getAll = async () => {
  const [row] = await conn
    .promise()
    .query<RowDataPacket[]>("select * from gastos");
  return row;
};

const getById = async (id: number) => {
  const [row] = await conn
    .promise()
    .query<RowDataPacket[]>("select * from gastos where id = ?", [id]);
  return row[0];
};

const insertarGasto = async (gasto: Gasto) => {
  const [fields] = await conn
    .promise()
    .query("insert into gastos (detalle, importe) values (?,?)", [
      gasto.detalle,
      gasto.importe,
    ]);
};

const deleteId = async (id: number) => {
  const [fields] = await conn
    .promise()
    .query<ResultSetHeader>("delete from gastos where id = ?", [id]);
  return fields.affectedRows;
};

const upGasto = async (gasto: Gasto) => {
  const [fields] = await conn
    .promise()
    .query<ResultSetHeader>(
      "update gastos set detalle = ?, importe = ? where id = ?",
      [gasto.detalle, gasto.importe, gasto.id]
    );

  return fields.affectedRows;
};

export { getAll, getById, insertarGasto, deleteId, upGasto };
