import {render, screen} from '@testing-library/react'
import Search from './index'

const onChange = jest.fn()

describe('Search component', () => {
    it('render search component', () => {
        render(<Search value="" onChange={onChange}>
            Find:
        </Search>)

        expect(screen.getByText(/find/i)).toBeInTheDocument
    })

    it('render without children', () => {
        render(<Search value="" onChange={onChange}>
        </Search>)

        expect(screen.getByText(/search/i)).toBeInTheDocument
    })

    it('render without placeholder', () => {
        render(<Search value="" onChange={onChange}>
        </Search>)

        expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument
    })

    it('custom placeholder works correct', () => {
        render(<Search value="" onChange={onChange} placeholder="find post">
        </Search>)

        expect(screen.getByPlaceholderText(/find post/i)).toBeInTheDocument
    })
})