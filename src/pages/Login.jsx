import axios from "axios";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    const user = {
      email: email.value,
      password: password.value,
    };

    try {
      const res = await axios.post(`http://localhost:8080/login`, user);
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/forum");
        toast.success("Logged in successfully");
      } else {
        toast.error("User does not exist");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, please try again!");
    }
  };
  return (
    <div className="h-screen w-screen dark:bg-[#32353F]">
      <Toaster />
      <div
        className=" flex flex-col items-center  min-h-screen pt-6 
      sm:justify-center sm:pt-0 "
      >
        <div className="lg:mt-2 mt-20 md:mt-0">
          <h3 className="text-4xl font-bold text-green-700 font-[Volkhov] dark:text-white">
            Continue to Login
          </h3>
        </div>
        <div
          className="w-[90%] md:w-full
          dark:bg-[#1E212A] border
          px-6 py-4 mt-6 overflow-hidden
         shadow-md sm:max-w-md rounded-lg"
        >
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium 
                text-green-950 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="border border-green-200 mt-2 w-full h-10 px-3 rounded 
                    outline-none 
                       shadow-sm"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm 
                font-medium text-green-950 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="border border-green-200 mt-2 w-full h-10 px-3 rounded 
                    outline-none 
                       shadow-sm"
              />
            </div>

            <div className="mt-8 flex flex-col items-center justify-center ">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 text-xs font-semibold 
                tracking-widest 
                text-white uppercase transition duration-150 ease-in-out 
                bg-green-950 border border-transparent rounded-md 
                active:bg-gray-900 false"
              >
                Login
              </button>
              <a
                className="text-sm text-gray-900 underline hover:text-gray-900 pt-2"
                href="/register"
              >
                Don't have an account? Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
