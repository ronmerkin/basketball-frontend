import React from 'react'
import {act, fireEvent, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import Team from '../team'
import { setup } from '../../../utils/test/testUtil'
jest.mock('react-select', () => ({ options, value, onChange }) => {
    const { selectUtil } = require('../../../utils/test/testUtil')
    return selectUtil({ options, value, onChange })
})

function selectTeam (value) {
    fireEvent.change(screen.getByTestId('select'), {
        target: { value }
    })
}

describe('Team', () => {
    it('Should render select and spinner', async () => {
        // arrange
        // act
        act(() => {
            setup(<Team />)
            selectTeam('Warriors')
        })
        // assert
        expect(screen.getByTestId('select')).toBeInTheDocument()
        // verify spinner exists
        expect(getComputedStyle(document.querySelector('.spinner'))).not.toBeNull()

    })
    it('Should Choose a team', async () => {
        // arrange
        // act
        await act(async () => {
            setup(<Team />)
            await selectTeam('Warriors')
            
        })
        await new Promise((resolve) => {
            setTimeout(resolve, 3000)
        })
        // assert
        expect(await screen.findByText(/Golden State Warriors/)).toBeInTheDocument()
        expect(await screen.findByText('Nicolas Batum')).toBeInTheDocument()
    })
    it('Choose a non existing team', async () => {
        // arrange
        // act
        act(() => {
            setup(<Team />, true)
            selectTeam('FAKE')
            
        })
        await new Promise((resolve) => {
            setTimeout(resolve, 3000)
        })
        // assert
        expect(await screen.findByText(/No team Found/)).toBeInTheDocument()
    })
})