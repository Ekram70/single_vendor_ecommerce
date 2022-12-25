import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-[url("../../asset/images/pattern.jpg")] bg-[#F2B33B] h-screen w-full '>
           
                <div className= ' flex flex-col justify-center max-w-[415px] h-full absolute top-[100px] ml-[250px] bg-white' >
                    <form className='mx-auto bg-[#F6FFFD]  p-8  rounded-lg shadow-lg'>
                            <h3 className='text-center text-3xl dark:text-white font-semibold mb-8'>Login Your Account</h3>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Enter Email</label>
                            <input className='rounded-lg  bg-[#EBEBEB] mt-2 p-2 focus:border-blur-500 focus:border-gray-800 focus:outline-none' type="email" placeholder='UserEmail' />
                        </div>
                        <div  className='flex flex-col text-gray-400 py-2'>
                            <label>Password</label>
                        <input className='rounded-lg  bg-[#EBEBEB] mt-2 p-2 focus:border-blur-500 focus:border-gray-800 focus:outline-none' type="password" placeholder='UserPassword' /> 
                            </div>
                            <div className='flex justify-between py-3 '>
                                <p className='cursor-pointer flex items-center'><input className='mr-2' type="checkbox" />Remember Me</p>
                                <p className='cursor-pointer blur-none '>Forget Password</p>
                            </div>
                            <button className='border bg-[#F2B33B] py-2 mt-8 mb-4 w-full  text-white rounded-md shadow-lg  hover:scale-105 duration-300'>Login</button>
                            
                            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                            <p>Don't have an account?</p>
                                <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                                    <Link to="/register">
                                        Sign Up
                                    </Link>
                                </button>
                        </div>
                    </form>
                </div> 
        </div>
    );
};

export default Login;