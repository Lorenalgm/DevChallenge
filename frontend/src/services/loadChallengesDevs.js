import api from './api';

export default async function loadChallengesDevs() {
    const response = await api.get('/devs');

    return {
        devs: response.data,
    };
}
