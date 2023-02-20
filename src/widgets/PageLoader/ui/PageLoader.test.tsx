import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { PageLoader } from './PageLoader';

describe('PageLoader', () => {
    test('first render', () => { 
        renderWithTranslation(<PageLoader />);
        expect(screen.getByTestId('page-loader')).toBeInTheDocument();
    });
    test('to have class page-loader', () => { 
        renderWithTranslation(<PageLoader />);
        expect(screen.getByTestId('page-loader')).toHaveClass('pageLoader');
    });
});