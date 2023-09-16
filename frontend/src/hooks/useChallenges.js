import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function useChallenges() {
    const value = useContext(ChallengesContext);
    return value;
}
