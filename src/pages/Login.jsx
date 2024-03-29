import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
const Login = () => {
  const [loading, login] = useLogin();
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setUserDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userDetails);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-pink-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
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
              autoComplete="on"
              required
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
              autoComplete="on"
              required
            />
          </div>
          <Link
            to="/signup"
            href="#s"
            className="text-sm hover:underline hover:text-pink-500 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 hover:bg-pink-500 hover:text-white"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
