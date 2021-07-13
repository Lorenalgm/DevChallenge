import React from 'react';
import Challenges from '../../src/pages/Challenges';
import {
    applySelect,
    render,
    waitForStateUpdate,
    waitForUseEffect,
} from '../__utils__/rtl';
import loadChallenges from '../../src/services/loadChallenges';
import Header from '../../src/components/Header';
import capitalize from '../../src/utils/capitalize';
import ChallengeCard from '../../src/components/ChallengeCard';

jest.mock('../../src/services/loadChallenges');
jest.mock('../../src/components/Header');
jest.mock('../../src/utils/capitalize');
jest.mock('../../src/components/ChallengeCard');

describe(Challenges, () => {
    let sut;
    const mock = {
        challenges: [
            { _id: 1, name: 'ch-1' },
            { _id: 2, name: 'ch-2' },
        ],
        filter: {
            default: 'All',
            type: 'Frontend',
        },
        location: {
            search: 'type=All',
        },
    };

    beforeEach(async () => {
        jest.spyOn(window, 'scrollTo').mockImplementation(jest.fn());
        capitalize.mockImplementation((word) => word);
        ChallengeCard.mockImplementation(({ challenge }) => (
            <div>{challenge.name}</div>
        ));
        Header.mockReturnValue(<header />);
        loadChallenges.mockResolvedValue({
            challenges: mock.challenges,
        });

        await waitForUseEffect(() => {
            sut = render(Challenges, { location: mock.location });
        });
    });

    it('should call api with default value if no option selected', async () => {
        expect(loadChallenges).toHaveBeenCalledWith({
            typeFilter: mock.filter.default,
        });
    });

    it('should call api with selected value', async () => {
        const selector = sut.element.withTestId(
            'challenges__type-select-input'
        );

        await waitForStateUpdate(() => {
            applySelect(selector).withOption(mock.filter.type);
        });

        expect(loadChallenges).toHaveBeenCalledWith({
            typeFilter: mock.filter.type,
        });
    });

    it('should render all the challenges', () => {
        mock.challenges.forEach((challenge) => {
            expect(sut.element.withText(challenge.name)).toBeTruthy();
        });
    });
});
