import mongoose from "mongoose";
import bcrypt from "bcryptjs"

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: Date;
  gender: string;
  pronoun: string | undefined;
  verifiedEmail: boolean
}

const userSchema = new mongoose.Schema<User>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  pronoun: String,
  verifiedEmail: {
    type: Boolean,
    default: false
  }
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(this.password, salt);
  this.password = hashPassword;
});

userSchema.methods.MatchPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const userModel = mongoose.models["User"] || mongoose.model("User", userSchema);
export default userModel;
