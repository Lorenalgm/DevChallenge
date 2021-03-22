import loadChallengesById from '../../src/services/loadChallengesById';
import { mockApi } from '../__utils__/mock-api';

describe(loadChallengesById, () => {
    const mock = {
        id: 'any-id',
        response: {
            data: [{ id: 'right-id' }, { id: 'wrong-id' }],
        },
    };

    beforeEach(() => {
        mockApi()
            .onGet(`/challenges/${mock.id}`)
            .reply(200, mock.response.data);
    });

    it('should get the data from api with right id', async () => {
        // eslint-disable-next-line camelcase
        const { first_challenge } = await loadChallengesById({ id: mock.id });
        expect(first_challenge).toEqual(mock.response.data[0]);
    });
});
