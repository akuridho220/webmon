import React from 'react';
import Image from 'next/image';
const Box = () => {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class='h-full bg-white'>
        <body class='h-full'>
        ```
      */}
      <div className='flex-1 flex-col justify-center px-4 py-4 lg:px-4 bg-white'>
        <div className='sm:mx-auto sm:max-w-sm bg-white self-center'>
            <Image
              src='/img/logo/logo-icon.png'
              width={200}
              height={200}
              alt='logo'
            />
          <h2 className='flex mt-10 self-center text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            WEB MONITORING PKL D-IV 63
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white'>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <label htmlFor='username' className='block text-sm font-medium leading-6 text-gray-900'>
                Username
              </label>
              <div className='mt-2'>
                <input
                  id='username'
                  name='username'
                  type='username'
                  autoComplete='username'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                  Password
                </label>
                <div className='text-sm'>
                  <a href='#' className='font-semibold text-indigo-600 hover:text-indigo-500'>
                    Lupa password?
                  </a>
                </div>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Sign in
              </button>
            </div>
          </form>

        
        </div>
      </div>
    </>
  );
};

export default Box;