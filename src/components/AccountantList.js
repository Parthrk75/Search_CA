// components/AccountantList.js
import React from 'react';

function AccountantList({ accountants }) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {accountants.map((accountant) => (
          <div
            key={accountant.id}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <img
              className="w-full"
              src={accountant.image}
              alt={accountant.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{accountant.name}</div>
              <p className="text-gray-700 text-base">{accountant.intro}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <div className="mb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Rating: {accountant.rating}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Charge: {accountant.price}
                </span>
              </div>
              <div className="text-gray-700 text-sm mb-2">
                Task Complexity: {accountant.taskComplexity}
              </div>
              <div className="text-gray-700 text-sm mb-2">
                Delivery Time: {accountant.deliveryTime}
              </div>
              <div className="text-gray-700 text-sm">
                Reviews: {accountant.reviewCount}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccountantList;
