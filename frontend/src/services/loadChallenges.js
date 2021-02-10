import api from './api';
import capitalize from '../utils/capitalize';

export default async function loadChallenges({ typeFilter }) {
    let response = [];

    if (typeFilter) {
        const type = capitalize(typeFilter);
        response = await api.get(`/challenges/?type=${type}`);
    } else {
        response = await api.get('/challenges');
    }

    return {
        challenges: response.data,
    };
}
