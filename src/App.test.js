import { render, screen } from '@testing-library/react';
import App from './App';

describe('App root component', () => {
    it('should render the Welcome text', () => {
        render(<App />);
        expect(screen.getByText(/Welcome/)).toBeInTheDocument();
        expect(screen.getByText(/React/)).toBeInTheDocument();
    });

    it('should render the React text', () => {
        render(<App />);

        expect(screen.getByText(/React/)).toBeInTheDocument();
    });
});
