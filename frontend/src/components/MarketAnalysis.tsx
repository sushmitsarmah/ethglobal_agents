import React from 'react';
import { TrendingUp, AlertTriangle, BarChart2 } from 'lucide-react';

const marketPredictions = [
  {
    pair: 'ETH/USDC',
    prediction: 'Bullish',
    confidence: 85,
    price: 3245.67,
    change: 2.5,
    risk: 'Medium',
    volume: '125M',
  },
  {
    pair: 'BTC/ETH',
    prediction: 'Neutral',
    confidence: 65,
    price: 18.45,
    change: -0.8,
    risk: 'Low',
    volume: '89M',
  },
  {
    pair: 'DAI/USDC',
    prediction: 'Bearish',
    confidence: 78,
    price: 0.999,
    change: -0.1,
    risk: 'High',
    volume: '234M',
  },
];

export default function MarketAnalysis() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">AI Market Analysis</h2>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">Updated 5m ago</span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {marketPredictions.map((prediction, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{prediction.pair}</h3>
                <div className="flex items-center mt-1">
                  <span className={`text-sm font-medium ${
                    prediction.prediction === 'Bullish'
                      ? 'text-green-600'
                      : prediction.prediction === 'Bearish'
                      ? 'text-red-600'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {prediction.prediction}
                  </span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {prediction.confidence}% confidence
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-medium text-gray-900 dark:text-white">
                  ${prediction.price}
                </div>
                <div className={`text-sm font-medium ${
                  prediction.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {prediction.change >= 0 ? '+' : ''}{prediction.change}%
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  Risk Level
                </div>
                <span className={`text-sm font-medium ${
                  prediction.risk === 'High'
                    ? 'text-red-600'
                    : prediction.risk === 'Medium'
                    ? 'text-yellow-600'
                    : 'text-green-600'
                }`}>
                  {prediction.risk}
                </span>
              </div>
              <div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <BarChart2 className="w-4 h-4 mr-1" />
                  24h Volume
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  ${prediction.volume}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}