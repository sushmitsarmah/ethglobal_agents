import React, { useState } from 'react';
import { Vote, MessageSquare, Users, Clock, ArrowLeft } from 'lucide-react';
import { Proposal } from '../types';

interface ProposalDetailsProps {
  proposal: Proposal;
  onBack: () => void;
}

export default function ProposalDetails({ proposal, onBack }: ProposalDetailsProps) {
  const [voteAmount, setVoteAmount] = useState('');
  const [comment, setComment] = useState('');
  const [selectedVote, setSelectedVote] = useState<'for' | 'against' | null>(null);

  const handleVote = () => {
    // Handle voting logic here
    console.log('Voted', selectedVote, 'with amount:', voteAmount);
  };

  const handleComment = () => {
    // Handle comment submission
    console.log('New comment:', comment);
    setComment('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Proposals
        </button>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{proposal.title}</h2>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
          <span className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            Created by {proposal.creator}
          </span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {proposal.createdAt}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">{proposal.description}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Discussion
            </h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows={3}
                />
              </div>
              <button
                onClick={handleComment}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium"
              >
                Post Comment
              </button>
            </div>
            <div className="space-y-4 mt-6">
              {proposal.comments.map((comment) => (
                <div key={comment.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">{comment.author}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{comment.timestamp}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Vote className="w-5 h-5 mr-2" />
              Cast Your Vote
            </h3>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedVote('for')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium ${
                    selectedVote === 'for'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200'
                  }`}
                >
                  For
                </button>
                <button
                  onClick={() => setSelectedVote('against')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium ${
                    selectedVote === 'against'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200'
                  }`}
                >
                  Against
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Voting Power (tokens)
                </label>
                <input
                  type="number"
                  value={voteAmount}
                  onChange={(e) => setVoteAmount(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="0.00"
                />
              </div>
              <button
                onClick={handleVote}
                disabled={!selectedVote || !voteAmount}
                className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white rounded-lg font-medium"
              >
                Submit Vote
              </button>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Current Results</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">For</span>
                  <span className="text-gray-900 dark:text-white">{proposal.votesFor} votes</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${(proposal.votesFor / proposal.totalVotes) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Against</span>
                  <span className="text-gray-900 dark:text-white">{proposal.votesAgainst} votes</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: `${(proposal.votesAgainst / proposal.totalVotes) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}