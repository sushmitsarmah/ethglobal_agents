import React from 'react';
import MarketAnalysis from '../components/MarketAnalysis';
import LiquidityPoolAnalysis from '../components/LiquidityPoolAnalysis';
import EigenLayerInsights from '../components/EigenLayerInsights';

export default function AIInsights() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">AI Insights & Market Trends</h1>
      
      <MarketAnalysis />
      <LiquidityPoolAnalysis />
      <EigenLayerInsights />
    </div>
  );
}