import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
    paymentInfo: {
      type: Schema.Types.ObjectId,
      ref: "Payment",
      required: true,
    }
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema); // create a model from the schema
export default User; // export the model
