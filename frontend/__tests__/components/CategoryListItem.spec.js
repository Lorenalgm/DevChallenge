import CategoryListItem from '../../src/components/CategoryListItem';
import { render } from '../__utils__/rtl';

jest.mock('react-router-dom', () => ({
    Link: ({ children }) => children,
}));

describe(CategoryListItem, () => {
    let sut;
    const mock = { category: { name: 'any-category' } };

    beforeEach(() => {
        sut = render(CategoryListItem, { category: mock.category });
    });

    it('should render category prop', () => {
        expect(sut.element.withText(mock.category.name)).toBeTruthy();
    });
});
