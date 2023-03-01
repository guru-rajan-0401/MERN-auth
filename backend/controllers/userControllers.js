import User from "../models/usermodels.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jsw from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// register user
//@route post/api/user
const registerUser = asyncHandler(async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      dOB,
      age,
      gender,
      phoneNumber,
      email,
      martialStatus,
      aadharNumber,
      pancardNumber,
      passportNumber,
      permanentAddress,
      currentAddress,
      photo,
      bloodGroup,
      Department,
      Designation,
      employeeId,
      dateOfJoining,
      password,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !dOB ||
      !age ||
      !gender ||
      !phoneNumber ||
      !email ||
      !martialStatus ||
      !aadharNumber ||
      !pancardNumber ||
      !passportNumber ||
      !permanentAddress ||
      !currentAddress ||
      !photo ||
      !bloodGroup ||
      !Department ||
      !Designation ||
      !employeeId ||
      !dateOfJoining ||
      !password
    ) {
      res.status(400);
      throw new Error("Please add all the fields");
    }

    //check if the user exists
    const emailExists = await User.findOne({ email });
    const idExists = await User.findOne({ employeeId });

    if (emailExists || idExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create user
    const emp = User.create({
      firstName,
      lastName,
      dOB,
      age,
      gender,
      phoneNumber,
      email,
      martialStatus,
      aadharNumber,
      pancardNumber,
      passportNumber,
      permanentAddress,
      currentAddress,
      photo,
      bloodGroup,
      Department,
      Designation,
      employeeId,
      dateOfJoining,
      password: hashedPassword,
    });

    if (emp) {
      res.status(201).json({
        message: "Employee created",
        _id: emp.id,
        token: generateToken(emp._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// login user
//@route post/api/login
const loginUser = asyncHandler(async (req, res) => {
  try {
    const { employeeId, password } = req.body;

    //login auth
    const employee = await User.findOne({ employeeId });

    if (employeeId && (await bcrypt.compare(password, employee.password))) {
      res.json({
        message: "Login successful",
        token: generateToken(employee._id),
      });
    } else {
      res.status(400).json({
        message: "Invalid ID or Password",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

// get user data
//@route get/api/user
const getMe = asyncHandler(async (req, res) => {
  try {
    const {
      _id,
      firstName,
      lastName,
      dOB,
      age,
      gender,
      phoneNumber,
      email,
      martialStatus,
      aadharNumber,
      pancardNumber,
      passportNumber,
      permanentAddress,
      currentAddress,
      photo,
      bloodGroup,
      Department,
      Designation,
      employeeId,
      dateOfJoining,
      password,
    } = await User.findById(req.user.id);
    res.status(200).json({
      id: _id,
      firstName,
      lastName,
      dOB,
      age,
      gender,
      phoneNumber,
      email,
      martialStatus,
      aadharNumber,
      pancardNumber,
      passportNumber,
      permanentAddress,
      currentAddress,
      photo,
      bloodGroup,
      Department,
      Designation,
      employeeId,
      dateOfJoining,
      password,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});


//generate jsw
const generateToken = (id) => {
  return jsw.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "90d",
  });
};

export  { registerUser, loginUser, getMe }; 
