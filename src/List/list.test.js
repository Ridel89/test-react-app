import {render, screen} from '@testing-library/react'
import List from './index'

const data = ['html', 'css', 'js']

describe('List component', () => {
    it('list render', () => {
        render(<List items={data}/>)
        expect(screen.getByRole('list')).toBeInTheDocument()
        expect(screen.getByText('html')).toBeInTheDocument()
    })

    it('list render without data', () => {
        render(<List />)
        expect(screen.queryByRole('list')).toBeNull()
    })

    it('list snapshot', () => {
        const list = render(<List items={data}/>)
        expect(list).toMatchSnapshot()
    })

    it('empty list snapshot', () => {
        const list = render(<List />)
        expect(list).toMatchSnapshot()
    })
})