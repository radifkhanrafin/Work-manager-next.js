import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Name required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email Required !!!"],
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password Required !!!"],
  },
  profileURL: String,
  about: String,
});

export const User = mongoose.models.users || mongoose.model("users", UserSchema);
