import React from 'react';
import { PieChart, DollarSign, ArrowUpRight } from 'lucide-react';

const allocations = [
  { name: 'Uniswap V3', percentage: 45, value: 34567.89 },
  { name: 'EigenLayer', percentage: 35, value: 26789.12 },
  { name: 'Curve', percentage: 20, value: 15234.56 },
];

export default function InvestmentOverview() {
  const totalValue = allocations.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <PieChart className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Investment Overview</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="mb-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Value</p>
            <div className="flex items-baseline">
              <DollarSign className="w-4 h-4 text-gray-400 mr-1" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {totalValue.toLocaleString('en-US', { maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Earnings</p>
            <div className="flex items-center">
              <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-2xl font-bold text-green-500">
                +$12,345.67
              </span>
              <span className="ml-2 text-sm text-green-500">(+18.4%)</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {allocations.map((allocation, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 dark:text-gray-300">{allocation.name}</span>
                <span className="text-gray-900 dark:text-white font-medium">{allocation.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: `${allocation.percentage}%` }}
                ></div>
              </div>
              <div className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
                ${allocation.value.toLocaleString('en-US', { maximumFractionDigits: 2 })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}