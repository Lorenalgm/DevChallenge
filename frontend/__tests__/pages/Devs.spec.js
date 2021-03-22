import React from 'react';
import Challenges from '../../src/pages/Devs';
import { render, waitForUseEffect } from '../__utils__/rtl';
import loadChallengesDevs from '../../src/services/loadChallengesDevs';
import Header from '../../src/components/Header';

jest.mock('../../src/services/loadChallengesDevs');
jest.mock('../../src/components/Header');

describe(Challenges, () => {
    let sut;
    let devs;

    const mockDevs = (length) => {
        return Array.from({ length }, (_, index) => {
            return {
                _id: index,
                name: `name-${index}`,
                position: `position-${index}`,
                avatar: `https://avatar-url.com/${index}`,
                github: `github@${index}`,
                linkedin: `linkedin@${index}`,
            };
        });
    };

    beforeEach(async () => {
        devs = mockDevs(3);

        Header.mockReturnValue(<header />);
        loadChallengesDevs.mockResolvedValue({
            devs,
        });

        await waitForUseEffect(() => {
            sut = render(Challenges);
        });
    });

    it('should call api on start', () => {
        expect(loadChallengesDevs).toHaveBeenCalled();
    });

    it('should render devs from api', () => {
        devs.forEach((dev) => {
            expect(sut.element.withText(dev.name)).toBeTruthy();
            expect(sut.element.withText(dev.position)).toBeTruthy();
        });
    });
});
