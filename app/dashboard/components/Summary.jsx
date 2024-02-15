import React, { use } from 'react';
import * as Icon from 'react-feather';

const Summary = ({ totalListing, totalEligible, totalSampelEligible }) => {
  return (
    <>
      <div className="block md:flex w-full md:space-x-2 space-y-2 md:space-y-0">
        <div className="flex space-x-2 items-center w-full md:w-1/3 bg-white text-hitam-100 shadow-md md:boxShadowComp sm:p-4 p-2 text-sm sm:text-base rounded-md font-semibold">
          <div className="">
            <div className="bg-primary-800/30 text-primary-800 rounded-full px-4 py-4">
              <Icon.Home></Icon.Home>
            </div>
          </div>
          <div className="w-full pl-4">
            <p className="">Total Listing</p>
            <p className="">{totalListing}</p>
          </div>
        </div>
        <div className="flex space-x-2 items-center w-full md:w-1/3 bg-white text-hitam-100 shadow-md md:boxShadowComp sm:p-4 p-2 text-sm sm:text-base rounded-md font-semibold">
          <div className="">
            <div className="bg-secondary-800/30 text-secondary-800 rounded-full px-4 py-4">
              <Icon.Home></Icon.Home>
            </div>
          </div>
          <div className="w-full pl-4">
            <p className="">Total Eligible</p>
            <p className="">{totalEligible}</p>
          </div>
        </div>
        <div className="flex space-x-2 items-center w-full md:w-1/3 bg-white text-hitam-100 shadow-md md:boxShadowComp sm:p-4 p-2 text-sm sm:text-base rounded-md font-semibold">
          <div className="">
            <div className="bg-accent-800/30 text-accent-800 rounded-full px-4 py-4">
              <Icon.Home></Icon.Home>
            </div>
          </div>
          <div className="w-full pl-4">
            <p className="">Total Sampel</p>
            <p className="">{totalSampelEligible}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
