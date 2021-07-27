import api from './api';
import capitalize from '../utils/capitalize';

async function load({ url }) {
    const response = await api.get(url);

    return {
        challenges: response.data,
    };
}

export default async function loadChallenges({ typeFilter }) {
    if (typeFilter) {
        const url = `/challenges/?type=${capitalize(typeFilter)}`;

        return load({ url });
    }

    return load({ url: 'challenges' });
}
