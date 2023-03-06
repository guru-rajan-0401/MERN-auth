import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from "../features/auth/authSlice";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dOB: "",
    age: "",
    gender: "",
    phoneNumber: "",
    email: "",
    martialStatus: "",
    aadharNumber: "",
    pancardNumber: "",
    passportNumber: "",
    permanentAddress: "",
    currentAddress: "",
    photo: "",
    bloodGroup: "",
    Department: "",
    Designation: "",
    employeeId: "",
    dateOfJoining: "",
    password: "",
  });
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
  } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
     if (isSuccess || user) {
      navigate('/');
    }

    if (isError) {
       toast.error(message);
    }
   
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
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
    };

    dispatch(register(userData));
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={firstName}
              placeholder="Enter your firstName"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={lastName}
              placeholder=" Enter your lastName "
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <p>Select D.O.B</p>
            <input
              type="Date"
              className="form-control"
              id="dOB"
              name="dOB"
              value={dOB}
              placeholder=" select your dOB"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="Number"
              className="form-control"
              id="age"
              name="age"
              value={age}
              placeholder=" Enter the Age "
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="gender"
              name="gender"
              value={gender}
              placeholder=" Enter your Gender "
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              placeholder=" Enter Phone Number "
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="martialStatus"
              name="martialStatus"
              value={martialStatus}
              placeholder="Enter your martialStatus"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="Number"
              className="form-control"
              id="aadharNumber"
              name="aadharNumber"
              value={aadharNumber}
              placeholder="Enter your aadharNumber"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="pancardNumber"
              name="pancardNumber"
              value={pancardNumber}
              placeholder="Enter your pancardNumber"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="passportNumber"
              name="passportNumber"
              value={passportNumber}
              placeholder="Enter your passportNumber"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="permanentAddress"
              name="permanentAddress"
              value={permanentAddress}
              placeholder="Enter your permanentAddress"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="currentAddress"
              name="currentAddress"
              value={currentAddress}
              placeholder="Enter your currentAddress"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="photo"
              name="photo"
              value={photo}
              placeholder=" photo"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="bloodGroup"
              name="bloodGroup"
              value={bloodGroup}
              placeholder="Enter your bloodGroup"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="Department"
              name="Department"
              value={Department}
              placeholder="Enter your Department"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="Designation"
              name="Designation"
              value={Designation}
              placeholder="Enter your Designation"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="employeeId"
              name="employeeId"
              value={employeeId}
              placeholder="Enter your employeeId"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <p> select dateOfJoining</p>
            <input
              type="Date"
              className="form-control"
              id="dateOfJoining"
              name="dateOfJoining"
              value={dateOfJoining}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder=" Enter password"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
