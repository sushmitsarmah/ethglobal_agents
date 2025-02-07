import React from 'react';
import { LayersIcon, Percent, Clock, TrendingUp } from 'lucide-react';

const restakingData = {
  totalRestaked: '125.5M',
  avgAPY: 28.4,
  activeValidators: 1250,
  rewardsEarned: '45.6K',
  assets: [
    {
      name: 'ETH',
      amount: '45,678',
      value: '156.7M',
      apy: 24.5,
      share: 65,
    },
    {
      name: 'rETH',
      amount: '23,456',
      value: '78.9M',
      apy: 26.8,
      share: 25,
    },
    {
      name: 'cbETH',
      amount: '12,345',
      value: '34.5M',
      apy: 22.3,
      share: 10,
    },
  ],
};

export default function EigenLayerInsights() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <LayersIcon className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">EigenLayer Insights</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Restaked</div>
          <div className="text-xl font-bold text-gray-900 dark:text-white">${restakingData.totalRestaked}</div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Average APY</div>
          <div className="text-xl font-bold text-green-600">{restakingData.avgAPY}%</div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Active Validators</div>
          <div className="text-xl font-bold text-gray-900 dark:text-white">{restakingData.activeValidators}</div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Rewards Earned</div>
          <div className="text-xl font-bold text-green-600">${restakingData.rewardsEarned}</div>
        </div>
      </div>

      <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-4">Restaked Assets</h3>
      <div className="space-y-4">
        {restakingData.assets.map((asset, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">{asset.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {asset.amount} ({asset.share}% of total)
                </p>
              </div>
              <div className="text-right">
                <div className="text-lg font-medium text-gray-900 dark:text-white">
                  ${asset.value}
                </div>
                <div className="text-sm text-green-600">
                  {asset.apy}% APY
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full"
                style={{ width: `${asset.share}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}