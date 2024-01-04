import { Router } from "express";
import {
  getVehicles,
  getVehicle,
  addVehicle,
  updateVehicle,
  deleteVehicle,
} from "../controllers/vehicle.controller";
// import { authenticateJWT } from "../middleware/userAuth";

const router: Router = Router();

// router.use(authenticateJWT);

router.post("/", addVehicle);

router.get("/", getVehicles);

router.get("/:id", getVehicle);

router.patch("/:id", updateVehicle);

router.delete("/:id", deleteVehicle);

export default router;
