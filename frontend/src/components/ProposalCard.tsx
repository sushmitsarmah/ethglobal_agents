import React from 'react';
import { Vote, Users, Clock, CheckCircle, XCircle } from 'lucide-react';

interface ProposalCardProps {
  proposal: {
    id: string;
    title: string;
    description: string;
    status: 'active' | 'passed' | 'failed' | 'pending';
    votesFor: number;
    votesAgainst: number;
    totalVotes: number;
    endTime: string;
    quorum: number;
  };
  onClick: () => void;
}

export default function ProposalCard({ proposal, onClick }: ProposalCardProps) {
  const percentageFor = (proposal.votesFor / proposal.totalVotes) * 100;
  const percentageAgainst = (proposal.votesAgainst / proposal.totalVotes) * 100;
  const quorumPercentage = (proposal.votesFor + proposal.votesAgainst) / proposal.quorum * 100;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100';
      case 'passed':
        return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
      case 'failed':
        return 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100';
    }
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{proposal.title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(proposal.status)}`}>
          {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">{proposal.description}</p>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 dark:text-gray-400">Votes</span>
            <span className="text-gray-900 dark:text-white">
              {proposal.votesFor + proposal.votesAgainst} / {proposal.quorum} required
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full"
              style={{ width: `${quorumPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-center text-sm mb-1">
              <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-gray-600 dark:text-gray-400">For</span>
              <span className="ml-auto text-gray-900 dark:text-white">{percentageFor.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${percentageFor}%` }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex items-center text-sm mb-1">
              <XCircle className="w-4 h-4 text-red-500 mr-1" />
              <span className="text-gray-600 dark:text-gray-400">Against</span>
              <span className="ml-auto text-gray-900 dark:text-white">{percentageAgainst.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: `${percentageAgainst}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>Ends {proposal.endTime}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{proposal.totalVotes} votes</span>
          </div>
        </div>
      </div>
    </div>
  );
}