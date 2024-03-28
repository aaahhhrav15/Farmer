import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      setName("");
      setPhone("");
      setUsername("");
      setPassword("");
      setError(null);
    } catch (error) {
      console.error("Error signing up:", error);
      setError("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-row space-x-8 m-6 w-[32rem] bg-white shadow-2xl justify-center rounded-2xl">
        {/* left side */}
        <div className="flex flex-col justify-center w-full p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Sign Up</span>
          <span className="font-light text-gray-400 mb-8">
            Create your account
          </span>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="py-3 ">
              <span className="mb-2 text-md">Name</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="py-3 ">
              <span className="mb-2 text-md">Phone Number</span>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="py-3 ">
              <span className="mb-2 text-md">Username</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="pt-3 pb-10">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button
              type="submit"
              className="w-full bg-black text-white p-2 pt-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            >
              Sign Up
            </button>
            <div className="text-center text-gray-400">
              Already have an account?
              <span
                onClick={() => navigate("/farmer/login")}
                className="font-bold text-black cursor-pointer"
              >
                Login
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;