import Layout from './components/Layout';
import AIInsights from './pages/AIInsights';
import Governance from './pages/Governance';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import { Routes, Route } from "react-router";
import Settings from './pages/Settings';
import History from './pages/History';
import MarketTrends from './pages/MarketTrends';

function App() {
  return (
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
  );
}

export default App;