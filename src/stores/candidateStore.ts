import { writable } from 'svelte/store';

export interface Candidate {
    name: string;
    phone: string;
    email: string;
    countdown: number;
    challengeStarted: boolean;
    showCandidatePage: boolean;
    previousCountdown: number;
}

export const candidateStore = writable<Candidate>({
    name: '',
    phone: '',
    email: '',
    countdown: 15,
    challengeStarted: false,
    showCandidatePage: false,
    previousCountdown: 15
});