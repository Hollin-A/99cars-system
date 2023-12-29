import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

import { dbConnect } from "./config/db.config";

import vehicleRoutes from "./routes/vehicle.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/v1/vehicles", vehicleRoutes);

dbConnect();

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
