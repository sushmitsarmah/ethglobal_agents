import React from 'react';
import WalletBalance from '../components/WalletBalance';
import FundContribution from '../components/FundContribution';
import AIInsights from '../components/AIInsights';
import InvestmentOverview from '../components/InvestmentOverview';
import LiveTradingFeed from '../components/LiveTradingFeed';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WalletBalance />
        <FundContribution />
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AIInsights />
        <InvestmentOverview />
      </div>

      {/* Bottom Row */}
      <LiveTradingFeed />
    </div>
  );
}