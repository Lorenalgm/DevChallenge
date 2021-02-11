import MockAdapter from 'axios-mock-adapter';
import loadChallenges from '../../src/services/loadChallenges';
import api from '../../src/services/api';
import capitalize from '../../src/utils/capitalize';

jest.mock('../../src/utils/capitalize');
const apiMock = new MockAdapter(api, { delayResponse: 1000 });

describe(loadChallenges, () => {
    const mock = {
        filter: { undefined, any: 'any-filter' },
        response: { with_no_filters: [], with_filters: [{}, {}] },
    };

    beforeEach(() => {
        capitalize.mockImplementation((word) => word);

        apiMock.onGet('challenges').reply(200, mock.response.with_no_filters);

        apiMock
            .onGet(`challenges/?type=${mock.filter.any}`)
            .reply(200, mock.response.with_filters);
    });

    describe('when have no filter', () => {
        it('should get all the challenges', async () => {
            const { challenges } = await loadChallenges({
                typeFilter: mock.filter.undefined,
            });
            expect(challenges).toEqual(mock.response.with_no_filters);
        });
    });

    describe('when have filter', () => {
        it('should get all the filtered challenges', async () => {
            const { challenges } = await loadChallenges({
                typeFilter: mock.filter.any,
            });
            expect(challenges).toEqual(mock.response.with_filters);
        });
    });
});
