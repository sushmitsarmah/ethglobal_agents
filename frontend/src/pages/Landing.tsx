import { Brain, BarChart3, Users, ArrowRight, Github, Twitter } from 'lucide-react';
import { useNavigate } from 'react-router';

const Landing = () => {
    const navigate = useNavigate();

    const launchApp = () => {
        navigate('/dashboard');
    }

    return (
        <div className="min-h-screen bg-[#011627] text-white">
            {/* Hero Section */}
            <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {/* <BarChart3 className="w-8 h-8 text-[#0DFDD7]" /> */}
                    <img src="/logo.png" alt="PelicanTrade" className="w-8 h-8" />
                    <span className="text-2xl font-bold">PelicanTrade</span>
                </div>
                <div className="flex items-center space-x-8">
                    <a href="#features" className="hover:text-[#0DFDD7] transition-colors">Features</a>
                    <a href="#how-it-works" className="hover:text-[#0DFDD7] transition-colors">How it Works</a>
                    <button onClick={launchApp} className="bg-[#0DFDD7] text-[#011627] px-6 py-2 rounded-lg font-semibold hover:bg-[#0DFDD7]/90 transition-colors">
                        Launch App
                    </button>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section className="container mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-6xl font-bold mb-6">
                                The Future of <span className="text-[#0DFDD7]">Decentralized</span> Investment
                            </h1>
                            <p className="text-xl text-gray-400 mb-8">
                                PelicanTrade combines AI, Uniswap, and EigenLayer to create a revolutionary
                                community-driven hedge fund platform on Web3.
                            </p>
                            <div className="flex space-x-4">
                                <button onClick={launchApp} className="bg-[#0DFDD7] text-[#011627] px-8 py-3 rounded-lg font-semibold hover:bg-[#0DFDD7]/90 transition-colors flex items-center">
                                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                                </button>
                                <a href="#features" className="border border-[#0DFDD7] text-[#0DFDD7] px-8 py-3 rounded-lg font-semibold hover:bg-[#0DFDD7]/10 transition-colors">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-[#0DFDD7]/10 blur-3xl rounded-full"></div>
                            <img
                                src="/pelican.png"
                                alt="PelicanTrade AI"
                                className="relative w-full h-auto max-w-lg mx-auto"
                            />
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="container mx-auto px-6 py-20" id="features">
                    <h2 className="text-4xl font-bold mb-12 text-center">Powered by Advanced AI Agents and Blockchain Technology</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#011627] p-8 rounded-xl border border-[#0DFDD7]/20 hover:border-[#0DFDD7]/40 transition-colors">
                            <Brain className="w-12 h-12 text-[#0DFDD7] mb-4" />
                            <h3 className="text-xl font-semibold mb-4">Coinbase AgentKit Integration</h3>
                            <p className="text-gray-400">Utilize Coinbase's AgentKit for seamless integration with Onramp, Commerce, Smart Wallets, and OnchainKit.</p>
                        </div>
                        <div className="bg-[#011627] p-8 rounded-xl border border-[#0DFDD7]/20 hover:border-[#0DFDD7]/40 transition-colors">
                            <BarChart3 className="w-12 h-12 text-[#0DFDD7] mb-4" />
                            <h3 className="text-xl font-semibold mb-4">Base Deployed Contracts</h3>
                            <p className="text-gray-400">Leverage Eigenlayer contracts and Uniswap v4 hooks deployed on Base for enhanced trading capabilities.</p>
                        </div>
                        <div className="bg-[#011627] p-8 rounded-xl border border-[#0DFDD7]/20 hover:border-[#0DFDD7]/40 transition-colors">
                            <Users className="w-12 h-12 text-[#0DFDD7] mb-4" />
                            <h3 className="text-xl font-semibold mb-4">Nillion's SecretVault</h3>
                            <p className="text-gray-400">Securely store sensitive data with Nillion's SecretVault, integrated with Coinbase AgentKit and ElizaOS for robust data protection.</p>
                        </div>
                    </div>
                </section>

                {/* Key Benefits Section */}
                <section className="container mx-auto px-6 py-20 border-t border-[#0DFDD7]/20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <h3 className="text-5xl font-bold text-[#0DFDD7] mb-2">Secure and Private</h3>
                            <p className="text-gray-400">Utilize cutting-edge security protocols to ensure your data remains private and secure.</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold text-[#0DFDD7] mb-2">Community Driven</h3>
                            <p className="text-gray-400">Empower users with community governance and decision-making capabilities.</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold text-[#0DFDD7] mb-2">Innovative Technology</h3>
                            <p className="text-gray-400">Leverage the latest in AI and blockchain technology for optimal performance.</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-[#0DFDD7]/20 py-12">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <img src="/logo.png" alt="PelicanTrade" className="w-8 h-8" />
                            <span className="text-xl font-bold">PelicanTrade</span>
                        </div>
                        <div className="mt-8 text-center text-gray-400">
                            © 2025 PelicanTrade. All rights reserved.
                        </div>
                        <div className="flex space-x-6">
                            <a target='_blank' href="https://github.com/sushmitsarmah/ethglobal_agents" className="text-gray-400 hover:text-[#0DFDD7]">
                                <Github className="w-6 h-6" />
                            </a>
                            <a target='_blank' href="https://x.com/Pelicanbot2025" className="text-gray-400 hover:text-[#0DFDD7]">
                                <Twitter className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Landing;