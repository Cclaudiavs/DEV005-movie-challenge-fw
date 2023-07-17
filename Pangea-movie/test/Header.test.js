import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Header } from '../src/components/Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header', () => {
    test('deberia redenderizar el componente', () => {
        render(<Header onSearch={() => { }} setSelectedGenre={() => { }} />);
        const searchInput = screen.getByRole('textbox');
        expect(searchInput).toBeInTheDocument();
    });

    test('deberia llamar a la funcion de busqueda.', () => {
        render(<Header onSearch={(searchKey) => { }} setSelectedGenre={() => { }} />);
        const searchInput = screen.getByRole('textbox');
        const submitButtons = screen.getAllByRole('button');

        const submitButton = submitButtons.find((button) => button.classList.contains('buscar'));

        fireEvent.change(searchInput, { target: { value: 'Test' } });
        fireEvent.click(submitButton);

    });

    test('renders select input with options', () => {
        render(<Header onSearch={() => { }} setSelectedGenre={() => { }} />);
        const selectInput = screen.getByRole('combobox');
        expect(selectInput).toBeInTheDocument();

        const optionElements = screen.getAllByRole('option');
        expect(optionElements).toHaveLength(7);

    });

    test('calls window.location.reload() on home button click', () => {
        Object.defineProperty(window, 'location', {
            value: { reload: jest.fn() },
            writable: true,
        });

        render(<Header onSearch={() => { }} setSelectedGenre={() => { }} />);
        const homeButtons = screen.getAllByRole('button', { className: 'volver' });
        const homeButton = homeButtons.find(button => button.getAttribute('name') === 'Home');

        fireEvent.click(homeButton);
        expect(window.location.reload).toHaveBeenCalled();
    });


});
