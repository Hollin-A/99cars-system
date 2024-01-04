"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const user_model_1 = require("../models/user.model");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SECRET_KEY = process.env.SECRET_KEY;
const LocalStrategy = passport_local_1.default.Strategy;
const JwtStrategy = passport_jwt_1.default.Strategy;
const ExtractJwt = passport_jwt_1.default.ExtractJwt;
passport_1.default.use(new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    user_model_1.UserModel.findOne({ email: email.toLowerCase() })
        .then((user) => {
        if (!user) {
            return done(undefined, false, {
                message: `Email ${email} not found.`,
            });
        }
        user.comparePassword(password, (err, isMatch) => {
            if (err) {
                return done(err);
            }
            if (isMatch) {
                return done(undefined, user);
            }
            return done(undefined, false, {
                message: "Invalid email or password.",
            });
        });
    })
        .catch((err) => {
        return done(err);
    });
}));
passport_1.default.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_KEY,
}, function (jwtToken, done) {
    user_model_1.UserModel.findOne({ email: jwtToken.email })
        .then((user) => {
        if (!user) {
            return done(undefined, false);
        }
        return done(undefined, user, jwtToken);
    })
        .catch((err) => {
        return done(err, false);
    });
}));
