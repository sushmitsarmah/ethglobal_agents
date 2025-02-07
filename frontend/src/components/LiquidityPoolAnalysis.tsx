import React from 'react';
import { Droplets, TrendingUp, DollarSign, Activity } from 'lucide-react';

const poolData = [
  {
    name: 'ETH/USDC',
    tvl: '45.6M',
    apy: 24.5,
    volume24h: '12.3M',
    fees24h: '45.6K',
    utilization: 85,
  },
  {
    name: 'DAI/USDC',
    tvl: '32.1M',
    apy: 18.2,
    volume24h: '8.9M',
    fees24h: '32.1K',
    utilization: 72,
  },
  {
    name: 'WBTC/ETH',
    tvl: '28.9M',
    apy: 21.8,
    volume24h: '9.8M',
    fees24h: '28.9K',
    utilization: 78,
  },
];

export default function LiquidityPoolAnalysis() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Droplets className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Liquidity Pool Analysis</h2>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              <th className="pb-3 font-medium">Pool</th>
              <th className="pb-3 font-medium">TVL</th>
              <th className="pb-3 font-medium">APY</th>
              <th className="pb-3 font-medium">24h Volume</th>
              <th className="pb-3 font-medium">24h Fees</th>
              <th className="pb-3 font-medium">Utilization</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {poolData.map((pool, index) => (
              <tr key={index} className="text-sm">
                <td className="py-4">
                  <span className="font-medium text-gray-900 dark:text-white">{pool.name}</span>
                </td>
                <td className="py-4">
                  <div className="flex items-center text-gray-900 dark:text-white">
                    <DollarSign className="w-4 h-4 mr-1 text-gray-400" />
                    {pool.tvl}
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {pool.apy}%
                  </div>
                </td>
                <td className="py-4">
                  <span className="text-gray-900 dark:text-white">${pool.volume24h}</span>
                </td>
                <td className="py-4">
                  <span className="text-gray-900 dark:text-white">${pool.fees24h}</span>
                </td>
                <td className="py-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-600 dark:text-gray-400">{pool.utilization}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          pool.utilization > 80
                            ? 'bg-red-500'
                            : pool.utilization > 60
                            ? 'bg-yellow-500'
                            : 'bg-green-500'
                        }`}
                        style={{ width: `${pool.utilization}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}