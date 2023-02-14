import {render, screen} from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', ()  => {
    test('Button text render', () => { 
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('Button class render', () => { 
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
    
});