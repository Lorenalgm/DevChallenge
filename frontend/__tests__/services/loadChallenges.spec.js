import MockAdapter from 'axios-mock-adapter';
import loadChallenges from '../../src/services/loadChallenges';
import api from '../../src/services/api';

const apiMock = new MockAdapter(api, { delayResponse: 1000 });

describe(loadChallenges, () => {
    const mock = {
        filter: { undefined },
        response: { data: { with_no_filters: [] } },
    };

    beforeEach(() => {
        apiMock
            .onGet('challenges')
            .reply(200, mock.response.data.with_no_filters);
    });

    describe('when have no filter', () => {
        it('should get all the challenges', async () => {
            const { challenges } = await loadChallenges({
                typeFilter: mock.filter.undefined,
            });
            expect(challenges).toEqual(mock.response.data.with_no_filters);
        });
    });
});
