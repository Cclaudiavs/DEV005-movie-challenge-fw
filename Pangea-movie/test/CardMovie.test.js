import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardMovie } from '../src/components/CardMovie';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';


describe('CardMovie', () => {
    const movie = {
        id: 1,
        title: 'Test Movie',
        poster_path: 'test-image.jpg',
    };

    test('deberia renderizar titulo y portada de cada pelicula', () => {
        render(
            <MemoryRouter initialEntries={[`/movie/${movie.id}`]} initialIndex={0}>
                <CardMovie movie={movie} />
            </MemoryRouter>
        );

        const titleElement = screen.getByText(movie.title);
        expect(titleElement).toBeInTheDocument();
    });
});
