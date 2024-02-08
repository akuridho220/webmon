'use client';

import React, { useState } from 'react';
import * as Icon from 'react-feather';

const PasswordInput = ({ onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mt-2 relative">
      <input
        id="password"
        name="password"
        type={showPassword ? 'text' : 'password'}
        autoComplete="current-password"
        required
        onChange={onChange}
        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
      />
      {showPassword ? (
        <Icon.Eye onClick={togglePasswordVisibility} className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer" />
      ) : (
        <Icon.EyeOff onClick={togglePasswordVisibility} className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer" />
      )}
    </div>
  );
};

export default PasswordInput;
