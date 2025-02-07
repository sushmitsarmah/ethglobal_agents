import React from 'react';
import { RefreshCcw, ArrowRightLeft } from 'lucide-react';

const trades = [
  {
    type: 'swap',
    from: { symbol: 'ETH', amount: '10.5' },
    to: { symbol: 'USDC', amount: '19,234.56' },
    timestamp: '2 mins ago',
  },
  {
    type: 'liquidity',
    action: 'added',
    pool: 'ETH/USDC',
    amount: '$25,000',
    timestamp: '5 mins ago',
  },
  {
    type: 'swap',
    from: { symbol: 'USDC', amount: '15,000' },
    to: { symbol: 'DAI', amount: '14,998.5' },
    timestamp: '8 mins ago',
  },
  {
    type: 'liquidity',
    action: 'removed',
    pool: 'DAI/USDC',
    amount: '$10,000',
    timestamp: '12 mins ago',
  },
];

export default function LiveTradingFeed() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <RefreshCcw className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Live Trading Feed</h2>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">Auto-updating</span>
      </div>

      <div className="space-y-4">
        {trades.map((trade, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center">
              <ArrowRightLeft className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                {trade.type === 'swap' ? (
                  <p className="text-gray-900 dark:text-white">
                    <span className="font-medium">{trade.from.amount} {trade.from.symbol}</span>
                    <span className="mx-2">→</span>
                    <span className="font-medium">{trade.to.amount} {trade.to.symbol}</span>
                  </p>
                ) : (
                  <p className="text-gray-900 dark:text-white">
                    <span className={trade.action === 'added' ? 'text-green-500' : 'text-red-500'}>
                      {trade.action === 'added' ? '+' : '-'} {trade.amount}
                    </span>
                    <span className="ml-1">liquidity to {trade.pool}</span>
                  </p>
                )}
                <p className="text-sm text-gray-500 dark:text-gray-400">{trade.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}