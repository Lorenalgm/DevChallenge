import MockAdapter from 'axios-mock-adapter';
import loadChallengesDevs from '../../src/services/loadChallengesDevs';
import api from '../../src/services/api';

const apiMock = new MockAdapter(api, { delayResponse: 1000 });

describe(loadChallengesDevs, () => {
    const mock = { response: { data: [] } };

    beforeEach(() => {
        apiMock.onGet('devs').reply(200, mock.response.data);
    });

    it('should get the data from api', async () => {
        const { devs } = await loadChallengesDevs();
        expect(devs).toEqual(mock.response.data);
    });
});
