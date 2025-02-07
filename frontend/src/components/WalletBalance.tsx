import React from 'react';
import { Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function WalletBalance() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Wallet className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Wallet Balance</h2>
        </div>
        <button className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
          View Details
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Available Balance</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">12.45 ETH</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">≈ $23,456.78</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Staked Assets</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">45.67 ETH</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">≈ $85,678.90</p>
        </div>
      </div>
    </div>
  );
}