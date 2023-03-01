import mongoose from "mongoose";
mongoose.set("strictQuery", false);

export const employeeSchema = mongoose.Schema(
  {
   
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dOB: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    martialStatus: {
      type: String,
      required: true,
    },
    aadharNumber: {
      type: Number,
      required: true,
    },
    pancardNumber: {
      type: String,
      required: true,
      uppercase: true,
    },
    passportNumber: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
    currentAddress: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    Department: {
      type: String,
      required: true,
    },

    Designation: {
      type: String,
      required: true,
    },
    employeeId: {
      type: String,
      required: true,
    },
    dateOfJoining: {
      type: Date,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("employees", employeeSchema);