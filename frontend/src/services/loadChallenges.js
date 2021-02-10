import api from './api';

function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}

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
