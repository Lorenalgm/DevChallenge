import loadChallenges from '../../src/services/loadChallenges';
import capitalize from '../../src/utils/capitalize';
import { mockApi } from '../__utils__/mock-api';

jest.mock('../../src/utils/capitalize');

describe(loadChallenges, () => {
    const mock = {
        filter: { undefined, any: 'any-filter' },
        response: { with_no_filters: [], with_filters: [{}, {}] },
    };

    beforeEach(() => {
        const apiMock = mockApi();
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
            expect(capitalize).not.toHaveBeenCalled();
            expect(challenges).toEqual(mock.response.with_no_filters);
        });
    });

    describe('when have filter', () => {
        it('should get all the filtered challenges', async () => {
            const { challenges } = await loadChallenges({
                typeFilter: mock.filter.any,
            });
            expect(capitalize).toHaveBeenCalledWith(mock.filter.any);
            expect(challenges).toEqual(mock.response.with_filters);
        });
    });
});
