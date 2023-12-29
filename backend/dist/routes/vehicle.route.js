"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehicle_controller_1 = require("../controllers/vehicle.controller");
// import { authenticateJWT } from "../middleware/userAuth";
const router = (0, express_1.Router)();
// router.use(authenticateJWT);
router.post("/", vehicle_controller_1.addVehicle);
router.get("/", vehicle_controller_1.getVehicles);
router.get("/:id", vehicle_controller_1.getVehicle);
router.patch("/:id", vehicle_controller_1.updateVehicle);
router.delete("/:id", vehicle_controller_1.deleteVehicle);
exports.default = router;