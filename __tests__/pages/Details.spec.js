import { useParams } from 'react-router-dom';
import React from 'react';
import Detail from '../../src/pages/Detail';
import loadChallengesById from '../../src/services/loadChallengesById';
import { render, waitForUseEffect } from '../__utils__/rtl';
import Header from '../../src/components/Header';

jest.mock('../../src/services/loadChallengesById');
jest.mock('../../src/components/Header');
jest.mock('react-router-dom', () => {
    return {
        useParams: jest.fn(),
        NavLink: ({ children }) => children,
    };
});

describe(Detail, () => {
    let sut;
    const mock = {
        id: 'mock-id',
        first_challenge: {
            brief: 'This is an challenge brief',
            description: 'This is an challenge description',
            type: 'Backend',
            dev_id: 'any-id',
            images: ['http://fake-url.com/', 'http://another-fake-url.com/'],
            techs: ['Tech1, Tech2, Tech3'],
            github_url: 'http://github/challenge/',
        },
    };

    beforeEach(async () => {
        jest.spyOn(window, 'scrollTo').mockImplementation(jest.fn());
        Header.mockReturnValue(<header />);
        useParams.mockReturnValue({ id: mock.id });
        loadChallengesById.mockResolvedValue({
            first_challenge: mock.first_challenge,
        });

        await waitForUseEffect(() => {
            sut = render(Detail);
        });
    });

    it('should get the data from api', () => {
        expect(loadChallengesById).toHaveBeenCalledWith({ id: mock.id });
    });

    const insideText = (text) => new RegExp(text);

    it('should render the correct techs', () => {
        mock.first_challenge.techs.forEach((tech) => {
            const splitTech = tech.split(', ');
            splitTech.forEach((sTech) => {
                expect(sut.element.withText(sTech)).toBeTruthy();
            });
        });
    });

    it('should render the brief', () => {
        const brief = sut.element.withText(
            insideText(mock.first_challenge.brief)
        );
        expect(brief).toBeTruthy();
    });

    it('should render the description', () => {
        const brief = sut.element.withText(
            insideText(mock.first_challenge.description)
        );
        expect(brief).toBeTruthy();
    });

    it('should render the type', () => {
        const type = sut.element.withText(
            insideText(mock.first_challenge.type)
        );
        expect(type).toBeTruthy();
    });

    it('should render the github_url', () => {
        const githubUrl = sut.element.withText('Iniciar desafio');
        expect(githubUrl).toHaveProperty(
            'href',
            mock.first_challenge.github_url
        );
    });
});
