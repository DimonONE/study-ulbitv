import { Counter } from './Counter';
import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import userEvent from '@testing-library/user-event';

describe('Counter component', () => {
    test('Default value', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 }
            }
        });
        expect(screen.getByTestId('count-value')).toHaveTextContent('10');
    });
    
    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 }
            }
        });
        userEvent.click(screen.getByTestId('count-decrement'));
        expect(screen.getByTestId('count-value')).toHaveTextContent('9');
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 }
            }
        });
        userEvent.click(screen.getByTestId('count-increment'));
        expect(screen.getByTestId('count-value')).toHaveTextContent('11');
    });
});