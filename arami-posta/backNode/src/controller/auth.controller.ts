import { insertarAuth } from "../repositorio/auth.repositorio";
import jsonwebtoken from "jsonwebtoken";

const consultaAuth = async (req: any, res: any) => {
  const usuario = await insertarAuth(req.body.nombre, req.body.password);
  if (usuario) {
    //jwt
    const payload = {
      name: usuario.nombre,
      iss: new Date(),
    };
    const token = jsonwebtoken.sign(payload, "este es el secret");
    const tmp = {
      token: token,
    };
    res.json(tmp);
  } else {
    res.status(401).end("Nombre o contraseña invalido");
  }
};

export { consultaAuth };
