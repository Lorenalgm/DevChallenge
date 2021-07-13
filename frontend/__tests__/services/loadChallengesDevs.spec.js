import loadChallengesDevs from '../../src/services/loadChallengesDevs';
import { mockApi } from '../__utils__/mock-api';

describe(loadChallengesDevs, () => {
    const mock = { response: { data: [] } };

    beforeEach(() => {
        mockApi().onGet('devs').reply(200, mock.response.data);
    });

    it('should get the data from api', async () => {
        const { devs } = await loadChallengesDevs();
        expect(devs).toEqual(mock.response.data);
    });
});
