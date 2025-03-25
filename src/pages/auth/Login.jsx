import React, { useState } from "react";
import heRo from "../../assets/images/hero.jpg";
import gooGle from "../../assets/images/googlelogo.png";
import { apiLogin } from "../../services/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user"); // Default to 'user'
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const formData = new FormData(e.target);

    try {
      // Here you would integrate with your actual authentication API
      // console.log("Logging in as", userType, "with email:", email);
      const response = await apiLogin({ email, password }); //fetch token from backend
      localStorage.setItem('token', response.data.accessToken);
      console.log(response);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Handle successful login
      // Redirect based on user type
      if (userType === "vendor") {
        // window.location.href = "/vendor/dashboard";
      } else {
        // window.location.href = "/user/dashboard";
      }
    } catch (err) {
      setError("Failed to log in. Please check your credentials.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Image */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${heRo})` }}
      >
        {/* You can add overlay text or elements here if desired */}
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2">Sign in to your account</h1>
          <p className="text-gray-600 mb-8">Enter your details below</p>

          {/* User type selection */}
          <div className="flex justify-start space-x-6 mb-6">
            <div className="flex items-center">
              <input
                id="user-type-user"
                name="user-type"
                type="radio"
                className="h-4 w-4 text-blue-600 border-gray-300"
                checked={userType === "user"}
                onChange={() => setUserType("user")}
              />
              <label
                htmlFor="user-type-user"
                className="ml-2 block text-sm text-gray-900"
              >
                User
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="user-type-vendor"
                name="user-type"
                type="radio"
                className="h-4 w-4 text-blue-600 border-gray-300"
                checked={userType === "vendor"}
                onChange={() => setUserType("vendor")}
              />
              <label
                htmlFor="user-type-vendor"
                className="ml-2 block text-sm text-gray-900"
              >
                Vendor
              </label>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email or Phone Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 required:"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 required"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white rounded-md p-3 font-medium hover:bg-blue-700 transition duration-200"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-white text-gray-500 text-sm">or</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md p-3 font-medium hover:bg-gray-50 transition duration-200"
            >
              <img src={gooGle} alt="Google icon" className="w-5 h-5" /> Sign in
              with Google
            </button>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                New to our platform?{" "}
                <a href="/signup" className="text-blue-600 hover:underline">
                  Create an account
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
