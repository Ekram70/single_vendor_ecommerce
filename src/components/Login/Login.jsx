import React from 'react';

const Login = () => {
  return (
    <div className="bg-primary flex items-center justify-center w-full h-screen">
      <div className="p-8 sm:p-14 drop-shadow-lg font-noto text-sm rounded-lg sm:rounded-2xl max-w-[450px] bg-white text-secondary">
        <h3 className="text-center text-xl sm:text-2xl font-bold">
          Login to Your Account
        </h3>
        <hr class="my-2.5 h-0.5 w-44 bg-primary border-0 mx-auto"></hr>
        <form className="mt-11">
          <div className="flex flex-col">
            <label className="font-medium">Enter Email</label>
            <input
              className="rounded bg-gray-200 p-2 sm:text-base placeholder-gray-400 focus:outline-primary"
              type="email"
              placeholder="john@gmail.com"
            />
          </div>
          <div className="flex flex-col mt-7">
            <label className="font-medium">Password</label>
            <input
              className="rounded bg-gray-200 p-2 sm:text-base placeholder-gray-400 focus:outline-primary"
              type="password"
              placeholder="********"
            />
          </div>
          <div className="flex justify-between text-xs sm:text-sm mt-4">
            <p>
              <input
                id="remember"
                className="mr-2 cursor-pointer"
                type="checkbox"
              />
              <label htmlFor="remember" className="cursor-pointer">
                Remember Me
              </label>
            </p>
            <p className="cursor-pointer">Forget Password</p>
        </div>
                  
          <button className="bg-primary py-2 mt-7 w-full text-secondary rounded active:scale-95 font-bold">
            Login
          </button>
          <p className="text-center mt-2">
            Don't have an account?{' '}
            <a href="/Register" className="underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
