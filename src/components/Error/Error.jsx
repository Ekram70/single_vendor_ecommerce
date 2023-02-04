import { BackgroundImage } from '@mantine/core';
import React from 'react';

const Error = () => (
  <BackgroundImage className="2xl:bg-auto bg-left-top bg-repeat bg-blend-multiply">
    <div className="h-screen w-full bg-gray-800">
      <div className="flex items-center justify-center py-12">
        <div className="mx-4 flex w-full items-center justify-center rounded-md border bg-white md:w-2/3">
          <div className="flex flex-col items-center py-16 ">
            <img
              className="hidden px-4 md:block"
              src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png"
              alt=""
            />
            <img
              className="md:hidden"
              src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png"
              alt=""
            />
            <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">
              OOPS!{' '}
            </h1>
            <p className="px-4 pb-10 text-center text-base leading-none text-gray-600">
              No signal here! we cannot find the page you are looking for{' '}
            </p>
            <button
              type="button"
              className="mx-4 h-10 w-44 rounded-md border bg-indigo-700 text-base text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-opacity-50"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  </BackgroundImage>
);

export default Error;
