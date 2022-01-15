import React from 'react'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Team from '../team'
import { setup, selectTeam } from '../../../utils/test/testUtil'

jest.mock('../../../utils/apiUtil')
jest.mock('react-select', () => ({ options, value, onChange }) => {
    const { selectUtil } = require('../../../utils/test/testUtil')
    return selectUtil({ options, value, onChange })
})

describe('Team', () => {
    it('Should render select and spinner', () => {
        // arrange
        setup(<Team />)
        // assert
        expect(screen.getByTestId('select')).toBeInTheDocument()
        // verify spinner exists
        expect(getComputedStyle(document.querySelector('.spinner'))).not.toBeNull()

    })
    it('Should Choose a team', async () => {
        // arrange
        setup(<Team />)
        // act
        selectTeam('Warriors')
        // assert
        expect(await screen.findByText(/Golden State Warriors/)).toBeInTheDocument()
        expect(await screen.findByText('Nicolas Batum')).toBeInTheDocument()
    })
    it('Choose a non existing team', async () => {
        // arrange
        setup(<Team />, true)
        selectTeam('FAKE')
        // assert
        expect(await screen.findByText(/No team Found/)).toBeInTheDocument()
    })
})