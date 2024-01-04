"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVehicle = exports.updateVehicle = exports.addVehicle = exports.getVehicle = exports.getVehicles = void 0;
const vehicle_model_1 = require("../models/vehicle.model");
const getVehicles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vehicles = yield vehicle_model_1.VehicleModel.find().sort({
            updatedDate: -1,
        });
        res.status(200).json({ vehicles });
    }
    catch (error) {
        throw error;
    }
});
exports.getVehicles = getVehicles;
const getVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vehicle = yield vehicle_model_1.VehicleModel.findById(req.params.id);
        res.status(200).json({ vehicle });
    }
    catch (error) {
        throw error;
    }
});
exports.getVehicle = getVehicle;
const addVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const vehicle = new vehicle_model_1.VehicleModel({
            code: body.code,
            brand: body.brand,
            brandModel: body.brandModel,
            registration: body.registration,
            color: body.color,
            createDate: new Date(),
            updatedDate: new Date(),
        });
        const newVehicle = yield vehicle.save();
        res.status(201).json({ message: "vehcile added", vehicle: newVehicle });
    }
    catch (error) {
        throw error;
    }
});
exports.addVehicle = addVehicle;
const updateVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updatedVehicle = {
            code: body.code,
            brand: body.brand,
            brandModel: body.brandModel,
            registration: body.registration,
            color: body.color,
            updatedDate: new Date(),
        };
        const updateNote = yield vehicle_model_1.VehicleModel.findByIdAndUpdate(id, updatedVehicle, { new: true });
        res.status(200).json({
            message: "Vehicle updated",
            vehicle: updatedVehicle,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateVehicle = updateVehicle;
const deleteVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedVehicle = yield vehicle_model_1.VehicleModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Vehicle deleted",
            vehicle: deletedVehicle,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteVehicle = deleteVehicle;
