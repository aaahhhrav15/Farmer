import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const response = await fetch(
        "http://divij2510.pythonanywhere.com/api/users/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to login");
      }
      const data = await response.json();
      console.log("Login successful:", data);
      console.log(data.token);
      const requestOptions = {
        headers: {
          Authorization: `Token ${data.token}`,
        },
        redirect: "follow",
      };
      const profilesResponse = await fetch(
        "http://divij2510.pythonanywhere.com/api/users/profile/view-all/",
        requestOptions
      );
      if (!profilesResponse.ok) {
        throw new Error("Failed to fetch profiles");
      }
      console.log(profilesResponse);
      const profilesData = await profilesResponse.json();
      console.log("Profiles:", profilesData);
      setUsername("");
      setPassword("");
      setError(null);
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Failed to login. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>
          <form onSubmit={handleSubmit}>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                name="pass"
                id="password"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                <span className="text-md">Remember for 30 days</span>
              </div>
              <span className="font-bold text-md">Forgot password</span>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            >
              Sign in
            </button>
            <div className="text-center text-gray-400">
              Don't have an account?
              <span
                onClick={() => navigate("/farmer/signup")}
                className="font-bold text-black cursor-pointer"
              >
                Sign up for free
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;