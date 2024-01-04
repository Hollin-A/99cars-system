"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJWT = void 0;
const passport_1 = __importDefault(require("passport"));
require("../auth/passportHandler");
const authenticateJWT = (req, res, next) => {
    passport_1.default.authenticate("jwt", function (err, user, info) {
        if (err) {
            return res.status(401).json({ status: "error", code: "unauthorized" });
        }
        if (!user) {
            return res.status(401).json({ status: "error", code: "unauthorized" });
        }
        else {
            req.user = user;
            return next();
        }
    })(req, res, next);
};
exports.authenticateJWT = authenticateJWT;
