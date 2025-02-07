export interface Comment {
    id: string;
    author: string;
    content: string;
    timestamp: string;
}

export interface Proposal {
    id: string;
    title: string;
    description: string;
    status: 'active' | 'passed' | 'failed' | 'pending';
    votesFor: number;
    votesAgainst: number;
    totalVotes: number;
    endTime: string;
    quorum: number;
    creator: string;
    createdAt: string;
    comments: Comment[];
};