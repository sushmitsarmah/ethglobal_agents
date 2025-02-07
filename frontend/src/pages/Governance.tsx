/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import ProposalCard from '../components/ProposalCard';
import ProposalDetails from '../components/ProposalDetails';
import { Proposal } from '../types';
import Modal from '../components/Modal'; // Assuming you have a Modal component
import { useForm } from 'react-hook-form'; // For form handling


// Mock data
const mockProposals: Proposal[] = [
  {
    id: '1',
    title: 'Increase Uniswap V3 allocation to 60%',
    description: 'This proposal suggests increasing our Uniswap V3 liquidity allocation from 45% to 60% due to higher yields and improved market making opportunities.',
    status: 'active',
    votesFor: 15000,
    votesAgainst: 5000,
    totalVotes: 20000,
    quorum: 25000,
    endTime: '2 days',
    creator: '0x1234...5678',
    createdAt: '2024-03-15',
    comments: [
      {
        id: '1',
        author: '0xabcd...efgh',
        content: 'This makes sense given the current market conditions.',
        timestamp: '1 day ago'
      }
    ]
  },
  {
    id: '2',
    title: 'Implement dynamic fee structure',
    description: 'Proposal to implement a dynamic fee structure that adjusts based on market volatility and trading volume.',
    status: 'pending',
    votesFor: 12000,
    votesAgainst: 8000,
    totalVotes: 20000,
    quorum: 25000,
    endTime: '5 days',
    creator: '0x9876...4321',
    createdAt: '2024-03-14',
    comments: []
  },
  {
    id: '3',
    title: 'Add support for new trading pairs',
    description: 'Add support for ETH/MATIC and ETH/ARB trading pairs to diversify our liquidity provision strategy.',
    status: 'passed',
    votesFor: 25000,
    votesAgainst: 5000,
    totalVotes: 30000,
    quorum: 25000,
    endTime: 'Ended',
    creator: '0xdef0...1234',
    createdAt: '2024-03-10',
    comments: []
  }
];

export default function Governance() {
  const [selectedProposal, setSelectedProposal] = useState<typeof mockProposals[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const { register, handleSubmit, reset } = useForm(); // Form handling

  const onSubmit = (data: any) => {
    console.log(data);
    setIsModalOpen(false);
    reset();
  };

  return (
    <div className="space-y-6">
      {selectedProposal ? (
        <ProposalDetails
          proposal={selectedProposal}
          onBack={() => setSelectedProposal(null)}
        />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Governance Proposals</h1>
            <button className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium">
              <PlusCircle className="w-5 h-5 mr-2" />
              New Proposal
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {mockProposals.map((proposal) => (
              <ProposalCard
                key={proposal.id}
                proposal={proposal}
                onClick={() => setSelectedProposal(proposal)}
              />
            ))}
          </div>
        </>
      )}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                {...register('title', { required: true })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                {...register('description', { required: true })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
            >
              Submit
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}