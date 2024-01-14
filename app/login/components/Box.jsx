import React from 'react';
import Image from 'next/image';
const Box = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex-col justify-center px-6 py-4 bg-white w-max rounded-2xl'>
        <div className='sm:mx-auto sm:max-w-sm bg-white flex flex-col justify-center items-center'>
            <Image
              src='/img/logo/logo-icon.png'
              width={120}
              height={120}
              alt='logo'
            />
          <h2 className='flex mt-4 self-center text-center text-xl font-bold leading-9 tracking-tight text-gray-900'>
            WEB MONITORING PKL D-IV 63
          </h2>
          <p className='font-light text-sm'>POLSTAT STIS 2023/2024</p>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-sm bg-white'>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <label htmlFor='username' className='block text-sm font-medium leading-6 text-primary-800'>
                Username
              </label>
              <div className='mt-2'>
                <input
                  id='username'
                  name='username'
                  type='username'
                  autoComplete='username'
                  required
                  className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='block text-sm font-medium leading-6 text-primary-800'>
                  Password
                </label>
                {/* <div className='text-sm'>
                  <a href='#' className='font-semibold text-indigo-600 hover:text-indigo-500'>
                    Lupa password?
                  </a>
                </div> */}
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-primary-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Sign in
              </button>
            </div>
          </form>

        
        </div>
      </div>
    </div>
  );
};

export default Box;