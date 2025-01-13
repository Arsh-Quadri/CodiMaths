import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String },
  customerId: { type: String, required: true },
  priceId: { type: String },
  hasAccess: { type: Boolean, default: false },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
