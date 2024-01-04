import { Document } from "mongoose";

export interface Vehicle extends Document {
  code: string;
  brand: string;
  brandModel: string;
  registration: string;
  color: string;
  createDate: Date;
  updatedDate: Date;
  timestamps?: {};
}
