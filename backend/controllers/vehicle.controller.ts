import { Response, Request } from "express";
import { IVehicle } from "../types/vehicle";
import { VehicleModel } from "../models/vehicle.model";

const getVehicles = async (req: Request, res: Response): Promise<void> => {
  try {
    const vehicles: IVehicle[] = await VehicleModel.find().sort({
      updatedDate: -1,
    });
    res.status(200).json({ vehicles });
  } catch (error) {
    throw error;
  }
};

const getVehicle = async (req: Request, res: Response): Promise<void> => {
  try {
    const vehicle: IVehicle | null = await VehicleModel.findById(req.params.id);
    res.status(200).json({ vehicle });
  } catch (error) {
    throw error;
  }
};

const addVehicle = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      IVehicle,
      "code" | "brand" | "brandModel" | "color" | "registration"
    >;

    const vehicle: IVehicle = new VehicleModel({
      code: body.code,
      brand: body.brand,
      brandModel: body.brandModel,
      registration: body.registration,
      color: body.color,
      createDate: new Date(),
      updatedDate: new Date(),
    });

    const newVehicle: IVehicle = await vehicle.save();

    res.status(201).json({ message: "vehcile added", vehicle: newVehicle });
  } catch (error) {
    throw error;
  }
};

const updateVehicle = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updatedVehicle = {
      code: body.code,
      brand: body.brand,
      brandModel: body.brandModel,
      registration: body.registration,
      color: body.color,
      updatedDate: new Date(),
    };

    const updateNote: IVehicle | null = await VehicleModel.findByIdAndUpdate(
      id,
      updatedVehicle,
      { new: true }
    );
    res.status(200).json({
      message: "Vehicle updated",
      vehicle: updatedVehicle,
    });
  } catch (error) {
    throw error;
  }
};

const deleteVehicle = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedVehicle = await VehicleModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Vehicle deleted",
      vehicle: deletedVehicle,
    });
  } catch (error) {
    throw error;
  }
};

export { getVehicles, getVehicle, addVehicle, updateVehicle, deleteVehicle };
