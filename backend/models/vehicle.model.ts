import { model, Schema, Model } from "mongoose";
import { IVehicle } from "../types/vehicle";

const VehicleSchema: Schema = new Schema({
  code: { type: String, required: true },
  brand: { type: String, required: true },
  brandModel: { type: String, required: true },
  registration: { type: String, required: true },
  color: { type: String, required: true },
  createDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  timestamps: { createDate: Date, updatedDate: Date },
});

export const VehicleModel: Model<IVehicle> = model<IVehicle>(
  "vehicles",
  VehicleSchema
);
