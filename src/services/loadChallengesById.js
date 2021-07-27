import api from './api';

export default async function loadChallengesById({ id }) {
    const response = await api.get(`/challenges/${id}`);

    return {
        first_challenge: response.data[0],
    };
}
