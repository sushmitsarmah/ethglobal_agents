import React, { useState } from 'react';
import { Brain, TrendingUp, ArrowUpRight, ArrowDownRight, LineChart, BarChart2, DollarSign, Activity } from 'lucide-react';

const marketData = {
  topMovers: [
    { pair: 'ETH/BTC', change: '+8.5%', price: '0.0654', volume: '234.5M' },
    { pair: 'MATIC/ETH', change: '+6.2%', price: '0.00045', volume: '89.2M' },
    { pair: 'ARB/ETH', change: '-4.8%', price: '0.00089', volume: '156.7M' },
    { pair: 'OP/ETH', change: '-3.2%', price: '0.00076', volume: '123.4M' },
  ],
  marketSentiment: {
    overall: 'bullish',
    confidence: 78,
    indicators: {
      rsi: 62,
      macd: 'positive',
      volume: 'increasing',
      volatility: 'moderate'
    }
  },
  trendingPairs: [
    {
      pair: 'ETH/USDC',
      price: '3,245.67',
      change24h: '+2.5%',
      volume24h: '1.2B',
      sentiment: 'bullish',
      prediction: '3,500',
      confidence: 85
    },
    {
      pair: 'BTC/ETH',
      price: '18.45',
      change24h: '-0.8%',
      volume24h: '890M',
      sentiment: 'neutral',
      prediction: '18.65',
      confidence: 65
    },
    {
      pair: 'MATIC/ETH',
      price: '0.00045',
      change24h: '+6.2%',
      volume24h: '450M',
      sentiment: 'bullish',
      prediction: '0.00052',
      confidence: 75
    }
  ]
};

export default function MarketTrends() {
  const [timeframe, setTimeframe] = useState('24h');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Market Trends</h1>
        <div className="flex space-x-2">
          {['1h', '24h', '7d', '30d'].map((time) => (
            <button
              key={time}
              onClick={() => setTimeframe(time)}
              className={`px-3 py-1 rounded-lg text-sm font-medium ${
                timeframe === time
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              {time.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Market Sentiment Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Brain className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Market Sentiment</h2>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            marketData.marketSentiment.overall === 'bullish'
              ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
              : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
          }`}>
            {marketData.marketSentiment.overall.toUpperCase()}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">RSI</div>
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {marketData.marketSentiment.indicators.rsi}
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">MACD</div>
            <div className="text-xl font-bold text-green-500 capitalize">
              {marketData.marketSentiment.indicators.macd}
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Volume</div>
            <div className="text-xl font-bold text-gray-900 dark:text-white capitalize">
              {marketData.marketSentiment.indicators.volume}
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Volatility</div>
            <div className="text-xl font-bold text-gray-900 dark:text-white capitalize">
              {marketData.marketSentiment.indicators.volatility}
            </div>
          </div>
        </div>
      </div>

      {/* Top Movers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Top Movers</h2>
          </div>
          <div className="space-y-4">
            {marketData.topMovers.map((mover, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">{mover.pair}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Vol: ${mover.volume}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-medium text-gray-900 dark:text-white">
                    {mover.price}
                  </div>
                  <div className={`text-sm font-medium ${
                    mover.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {mover.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-6">
            <Activity className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Market Activity</h2>
          </div>
          <div className="relative h-64">
            <div className="absolute inset-0 flex items-center justify-center">
              <BarChart2 className="w-8 h-8 text-gray-300 dark:text-gray-600" />
              <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">Activity chart visualization would go here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Pairs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-6">
          <LineChart className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Trending Pairs</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                <th className="pb-3 font-medium">Pair</th>
                <th className="pb-3 font-medium">Price</th>
                <th className="pb-3 font-medium">24h Change</th>
                <th className="pb-3 font-medium">Volume</th>
                <th className="pb-3 font-medium">Sentiment</th>
                <th className="pb-3 font-medium">Prediction</th>
                <th className="pb-3 font-medium">Confidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {marketData.trendingPairs.map((pair, index) => (
                <tr key={index} className="text-sm">
                  <td className="py-4">
                    <span className="font-medium text-gray-900 dark:text-white">{pair.pair}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-gray-900 dark:text-white">${pair.price}</span>
                  </td>
                  <td className="py-4">
                    <span className={pair.change24h.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                      {pair.change24h}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="text-gray-900 dark:text-white">${pair.volume24h}</span>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      pair.sentiment === 'bullish'
                        ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                        : pair.sentiment === 'bearish'
                        ? 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
                    }`}>
                      {pair.sentiment}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="text-gray-900 dark:text-white">${pair.prediction}</span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: `${pair.confidence}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">{pair.confidence}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}