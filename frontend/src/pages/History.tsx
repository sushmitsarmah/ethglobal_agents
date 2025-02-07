import React, { useState } from 'react';
import { 
  History as HistoryIcon, 
  Download, 
  ArrowUpRight, 
  ArrowDownRight,
  Filter,
  Calendar,
  LineChart,
  TrendingUp,
  Wallet
} from 'lucide-react';

// Mock data for transactions and performance
const transactions = [
  {
    id: '1',
    type: 'deposit',
    amount: '5.0 ETH',
    value: '$9,876.54',
    timestamp: '2024-03-15 14:30',
    status: 'completed',
    txHash: '0x1234...5678'
  },
  {
    id: '2',
    type: 'stake',
    amount: '2.5 ETH',
    value: '$4,938.27',
    timestamp: '2024-03-14 09:15',
    status: 'completed',
    txHash: '0xabcd...efgh'
  },
  {
    id: '3',
    type: 'withdraw',
    amount: '1.0 ETH',
    value: '$1,975.31',
    timestamp: '2024-03-13 16:45',
    status: 'completed',
    txHash: '0x9876...5432'
  }
];

const performanceData = {
  totalValue: '$16,789.12',
  totalReturn: '+24.5%',
  monthlyReturn: '+3.2%',
  weeklyReturn: '+0.8%'
};

export default function History() {
  const [dateRange, setDateRange] = useState('1m');
  const [transactionType, setTransactionType] = useState('all');

  const handleExport = () => {
    // Handle CSV export logic
    console.log('Exporting transactions...');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Transaction History</h1>
        <button
          onClick={handleExport}
          className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium"
        >
          <Download className="w-4 h-4 mr-2" />
          Export CSV
        </button>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Value</p>
            <Wallet className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
            {performanceData.totalValue}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Return</p>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-green-500 mt-2">
            {performanceData.totalReturn}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Return</p>
            <LineChart className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </div>
          <p className="text-2xl font-bold text-green-500 mt-2">
            {performanceData.monthlyReturn}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">Weekly Return</p>
            <LineChart className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </div>
          <p className="text-2xl font-bold text-green-500 mt-2">
            {performanceData.weeklyReturn}
          </p>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Performance History</h2>
          <div className="flex space-x-2">
            {['1w', '1m', '3m', '1y', 'all'].map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-3 py-1 rounded-lg text-sm font-medium ${
                  dateRange === range
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                }`}
              >
                {range.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="relative h-64">
          <div className="absolute inset-0 flex items-center justify-center">
            <LineChart className="w-8 h-8 text-gray-300 dark:text-gray-600" />
            <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">Performance chart visualization would go here</p>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Transactions</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
                className="appearance-none bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Types</option>
                <option value="deposit">Deposits</option>
                <option value="withdraw">Withdrawals</option>
                <option value="stake">Staking</option>
              </select>
              <Filter className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Value</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Transaction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {transactions.map((tx) => (
                <tr key={tx.id} className="text-sm">
                  <td className="py-4">
                    <div className="flex items-center">
                      {tx.type === 'deposit' ? (
                        <ArrowDownRight className="w-4 h-4 text-green-500 mr-2" />
                      ) : tx.type === 'withdraw' ? (
                        <ArrowUpRight className="w-4 h-4 text-red-500 mr-2" />
                      ) : (
                        <LineChart className="w-4 h-4 text-purple-500 mr-2" />
                      )}
                      <span className="capitalize text-gray-900 dark:text-white">{tx.type}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="font-medium text-gray-900 dark:text-white">{tx.amount}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-gray-900 dark:text-white">{tx.value}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-gray-500 dark:text-gray-400">{tx.timestamp}</span>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      tx.status === 'completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <a
                      href={`https://etherscan.io/tx/${tx.txHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                    >
                      {tx.txHash}
                    </a>
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