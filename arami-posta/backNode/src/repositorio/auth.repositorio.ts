import mysql, { ResultSetHeader, RowDataPacket } from "mysql2";

const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "martinspalletti33+",
  database: "arami",
  port: 3306,
});

const insertarAuth = async (nombre: string, password: string) => {
  const [row] = await conn
    .promise()
    .query<RowDataPacket[]>(
      "select * from user where usuario = ? and pass = ?",
      [nombre, password]
    );
  return row[0];
};

export { insertarAuth };
