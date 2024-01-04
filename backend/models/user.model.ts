import { model, Schema, Model } from "mongoose";
import bcrypt from "bcrypt";
import { User } from "../types/user";

const UserSchema: Schema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

UserSchema.pre<User>("save", function (next) {
  const user = this;

  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (
  candidatePassword: string,
  callback: any
) {
  const user = this;

  bcrypt.compare(
    candidatePassword,
    user.password,
    function (err, isMatch: boolean) {
      callback(err, isMatch);
    }
  );
};

export const UserModel: Model<User> = model<User>("users", UserSchema);
