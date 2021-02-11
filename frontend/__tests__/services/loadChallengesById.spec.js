import MockAdapter from 'axios-mock-adapter';
import loadChallengesById from '../../src/services/loadChallengesById';
import api from '../../src/services/api';

const apiMock = new MockAdapter(api, { delayResponse: 1000 });

describe(loadChallengesById, () => {
    const mock = {
        id: 'any-id',
        response: {
            data: [{ id: 'right-id' }, { id: 'wrong-id' }],
        },
    };

    beforeEach(() => {
        apiMock.onGet(`/challenges/${mock.id}`).reply(200, mock.response.data);
    });

    it('should get the data from api with right id', async () => {
        // eslint-disable-next-line camelcase
        const { first_challenge } = await loadChallengesById({ id: mock.id });
        expect(first_challenge).toEqual(mock.response.data[0]);
    });
});
