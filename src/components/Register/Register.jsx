import React from 'react';

const Register = () => {
  return (
      <div className=" bg-primary  w-full h-screen flex items-center justify-center">
          <div className='p-8 sm:p-14 drop-shadow-lg font-noto text-sm rounded-lg sm:rounded-2xl max-w-[450px] bg-white text-secondary'>
              <h3 className="text-center text-xl sm:text-2xl font-bold ">Create Your Account</h3>
              <hr className='bg-primary my-2.5 h-0.5 w-44 border-0 mx-auto'/>
                  <form className="mt-9 space-y-5">
                        <div className="flex flex-col">
                            <label className="font-medium mb-0.5">Enter Name</label>
                            <input
                            className="rounded bg-gray-200 p-2 sm:text-base placeholder-gray-400 focus:outline-primary required"
                            type="text"
                            placeholder="Diksha"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label className="font-medium mb-0.5">Enter Email</label>
                            <input
                            className="rounded bg-gray-200 p-2 sm:text-base placeholder-gray-400 focus:outline-primary required"
                            type="email"
                            placeholder="diksha@gmail.com"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label className="font-medium mb-0.5">Password</label>
                            <input
                            className="rounded bg-gray-200 p-2 sm:text-base placeholder-gray-400 focus:outline-primary required"
                            type="password"
                            placeholder="*****"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label className="font-medium mb-0.5">Confirm Password</label>
                            <input
                            className="rounded bg-gray-200 p-2 sm:text-base placeholder-gray-400 focus:outline-primary required"
                            type="password"
                            placeholder="*****"
                            />
                         </div>
                        <button className="bg-primary py-2  w-full text-secondary rounded active:scale-95 font-bold">
                            Create Account
                       </button>
                   <p className="text-center">
                        You have an account?{' '}
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
