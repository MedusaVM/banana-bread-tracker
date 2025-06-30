import mongoose, { Schema, Document } from "mongoose";

//Types imports
import { IUser } from "../types/user";

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export const User = mongoose.model<IUser>("User", userSchema);
