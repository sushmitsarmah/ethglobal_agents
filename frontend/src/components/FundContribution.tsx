import React, { useState } from 'react';
import { CreditCard, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

const tokens = [
  { symbol: 'ETH', name: 'Ethereum' },
  { symbol: 'USDC', name: 'USD Coin' },
  { symbol: 'DAI', name: 'Dai' },
];

export default function FundContribution() {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState(tokens[0]);
  const [isDeposit, setIsDeposit] = useState(true);
  
  const estimatedEarnings = amount ? parseFloat(amount) * 0.245 : 0; // 24.5% APY

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <CreditCard className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Fund Contribution</h2>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsDeposit(true)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isDeposit
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            Deposit
          </button>
          <button
            onClick={() => setIsDeposit(false)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              !isDeposit
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            Withdraw
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Amount
          </label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="0.00"
            />
            <select
              value={selectedToken.symbol}
              onChange={(e) => setSelectedToken(tokens.find(t => t.symbol === e.target.value) || tokens[0])}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none text-gray-600 dark:text-gray-300 focus:ring-0"
            >
              {tokens.map((token) => (
                <option key={token.symbol} value={token.symbol}>
                  {token.symbol}
                </option>
              ))}
            </select>
          </div>
        </div>

        {isDeposit && amount && (
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Estimated Annual Earnings (24.5% APY)
            </p>
            <p className="text-lg font-semibold text-green-600">
              +{estimatedEarnings.toFixed(2)} {selectedToken.symbol}
            </p>
          </div>
        )}

        <button className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium flex items-center justify-center">
          {isDeposit ? (
            <>
              <ArrowUpCircle className="w-5 h-5 mr-2" />
              Deposit {selectedToken.symbol}
            </>
          ) : (
            <>
              <ArrowDownCircle className="w-5 h-5 mr-2" />
              Withdraw {selectedToken.symbol}
            </>
          )}
        </button>
      </div>
    </div>
  );
}