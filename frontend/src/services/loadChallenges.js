import api from './api';

async function load({ url }) {
    const response = await api.get(url);

    return {
        challenges: response.data,
    };
}

export default async function loadChallenges() {
    return load({ url: 'challenges' });
}
