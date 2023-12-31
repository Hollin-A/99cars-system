"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_config_1 = require("./config/db.config");
const vehicle_route_1 = __importDefault(require("./routes/vehicle.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1/vehicles", vehicle_route_1.default);
(0, db_config_1.dbConnect)();
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
