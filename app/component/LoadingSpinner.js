
// import Image from 'next/image';
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        {/* <Image
          src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
          alt="Loading Avatar"
          width={112} // 28 * 4
          height={112} // 28 * 4
          className="rounded-full"
        /> */}
      </div>
    </div>
  );
};

export default LoadingSpinner;
