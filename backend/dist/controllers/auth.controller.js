"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = exports.registerUser = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const passport_1 = __importDefault(require("passport"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_model_1 = require("../models/user.model");
require("../auth/passportHandler");
dotenv_1.default.config();
const SECRET_KEY = process.env.SECRET_KEY;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_model_1.UserModel.create({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
    });
    const token = jwt.sign({ email: req.body.email }, SECRET_KEY, {
        expiresIn: "24h",
    });
    res.status(200).send({ token: token, username: req.body.userName });
});
exports.registerUser = registerUser;
const authenticateUser = (req, res, next) => {
    passport_1.default.authenticate("local", (err, user) => {
        if (err)
            return next(err);
        if (!user) {
            return res.status(401).json({ status: "error", code: "unauthorized" });
        }
        else {
            const token = jwt.sign({ email: user.email }, SECRET_KEY, {
                expiresIn: "24h",
            });
            res.status(200).send({ token: token, username: user.userName });
        }
    })(req, res, next);
};
exports.authenticateUser = authenticateUser;
