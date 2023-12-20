import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import gastosRoutes from "./routes/gastos.route";
import authRoutes from "./routes/auth.route";
dotenv.config();

const port = process.env.port || 5555;
const app = express();

//da info de la api
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/gastos", gastosRoutes);

//escucha

app.listen(port, () => console.log(`escucha en el puerto ${port}`));
