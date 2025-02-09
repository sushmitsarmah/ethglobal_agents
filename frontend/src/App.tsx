import Layout from './components/Layout';
import AIInsights from './pages/AIInsights';
import Governance from './pages/Governance';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import { Routes, Route } from "react-router";
import Settings from './pages/Settings';
import History from './pages/History';
import MarketTrends from './pages/MarketTrends';
import { WalletIsland } from '@coinbase/onchainkit/wallet';

import { base } from 'viem/chains';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import '@coinbase/onchainkit/styles.css'; 

const apiKey = import.meta.env.VITE_COINBASE_API_KEY;

function App() {
  return (
    <OnchainKitProvider apiKey={apiKey} chain={base}>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/insights" element={<AIInsights />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/history" element={<History />} />
          <Route path="/trends" element={<MarketTrends />} />
        </Routes>
      </Layout>
      <WalletIsland />
    </OnchainKitProvider>
  );
}

export default App;