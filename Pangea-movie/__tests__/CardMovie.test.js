import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardMovie } from '../src/components/CardMovie'

describe('CardMovie', () => {
    const movie = {
        id: 1,
        title: 'Test Movie',
        poster_path: 'test-image.jpg',
    };
    test('renders movie title', () => {
        render(<CardMovie movie={movie} />);
        const titleElement = screen.getByText(movie.title);
        expect(titleElement).toBeInTheDocument();
    });
});