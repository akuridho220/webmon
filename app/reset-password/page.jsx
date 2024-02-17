import Box from './components/Box';
import React, { Suspense } from 'react';

const resetPassword = () => {
  return (
    <>
      <div className="bg-primary-900">
        <Suspense>
          <Box />
        </Suspense>
      </div>
    </>
  );
};

export default resetPassword;
