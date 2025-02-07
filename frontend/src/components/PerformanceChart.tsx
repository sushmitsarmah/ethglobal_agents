import React from 'react';
import { LineChart, TrendingUp, ArrowUpRight } from 'lucide-react';

export default function PerformanceChart() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Fund Performance</h2>
        <div className="flex items-center space-x-2">
          <span className="text-green-500 flex items-center">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            24.5%
          </span>
          <button className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <TrendingUp className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="relative h-64 mt-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <LineChart className="w-8 h-8 text-gray-300 dark:text-gray-600" />
          <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">Chart visualization would go here</p>
        </div>
      </div>
    </div>
  );
}