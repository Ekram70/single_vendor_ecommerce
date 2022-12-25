import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className=" flex flex-col justify-center bg-white absolute max-w-[451px] h-full ml-[250px] top-[155px] ">
      <form className="mx-auto bg-[#F6FFFD]  p-8 px-8 rounded-lg shadow-lg">
        <h3 className="text-center text-3xl dark:text-white font-semibold mb-8">
          Create Your Account
        </h3>
        <div className="flex flex-col text-gray-400 py-2">
          <label>Enter Your Name</label>
          <input
            className="rounded-lg  bg-[#EBEBEB] mt-2 p-2 focus:border-blur-500 focus:border-gray-800 focus:outline-none"
            type="text"
            placeholder="Enter Full Name"
          />
        </div>
        <div className="flex flex-col text-gray-400 py-2">
          <label>Enter Email</label>
          <input
            className="rounded-lg  bg-[#EBEBEB] mt-2 p-2 focus:border-blur-500 focus:border-gray-800 focus:outline-none"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="flex flex-col text-gray-400 py-2">
          <label>Password</label>
          <input
            className="rounded-lg  bg-[#EBEBEB] mt-2 p-2 focus:border-blur-500 focus:border-gray-800 focus:outline-none"
            type="password"
            placeholder="Enter Your Password"
          />
        </div>
        <div className="flex flex-col text-gray-400 py-2">
          <label>Confirm Password</label>
          <input
            className="rounded-lg  bg-[#EBEBEB] mt-2 p-2 focus:border-blur-500 focus:border-gray-800 focus:outline-none"
            type="password"
            placeholder="confirm Password"
          />
        </div>

        <button className="border bg-[#F2B33B] py-2 mt-8 mb-4 w-full  text-white rounded-md shadow-lg  hover:scale-105 duration-300">
          Create Account
        </button>

        <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
          <p>Already have an account?</p>
          <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
            <Link to="/Login">Sign In</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
