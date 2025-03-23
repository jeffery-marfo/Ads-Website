// // import React from "react";

// // const Signup = () => {
// //   return <div>SignUp</div>;
// // };

// // export default Signup;
// import React, { useState } from "react";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     userType: "user", // Default to 'user'
//     companyName: "", // For vendors only
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleUserTypeChange = (type) => {
//     setFormData((prev) => ({ ...prev, userType: type }));
//   };

//   const validateForm = () => {
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match");
//       return false;
//     }

//     if (formData.password.length < 8) {
//       setError("Password must be at least 8 characters long");
//       return false;
//     }

//     if (formData.userType === "vendor" && !formData.companyName.trim()) {
//       setError("Company name is required for vendors");
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!validateForm()) return;

//     setLoading(true);

//     try {
//       // Here you would integrate with your actual registration API
//       console.log("Registering as", formData.userType, "with data:", formData);

//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Handle successful registration
//       // Redirect to login page or directly to dashboard
//       window.location.href = "/login?registered=true";
//     } catch (err) {
//       setError("Failed to create account. Please try again.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Create your account
//         </h2>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           {/* User type selection */}
//           <div className="flex justify-center space-x-4 mb-6">
//             <div className="flex items-center">
//               <input
//                 id="user-type-user"
//                 name="user-type"
//                 type="radio"
//                 className="h-4 w-4 text-blue-600 border-gray-300"
//                 checked={formData.userType === "user"}
//                 onChange={() => handleUserTypeChange("user")}
//               />
//               <label
//                 htmlFor="user-type-user"
//                 className="ml-2 block text-sm text-gray-900"
//               >
//                 User
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 id="user-type-vendor"
//                 name="user-type"
//                 type="radio"
//                 className="h-4 w-4 text-blue-600 border-gray-300"
//                 checked={formData.userType === "vendor"}
//                 onChange={() => handleUserTypeChange("vendor")}
//               />
//               <label
//                 htmlFor="user-type-vendor"
//                 className="ml-2 block text-sm text-gray-900"
//               >
//                 Vendor
//               </label>
//             </div>
//           </div>

//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {error && (
//               <div className="bg-red-50 border-l-4 border-red-400 p-4">
//                 <p className="text-sm text-red-700">{error}</p>
//               </div>
//             )}

//             <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
//               <div>
//                 <label
//                   htmlFor="firstName"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   First name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     type="text"
//                     name="firstName"
//                     id="firstName"
//                     required
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="lastName"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Last name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     type="text"
//                     name="lastName"
//                     id="lastName"
//                     required
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </div>
//               </div>
//             </div>

//             {formData.userType === "vendor" && (
//               <div>
//                 <label
//                   htmlFor="companyName"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Company name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     type="text"
//                     name="companyName"
//                     id="companyName"
//                     value={formData.companyName}
//                     onChange={handleChange}
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </div>
//               </div>
//             )}

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email address
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="confirmPassword"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Confirm password
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   type="password"
//                   required
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 {loading ? "Creating account..." : "Create account"}
//               </button>
//             </div>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">
//                   Already have an account?
//                 </span>
//               </div>
//             </div>

//             <div className="mt-6">
//               <a
//                 href="/login"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-gray-50"
//               >
//                 Sign in
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import heRo2 from "../../assets/images/hero2.jpg";
import gooGle from "../../assets/images/googlelogo.png";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Here you would integrate with your actual signup API
      console.log("Creating account with name:", name, "email:", email);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Handle successful signup
      window.location.href = "/user/dashboard";
    } catch (err) {
      setError("Failed to create account. Please try again.");
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
        style={{ backgroundImage: `url(${heRo2})` }}
      >
        {/* You can add overlay text or elements here if desired */}
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2">Create an account</h1>
          <p className="text-gray-600 mb-8">Enter your details below</p>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email or Phone Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white rounded-md p-3 font-medium hover:bg-blue-700 transition duration-200"
            >
              {loading ? "Creating Account..." : "Create Account"}
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
              <img src={gooGle} alt="Google icon" className="w-5 h-5" /> Sign up
              with Google
            </button>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="text-blue-600 hover:underline">
                  Log in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
