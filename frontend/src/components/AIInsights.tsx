import React from 'react';
import { Brain, TrendingUp, TrendingDown } from 'lucide-react';

const predictions = [
  {
    asset: 'ETH/USDC',
    prediction: 'Buy',
    confidence: 85,
    trend: 'up',
    reason: 'Strong momentum and increasing volume',
  },
  {
    asset: 'DAI/USDC',
    prediction: 'Hold',
    confidence: 72,
    trend: 'neutral',
    reason: 'Stable price action, low volatility',
  },
  {
    asset: 'WBTC/ETH',
    prediction: 'Sell',
    confidence: 78,
    trend: 'down',
    reason: 'Bearish divergence detected',
  },
];

export default function AIInsights() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Brain className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">AI Trading Insights</h2>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">Updated 5m ago</span>
      </div>

      <div className="space-y-4">
        {predictions.map((prediction, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-between"
          >
            <div>
              <div className="flex items-center mb-1">
                <h3 className="font-medium text-gray-900 dark:text-white">{prediction.asset}</h3>
                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                  prediction.prediction === 'Buy'
                    ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                    : prediction.prediction === 'Sell'
                    ? 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-100'
                }`}>
                  {prediction.prediction}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{prediction.reason}</p>
            </div>
            <div className="flex items-center">
              <div className="text-right mr-4">
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {prediction.confidence}% confidence
                </div>
              </div>
              {prediction.trend === 'up' ? (
                <TrendingUp className="w-5 h-5 text-green-500" />
              ) : prediction.trend === 'down' ? (
                <TrendingDown className="w-5 h-5 text-red-500" />
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}