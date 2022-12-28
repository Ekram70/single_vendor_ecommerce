import React from "react";

const Register = () => {
  return (
    <div className=" flex  h-screen w-full items-center justify-center bg-primary">
      <div className="font-noto max-w-[450px] rounded-lg bg-white p-8 text-sm text-secondary drop-shadow-lg sm:rounded-2xl sm:p-14">
        <h3 className="text-center text-xl font-bold sm:text-2xl ">
          Create Your Account
        </h3>
        <hr className="my-2.5 mx-auto h-0.5 w-44 border-0 bg-primary" />
        <form className="mt-9 space-y-5">
          <div className="flex flex-col">
            <label className="mb-0.5 font-medium">Enter Name</label>
            <input
              className="required rounded bg-gray-200 p-2 placeholder-gray-400 focus:outline-primary sm:text-base"
              type="text"
              placeholder="Diksha"
            />
          </div>
          <div className="flex flex-col ">
            <label className="mb-0.5 font-medium">Enter Email</label>
            <input
              className="required rounded bg-gray-200 p-2 placeholder-gray-400 focus:outline-primary sm:text-base"
              type="email"
              placeholder="diksha@gmail.com"
            />
          </div>
          <div className="flex flex-col ">
            <label className="mb-0.5 font-medium">Password</label>
            <input
              className="required rounded bg-gray-200 p-2 placeholder-gray-400 focus:outline-primary sm:text-base"
              type="password"
              placeholder="*****"
            />
          </div>
          <div className="flex flex-col ">
            <label className="mb-0.5 font-medium">Confirm Password</label>
            <input
              className="required rounded bg-gray-200 p-2 placeholder-gray-400 focus:outline-primary sm:text-base"
              type="password"
              placeholder="*****"
            />
          </div>
          <button className="w-full rounded  bg-primary py-2 font-bold text-secondary active:scale-95">
            Create Account
          </button>
          <p className="text-center">
            You have an account?{" "}
            <a href="/Login" className="underline">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
