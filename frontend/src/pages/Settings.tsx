import React, { useState } from 'react';
import { Settings as SettingsIcon, Wallet, Shield, Bell, Bot, Sliders, ChevronRight, ToggleLeft as Toggle3, AlertTriangle } from 'lucide-react';

export default function Settings() {
  const [autoTrading, setAutoTrading] = useState(true);
  const [riskLevel, setRiskLevel] = useState('moderate');
  const [notifications, setNotifications] = useState({
    trades: true,
    proposals: true,
    security: true,
    performance: false
  });
  const [liquidityPreference, setLiquidityPreference] = useState(70);

  const connectedWallets = [
    { name: 'MetaMask', address: '0x1234...5678', primary: true },
    { name: 'WalletConnect', address: '0xabcd...efgh', primary: false }
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings & Security</h1>
        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium">
          Save Changes
        </button>
      </div>

      {/* Wallet Connections */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-6">
          <Wallet className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Connected Wallets</h2>
        </div>
        <div className="space-y-4">
          {connectedWallets.map((wallet) => (
            <div key={wallet.address} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <div className="flex items-center">
                  <span className="font-medium text-gray-900 dark:text-white">{wallet.name}</span>
                  {wallet.primary && (
                    <span className="ml-2 px-2 py-1 text-xs bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 rounded-full">
                      Primary
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{wallet.address}</p>
              </div>
              <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                Disconnect
              </button>
            </div>
          ))}
          <button className="w-full p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
            + Connect New Wallet
          </button>
        </div>
      </div>

      {/* AI Trading Preferences */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-6">
          <Bot className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">AI Trading Preferences</h2>
        </div>
        <div className="space-y-6">
          {/* Auto-Trading Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">AI Auto-Trading</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Allow AI to automatically execute trades on your behalf</p>
            </div>
            <button
              onClick={() => setAutoTrading(!autoTrading)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                autoTrading ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoTrading ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Risk Level */}
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Risk Level</h3>
            <div className="flex space-x-4">
              {['conservative', 'moderate', 'aggressive'].map((level) => (
                <button
                  key={level}
                  onClick={() => setRiskLevel(level)}
                  className={`px-4 py-2 rounded-lg font-medium capitalize ${
                    riskLevel === level
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Liquidity Preference */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-900 dark:text-white">Liquidity Preference</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">{liquidityPreference}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={liquidityPreference}
              onChange={(e) => setLiquidityPreference(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>More Liquid</span>
              <span>Higher Yield</span>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-6">
          <Bell className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>
        </div>
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, enabled]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white capitalize">{key}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Receive notifications about {key.toLowerCase()}
                </p>
              </div>
              <button
                onClick={() => setNotifications(prev => ({ ...prev, [key]: !prev[key] }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  enabled ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    enabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-6">
          <Shield className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Security</h2>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-500 mt-0.5 mr-2" />
              <div>
                <h3 className="font-medium text-yellow-800 dark:text-yellow-400">Important Security Notice</h3>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                  Always verify transaction details and never share your private keys or seed phrases.
                </p>
              </div>
            </div>
          </div>
          <button className="flex items-center justify-between w-full p-4 bg-gray-50 dark:bg-gray-700 rounded-lg group">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300" />
          </button>
          <button className="flex items-center justify-between w-full p-4 bg-gray-50 dark:bg-gray-700 rounded-lg group">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Transaction Signing</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Manage transaction approval settings</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
}