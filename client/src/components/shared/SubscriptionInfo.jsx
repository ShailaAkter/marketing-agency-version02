import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const SubscriptionInfo = ({ packageName, startDate, endDate, price }) => 
{  
  return (
    <div className="bg-gradient-to-r from-primary to-orange-700 text-white shadow-lg p-10 mx-auto w-full rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">{packageName}</h2>
      </div>

      {/* Details */}
      <div className="space-y-4">
        {/* Start Date */}
        <div className="flex justify-between">
          <span className="text-lg font-semibold">Start Date</span>
          <span>{startDate}</span>
        </div>
        {/* End Date */}
        <div className="flex justify-between">
          <span className="text-lg font-semibold">End Date</span>
          <span>{endDate}</span>
        </div>
        {/* Price */}
        <div className="flex justify-between">
          <span className="text-lg font-semibold">Price</span>
          <span className="font-bold">${price}</span>
        </div>
      </div>
    </div>
  );
};



export default SubscriptionInfo;
