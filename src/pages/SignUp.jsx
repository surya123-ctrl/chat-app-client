import React, { useState } from "react";
import GenderCheckBox from "../components/GenderCheckBox";
import { Link } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";
const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signUp } = useSignUp();
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setUserDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleCheckBoxChange = (gender) => {
    setUserDetails({ ...userDetails, gender });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    await signUp(userDetails);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-pink-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-lg label-text text-gray-300">
                Full Name
              </span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10 text-black"
              value={userDetails.fullName}
              onChange={handleChange}
              required
              autoComplete="on"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-lg label-text text-gray-300">Username</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 text-black"
              value={userDetails.username}
              onChange={handleChange}
              required
              autoComplete="on"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-lg label-text text-gray-300">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 text-black"
              value={userDetails.password}
              onChange={handleChange}
              required
              autoComplete="on"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-lg label-text text-gray-300">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 text-black"
              value={userDetails.confirmPassword}
              onChange={handleChange}
              required
              autoComplete="on"
            />
          </div>
          <GenderCheckBox
            onCheckboxChange={handleCheckBoxChange}
            selectedGender={userDetails.gender}
            required
          />

          <Link
            to="/login"
            href="#s"
            className="text-sm hover:underline hover:text-pink-500 mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 hover:bg-pink-500 hover:text-white"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
